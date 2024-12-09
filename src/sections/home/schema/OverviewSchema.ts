"use client";

import * as Yup from "yup";

export const OverviewSchema = Yup.object()
  .shape({
    // your schema definitions here
  })
  .default({}); // add this line to ensure an empty object is returned
