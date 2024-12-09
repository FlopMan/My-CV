"use server";

import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const logoutForm = async () => {
  // await signOut();
  await signOut({
    redirectTo: "/login",
    redirect: true,
  });
  revalidatePath("/login");
};
