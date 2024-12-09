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
import { Input } from "@/components/ui/input";
import Image from "next/image";
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
export default function PublicPortfolio() {
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
    <div className="p-[1.66667rem] rounded-[1.11111rem] border-[1px] border-solid border-[#E9EAEC] bg-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col-reverse"
        >
          <div className="mt-[1.38889rem]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-[1.67rem] flex items-center space-x-[4.44rem]">
                  <FormLabel className="w-[18.75rem] text-[#121216] text-[1.11111rem] font-medium leading-[1.3]">
                    Site title
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-0 text-[1.11111rem] leading-[1.35] placeholder:text-[#2C2C31] text-[#2C2C31] border-[1px] border-solid border-[#DEDEDF] rounden-[0.27778rem] h-[3.33333rem] p-[0.83333rem_1.11111rem] flex-1 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                      placeholder="My portfolio website"
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
                <FormItem className="mb-[1.67rem] flex items-center space-x-[4.44rem]">
                  <FormLabel className="w-[18.75rem] text-[#121216] text-[1.11111rem] font-medium leading-[1.3]">
                    <p className="text-[#121216] text-[1.11111rem] font-medium leading-[1.3]">
                      Site title
                    </p>
                    <p className="text-[#85868A] text-[0.97222rem] font-medium leading-[1.35]">
                      Unpublish your portfolio from all domains.
                    </p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-0 text-[1.11111rem] leading-[1.35] placeholder:text-[#2C2C31] text-[#2C2C31] border-[1px] border-solid border-[#DEDEDF] rounden-[0.27778rem] h-[3.33333rem] p-[0.83333rem_1.11111rem] flex-1 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                      placeholder="My portfolio website"
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
            <div className="flex items-start space-x-[4.44rem]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <>
                    <FormItem className="mb-[1.67rem] py-[2.22222rem] w-[18.75rem] space-y-[1.11rem] relative">
                      <FormLabel className="space-y-[1.11rem] w-[18.75rem] text-[#121216] text-[1.11111rem] font-medium leading-[1.3]">
                        <div className="space-y-[0.28rem]">
                          <p className="text-[#121216] text-[1.11111rem] font-medium leading-[1.3]">
                            Image preview
                          </p>
                          <p className="text-[#85868A] text-[0.97222rem] leading-[1.35]">
                            1200px x 630px
                          </p>
                        </div>
                        <div className="h-[2.77778rem] w-fit p-[0.83333rem_1.11111rem] rounded-[0.41667rem] border-[1px] border-solid border-[#D4D4D4] shadow-[0px_4px_10px_0px_rgba(91,91,91,0.04)]">
                          Upload new image
                        </div>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          className="absolute z-10 bottom-0 left-0 opacity-0 mt-0 text-[1.11111rem] leading-[1.35] placeholder:text-[#2C2C31] text-[#2C2C31] border-[1px] border-solid border-[#DEDEDF] rounden-[0.27778rem] h-[2.77778rem] w-[11.27778rem] p-[0.83333rem_1.11111rem] flex-1 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
                          placeholder="Upload new image"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              field.onChange(file); // Cập nhật giá trị field
                              const fileUrl = URL.createObjectURL(file);
                              setPreviewUrl(fileUrl); // Lưu URL ảnh vào state
                            }
                          }}
                          // {...field}
                        />
                      </FormControl>
                      <FormMessage
                        showErrorIcon={true}
                        className="text-[#CD3645] text-[0.97222rem] leading-[1.35] flex [&>svg]:mr-[0.56rem]"
                      />
                    </FormItem>
                    {previewUrl && (
                      <div className="flex-1 h-[22.01389rem] relative rounded-[0.55556rem]">
                        <Image
                          className="size-full rounded-[0.55556rem] object-cover"
                          alt=""
                          src={previewUrl}
                          width={800}
                          height={600}
                        />
                        <div
                          onClick={() => {
                            setPreviewUrl(null);
                            field.onChange(null);
                          }}
                          className="absolute cursor-pointer flex items-center justify-center bg-[#FAFAFA] top-[0.56rem] right-[0.56rem] size-[2.22222rem] rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="size-[1.11111rem]"
                          >
                            <path
                              d="M12 4L4 12M4 4L12 12"
                              stroke="#262626"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex items-center space-x-[4.44rem] mt-[1.39rem]">
              <div className="space-y-[0.28rem]">
                <p className="text-[#121216] text-[1.11111rem] font-medium leading-[1.3]">
                  Unpublish
                </p>
                <p className="text-[#85868A] text-[0.97222rem] leading-[1.35]">
                  Unpublish your portfolio from all domains.
                </p>
              </div>
              <div className="flex items-center justify-center text-white text-[0.97222rem] font-medium leading-[1.3] w-[8.88889rem] h-[2.77778rem] p-[0.83333rem_1.11111rem] rounded-[0.27778rem] bg-[#DC3126]">
                Unpublish
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#000] text-[1.38889rem] font-medium leading-[1.3]">
              Public Portfolio
            </p>
            <Button
              className="hover:border-solid hover:border-black w-fit p-[0.55556rem_1.38889rem] rounded-[0.41667rem] bg-[#E1E1E1] shadow-[0px_4px_10px_0px_rgba(91,91,91,0.04)] transition-all"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
