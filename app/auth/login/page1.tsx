"use client"
import { login, signup } from './actions'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import Link from 'next/link'
/*

<form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
    */
export default function LoginPage() {

    const formSchema = z.object({
        email: z.string().email("Invalid email format").min(1, "Email is required"),
        password: z.string().min(1, "Password is required"),
      });

       // 1. Define your form.
       const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });

      const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
          const formData = new FormData(); // Create a FormData object
          formData.append("email", data.email); // Append email and password
          formData.append("password", data.password);
          await login(formData); // Pass the FormData object
        } catch (error) {
          console.error("Login error:", error);
          // Handle login errors
        }
      };
 

  return (
    <div className='flex h-screen bg-gray-100 justify-center items-center'>
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>Don't have an account? <Link className='text-blue-600 hover:underline' href="/signup">Sign up</Link></CardDescription>
      </CardHeader>
        <Form {...form}>
          <form>
          <div className="flex flex-col space-y-1.5">
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  {fieldState.error ? (
      <FormMessage>{fieldState.error.message}</FormMessage>
    ) : null}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  {fieldState.error ? (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  ) : ""}
                </FormItem>
              )}
            />
            
            </CardContent>
            </div>
            <CardFooter>
            <p>lol</p>
        {/*<Button formAction={handleSubmit} className="w-full" type="submit">Log In</Button>*/}
            </CardFooter>
          </form>
        </Form>

      </Card>
    </div>
  );
}
        