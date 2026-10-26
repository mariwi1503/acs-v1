import type { MetadataRoute } from "next";
import { company } from "@/app/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: company.url, lastModified: "2026-10-26", changeFrequency: "monthly", priority: 1 }];
}
