"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { business } from "@/lib/business";

export default function AppointmentForm() {
  const { t, locale } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    petType: "",
    subject: "",
    date: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const buildWhatsAppMessage = () => {
    const lines = [
      locale === "tr"
        ? "Merhaba Riva Veteriner Kliniği, randevu almak istiyorum."
        : "Hello Riva Veterinary Clinic, I would like to book an appointment.",
      "",
      `${t.appointment.name}: ${form.name}`,
      `${t.appointment.phone}: ${form.phone}`,
      form.email ? `${t.appointment.email}: ${form.email}` : "",
      `${t.appointment.petType}: ${form.petType}`,
      `${t.appointment.subject}: ${form.subject}`,
      `${t.appointment.date}: ${form.date}`,
      form.message ? `${t.appointment.message}: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return encodeURIComponent(lines);
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${business.whatsappNumber}?text=${buildWhatsAppMessage()}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(
      locale === "tr"
        ? `Randevu Talebi - ${form.name}`
        : `Appointment Request - ${form.name}`
    );
    const body = buildWhatsAppMessage();
    window.open(`mailto:${business.email}?subject=${subject}&body=${body}`);
  };

  const inputClass =
    "w-full bg-dark-card/60 border border-dark-border text-white rounded-xl px-4 py-3.5 text-sm placeholder:text-text-muted/50 transition-all duration-300";
  const labelClass = "block text-text-light/70 text-sm font-medium mb-2";

  return (
    <section
      id="appointment"
      className="relative py-16 lg:py-24 bg-dark overflow-hidden"
    >
      {/* Background flatlay image */}
      <div className="absolute inset-0">
        <Image
          src="/images/flatlay.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-dark/80" />
      <div className="absolute inset-0 hero-gradient opacity-40" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Flatlay decorative image (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block lg:col-span-2"
          >
            <div className="sticky top-32 space-y-6">
              <motion.div
                whileInView={{ rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/5"
              >
                <Image
                  src="/images/flatlay.jpg"
                  alt="Veteriner kliniği ekipmanları"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </motion.div>

              {/* Small puppy image below */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-lg border border-white/5 ml-8"
              >
                <Image
                  src="/images/puppy-vaccine.jpg"
                  alt="Evcil hayvan bakımı"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left mb-10"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t.appointment.title}
              </h2>
              <p className="text-text-light/50 text-lg max-w-xl">
                {t.appointment.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2 lg:col-span-1">
                  <label className={labelClass}>{t.appointment.name} *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder={t.appointment.namePlaceholder}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.appointment.phone} *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder={t.appointment.phonePlaceholder}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.appointment.email}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder={t.appointment.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.appointment.petType} *</label>
                  <select
                    value={form.petType}
                    onChange={(e) => update("petType", e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="" disabled>—</option>
                    {t.appointment.petTypes.map((pt) => (
                      <option key={pt} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t.appointment.subject} *</label>
                  <select
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={inputClass}
                    required
                  >
                    <option value="" disabled>—</option>
                    {t.appointment.subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>{t.appointment.date}</label>
                  <input
                    type="datetime-local"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>{t.appointment.message}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder={t.appointment.messagePlaceholder}
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  disabled={!form.name || !form.phone || !form.petType || !form.subject}
                  className="flex-1 flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.appointment.send}
                </button>
                <button
                  onClick={handleEmail}
                  disabled={!form.name || !form.phone || !form.petType || !form.subject}
                  className="flex items-center justify-center gap-2.5 bg-white/[0.06] border border-white/10 text-white px-6 py-4 rounded-full text-base font-semibold hover:bg-white/[0.1] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Mail className="w-5 h-5" />
                  {t.appointment.sendEmail}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
