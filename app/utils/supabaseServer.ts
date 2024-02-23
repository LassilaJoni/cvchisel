import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
const cookieStore = cookies()
const supabaseServer = createServerComponentClient({ cookies: () => cookieStore });

export { supabaseServer};

