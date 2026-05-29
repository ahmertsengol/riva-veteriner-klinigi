"use client";

import { MapPin, Phone, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { business } from "@/lib/business";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">
                  R
                </span>
              </div>
              <div>
                <span className="text-white font-display font-semibold text-lg">
                  Riva
                </span>
                <br />
                <span className="text-primary-lighter text-[10px] uppercase tracking-[0.2em]">
                  Veteriner Kliniği
                </span>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted text-sm hover:text-primary-lighter transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                <span className="text-text-muted text-sm">
                  {business.phoneDisplay}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                <span className="text-text-muted text-sm">
                  {business.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm hover:text-primary-lighter transition-colors"
                >
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Language Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              TR / EN
            </h4>
            <p className="text-text-muted text-sm leading-relaxed">
              {t.footer.langSupport}
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {year} Riva Veteriner Kliniği. {t.footer.rights}
          </p>
          <p className="text-text-muted/50 text-xs">Marmaris, Muğla</p>
        </div>
      </div>
    </footer>
  );
}
