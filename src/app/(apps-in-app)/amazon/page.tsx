'use client'

import { useState } from 'react'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card'
import { Input } from '@/lib/components/ui/input'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const Page = () => {
  const [inputLink, setInputLink] = useState("");
  const [loading, setLoading] = useState(false);

  const resolveShortLink = async (url: string) => {
    try {
      const response = await fetch(`https://amazon-link-production.up.railway.app/resolve-url?url=${encodeURIComponent(url)}`);
      // const response = await fetch(`http://localhost:3001/resolve-url?url=${encodeURIComponent(url)}`);
      if (!response.ok) {
        throw new Error('Failed to resolve URL');
      }
      const data = await response.json();
      console.log('Resolved URL:', data.resolvedUrl);
      return data.resolvedUrl;
    } catch (error) {
      console.error('Error resolving link:', error);
      throw new Error('Unable to resolve short link');
    }
  };

  const processLink = async (url: string) => {
    try {
      let parsedUrl = new URL(url);

      if (parsedUrl.hostname === 'amzn.eu') {
        const resolvedUrl = await resolveShortLink(url);
        parsedUrl = new URL(resolvedUrl);
      }

      if (!parsedUrl.hostname.includes('amazon')) {
        toast.error('Invalid Amazon URL. Please check and try again.');
        return;
      }

      if (!parsedUrl.hostname.includes('.fr')) {
        parsedUrl.hostname = parsedUrl.hostname.replace('.com', '.fr');
        toast.warning('Switching to Amazon France...');
      }

      parsedUrl.searchParams.append('tag', 'gaetanhus-21');

      setLoading(false);
      return parsedUrl.toString();
    } catch (err) {
      setLoading(false);
      console.error('Error processing link:', err);
      throw new Error('Invalid URL');
    }
  };

  const handleProcess = async () => {
    try {
      if (!inputLink) {
        toast.error('Please enter a valid URL');
        return;
      }

      setLoading(true);
      const processedLink = await processLink(inputLink);

      if (processedLink) {
        window.open(processedLink, '_blank');
        toast.success('Redirecting to processed link...');
      } else {
        toast.error('Failed to process the link');
      }
    } catch (err) {
      toast.error('Invalid Amazon URL. Please check and try again.');
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>Amazon Link Processor</CardTitle>
        <CardDescription>
          Entrer un lien de produit Amazon pour rediriger avec l&apos;ID partenaire <code className="bg-gray-100 text-gray-800 p-1 rounded">gaetanhus-21</code> et la langue sélectionnée.
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

            <Button onClick={handleProcess} disabled={loading}>
              {loading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
              {loading ? "Processing..." : "Process & Go"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Page;
