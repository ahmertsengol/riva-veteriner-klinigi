"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapContact from "@/components/MapContact";
import About from "@/components/About";
import Services from "@/components/Services";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import BottomActionBar from "@/components/BottomActionBar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Locale } from "@/lib/translations";

export default function SitePage({ locale }: { locale: Locale }) {
  return (
    <LanguageProvider initialLocale={locale}>
      <Header />
      <main>
        <Hero />
        <MapContact />
        <About />
        <Services />
        <AppointmentForm />
        <FAQ />
      </main>
      <Footer />
      <BottomActionBar />
    </LanguageProvider>
  );
}
