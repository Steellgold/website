"use client";

import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { getText } from "@/lib/wordle/cryptr.server";
import { ReactElement, useState } from "react";

const WordleCheatPage = (): ReactElement => {
  const env = process.env.NEXT_PUBLIC_ENV!;
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState<string | null>(null);

  if (env === "production") {
    return <></>;
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div>
        <Input placeholder="Enter a encrypted word" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button
          onClick={async() => {
            const text = await getText(input);
            setText(text);
          }}
        >
          Decrypt
        </Button>
      </div>
      <div>
        {text}
      </div>
    </div>
  )
};

export default WordleCheatPage;