import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import { buildStructuredData } from "@/lib/seo";
import type { Locale } from "@/lib/translations";

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

export default function RootDocument({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: Locale;
}>) {
  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-20 lg:pb-0">
        <Script
          id={`structured-data-${locale}`}
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {buildStructuredData(locale)}
        </Script>
        {children}
      </body>
    </html>
  );
}
