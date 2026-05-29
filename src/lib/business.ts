export const localeRoutes = {
  tr: "/",
  en: "/en",
} as const;

export const business = {
  siteUrl: "https://riva-veteriner-klinigi.vercel.app",
  name: "Riva Veteriner Kliniği",
  englishName: "Riva Veterinary Clinic",
  shortName: "Riva Veteriner",
  location: "Marmaris, Muğla",
  phoneDisplay: "+90 505 956 36 67",
  phoneHref: "tel:+905059563667",
  whatsappNumber: "905059563667",
  email: "info.rivaveteriner@gmail.com",
  address: "Çıldır Mah. 153. Sk. No:20/A, 48700 Marmaris/Muğla",
  streetAddress: "Çıldır Mah. 153. Sk. No:20/A",
  postalCode: "48700",
  addressLocality: "Marmaris",
  addressRegion: "Muğla",
  addressCountry: "TR",
  latitude: 36.8506439,
  longitude: 28.2586733,
  instagramUrl: "https://www.instagram.com/riva.veterinerklinigi",
  instagramHandle: "@riva.veterinerklinigi",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=36.8506439,28.2586733&travelmode=driving",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.658922182621!2d28.2586733!3d36.8506439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfbd4f494428b1%3A0x4420925883123f0d!2sRiva%20Veteriner%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1780085858065!5m2!1str!2str",
  ogImagePath: "/og-image.jpg",
  weekdayHours: "09:00 - 19:00",
  sundayHours: "13:00 - 19:00",
} as const;

export const whatsappUrl = `https://wa.me/${business.whatsappNumber}`;

export function absoluteUrl(path = "") {
  if (!path) return business.siteUrl;
  return new URL(path, business.siteUrl).toString();
}
