"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { business, whatsappUrl } from "@/lib/business";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[88svh] lg:min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-dog.jpg"
          alt="Riva Veteriner Kliniği"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/80 to-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/40" />

      {/* Gradient accents over image */}
      <div className="absolute inset-0 hero-gradient opacity-60" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-text-light/70 text-xs tracking-wider uppercase">
                {business.location}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              {t.hero.title.split(" ").map((word, i) =>
                i === 0 ? (
                  <span key={i} className="gradient-text">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-light/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary-light text-white px-7 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t.hero.directions}
              </a>
              <a
                href={business.phoneHref}
                className="group flex items-center justify-center gap-2.5 bg-white text-dark px-7 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-white/15 transition-all duration-300 hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                {t.hero.call}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 bg-white/[0.08] border border-white/10 text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-white/[0.14] backdrop-blur-sm transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                {t.hero.whatsapp}
              </a>
            </motion.div>
          </div>

          {/* Right — Floating Image Cards (desktop only) */}
          <div className="hidden lg:flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Main card */}
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <Image
                  src="/images/cat-exam.jpg"
                  alt="Veteriner muayene"
                  fill
                  className="object-cover"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>

              {/* Secondary floating card */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                style={{ animation: "float 6s ease-in-out infinite" }}
                className="absolute -bottom-8 -left-20 w-40 h-48 rounded-xl overflow-hidden shadow-xl shadow-black/20 border border-white/10"
              >
                <Image
                  src="/images/puppy-vaccine.jpg"
                  alt="Yavru köpek bakımı"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent" />
    </section>
  );
}
