import { createClient } from "next-sanity";


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: "production",
  apiVersion:"2022-03-07",
  useCdn: false,
});