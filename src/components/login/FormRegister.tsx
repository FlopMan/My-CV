"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address.",
    }),
    pass: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmpass: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    check: z.boolean().default(false).optional(),
  })
  .refine((data) => data.pass === data.confirmpass, {
    path: ["confirmpass"], // Đặt lỗi cho trường `confirmpass`
    message: "Passwords must match.",
  });

export function FormRegiter() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      pass: "",
      confirmpass: "",
      check: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[31.94444rem]">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-[1.67rem]">
              <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.35] font-roboto">
                Email address
              </FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 !mt-[0.56rem] bg-white placeholder:text-[#85868A] !leading-[1.35] !text-[1.11111rem] text-[#2C2C31] h-[3.33333rem] p-[0.83333rem_1.11111rem] rounded-[0.27778rem] border-[1px] border-solid border-[#DEDEDF]"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>
              <FormMessage
                showErrorIcon={true}
                className="text-[#CD3645] text-[0.97222rem] leading-[1.35] flex [&>svg]:mr-[0.56rem]"
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pass"
          render={({ field }) => (
            <FormItem className="mb-[1.67rem]">
              <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.35] font-roboto">
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 !mt-[0.56rem] bg-white placeholder:text-[#85868A] !leading-[1.35] !text-[1.11111rem] text-[#2C2C31] h-[3.33333rem] p-[0.83333rem_1.11111rem] rounded-[0.27778rem] border-[1px] border-solid border-[#DEDEDF]"
                    placeholder="At least 8 characters"
                    {...field}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage
                showErrorIcon={true}
                className="text-[#CD3645] text-[0.97222rem] leading-[1.35] flex [&>svg]:mr-[0.56rem]"
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmpass"
          render={({ field }) => (
            <FormItem className="mb-[1.67rem]">
              <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.35] font-roboto">
                Confirm password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    className="focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 !mt-[0.56rem] bg-white placeholder:text-[#85868A] !leading-[1.35] !text-[1.11111rem] text-[#2C2C31] h-[3.33333rem] p-[0.83333rem_1.11111rem] rounded-[0.27778rem] border-[1px] border-solid border-[#DEDEDF]"
                    placeholder="At least 8 characters"
                    {...field}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">
                      {showConfirmPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </FormControl>
              <FormMessage
                showErrorIcon={true}
                className="text-[#CD3645] text-[0.97222rem] leading-[1.35] flex [&>svg]:mr-[0.56rem]"
              />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="check"
          render={({ field }) => (
            <FormItem className="flex items-center space-y-0">
              <FormControl>
                <Checkbox
                  className="p-[0.13889rem] size-[1.38889rem] rounded-[0.27778rem] border-[1.2px] border-solid border-[#9C9C9E] bg-white"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <div className=" leading-none ml-[0.55556rem]">
                <FormLabel className="text-[#2C2C31] text-[1.11111rem] leading-[1.35]">
                  I agree to the{" "}
                  <Link href={"/"} className="underline">
                    Term of Use
                  </Link>{" "}
                  and{" "}
                  <Link href={"/"} className="underline">
                    Privacy Policy
                  </Link>
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          className="mb-[2.22rem] transition-all hover:text-[#121216] hover:bg-white hover:border-[1px] border-none hover:border-solid border-[#121216] p-[1.11111rem_7.77778rem] text-white text-[1.11111rem] font-semibold leading-[1.3] mt-[2.22rem] w-full bg-[#121216] rounded-[0.41667rem] shadow-[0px_4px_10px_0px_rgba(91,91,91,0.04)]"
          type="submit"
        >
          Log In
        </Button>
        <div className="flex items-center w-full justify-center">
          <p className="text-[#565657] text-[1.111rem] leading-[1.35] font-roboto mr-[0.56rem]">
            Have an account?
          </p>
          <Link
            href="/"
            className="text-[#121216] text-[1.11rem] font-medium leading-[1.3] underline"
          >
            Log In
          </Link>
        </div>
      </form>
    </Form>
  );
}
