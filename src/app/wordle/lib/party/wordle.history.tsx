"use client";

import { CustomCard } from "@/lib/components/card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/lib/components/ui/card"
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/lib/components/ui/table"
import { useWorldePartyStore } from "@/lib/store/wordle.store";
import { dayJS } from "@/lib/utils/dayjs/day-js";
import { getCategoryName } from "@/lib/wordle/party";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/lib/components/ui/alert-dialog";
import { Button } from "@/lib/components/ui/button";
import { ArrowRight, ListX } from "lucide-react";
import { useState } from "react";

export const WordlePartyHistory = () => {
  const { parties, clear, setActivePartyId } = useWorldePartyStore();
  const [clearOpen, setClearOpen] = useState<boolean>(false);

  return (
    <CustomCard noHover active>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
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
              <TableHead >Category</TableHead>
              <TableHead>Word</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
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
                    {getTimeBetween(party.startedAt, party.finishedAt ?? "").m}m{" "}
                    {getTimeBetween(party.startedAt, party.finishedAt ?? "").s}s
                  </TableHead>
                  <TableHead>
                    {party.isReadOnly && (
                      <Button size={"sm"} variant={"outline"} onClick={() => {
                        if (!party.isReadOnly) return;
                        setActivePartyId(party.id);
                      }}>
                        Show game&nbsp;&nbsp;
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
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

export const getTimeBetween = (start: string, end: string): {
  d: number;
  h: number;
  m: number;
  s: number;
} => {
  const time = dayJS(end).diff(dayJS(start), "second");
  const d = Math.floor(time / (3600 * 24));
  const h = Math.floor((time % (3600 * 24)) / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;

  return { d, h, m, s };
}