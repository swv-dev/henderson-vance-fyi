import { createClient } from '@supabase/supabase-js'

/**
 * Untyped admin client for vcdebate tables.
 * Uses service_role key — bypasses RLS.
 */
export function vcdebateAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
