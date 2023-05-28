import { redirect } from "@sveltejs/kit";

export const GET = (): Response => {
  throw redirect(302, "https://github.com/Steellgold/Colors");
};