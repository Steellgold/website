import { createClient } from "@supabase/supabase-js"
import { Database } from "./supabase.types"

const supabaseUrl = "https://sidzseaxauxrhmqrminp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpZHpzZWF4YXV4cmhtcXJtaW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MjEwMTYsImV4cCI6MjA1MDI5NzAxNn0.PK0JqB9YhTy83lAeNKR2eUUpxSRwiAtFOwnLSqyXB1Y";

const supabase = createClient<Database>(supabaseUrl, supabaseKey!)

export { supabase }