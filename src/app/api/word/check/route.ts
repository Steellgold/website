import { Letter, Line } from "@/lib/types/wordle.type";
import { getDecryptedText } from "@/lib/wordle/cryptr";
import { isValidWord } from "@/lib/wordle/utils";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = (request: NextRequest): NextResponse => {
  const { searchParams } = new URL(request.url)
  
  const word = searchParams.get('word')
  const targetWord = searchParams.get('targetWord')

  if (!word) return NextResponse.json({ success: false }, { status: 400 });
  if (!targetWord) return NextResponse.json({ success: false }, { status: 400 });

  const decryptedTargetWord = getDecryptedText(targetWord)
  if (decryptedTargetWord !== word) return NextResponse.json({ success: false }, { status: 400 });

  return NextResponse.json({ success: true });
}

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

  const positions = isValidWord(letterArray as Line[], getDecryptedText(targetWord), parseInt(lineIndexToCheck));
  const allWellPlaced = positions.every((position) => position.status === "well-placed" || position.status === "hint");

  return NextResponse.json({
    success: allWellPlaced,
    positions,
    word: allWellPlaced ? getDecryptedText(targetWord) : null
  });
}