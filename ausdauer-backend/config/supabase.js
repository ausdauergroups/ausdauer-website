import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'; // This forces the .env file to load immediately

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);