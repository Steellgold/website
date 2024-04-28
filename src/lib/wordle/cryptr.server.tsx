"use server";

import { getDecryptedText } from "@/lib/wordle/cryptr";

export const getText = async (str: string): Promise<string> => {
  return getDecryptedText(str);
}