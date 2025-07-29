"use server";

import { createShortLink, getShortLink, verifyPassword } from "@/lib/shortener";
import { CreateShortLinkForm, VerifyPasswordForm } from "@/type/shortener";
import { headers } from "next/headers";
import { getIp } from "../utils";

export const createShortLinkAction = async (data: CreateShortLinkForm) => {
  const { url, slug, password, expiresAt } = data;

  if (!url) {
    return { success: false, error: "URL required" };
  }

  try {
    const ip = getIp(await headers());
    
    const result = await createShortLink(
      {
        url,
        slug: slug || undefined,
        password: password || undefined,
        expiresAt: expiresAt || undefined
      },
      ip
    );

    return result;
  } catch (error) {
    console.error("Error creating short link:", error);
    return { success: false, error: "An error occurred" };
  }
};

export const verifyPasswordAction = async (data: VerifyPasswordForm) => {
  const { short, password } = data;

  if (!password) {
    return { success: false, error: "Password required" };
  }

  try {
    const shortLink = await getShortLink(short);
    
    if (!shortLink) {
      return { success: false, error: "Link not found" };
    }

    if (!shortLink.password) {
      return { success: false, error: "This link does not require a password" };
    }

    const isValid = await verifyPassword(password, shortLink.password);
    
    if (!isValid) {
      return { success: false, error: "Password is incorrect" };
    }

    return { success: true, url: shortLink.url };
  } catch (error) {
    console.error("Error verifying password:", error);
    return { success: false, error: "An error occurred" };
  }
};
