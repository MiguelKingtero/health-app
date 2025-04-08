import {createClient} from "@supabase/supabase-js";
const SUPABASE_URL="https://hrxbgqftxcebyingnfvc.supabase.co";
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyeGJncWZ0eGNlYnlpbmduZnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNzgxODYsImV4cCI6MjA1OTY1NDE4Nn0.74jJUNpX3_5CR8z0_o8ZJeXX_qnJzpKTCX4H0kztB_M";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

