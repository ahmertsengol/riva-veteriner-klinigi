"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { business, whatsappUrl } from "@/lib/business";

export default function BottomActionBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-dark/95 px-3 py-2 shadow-2xl shadow-dark/30 backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={business.phoneHref}
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl bg-white text-dark text-xs font-semibold"
        >
          <Phone className="h-4 w-4 text-primary" />
          {t.contact.callBtn}
        </a>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white text-xs font-semibold"
        >
          <MapPin className="h-4 w-4" />
          {t.hero.directions}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl bg-white/[0.08] text-white text-xs font-semibold"
        >
          <MessageCircle className="h-4 w-4 text-secondary" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
