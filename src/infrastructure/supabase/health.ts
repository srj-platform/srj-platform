import { supabase } from "./client";

export async function checkSupabaseHealth() {
  try {
    const { error } = await supabase.auth.getSession();

    if (error) {
      return {
        connected: false,
        message: error.message,
      };
    }

    return {
      connected: true,
      message: "Supabase connection successful",
    };
  } catch (err) {
    return {
      connected: false,
      message: err instanceof Error ? err.message : "Unknown error",
    };
  }
}