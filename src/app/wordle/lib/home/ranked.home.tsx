import { CustomCard } from "@/lib/components/card"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card"
import { Button } from "@/lib/components/ui/button"
import { NewWordlePartyDialog } from "../../dialogs/new-wordle-party.dialog"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/lib/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/lib/components/ui/tabs"
import { useState } from "react"

type LeaderboardShow = "week" | "month" | "all";

export const WordleRankedHome = () => {
  const [days, setDays] = useState<LeaderboardShow>("all");

  return (
    <div>
      {}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
          <CustomCard noHover className="lg:w-1/2">
            <div className="p-2">
              <Tabs defaultValue="all" onValueChange={(value) => setDays(value as LeaderboardShow)}>
                <TabsList className="flex justify-center">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <CardContent>
              <Table>
                <TableCaption>Top 25. {days === "all" ? "Global" : `This ${days}`} players</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[10px]">Pos.</TableHead>
                    <TableHead className="lg:w-[250px]">Name</TableHead>
                    <TableHead>Poins</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Jane Doe</TableCell>
                    <TableCell>90</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Foo Bar</TableCell>
                    <TableCell>80</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>...</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </CustomCard>

        <CustomCard noHover className="lg:w-1/2">
          <CardHeader>
            <CardTitle>🏆 Play and tryhard</CardTitle>
            <CardDescription>Click on the button below to start a new game</CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-end gap-2">
            <NewWordlePartyDialog mode={"normal"}>
              <Button variant={"ranked"} size={"sm"}>Start a new game</Button>
            </NewWordlePartyDialog>
          </CardFooter>
        </CustomCard>
      </div>
    </div>
  )
}