import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "../[slug]/$types";

export const load = (async() => {
  throw redirect(303, "/");
}) satisfies PageLoad;