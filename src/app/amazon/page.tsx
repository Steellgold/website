'use client'

import { useState } from 'react'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card'
import { Input } from '@/lib/components/ui/input'
import { toast } from 'sonner'

const Page = () => {
  const [inputLink, setInputLink] = useState('');

  const resolveShortLink = async (url: string) => {
    try {
      const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
      return response.url;
    } catch (error) {
      throw new Error('Unable to resolve short link');
    }
  };

  const processLink = async (url: string) => {
    try {
      let parsedUrl = new URL(url);

      if (parsedUrl.hostname === 'amzn.eu') {
        const resolvedUrl = await resolveShortLink(url);
        console.log('Resolved URL:', resolvedUrl);
        parsedUrl = new URL(resolvedUrl);
      }

      if (!parsedUrl.hostname.includes('amazon')) {
        toast.error('Invalid Amazon URL. Please check and try again.');
        return;
      }
      if (!parsedUrl.hostname.includes('.fr')) {
        parsedUrl.hostname = parsedUrl.hostname.replace('.com', '.fr');
      }

      parsedUrl.searchParams.append('tag', 'gaetanhus-21');

      return parsedUrl.toString();
    } catch (err) {
      throw new Error('Invalid URL');
    }
  };

  const handleProcess = async () => {
    try {
      const processedLink = await processLink(inputLink);
      console.log(processedLink);
      window.open(processedLink, '_blank');
      toast.success('Redirecting to processed link...');
    } catch (err) {
      toast.error('Invalid Amazon URL. Please check and try again.');
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Amazon Link Processor</CardTitle>
        <CardDescription>
          Entrer un lien de produit Amazon pour rediriger avec l&apos;ID partenaire <code>gaetanhus-21</code> et la langue sélectionnée.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-row space-x-2">
            <Input
              type="url"
              placeholder="Enter Amazon product link"
              value={inputLink}
              onChange={(e) => setInputLink(e.target.value)}
              className="flex-grow"
            />

            <Button onClick={handleProcess}>Process & Go</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Page