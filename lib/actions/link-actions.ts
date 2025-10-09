"use server";

import { createShortLink, deleteShortLink, getLinksByIp, getShortLink, incrementClicks, updateShortLink, verifyPassword } from "@/lib/shortener";
import { getIp, isBotOrCrawler } from "@/lib/utils";
import { CreateShortLinkForm, VerifyPasswordForm } from "@/type/shortener";
import { headers } from "next/headers";

export const createShortLinkAction = async (data: CreateShortLinkForm) => {
  const { type, url, slug, password, expiresAt, title, content, banner } = data;

  if (type === "link" && !url) {
    return { success: false, error: "URL required for links" };
  }

  if (type === "article" && (!title || !content)) {
    return { success: false, error: "Title and content required for articles" };
  }

  try {
    const ip = getIp(await headers());
    
    const result = await createShortLink(
      {
        type,
        url: type === "link" ? url : undefined,
        slug: slug || undefined,
        password: password || undefined,
        expiresAt: expiresAt || undefined,
        title: type === "article" ? title : undefined,
        content: type === "article" ? content : undefined,
        banner: type === "article" && banner ? banner : undefined
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
      return { success: false, error: "This content does not require a password" };
    }

    const isValid = await verifyPassword(password, shortLink.password);
    
    if (!isValid) {
      return { success: false, error: "Password is incorrect" };
    }

    const headersList = await headers();
    const userAgent = headersList.get('user-agent') || '';
    const isBot = isBotOrCrawler(userAgent);

    if (!isBot) {
      await incrementClicks(short);
    }

    if (shortLink.type === "link") {
      return { success: true, url: shortLink.url };
    }

    return { success: true, type: "article" };
  } catch (error) {
    console.error("Error verifying password:", error);
    return { success: false, error: "An error occurred" };
  }
};

export const getLinksByIpAction = async () => {
  try {
    const ip = getIp(await headers());
    const links = await getLinksByIp(ip);

    return {
      success: true,
      links: links.map(({ short, link }) => ({
        short,
        url: link.url,
        createdAt: link.createdAt,
        expiresAt: link.expiresAt,
        hasPassword: !!link.password,
        clicks: link.clicks || 0,
        type: link.type || "link",
        title: link.title
      }))
    };
  } catch (error) {
    console.error("Error getting links by IP:", error);
    return { success: false, error: "Failed to fetch links" };
  }
};

export const deleteShortLinkAction = async (short: string) => {
  try {
    const ip = getIp(await headers());
    const result = await deleteShortLink(short, ip);
    return result;
  } catch (error) {
    console.error("Error deleting short link:", error);
    return { success: false, error: "Failed to delete link" };
  }
};

export const getShortLinkForEditAction = async (short: string) => {
  try {
    const ip = getIp(await headers());
    const shortLink = await getShortLink(short);
    
    if (!shortLink) {
      return { success: false, error: "Content not found" };
    }

    if (shortLink.ip !== ip) {
      return { success: false, error: "Unauthorized to edit this content" };
    }

    return {
      success: true,
      data: {
        type: shortLink.type || "link",
        url: shortLink.url,
        title: shortLink.title,
        content: shortLink.content,
        banner: shortLink.banner,
        expiresAt: shortLink.expiresAt,
        hasPassword: !!shortLink.password
      }
    };
  } catch (error) {
    console.error("Error getting short link for edit:", error);
    return { success: false, error: "Failed to fetch content" };
  }
};

export const updateShortLinkAction = async (short: string, data: CreateShortLinkForm) => {
  const { type, url, password, expiresAt, title, content, banner } = data;

  if (type === "link" && !url) {
    return { success: false, error: "URL required for links" };
  }

  if (type === "article" && (!title || !content)) {
    return { success: false, error: "Title and content required for articles" };
  }

  try {
    const ip = getIp(await headers());
    const existingLink = await getShortLink(short);
    
    if (!existingLink) {
      return { success: false, error: "Content not found" };
    }

    if (existingLink.ip !== ip) {
      return { success: false, error: "Unauthorized to edit this content" };
    }

    const result = await updateShortLink(short, {
      type,
      url: type === "link" ? url : undefined,
      password: password || undefined,
      expiresAt: expiresAt || undefined,
      title: type === "article" ? title : undefined,
      content: type === "article" ? content : undefined,
      banner: type === "article" && banner ? banner : undefined
    });

    return result;
  } catch (error) {
    console.error("Error updating short link:", error);
    return { success: false, error: "An error occurred" };
  }
};
