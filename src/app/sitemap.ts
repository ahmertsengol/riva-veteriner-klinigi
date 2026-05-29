import type { MetadataRoute } from "next";
import { absoluteUrl, business, localeRoutes } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    tr: absoluteUrl(localeRoutes.tr),
    en: absoluteUrl(localeRoutes.en),
  };

  return [
    {
      url: languages.tr,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(business.ogImagePath)],
      alternates: {
        languages,
      },
    },
    {
      url: languages.en,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      images: [absoluteUrl(business.ogImagePath)],
      alternates: {
        languages,
      },
    },
  ];
}
