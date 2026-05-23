"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Syringe,
  Scissors,
  AlertTriangle,
  FlaskConical,
  ScanLine,
  Apple,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  Stethoscope,
  Syringe,
  Scissors,
  AlertTriangle,
  FlaskConical,
  ScanLine,
  Apple,
  ShieldCheck,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-32 bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {t.services.title}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="service-card group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-lighter/40"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-light transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
