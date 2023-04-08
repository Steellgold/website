import { restRequest } from "$lib/utils/request/request";

export type Presence = {
  data: {
    spotify?: boolean;
    listening_to_spotify?: boolean;

    kv?: { [key: string]: string };

    discord_user?: {
      username: string;
      public_flags: number;
      id: string;
      display_name: string;
      discriminator: string;
      bot: boolean;
      avatar_decoration: null;
      avatar: string;
    }

    discord_status?: string;

    activities?: {
      type: number;
      name: string;
      state: string;
      details: string;
      created_at: number;
      id: string;
      timestamps: {
        start: number;
        end: number;
      };
      assets: {
        large_text: string;
        large_image: string;
        small_text: string;
        small_image: string;
      };
      session_id: string;
      buttons: {
        [key: string]: string;
      }[];
      application_id: string;
    }[];
  }
}

export const getActivities = async() : Promise<Presence> => {
  const response = await restRequest<Presence>("get", "https://api.lanyard.rest/v1/users/504392983244832780");
  if (!response.success) return { data: {} };

  return {
    data: {
      activities: response.data.data.activities
    }
  };
};