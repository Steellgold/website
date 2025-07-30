'use server';

import { getNowPlaying } from '@/lib/spotify';
import type { SpotifyNowPlaying } from '@/type/spotify';

export const getSpotifyNowPlaying = async (): Promise<SpotifyNowPlaying> => {
  const allowedDomain = /(^|\.)steellgold\.fr$|^localhost(:\d+)?$/;
  let host = '';
  if (typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_VERCEL_URL) {
    host = process.env.NEXT_PUBLIC_VERCEL_URL;
  } else if (typeof window !== 'undefined') {
    host = window.location.hostname;
  } else if (typeof global !== 'undefined' && global.process && global.process.env && global.process.env.NEXT_PUBLIC_VERCEL_URL) {
    host = global.process.env.NEXT_PUBLIC_VERCEL_URL;
  }
  if (!allowedDomain.test(host)) {
    if (process.env.NODE_ENV === 'development') console.log('Spotify access denied for host:', host);
    return {
      track: null,
      isPlaying: false,
      progress: 0,
      duration: 0,
    };
  }
  
  try {
    return await getNowPlaying();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.log('Error in spotify action:', error);
    return {
      track: null,
      isPlaying: false,
      progress: 0,
      duration: 0,
    };
  }
}; 