import Cryptr from "cryptr"

const CRYPTR = new Cryptr(process.env.PRIVATE_KEY!);

export const getEncryptedText = (text: string): string => {
  return CRYPTR.encrypt(text);
};

export const getDecryptedText = (text: string): string => {
  return CRYPTR.decrypt(text);
};