export { default as Activity } from "./activity.svelte";

import type { IActivity } from "./activity.types";
import { writable } from "svelte/store";

export const netflixWatching = writable<IActivity | null>(null);
export const primeVideoWatching = writable<IActivity | null>(null);
export const twitchWatching = writable<IActivity | null>(null);
export const youtubeWatching = writable<IActivity | null>(null);
export const figmaPlaying = writable<IActivity | null>(null);
export const vscodePlaying = writable<IActivity | null>(null);