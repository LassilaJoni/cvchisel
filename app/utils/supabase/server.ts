import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/*
Server Component client - To access Supabase from Server Components, which run only on the server.
*/
export function createClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}