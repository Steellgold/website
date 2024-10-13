import { z } from "zod";

export const SpotifyTrack = z.object({
  timestamp: z.number(),
  context: z.object({
    external_urls: z.object({
      spotify: z.string(),
    }),
    href: z.string(),
    type: z.string(),
    uri: z.string(),
  }),
  progress_ms: z.number(),
  item: z.object({
    album: z.object({
      album_type: z.string(),
      artists: z.array(z.object({
        external_urls: z.object({
          spotify: z.string(),
        }),
        href: z.string(),
        id: z.string(),
        name: z.string(),
        type: z.string(),
        uri: z.string(),
      })),
      available_markets: z.array(z.string()),
      external_urls: z.object({
        spotify: z.string(),
      }),
      href: z.string(),
      id: z.string(),
      images: z.array(z.object({
        height: z.number(),
        url: z.string(),
        width: z.number(),
      })),
      name: z.string(),
      release_date: z.string(),
      release_date_precision: z.string(),
      total_tracks: z.number(),
      type: z.string(),
      uri: z.string(),
    }),
    artists: z.array(z.object({
      external_urls: z.object({
        spotify: z.string(),
      }),
      href: z.string(),
      id: z.string(),
      name: z.string(),
      type: z.string(),
      uri: z.string(),
    })),
    available_markets: z.array(z.string()),
    disc_number: z.number(),
    duration_ms: z.number(),
    explicit: z.boolean(),
    external_ids: z.object({
      isrc: z.string(),
    }),
    external_urls: z.object({
      spotify: z.string(),
    }),
    href: z.string(),
    id: z.string(),
    is_local: z.boolean(),
    name: z.string(),
    popularity: z.number(),
    preview_url: z.string().nullable(),
    track_number: z.number(),
    type: z.string(),
    uri: z.string(),
  }),
  currently_playing_type: z.string(),
  actions: z.object({
    disallows: z.object({
      resuming: z.boolean(),
      toggling_repeat_context: z.boolean().nullable().optional(),
      toggling_repeat_track: z.boolean().nullable().optional(),
      toggling_shuffle: z.boolean().nullable().optional(),
    }),
  }),
  is_playing: z.boolean(),
});

const ImageSchema = z.object({
  url: z.string().url(),
});

const ArtistSchema = z.object({
  name: z.string(),
  external_urls: z.object({
    spotify: z.string().url(),
  }),
  images: z.array(ImageSchema).optional()
});

const TrackSchema = z.object({
  name: z.string(),
  artists: z.array(ArtistSchema),
  external_urls: z.object({
    spotify: z.string().url(),
  }),
  album: z.object({
    images: z.array(ImageSchema),
  }).optional()
});

export const TopItemsSchema = z.object({
  tracks: z.object({
    last_7_days: z.array(TrackSchema),
    last_3_months: z.array(TrackSchema),
    all_time: z.array(TrackSchema),
  }),
  artists: z.object({
    last_7_days: z.array(ArtistSchema),
    last_3_months: z.array(ArtistSchema),
    all_time: z.array(ArtistSchema),
  }),
});