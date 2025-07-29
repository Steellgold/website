"use client";

import { Section } from "@/components/section";
import { cn } from "@/lib/utils";
import { Copy, CopyCheck } from "lucide-react";
import Link from "next/link";
import { ReactElement, useEffect } from "react";
import { useCopyToClipboard } from "usehooks-ts";

export const ContactSection = (): ReactElement => {
  const [isCopied, copy] = useCopyToClipboard();

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        copy("");
      }, 2000);
    }
  }, [isCopied, copy]);

  return (
    <Section name="Let&apos;s talk">
      <div className="bg-[#1d1d1d] border-inside border-inside-default p-6">
        <div className="text-center space-y-4">
          
          <div
            className={cn(
              "w-12 h-12 mx-auto bg-[#2630a0] rounded-sm flex items-center justify-center",
              "border-inside border-inside-default"
            )}
            style={{ "--border-inside-size": "1.5px" } as React.CSSProperties}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="text-gray-300">
              Ready to start a project or just want to say hello?
              <br />
              I&apos;m always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-2 py-1 bg-[#2630a0] text-white rounded-lg hover:bg-[#2630a0]/80 transition-colors font-medium">
            <Link href="mailto:pro@gaetanhus.fr">
              pro@gaetanhus.fr
            </Link>

            <button
              onClick={() => copy("pro@gaetanhus.fr")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {isCopied ? <CopyCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};