import { writable } from "svelte/store";
import type { ISpotify } from "./spotify.types";

export { default as Spotify } from "./spotify.svelte";

export const spotifyListening = writable<ISpotify | null>(null);