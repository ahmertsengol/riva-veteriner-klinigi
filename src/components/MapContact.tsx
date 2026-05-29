"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Globe,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "905059563667";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Riva+Veteriner+Kliniği&destination_place_id=ChIJsShURU-9vxQRDT8SgliSIEQ";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.658922182621!2d28.2586733!3d36.8506439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfbd4f494428b1%3A0x4420925883123f0d!2sRiva%20Veteriner%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1780085858065!5m2!1str!2str";
const INSTAGRAM_URL = "https://www.instagram.com/riva.veterinerklinigi";

export default function MapContact() {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: t.contact.phoneValue,
      href: "tel:+905059563667",
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: t.contact.hoursValue,
      sub: t.contact.hoursSunday,
    },
    {
      icon: Globe,
      label: t.contact.instagram,
      value: "@riva.veterinerklinigi",
      href: INSTAGRAM_URL,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {t.contact.title}
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riva Veteriner Kliniği - Marmaris"
            />
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-dark rounded-2xl p-8 h-full flex flex-col">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold font-display">R</span>
                </div>
                <div>
                  <h3 className="text-white font-display font-semibold">
                    Riva Veteriner
                  </h3>
                  <p className="text-text-muted text-xs">Marmaris, Muğla</p>
                </div>
              </div>

              {/* Contact Items */}
              <div className="space-y-6 flex-1">
                {contactItems.map((item, i) => {
                  const content = (
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                        <item.icon className="w-4.5 h-4.5 text-primary-light" />
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-medium">
                          {item.value}
                        </p>
                        {"sub" in item && item.sub && (
                          <p className="text-text-muted text-xs mt-0.5">
                            {item.sub}
                          </p>
                        )}
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-primary-light text-white px-5 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  {t.contact.directionsBtn}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white/[0.06] border border-white/10 text-white px-5 py-3.5 rounded-full text-sm font-semibold hover:bg-white/[0.1] transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-secondary" />
                  {t.contact.whatsappBtn}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
