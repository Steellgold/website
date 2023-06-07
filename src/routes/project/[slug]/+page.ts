import { Projects } from "$lib/config/projects";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async({ params }) => {
  const { slug } = params;
  const projects = Projects.filter((project) => project.slug === slug);

  if (projects.length === 1) {
    return projects[0];
  }

  throw redirect(303, "/");
}) satisfies PageLoad;