import { createClient } from '@supabase/supabase-js';
import { SUPABASE_KEY } from '@env';

// Replace these with your actual Supabase project URL and API key
const SUPABASE_URL = 'https://ykqxprjjeehvfxlumxov.supabase.co';
const SUPABASE_ANON_KEY = SUPABASE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);