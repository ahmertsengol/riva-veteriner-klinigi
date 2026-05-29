import type { Metadata } from "next";
import RootDocument from "@/app/RootDocument";
import { buildMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = buildMetadata("en");

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
