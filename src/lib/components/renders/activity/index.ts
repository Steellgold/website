export { default as Activity } from "./activity.svelte";

import type { IActivity } from "./activity.types";
import { writable } from "svelte/store";

export const netflixWatching = writable<IActivity | null>(null);
export const primeVideoWatching = writable<IActivity | null>(null);
export const twitchWatching = writable<IActivity | null>(null);
export const youtubeWatching = writable<IActivity | null>(null);
export const disneyplusWatching = writable<IActivity | null>(null);

export const figmaPlaying = writable<IActivity | null>(null);
export const vscodePlaying = writable<IActivity | null>(null);
export const stackoverflowPlaying = writable<IActivity | null>(null);
export const githubPlaying = writable<IActivity | null>(null);
export const coinbasePlaying = writable<IActivity | null>(null);
export const twitterPlaying = writable<IActivity | null>(null);
export const instagramPlaying = writable<IActivity | null>(null);