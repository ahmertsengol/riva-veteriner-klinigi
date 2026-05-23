"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import MapContact from "@/components/MapContact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <section id="clinic">
          <About />
        </section>
        <Services />
        <AppointmentForm />
        <FAQ />
        <MapContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
