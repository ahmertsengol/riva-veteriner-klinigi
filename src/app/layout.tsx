import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rivaveteriner.com"),
  title: "Riva Veteriner Kliniği | Marmaris Veteriner - Modern Veteriner Hizmeti",
  description:
    "Marmaris'te güvenilir ve modern veteriner kliniği. Genel muayene, aşılama, cerrahi, acil veteriner hizmeti. Riva Veteriner Kliniği - Marmaris, Muğla.",
  keywords: [
    "Marmaris veteriner",
    "Muğla veteriner kliniği",
    "Marmaris veteriner kliniği",
    "Riva Veteriner Kliniği",
    "Marmaris acil veteriner",
    "Marmaris pet kliniği",
    "veteriner Marmaris",
    "Marmaris veterinary clinic",
  ],
  authors: [{ name: "Riva Veteriner Kliniği" }],
  openGraph: {
    title: "Riva Veteriner Kliniği | Marmaris Veteriner",
    description:
      "Marmaris'te dostlarınız için güvenilir ve modern veteriner hizmeti. Genel muayene, aşılama, cerrahi ve acil veteriner.",
    url: "https://rivaveteriner.com",
    siteName: "Riva Veteriner Kliniği",
    locale: "tr_TR",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Riva Veteriner Kliniği - Marmaris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riva Veteriner Kliniği | Marmaris Veteriner",
    description:
      "Marmaris'te güvenilir ve modern veteriner hizmeti.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rivaveteriner.com",
  },
};

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Riva Veteriner Kliniği",
  alternateName: "Riva Veterinary Clinic",
  description:
    "Marmaris'te güvenilir ve modern veteriner kliniği. Genel muayene, aşılama, cerrahi, acil veteriner hizmeti.",
  url: "https://rivaveteriner.com",
  telephone: "+90XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marmaris",
    addressRegion: "Muğla",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.8507",
    longitude: "28.2741",
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
  sameAs: ["https://www.instagram.com/rivaveteriner"],
  image: "https://rivaveteriner.com/og-image.jpg",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {structuredData}
        </Script>
        <meta name="theme-color" content="#0D9488" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
