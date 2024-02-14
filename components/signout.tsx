"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const supabase = createClientComponentClient();

  const router = useRouter();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // eslint-disable-next-line no-console
      console.error("ERROR:", error);
    } else {
      router.push("/");
    }
  }

  return (
    <Button type="button" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
