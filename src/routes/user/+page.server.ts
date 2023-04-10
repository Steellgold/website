import { supabase } from "$lib/database/supabase";
import type { Actions } from "./$types";

export const actions: Actions = {
  login: async({ request }) => {
    const body = Object.fromEntries(await request.formData());
 
    if (!body.email) return { status: 401, body: { error: "Email is required" } };
    const { data, error } = await supabase.auth.signInWithOtp({ email: body.email });

    if (error) return { status: 401, body: { error: error.message } };
    return { status: 200, body: { data } };
  }
};