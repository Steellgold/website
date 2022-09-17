import { redirect } from '@sveltejs/kit';
import type { LoadEvent } from '@sveltejs/kit';

import projects from '../../../lib/config/projects.json';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: LoadEvent) {
  const projectString = params.project;
  const projectKey = projects.findIndex(p => p.title === projectString);
  if (projectKey === -1) {
    throw redirect(307, '/');
  }

  return {
    project: projects[projectKey],
  }
}