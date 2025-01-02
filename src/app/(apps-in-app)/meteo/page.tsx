"use client"

import { useState, useEffect } from "react"
import { Cloud, Droplets, Sun, Thermometer, Wind, CloudRain, CloudLightning, Snowflake, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/components/ui/card"
import { Input } from "@/lib/components/ui/input"
import { Button } from "@/lib/components/ui/button"
import { Skeleton } from "@/lib/components/ui/skeleton"
import { Component } from "@/lib/components/utils/component"
import { useLang } from "@/lib/hooks/use-lang"

interface WeatherData {
  current: {
    temperature_2m: number
    relative_humidity_2m: number
    wind_speed_10m: number
    weather_code: number
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
    weather_code: number[]
  }
  daily: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    weather_code: number[]
  }
}

interface GeocodingResult {
  results?: Array<{
    latitude: number
    longitude: number
    name: string
    country: string
  }>
}

const getWeatherCode = (code: number, lang: "en" | "fr") => {
  if (code === 0) return lang == "en" ? "Clear sky" : "Ciel dégagé"
  if (code === 1) return lang == "en" ? "Mainly clear" : "Peu nuageux"
  if (code === 2) return lang == "en" ? "Partly cloudy" : "Ciel voilé"
  if (code === 3) return lang == "en" ? "Overcast" : "Nuageux"
  if (code >= 51 && code <= 67) return lang == "en" ? "Rainy" : "Pluvieux"
  if (code >= 71 && code <= 77) return lang == "en" ? "Snowy" : "Neigeux"
  if (code >= 95 && code <= 99) return lang == "en" ? "Stormy" : "Orageux"
  return lang == "en" ? "Clear sky" : "Ciel dégagé"
}

const WeatherIcon: Component<{ code: number; className?: string }> = ({ code, className = "w-6 h-6" }) => {
  if (code === 0 || code === 1) return <Sun className={`text-yellow-300 ${className}`} />
  if (code === 2) return <Cloud className={`text-gray-400 ${className}`} />
  if (code === 3) return <Cloud className={`text-gray-400 ${className}`} />
  if (code >= 51 && code <= 67) return <CloudRain className={`text-blue-300 ${className}`} />
  if (code >= 71 && code <= 77) return <Snowflake className={`text-blue-200 ${className}`} />
  if (code >= 95 && code <= 99) return <CloudLightning className={`text-purple-300 ${className}`} />
  return <Sun className={`text-yellow-300 ${className}`} />
}

const Page = () => {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [location, setLocation] = useState<{ lat: number; lon: number; name: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date());

  const lang = useLang()

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const searchLocation = async (query: string) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`
      )
      const data: GeocodingResult = await response.json()
      
      if (!data.results?.length) {
        throw new Error("Location not found")
      }

      const result = data.results[0]
      return {
        lat: result.latitude,
        lon: result.longitude,
        name: `${result.name}, ${result.country}`
      }
    } catch (err) {
      throw new Error("Failed to find location")
    }
  }

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
      )
      const data = await response.json()
      return data
    } catch (err) {
      throw new Error("Failed to fetch weather data")
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    try {
      const locationData = await searchLocation(city)
      setLocation(locationData)
      const weatherData = await fetchWeather(locationData.lat, locationData.lon)
      setWeather(weatherData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const getBackgroundGradient = () => {
    if (!weather) return "from-gray-900 via-gray-800 to-gray-900"
    const code = weather.current.weather_code
    if (code === 0 || code === 1) return "from-orange-700 via-amber-800 to-orange-900"
    if (code === 2 || code === 3) return "from-gray-700 via-slate-800 to-gray-900"
    if (code >= 51 && code <= 67) return "from-blue-800 via-indigo-900 to-blue-950"
    if (code >= 71 && code <= 77) return "from-blue-900 via-indigo-950 to-gray-900"
    if (code >= 95 && code <= 99) return "from-purple-900 via-indigo-950 to-gray-900"
    return "from-gray-900 via-gray-800 to-gray-900"
  }

  const format = lang == "en" ? "en-US" : "fr-FR";

  useEffect(() => {
    searchLocation("Kingersheim").then((locationData) => {
      setLocation(locationData)
      fetchWeather(locationData.lat, locationData.lon).then((weatherData) => {
        setWeather(weatherData)
      }).catch((err) => {
        setError(err instanceof Error ? err.message : "An error occurred")
      })
    }).catch((err) => {
      setError(err instanceof Error ? err.message : "An error occurred")
    })
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient()} flex items-center justify-center p-4 transition-colors duration-500`}>
      <Card className="w-full max-w-3xl bg-black/30 backdrop-blur-xl border-0 shadow-2xl text-white overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl font-light text-center tracking-wide mb-1">
            {lang == "en" ? "Weather Forecast" : "Prévisions Météo"}
          </CardTitle>
          <p className="text-center text-gray-400 text-sm font-light">
            {currentTime.toLocaleDateString(format, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
          <p className="text-center text-gray-400 text-sm font-light">
            {currentTime.toLocaleTimeString(format, { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          <form onSubmit={handleSearch} className="space-y-4 mb-6">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-grow bg-white/10 border-0 placeholder-gray-500 text-white focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white">
                {loading ? <span className="animate-pulse">Searching...</span> : <Search className="w-4 h-4" />}
              </Button>
            </div>
          </form>

          {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4 bg-white/20" />
              <Skeleton className="h-24 w-full bg-white/20" />
              <div className="grid grid-cols-5 gap-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full bg-white/20" />
                ))}
              </div>
            </div>
          ) : weather && location ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-light">{location.name}</h2>
                <div className="flex items-center space-x-2">
                  <WeatherIcon code={weather.current.weather_code} className="w-12 h-12" />
                  <span className="text-5xl font-thin">{Math.round(weather.current.temperature_2m)}°</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Thermometer className="text-red-400 w-4 h-4" />
                  <span>{getWeatherCode(weather.current.weather_code, lang)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplets className="text-blue-400 w-4 h-4" />
                  <span>{lang == "en" ? "Humidity:" : "Humidité:"} {Math.round(weather.current.relative_humidity_2m)}%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wind className="text-gray-400 w-4 h-4" />
                  <span>{lang == "en" ? "Wind:" : "Vent:"} {Math.round(weather.current.wind_speed_10m)} km/h</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light mb-3">{lang == "en" ? "5-Day Forecast" : "Prévisions sur 5 jours"}</h3>

                <div className="grid grid-cols-5 gap-2">
                  {weather.daily.time.slice(0, 5).map((time, index) => (
                    <div key={time} className="text-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300">
                      <p className="font-medium text-xs">
                        {new Date(time).toLocaleDateString(format, { weekday: "short", month: "short", day: "numeric" })}
                      </p>
                      <WeatherIcon code={weather.daily.weather_code[index]} className="mx-auto my-2" />
                      <div className="text-sm space-y-1">
                        <p className="text-white/90">{Math.round(weather.daily.temperature_2m_max[index])}°</p>
                        <p className="text-white/50">{Math.round(weather.daily.temperature_2m_min[index])}°</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">Enter a city name to get the weather forecast.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Page;