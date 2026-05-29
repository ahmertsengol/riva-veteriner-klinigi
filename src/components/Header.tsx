"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "905059563667";

const navLinks = [
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#clinic", key: "clinic" as const },
  { href: "#faq", key: "faq" as const },
  { href: "#contact", key: "contact" as const },
];

export default function Header() {
  const { locale, t, toggleLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl shadow-lg shadow-dark/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-light to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg font-display">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display font-semibold text-lg leading-tight tracking-wide">
              Riva
            </span>
            <span className="text-primary-lighter text-[10px] uppercase tracking-[0.2em] leading-tight">
              Veteriner Kliniği
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-text-light/70 hover:text-primary-lighter transition-colors duration-300 tracking-wide"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="relative flex items-center bg-white/[0.06] rounded-full p-0.5 border border-white/10"
            aria-label="Toggle language"
          >
            <span
              className={`relative z-10 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                locale === "tr"
                  ? "text-dark bg-primary-light"
                  : "text-text-light/60"
              }`}
            >
              TR
            </span>
            <span
              className={`relative z-10 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                locale === "en"
                  ? "text-dark bg-primary-light"
                  : "text-text-light/60"
              }`}
            >
              EN
            </span>
          </button>

          {/* CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4" />
            {t.nav.appointment}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-xs font-bold text-primary-lighter bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full"
          >
            {locale === "tr" ? "EN" : "TR"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark/98 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-light/80 hover:text-primary-lighter py-3 text-base border-b border-white/5 transition-colors"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3.5 rounded-full text-base font-semibold"
              >
                <Phone className="w-5 h-5" />
                {t.nav.appointment}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
