"use server";

import { signIn } from "@/auth";

type Values = {
  email: string;
  password: string;
  redirectTo?: string;
};

export const loginForm = async (values: Values) => {
  try {
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      redirectTo: values.redirectTo,
    });

    // Chuyển kết quả thành "plain object"
    const plainObject = JSON.parse(JSON.stringify(res));

    return plainObject; // Trả về một "plain object"
  } catch (error) {
    // Đảm bảo lỗi cũng là "plain object"
    const plainError = JSON.parse(JSON.stringify(error));
    return plainError;
  }
};
