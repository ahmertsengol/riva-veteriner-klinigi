import type { MetadataRoute } from "next";
import { absoluteUrl, business } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: business.siteUrl,
  };
}
