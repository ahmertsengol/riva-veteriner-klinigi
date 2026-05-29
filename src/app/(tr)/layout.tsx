import type { Metadata } from "next";
import RootDocument from "@/app/RootDocument";
import { buildMetadata } from "@/lib/seo";
import "../globals.css";

export const metadata: Metadata = buildMetadata("tr");

export default function TurkishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument locale="tr">{children}</RootDocument>;
}
