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

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  pass: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  check: z.boolean().default(false).optional(),
});

export function FormLogin() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      pass: "",
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
            <FormItem>
              <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.35] font-roboto">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  className="focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 !mt-[0.56rem] bg-white placeholder:text-[#85868A] !leading-[1.35] !text-[1.11111rem] text-[#2C2C31] h-[3.33333rem] p-[0.83333rem_1.11111rem] rounded-[0.27778rem] border-[1px] border-solid border-[#DEDEDF]"
                  placeholder="Enter your password"
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
        <div className="flex w-full justify-between items-center !mt-[1.67rem]">
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
                    Keep me logged in
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Link
            href="/"
            className="text-[#121216] text-[1.11111rem] leading-[1.3] font-medium font-roboto underline"
          >
            Forgot Password
          </Link>
        </div>
        <Button
          className="mb-[2.22rem] transition-all hover:text-[#121216] hover:bg-white hover:border-[1px] border-none hover:border-solid border-[#121216] p-[1.11111rem_7.77778rem] text-white text-[1.11111rem] font-semibold leading-[1.3] mt-[2.22rem] w-full bg-[#121216] rounded-[0.41667rem] shadow-[0px_4px_10px_0px_rgba(91,91,91,0.04)]"
          type="submit"
        >
          Log In
        </Button>
        <div className="flex items-center w-full justify-center">
          <p className="text-[#565657] text-[1.111rem] leading-[1.35] font-roboto mr-[0.56rem]">
            Need an account?
          </p>
          <Link
            href="/"
            className="text-[#121216] text-[1.11rem] font-medium leading-[1.3] underline"
          >
            Sign up here
          </Link>
        </div>
      </form>
    </Form>
  );
}
