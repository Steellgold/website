import { Categories, PartyDifficulty, WordCategories } from "@/lib/types/wordle.type";
import { getDecryptedText, getEncryptedText } from "@/lib/wordle/cryptr";
import { difficultyToNumber, getCategoryId } from "@/lib/wordle/party";
import { normalizeText } from "@/lib/wordle/utils";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = async(request: NextRequest): Promise<NextResponse> => {
  const { searchParams } = new URL(request.url)
  
  const category = searchParams.get('category') as WordCategories;
  const difficulty = searchParams.get('difficulty') as PartyDifficulty;

  if (!category) return NextResponse.json({ success: false }, { status: 400 });
  if (!difficulty) return NextResponse.json({ success: false }, { status: 400 });

  const cat =  category == "random"
    ? Object.keys(Categories)[Math.floor(Math.random() * 27)] as WordCategories
    : category;

    
  const response = await fetch(`https://trouve-mot.fr/api/categorie/${getCategoryId(cat)}/50`, {
    cache: "no-cache"
  });
  const data = await response.json();

  const schema = z.array(z.object({
    name: z.string(),
    categorie: z.string()
  })).safeParse(data);

  if (!schema.success) return NextResponse.json({ success: false }, { status: 400 });

  const words = schema.data;
  const word = words.find((word) => word.name.length === difficultyToNumber(difficulty));

  if (!word) return NextResponse.json({ success: false }, { status: 400 });

  return NextResponse.json({ success: true, word: getEncryptedText(normalizeText(word.name)) });
}