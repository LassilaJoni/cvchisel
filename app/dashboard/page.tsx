import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'

export default async function PrivatePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/')
  }

  return <p className='flex justify-center items-center'>CV Builder</p>
}