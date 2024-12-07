"use client";

import { Badge } from '@/lib/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { ClashRoyalAPIResponse } from '@/lib/types/clash';
import { getCRBadge } from '@/lib/types/clash-badges';
import { Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import React, { ReactElement, useEffect, useState } from 'react';

const Page = (): ReactElement => {
  const [playerData, setCrData] = useState<ClashRoyalAPIResponse | null>(null);

  useEffect(() => {
    fetch('/api/clashroyal')
      .then((res) => res.json())
      .then((data) => setCrData(data))
      .catch((err) => console.error(err));
    
    return () => {
      setCrData(null);
    }
  }, []);

  if (!playerData) {
    return (
      <section className="container mx-auto p-4">
        <div className="text-center text-muted-foreground">Loading...</div>
      </section>
    );
  }

  // return <pre>
  //   {JSON.stringify(playerData, null, 2)}
  // </pre>

  return (
    <section className="container mx-auto sm:max-w-2xl p-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">
            {playerData.name} <span className="text-muted-foreground text-xs">({playerData.tag})</span>
          </CardTitle>
          <Badge variant="clasbroyal">Level {playerData.expLevel}</Badge>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Image
                src="https://cdns3.royaleapi.com/cdn-cgi/image/w=64,h=64,format=auto/static/img/ui/trophy.png"
                alt="Arena" width={24} height={24}
              />
              <span>{playerData.trophies} Trophies</span>
            </div>

            <div className="flex items-center space-x-2">
              <Image
                src={getCRBadge(playerData.clan.badgeId) || ''}
                alt="Clan Badge" width={24} height={24}
              />
              <span>{playerData.clan.name}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <hr className="my-4" />

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">
            Cards <span className="text-muted-foreground text-xs">({playerData.cards.length})</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            {playerData.cards.map((card) => (
              <div className="flex flex-col items-center space-y-2">
                {/* <Image
                  src={
                    card.level >= card.maxLevel
                      ? card.iconUrls.evolutionMedium
                      : card.iconUrls.medium
                  }
                  alt={card.name} width={64} height={64}
                /> */}

                <pre>
                  {JSON.stringify(card, null, 2)}
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}


export default Page;