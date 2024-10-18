'use client'

import { useState } from 'react'
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card'
import { Input } from '@/lib/components/ui/input'
import { toast } from 'sonner'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/lib/components/ui/select'

const languages = [
  { value: "fr_FR", label: "France", flag: "🇫🇷" },
  { value: "en_US", label: "United States", flag: "🇺🇸" },
  { value: "de_DE", label: "Germany", flag: "🇩🇪" },
  { value: "es_ES", label: "Spain", flag: "🇪🇸" },
  { value: "it_IT", label: "Italy", flag: "🇮🇹" },
  { value: "en_GB", label: "United Kingdom", flag: "🇬🇧" },
]

const Page = () => {
  const [inputLink, setInputLink] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const processLink = (url: string) => {
    try {
      const parsedUrl = new URL(url)
      if (!parsedUrl.hostname.includes('amazon')) {
        throw new Error('Not an Amazon URL')
      }

      parsedUrl.search = ''

      parsedUrl.searchParams.append('linkCode', 'll1')
      parsedUrl.searchParams.append('tag', 'gaetanhus-21')
      parsedUrl.searchParams.append('linkId', '6d1699ad13c9e68ed0f17886277a04e1')
      parsedUrl.searchParams.append('language', selectedLanguage.value)
      parsedUrl.searchParams.append('ref_', 'as_li_ss_tl')

      return parsedUrl.toString()
    } catch (err) {
      throw new Error('Invalid URL')
    }
  }

  const handleProcess = () => {
    try {
      const processedLink = processLink(inputLink)
      window.open(processedLink, '_blank')
      toast.success('Redirecting to processed link...')
    } catch (err) {
      toast.error('Invalid Amazon URL. Please check and try again.')
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Amazon Partner Link Redirector</CardTitle>
        <CardDescription>
          Enter an Amazon product link to redirect with Partner ID <code>gaetanhus-21</code> and selected language.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input
              type="url"
              placeholder="Enter Amazon product link"
              value={inputLink}
              onChange={(e) => setInputLink(e.target.value)}
              className="flex-grow"
            />

            <Select defaultValue="fr_FR" onValueChange={(value) => setSelectedLanguage(
              languages.find((language) => language.value === value) || languages[0]
            )}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent defaultValue={"fr_FR"}>
                {languages.map((language) => (
                  <SelectItem
                    value={language.value}
                    key={language.value}
                  >
                    <span>{language.flag} {language.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button onClick={handleProcess}>Process & Go</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Page