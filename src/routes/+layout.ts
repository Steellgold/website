/** @type {import('./$types').PageLoad} */

import type { LoadEvent } from "@sveltejs/kit";

export function load({ data }: LoadEvent) {
  return data;
}