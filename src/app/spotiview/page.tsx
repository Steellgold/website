"use client"

import { TopItemsSchema } from "@/lib/utils/spotify/spotify.schema"
import { ReactElement, useEffect, useState } from "react"
import { Music, Mic, Clock, Calendar, AlarmClock, Infinity } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/components/ui/avatar"
import { Skeleton } from "@/lib/components/ui/skeleton"
import { z } from "zod"
import { Component } from "@/lib/components/utils/component"
import { useLang } from "@/lib/stores/lang.store"
import { FaSpotify } from "react-icons/fa"
import Link from "next/link"
import { buttonVariants } from "@/lib/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components/ui/select"

const periods = [
  { key: "last_7_days", label: "Last 7 Days", icon: AlarmClock },
  { key: "last_3_months", label: "Last 3 Months", icon: Calendar },
  { key: "all_time", label: "All Time", icon: Infinity },
]

type Period = typeof periods[number]["key"]

export default function SpotifyStatsPage() {
  const [topItems, setTopItems] = useState<z.infer<typeof TopItemsSchema> | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("last_7_days")
  const { lang } = useLang();

  useEffect(() => {
    const fetchTopMusics = async () => {
      try {
        const response = await fetch("/api/music/top")
        const data = await response.json()

        const schema = TopItemsSchema.safeParse(data)
        if (!schema.success) {
          throw new Error("Data validation failed")
        }

        setTopItems(schema.data)
      } catch (err) {
        setError("Failed to fetch Spotify stats. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchTopMusics()
  }, [])

  if (loading) return <LoadingSkeleton />
  if (error) return <ErrorMessage message={error} />

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-2 text-center mt-8 mb-8">
        <h1 className="text-4xl font-bold">{lang === "fr" ? "Jugez mes goûts musicaux" : "Judge my music taste"}</h1>
        <p>{lang === "fr" ? "Enfin.. pas trop quand même." : "Well.. not too much"}</p>
      </div>

      <div className="flex justify-end mb-2 gap-2">
        <Link href={"/"} className={buttonVariants({ variant: "outline", size: "sm"})}>
          {lang === "fr" ? "Retour" : "Back"}
        </Link>

        <Select onValueChange={setSelectedPeriod} defaultValue={selectedPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            {periods.map((period) => (
              <SelectItem key={period.key} value={period.key}>
                {period.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="tracks">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tracks">
            <Music className="mr-2 h-4 w-4" />
            Top Tracks
          </TabsTrigger>
          <TabsTrigger value="artists">
            <Mic className="mr-2 h-4 w-4" />
            Top Artists
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tracks" className="mt-6">
          <TracksList tracks={topItems?.tracks ?? { last_7_days: [], last_3_months: [], all_time: [] }} selectedPeriod={selectedPeriod} />
        </TabsContent>
        <TabsContent value="artists" className="mt-6">
          <ArtistsList artists={topItems?.artists ?? { last_7_days: [], last_3_months: [], all_time: [] }} selectedPeriod={selectedPeriod} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

const TracksList: Component<{ tracks: z.infer<typeof TopItemsSchema>["tracks"], selectedPeriod: Period }> = ({ tracks, selectedPeriod }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Tracks</CardTitle>
        <CardDescription>Your most listened tracks for the selected period</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {tracks[selectedPeriod as keyof typeof tracks].map((track, idx) => (
            <li key={idx} className="flex items-center space-x-4">
              <span className="font-bold text-xl text-muted-foreground">{idx + 1}</span>
              <Avatar>
                <AvatarImage src={track.album?.images[0].url} alt={track.name} />
                <AvatarFallback>{track.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="font-medium leading-none">{track.name}</p>
                <p className="text-sm text-muted-foreground">
                  {track.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
              <Link
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm"})}
              >
                <FaSpotify />
              </Link>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

const ArtistsList: Component<{ artists: z.infer<typeof TopItemsSchema>["artists"], selectedPeriod: Period }> = ({ artists, selectedPeriod }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Artists</CardTitle>
        <CardDescription>Your most listened artists for the selected period</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {artists[selectedPeriod as keyof typeof artists].map((artist, idx) => (
            <li key={idx} className="flex items-center space-x-4">
              <span className="font-bold text-xl text-muted-foreground">{idx + 1}</span>
              <Avatar>
                <AvatarImage src={artist.images?.[0]?.url} alt={artist.name} />
                <AvatarFallback>{artist.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium leading-none">{artist.name}</p>
              </div>
              <Link
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm"})}
              >
                <FaSpotify />
              </Link>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

const LoadingSkeleton = (): ReactElement => {
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-2 text-center flex items-center flex-col justify-center mb-8">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-1/4" />
      </div>

      <div className="flex justify-end mb-4">
        <Skeleton className="h-10 w-[180px]" />
      </div>
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
        </CardHeader>
        <CardContent>
          {[...Array(10)].map((_, j) => (
            <div key={j} className="flex items-center space-x-4 mb-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

const ErrorMessage: Component<{ message: string }> = ({ message }) => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-xl text-muted-foreground">{message}</p>
    </div>
  )
}