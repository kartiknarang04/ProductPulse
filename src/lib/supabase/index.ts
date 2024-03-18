import { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseServer = new SupabaseClient(
    supabaseUrl as string,
    supabaseSecretKey as string
);