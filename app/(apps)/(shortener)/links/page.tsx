"use client";

import { ShortenerNav } from "@/components/shortener-nav";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteShortLinkAction, getLinksByIpAction } from "@/lib/actions/link-actions";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Calendar, Clock, Copy, CopyCheck, Edit, ExternalLink, Lock, MousePointer, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

type Link = {
  short: string;
  url?: string;
  createdAt: number;
  expiresAt?: number;
  hasPassword: boolean;
  clicks: number;
  type?: string;
  title?: string;
}

const LinksPage = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, copy] = useCopyToClipboard();

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const result = await getLinksByIpAction();

      if (result.success && result.links) {
        setLinks(result.links);
      } else {
        setError(result.error || "Failed to fetch links");
      }
    } catch (error) {
      console.error("Failed to fetch links:", error);
      setError("Failed to fetch links");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (short: string) => {
    if (!confirm("Are you sure you want to delete this link?")) {
      return;
    }

    try {
      const result = await deleteShortLinkAction(short);

      if (result.success) setLinks(links.filter(link => link.short !== short));
      else setError(result.error || "Failed to delete link");

    } catch (error) {
      console.error("Failed to delete link:", error);
      setError("Failed to delete link");
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const isExpired = (expiresAt?: number) => {
    if (!expiresAt) return false;
    return Date.now() > expiresAt;
  };

  const getTimeUntilExpiry = (expiresAt: number) => {
    const now = Date.now();
    const diff = expiresAt - now;
    
    if (diff <= 0) return "Expired";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <ShortenerNav />

        <div className="max-w-4xl mx-auto">
          <h1 className={cn(piano.className, "text-5xl font-extrabold text-white mb-8")}>My Content</h1>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
            <p className="mt-4 text-neutral-300">Loading your content...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">

      <ShortenerNav />

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div> 
            <h1 className={cn(piano.className, "text-5xl font-extrabold text-white")}>My Content</h1>
            <p className="text-neutral-300 mt-2 text-lg">
              Here are all the short links and articles you have created
            </p>
          </div>
          <Button onClick={fetchLinks} variant="outline">
            Refresh
          </Button>
        </div>

        {error && (
          <div className="mb-6 bg-red-900/20 border-inside border-inside-preferred rounded-md p-4">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {links.length === 0 ? (
          <Card>
            <CardContent>
              <div className="text-center py-16">
                <p className="text-neutral-400 mb-2">You don&apos;t have any content yet</p>
                <Link href="/new" className={buttonVariants({ variant: "outline" })}>Create your first link or article</Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {links.map((link) => (
              <Card key={link.short} className={isExpired(link.expiresAt) ? "opacity-60" : ""}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <span className="font-mono text-lg">/{link.short}</span>
                        <Badge variant={link.type === "article" ? "default" : "outline"}>
                          {link.type === "article" ? "Article" : "Link"}
                        </Badge>
                        {link.hasPassword && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            Protected
                          </Badge>
                        )}
                        {link.expiresAt && (
                          <Badge 
                            variant={isExpired(link.expiresAt) ? "destructive" : "outline"}
                            className="flex items-center gap-1"
                          >
                            <Clock className="w-3 h-3" />
                            {isExpired(link.expiresAt) ? "Expired" : getTimeUntilExpiry(link.expiresAt)}
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2 break-all">
                        {link.type === "article" ? link.title : link.url}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copy(`${window.location.origin}/${link.short}`)}
                       >
                        {isCopied ? <CopyCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                       </Button>
                       {(link.type === "article" || link.url) && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                         >
                          <Link href={link.type === "article" ? `/${link.short}/view` : link.url!} target={link.type === "article" ? "_self" : "_blank"} rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                       )}
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                       >
                        <Link href={`/edit/${link.short}`}>
                          <Edit className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(link.short)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Created on {formatDate(link.createdAt)}
                    </div>

                    <div className="flex items-center gap-1">
                      <MousePointer className="w-4 h-4" />
                      {link.clicks} click{link.clicks !== 1 ? 's' : ''}
                    </div>

                    {link.expiresAt && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Expires on {formatDate(link.expiresAt)}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LinksPage;