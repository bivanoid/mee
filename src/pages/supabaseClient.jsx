import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY


if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL atau Anon Key tidak dikonfigurasi dengan benar");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
