"use server";

import postDataAuth from "@/fetch/postDataAuth";
type Payload = {
  api: string;
  body: any;
};

export const updateDataAuth = async (payload: Payload) => {
  try {
    const res = await postDataAuth(payload);
    const plainObject = JSON.parse(JSON.stringify(res));
    return plainObject;
  } catch (error) {
    const plainError = JSON.parse(JSON.stringify(error));
    return plainError;
  }
};
