import { CustomCard } from "@/lib/components/card"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/lib/components/ui/card"
import { Badge } from "@/lib/components/ui/badge"
import { Label } from "@/lib/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/lib/components/ui/radio-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/lib/components/ui/tooltip"
import { Input } from "@/lib/components/ui/input"
import Image from "next/image"
import { Button } from "@/lib/components/ui/button"
import { Save } from "lucide-react"
import { useWordleUserStore } from "@/lib/store/wordle.user.store"

export const WordleSettingsHome = () => {
  const { user } = useWordleUserStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <CustomCard noHover>
        <CardHeader>
          <CardTitle>Storage</CardTitle>
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <CardDescription>
                Choose where to store your preferences, your history of
                <TooltipTrigger>
                  <span className="cursor-help underline">
                    &nbsp;games&nbsp;</span>
                </TooltipTrigger>
                and your statistics
              </CardDescription>

              <TooltipContent>
                Normal and daily games
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardHeader>

        <CardContent>
          <RadioGroup defaultValue="local-storage">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="local-storage" id="local-storage" disabled={!user} />
              <Label htmlFor="local-storage">Local Storage</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cloud-storage" id="cloud-storage" disabled />
              <Label htmlFor="cloud-storage">Cloud Storage <Badge variant="secondary">Coming soon</Badge></Label>
            </div>
          </RadioGroup>
        </CardContent>
      </CustomCard>

      <CustomCard noHover>
        <CardHeader>
          <CardTitle>User</CardTitle>
          <CardDescription>
            Personalize your card with your name, your avatar and your preferences
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center space-x-2">
            <Image src={
              user && user.name
                ? "https://api.dicebear.com/8.x/fun-emoji/png?seed=" + user.name
                : "https://api.dicebear.com/8.x/icons/png?icon=emojiSmile&backgroundColor=262626"
            } width={32} height={32} alt="Avatar" className="rounded-full" />
            <Input placeholder="Your name" value={user ? user.name : ""} disabled />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <p className="text-xs text-muted-foreground/35">
            User ID: {user ? user.id : "No user"}
          </p>

          <Button variant="secondary" size="sm" disabled>
            <Save size={16} />&nbsp;
            Update
          </Button>
        </CardFooter>
      </CustomCard>
    </div>
  )
}