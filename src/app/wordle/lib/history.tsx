"use client";

import { CustomCard } from "@/lib/components/card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/components/ui/card"
import { Table, TableBody, TableCaption, TableFooter, TableHead, TableHeader, TableRow } from "@/lib/components/ui/table"
import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { WordleStatsCard } from "../party.stats";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { getCategoryName } from "@/lib/wordle/party";
import { WordCategories } from "@/lib/types/wordle.type";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/lib/components/ui/alert-dialog";
import { Button } from "@/lib/components/ui/button";
import { ListX } from "lucide-react";
import { useState } from "react";

export const WordlePartyHistory = () => {
  const { parties, getParty, clear } = useWorldePartyStore();
  const [clearOpen, setClearOpen] = useState<boolean>(false);

  return (
    <CustomCard noHover active>
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col">
          <CardTitle>Histories of your parties</CardTitle>
          <CardDescription>Check your party history</CardDescription>
        </div>
        
        <AlertDialog defaultOpen={clearOpen} open={clearOpen} onOpenChange={() => setClearOpen(!clearOpen)}>
          <AlertDialogTrigger>
            <Button variant={"outline"} size={"sm"}>
              <ListX size={16} className="mr-2" />
              Clear history
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Clear history</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to clear your party history, that action clear all your data
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button
                  variant={"outline"}
                  onClick={() => setClearOpen(false)}
                  size={"sm"}>Cancel</Button>
              </AlertDialogCancel>
                <Button onClick={() => {
                  clear();
                  setClearOpen(false);
                }} size={"sm"}>Clear</Button>
              </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardHeader>

      <CardContent>
        <Table>
          {parties.length == 0 && (
            <TableCaption>No party history</TableCaption>
          )}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[110px]">Category</TableHead>
              <TableHead className="w-[100px]">Word</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parties.map((party) => {
              return (
                <TableRow key={party.id}>
                  <TableHead>{getCategoryName(party?.category).name}</TableHead>
                  <TableHead>{party.word}</TableHead>
                  <TableHead>{party.endStatus == "lose" ? "Lose" : "Win"}</TableHead>
                  <TableHead>{party.endReason
                    ? party.endReason == "abandon" ? "Abandon" : "Missed"
                    : " "}</TableHead>
                  <TableHead>
                    {dayJS(party.finishedAt).diff(party.startedAt, "minute")} minutes&nbsp;
                    {dayJS(party.finishedAt).diff(party.startedAt, "second")} seconds
                  </TableHead>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </CustomCard>
  )
}