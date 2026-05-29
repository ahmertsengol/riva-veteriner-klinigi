import type { Metadata } from "next";
import { absoluteUrl, business, localeRoutes } from "@/lib/business";
import type { Locale } from "@/lib/translations";

const seoCopy = {
  tr: {
    title:
      "Riva Veteriner Kliniği | Marmaris Veteriner, Yol Tarifi ve Randevu",
    description:
      "Marmaris merkezde Riva Veteriner Kliniği. Muayene, aşı, cerrahi ve acil veteriner desteği için arayın, WhatsApp'tan yazın veya yol tarifi alın.",
    locale: "tr_TR",
  },
  en: {
    title: "Riva Veterinary Clinic | Veterinarian in Marmaris",
    description:
      "Riva Veterinary Clinic in central Marmaris. Call, message on WhatsApp, or get directions for examinations, vaccinations, surgery, and urgent veterinary care.",
    locale: "en_US",
  },
} as const;

const keywords = [
  "Marmaris veteriner",
  "Muğla veteriner kliniği",
  "Marmaris veteriner kliniği",
  "Riva Veteriner Kliniği",
  "Marmaris acil veteriner",
  "Marmaris pet kliniği",
  "veteriner Marmaris",
  "Marmaris veterinary clinic",
];

export function routeUrl(locale: Locale) {
  return absoluteUrl(localeRoutes[locale]);
}

export function buildMetadata(locale: Locale): Metadata {
  const copy = seoCopy[locale];
  const alternateLocale = locale === "tr" ? "en_US" : "tr_TR";

  return {
    metadataBase: new URL(business.siteUrl),
    title: copy.title,
    description: copy.description,
    keywords,
    authors: [{ name: business.name }],
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: routeUrl(locale),
      siteName: business.name,
      locale: copy.locale,
      alternateLocale,
      type: "website",
      images: [
        {
          url: business.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${business.name} - ${business.location}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [business.ogImagePath],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: routeUrl(locale),
      languages: {
        tr: routeUrl("tr"),
        en: routeUrl("en"),
      },
    },
  };
}

export function buildStructuredData(locale: Locale) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: business.name,
    alternateName: business.englishName,
    description: seoCopy[locale].description,
    url: routeUrl(locale),
    telephone: business.phoneDisplay.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      postalCode: business.postalCode,
      addressRegion: business.addressRegion,
      addressCountry: business.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "13:00",
        closes: "19:00",
      },
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "General Examination" },
      { "@type": "MedicalProcedure", name: "Vaccination" },
      { "@type": "MedicalProcedure", name: "Surgery" },
      { "@type": "MedicalProcedure", name: "Emergency Care" },
      { "@type": "MedicalProcedure", name: "Laboratory" },
      { "@type": "MedicalProcedure", name: "Ultrasound / Imaging" },
    ],
    priceRange: "$$",
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "City",
      name: "Marmaris",
    },
    sameAs: [business.instagramUrl],
    image: absoluteUrl(business.ogImagePath),
  });
}
