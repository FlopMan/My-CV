"use client";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginForm } from "@/actions/loginForm";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

// NOTE - FORM SCHEMA
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Component({ ...props }: any) {
  console.log("🚀 ~ Component ~ props:", props);
  const router = useRouter();

  if (props?.session?.access) {
    const decodedToken = jwtDecode(props?.session?.accessToken as string);
    if (decodedToken?.exp) {
      const timestamp = decodedToken?.exp;
      const date = new Date(timestamp! * 1000);
      const isoString = date.toISOString();
      console.log(isoString);
    }
  }

  const [isPending, startTransition] = useTransition();
  // NOTE - STATE
  const [show, setShow] = useState(false);

  // NOTE - INIT FORM
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "finn01@gmail.com",
      password: "Duc123",
    },
  });

  // NOTE - HANDLE SUBMIT
  function onSubmit(data: z.infer<typeof formSchema>) {
    startTransition(async () => {
      console.log(data);
      loginForm({
        email: data.email,
        password: data.password,
        redirectTo: "/dashboard",
      })
        .then((res) => {
          console.log("🚀 ~ .then ~ res:", res);
          if (res.includes("Error")) {
          } else {
            return router.replace(res);
          }
        })
        .catch((error) => {
          console.log("🚀 ~ startTransition ~ error:", error);
        });
    });
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 gap-8 p-4 md:p-8">
      <div className="hidden md:flex items-center justify-center">
        <Image
          src="https://placehold.co/400x400"
          alt="Analytics illustration"
          width={400}
          height={400}
          className="max-w-[25rem] w-full"
          priority
        />
      </div>
      <div className="flex flex-col justify-center max-w-[27.5rem] mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Hi, Welcome back
          </h1>
          <p className="text-muted-foreground">
            New user?{" "}
            <Link
              href="/register"
              className="font-medium hover:underline text-black"
            >
              Create an account
            </Link>
          </p>
        </div>

        <Alert className="mb-6 bg-[#D1F8EA] border-[#D1F8EA] text-[#006C9C]">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="flex gap-1">
            Use email:
            <span className="font-medium">demo@minimals.cc</span>/ password:
            <span className="font-medium">demo1234</span>
          </AlertDescription>
        </Alert>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-[0.5rem]">
                  <FormLabel className="text-black font-cormorant lining-nums proportional-nums text-[1rem] font-bold leading-[1.2] tracking-[0.0125rem] xsm:text-sm not-italic xsm:tracking-[0.01094rem]">
                    Email address*
                  </FormLabel>
                  <FormControl>
                    <Input
                      tabIndex={1}
                      className="font-helvetica placeholder:text-[#A3A3A3] rounded-none text-[0.875rem] font-medium leading-[1.2] tracking-[-0.014rem] border-[#8c8c8c] h-[3rem] bg-transparent"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[0.875rem] font-medium leading-[1.2] -tracking-[0.014rem]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-[0.5rem] !mb-[2.5rem]">
                  <FormLabel className="text-black font-cormorant lining-nums proportional-nums text-[1rem] font-bold leading-[1.2] tracking-[0.0125rem] xsm:text-sm not-italic xsm:tracking-[0.01094rem]">
                    Password*
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        tabIndex={2}
                        type={`${show ? "text" : "password"}`}
                        className="font-helvetica placeholder:text-[#A3A3A3] rounded-none text-[0.875rem] font-medium leading-[1.2] tracking-[-0.014rem] border-[#8c8c8c] h-[3rem] bg-transparent"
                        placeholder="Password"
                        {...field}
                      />
                      <div
                        className="absolute top-1/2 right-3 -translate-y-1/2 size-6 cursor-pointer"
                        onClick={() => {
                          setShow(!show);
                        }}
                      >
                        {show ? (
                          <Eye className="size-6" />
                        ) : (
                          <EyeOff className="size-6" />
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[0.875rem] font-medium leading-[1.2] -tracking-[0.014rem]" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#212B36] hover:bg-[#212B36]/90 text-white"
            >
              Login
            </Button>
          </form>
        </Form>

        {/* <button onClick={() => logoutForm()}>Log out</button> */}
      </div>
    </div>
  );
}
