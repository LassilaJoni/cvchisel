import { signup } from "../actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Decoration } from "@/components/ui/decoration";

export default async function SignupPage() {
  //const { data, error } = await supabase.auth.getUser()
  //if (data?.user) {
  //  redirect('/dashboard');
  //}

  return (
    <section id="hero" className="relative">
      <Decoration.Grid />
      <Decoration.Image />
      <div className="flex h-screen justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>
              Already have an account?{" "}
              <Link
                className="text-blue-600 hover:underline"
                href="/auth/login"
              >
                Log in
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="password">Password</label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button formAction={signup}>Create Account</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
