"use client";

import { Button } from "@/components/ui/button";
import { List, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ShortenerNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-md px-2 py-2">
        <div className="flex items-center gap-2">
          <Button
            variant={pathname === "/new" ? "default" : "ghost"}
            size="sm"
            asChild
            className="rounded-sm"
          >
            <Link href="/new">
              <Plus className="w-4 h-4" />
              New Link
            </Link>
          </Button>

          <Button
            variant={pathname === "/links" ? "default" : "ghost"}
            size="sm"
            asChild
            className="rounded-sm"
          >
            <Link href="/links">
              <List className="w-4 h-4" />
              My Links
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 