"use client";

import * as Yup from "yup";

export const DetailProject = Yup.object({
  thumbnail: Yup.object({
    value: Yup.string().required(), // Thumbnail là URL
    type: Yup.string(),
  }),
});
