"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function IndexMakeRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                fill="#00A76F"
              />
              <path
                d="M18.8943 27.41L18.8943 11.6984L13.9168 11.6984L13.9168 27.41L18.8943 27.41Z"
                fill="white"
              />
              <path
                d="M21.0258 19.5545L26.0032 19.5545L26.0032 15.6185L21.0258 15.6185L21.0258 19.5545Z"
                fill="white"
              />
              <path
                d="M21.0258 27.4098L26.0032 27.4098L26.0032 23.4738L21.0258 23.4738L21.0258 27.4098Z"
                fill="white"
              />
            </svg>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Manage the job more effectively with Minimal
            </h1>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/placeholder.svg?height=480&width=640"
              alt="Dashboard illustration"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex items-center justify-center gap-8">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Logo 1"
              width={48}
              height={48}
            />
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Logo 2"
              width={48}
              height={48}
            />
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Logo 3"
              width={48}
              height={48}
            />
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Logo 4"
              width={48}
              height={48}
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Get started absolutely free
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="#"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          First name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First name"
                            {...field}
                            className="rounded-lg border-gray-300 bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Last name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Last name"
                            {...field}
                            className="rounded-lg border-gray-300 bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Email address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email address"
                          {...field}
                          className="rounded-lg border-gray-300 bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            {...field}
                            className="rounded-lg border-gray-300 pr-10 bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                          >
                            {showPassword ? (
                              <EyeOffIcon className="h-5 w-5 text-gray-400" />
                            ) : (
                              <EyeIcon className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg py-2.5"
                >
                  Create account
                </Button>
              </form>
            </Form>
            <p className="text-xs text-center text-gray-500">
              By signing up, I agree to{" "}
              <Link
                href="#"
                className="text-emerald-600 hover:text-emerald-500"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="text-emerald-600 hover:text-emerald-500"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
