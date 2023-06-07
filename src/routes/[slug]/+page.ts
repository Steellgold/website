import { projects } from "$lib/config/projects";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async({ params }) => {
  const { slug } = params;
  const project = projects.filter((project) => project.slug === slug);

  if (project.length === 1) {
    return project[0];
  }

  throw redirect(303, "/");
}) satisfies PageLoad;