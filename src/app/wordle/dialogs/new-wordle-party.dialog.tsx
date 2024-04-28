"use client";

import { Dialog, DialogContent, DialogTrigger } from "../../../lib/components/ui/dialog";
import type { PropsWithChildren } from "react";
import { Component } from "@/lib/components/utils/component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/components/ui/tabs";
import { NormalNewPartyContent } from "./new/normal";
import { Separator } from "@/lib/components/ui/separator";
import { DailyNewPartyContent } from "./new/daily";

export const NewWordlePartyDialog: Component<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>

      <DialogContent>
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="normal">Normal</TabsTrigger>
            <TabsTrigger value="daily" disabled>
              Daily
            </TabsTrigger>
            <TabsTrigger value="ranked" disabled>
              Ranked
            </TabsTrigger>
            <TabsTrigger value="duo" disabled>
              Duo
            </TabsTrigger>
          </TabsList>

          <Separator className="my-3" />
          
          <TabsContent value="normal">
            <div className="mt-5">
              <NormalNewPartyContent />
            </div>
          </TabsContent>

          <TabsContent value="daily">
            <div className="mt-5">
              <DailyNewPartyContent />
            </div>
          </TabsContent>

          <TabsContent value="ranked">
            <div className="mt-5">
              <div>Ranked</div>
            </div>
          </TabsContent>

          <TabsContent value="duo">
            <div className="mt-5">
              <div>Duo</div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};