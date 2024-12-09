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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  pass: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  check: z.boolean().default(false).optional(),
});
export default function PopupForm() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full bg-white">
        <div className="py-[1.38889rem] space-y-[1.11rem]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                  <p className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                    Fullname
                  </p>
                </FormLabel>
                <FormControl>
                  <Input
                    className="mt-[0.56rem] text-[1.11111rem] leading-[1.35] placeholder:text-[#2C2C31] text-[#2C2C31] border-[1px] border-solid border-[#DEDEDF] rounden-[0.27778rem] h-[3.33333rem] p-[0.83333rem_1.11111rem] flex-1 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                    placeholder="Tracy Dinh"
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
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                  <p className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                    Fullname
                  </p>
                </FormLabel>
                <FormControl>
                  <Input
                    className="mt-[0.56rem] text-[1.11111rem] leading-[1.35] placeholder:text-[#2C2C31] text-[#2C2C31] border-[1px] border-solid border-[#DEDEDF] rounden-[0.27778rem] h-[3.33333rem] p-[0.83333rem_1.11111rem] flex-1 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                    placeholder="Tracy Dinh"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                  Address
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="[&_span]:text-[#2C2C31] [&_span]:text-[1.11111rem] [&_span]:font-medium [&_span]:leading-[1.3] border-[1px] border-solid border-[#DEDEDF] rounden-[0.27778rem] h-[3.33333rem] p-[0.83333rem_1.11111rem]">
                      <SelectValue placeholder="Select a verified Address to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                  <p className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                    Fullname
                  </p>
                </FormLabel>
                <FormControl>
                  <Textarea
                    currentData={""}
                    currentKey={""}
                    setForm={function (value: any): void {
                      throw new Error("Function not implemented.");
                    }}
                    form={undefined}
                    className=" resize-none mt-[0.56rem] text-[1.11111rem] leading-[1.35] placeholder:text-[#2C2C31] text-[#2C2C31] border-[1px] border-solid border-[#DEDEDF] rounden-[0.27778rem] h-[3.33333rem] p-[0.83333rem_1.11111rem] flex-1 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                    placeholder="Tracy Dinh"
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
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                  <p className="text-[#2C2C31] text-[1.11111rem] font-medium leading-[1.3]">
                    Fullname
                  </p>
                </FormLabel>
                <FormControl>
                  <>
                    <div className="flex items-center justify-center border-[1px] border-solid border-[#DEDEDF] rounden-[0.27778rem] h-[3.33333rem] p-[0.83333rem_1.11111rem] flex-1">
                      {new Array(2).fill(0).map((e, index) => (
                        <div
                          key={index}
                          className="mr-[0.56rem] h-[1.66667rem] p-[0.13889rem_0.27778rem] rounded-[0.41667rem] bg-[#F0F0F0] flex items-center"
                        >
                          <p className="mr-[0.56rem] text-[#262626] text-[0.97222rem] leading-[1.3]">
                            Web Designer
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            className="cursor-pointer size-[0.83333rem]"
                          >
                            <path
                              d="M8.5 3.5L3.5 8.5M3.5 3.5L8.5 8.5"
                              stroke="#737373"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ))}

                      <Input
                        className="p-0 text-[1.11111rem] border-none leading-[1.35] placeholder:text-[#2C2C31] text-[#2C2C31] flex-1 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                        placeholder="Tracy Dinh"
                        {...field}
                      />
                    </div>
                    <span className="text-[#7A7A7A] text-[0.97222rem] leading-[1.2]">
                      Type keyword and press ENTER to add a new.
                    </span>
                  </>
                </FormControl>
                <FormMessage
                  showErrorIcon={true}
                  className="text-[#CD3645] text-[0.97222rem] leading-[1.35] flex [&>svg]:mr-[0.56rem]"
                />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-end">
          <Button
            className="hover:border-solid hover:text-[#171717] text-white text-[0.97222rem] font-medium leading-[1.3] hover:border-[#E1E1E1] w-fit p-[0.83333rem_1.11111rem] rounded-[0.41667rem] bg-[#171717] shadow-[0px_4px_10px_0px_rgba(91,91,91,0.04)] transition-all"
            type="submit"
          >
            Save change
          </Button>
        </div>
      </form>
    </Form>
  );
}
