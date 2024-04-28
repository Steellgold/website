import { Letter, Line } from "@/lib/types/wordle.type";
import { getDecryptedText } from "@/lib/wordle/cryptr";
import { isValidWord, joker } from "@/lib/wordle/utils";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type PostBody = {
  body: {
    letterArray: Line[];
    targetWord: string;
    lineIndexToCheck: number;
  }
} & NextRequest;

export const POST = async(request: PostBody): Promise<NextResponse> => {
  const body = await request.json();

  const schema = z.object({
    letterArray: z.array(z.array(z.object({
      letter: z.string(),
      status: z.string()
    }))),
    targetWord: z.string(),
    lineIndexToCheck: z.string()
  }).safeParse(body);

  if (!schema.success) {
    console.error(schema.error);
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const { letterArray, targetWord, lineIndexToCheck } = schema.data;

  const line = joker(letterArray as Line[], getDecryptedText(targetWord), parseInt(lineIndexToCheck));

  return NextResponse.json({
    success: true,
    line
  });
}