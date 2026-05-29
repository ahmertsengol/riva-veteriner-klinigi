export type Locale = "tr" | "en";

export const translations = {
  tr: {
    nav: {
      about: "Hakkımızda",
      services: "Hizmetler",
      clinic: "Kliniğimiz",
      faq: "SSS",
      contact: "İletişim",
      appointment: "Randevu Al",
    },
    hero: {
      title: "Riva Veteriner Kliniği",
      subtitle:
        "Marmaris merkezde veteriner hizmeti. Arayın, WhatsApp'tan yazın veya hemen yol tarifi alın.",
      cta: "Randevu Al",
      call: "Hemen Ara",
      whatsapp: "WhatsApp'tan Yaz",
      directions: "Yol Tarifi Al",
    },
    services: {
      title: "Hizmetlerimiz",
      subtitle:
        "Evcil dostlarınız için kapsamlı ve profesyonel veteriner hizmetleri sunuyoruz.",
      items: [
        {
          title: "Genel Muayene",
          desc: "Detaylı fiziksel muayene ve sağlık değerlendirmesi ile evcil hayvanınızın genel durumunu takip ediyoruz.",
        },
        {
          title: "Aşılama",
          desc: "Düzenli aşı takvimine uygun koruyucu aşılama programları ile hastalıklardan korunma.",
        },
        {
          title: "Cerrahi Müdahale",
          desc: "Modern ekipmanlarla güvenli cerrahi operasyonlar ve kısırlaştırma işlemleri.",
        },
        {
          title: "Acil Durumlar",
          desc: "Acil veteriner müdahalesi gerektiren durumlarda hızlı ve etkili tedavi.",
        },
        {
          title: "Laboratuvar",
          desc: "Kan tahlili, idrar analizi ve diğer laboratuvar testleri ile doğru teşhis.",
        },
        {
          title: "Ultrason / Görüntüleme",
          desc: "Gelişmiş ultrason ve görüntüleme teknolojileri ile iç organ değerlendirmesi.",
        },
        {
          title: "Pet Beslenme Danışmanlığı",
          desc: "Evcil hayvanınızın yaşına ve türüne uygun beslenme programları ve diyet önerileri.",
        },
        {
          title: "Koruyucu Hekimlik",
          desc: "Düzenli kontroller ve önleyici tedbirlerle evcil hayvanınızın sağlığını koruma altına alıyoruz.",
        },
      ],
      moreTitle: "Diğer hizmetler",
    },
    about: {
      title: "Kliniğimiz Hakkında",
      subtitle: "Modern, hijyenik ve güvenilir veteriner hizmeti",
      p1: "Riva Veteriner Kliniği, Marmaris'in kalbinde modern ekipmanları ve deneyimli kadrosuyla evcil dostlarınıza en iyi veteriner hizmetini sunmak amacıyla hizmet vermektedir.",
      p2: "Kliniğimizde hijyen, profesyonellik ve hayvan refahı en öncelikli değerlerimizdir. Her hastamıza bireysel ilgi gösteriyor, sahiplerine şeffaf ve anlaşılır bilgi sunuyoruz.",
      p3: "Amacımız, evcil hayvanınızın sağlığını korumak ve yaşam kalitesini artırmak için güvenilir bir partner olmaktır.",
      features: [
        "Modern ve steril klinik ortamı",
        "Deneyimli veteriner hekim kadrosu",
        "Güncel tanı ve tedavi yöntemleri",
        "Hayvan refahı odaklı yaklaşım",
      ],
    },
    appointment: {
      title: "Randevu Al",
      subtitle:
        "Formu doldurun, WhatsApp üzerinden size en kısa sürede dönüş yapalım.",
      name: "Ad Soyad",
      phone: "Telefon",
      email: "E-posta (opsiyonel)",
      petType: "Evcil Hayvan Türü",
      petTypes: ["Köpek", "Kedi", "Kuş", "Diğer"],
      subject: "Konu",
      subjects: [
        "Genel Muayene",
        "Aşılama",
        "Acil Durum",
        "Cerrahi",
        "Danışma",
        "Diğer",
      ],
      date: "Tercih Edilen Tarih/Saat",
      message: "Mesajınız",
      send: "WhatsApp'tan Gönder",
      sendEmail: "E-posta ile Gönder",
      namePlaceholder: "Adınız ve soyadınız",
      phonePlaceholder: "+90 5XX XXX XX XX",
      emailPlaceholder: "ornek@email.com",
      messagePlaceholder: "Eklemek istediğiniz bilgiler...",
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      subtitle: "Merak ettiğiniz soruların yanıtları",
      items: [
        {
          q: "Randevu almadan gelebilir miyim?",
          a: "Evet, randevusuz da gelebilirsiniz. Ancak randevulu hastalarımıza öncelik veriyoruz. Bekleme süresini en aza indirmek için WhatsApp üzerinden randevu almanızı öneriyoruz.",
        },
        {
          q: "Acil durumlarda ulaşabilir miyim?",
          a: "Acil durumlar için bizi telefonla arayabilir veya WhatsApp üzerinden ulaşabilirsiniz. Çalışma saatlerimiz içinde acil vakalara öncelik veriyoruz.",
        },
        {
          q: "Aşı takibi yapılıyor mu?",
          a: "Evet, evcil hayvanınızın aşı takvimini düzenli olarak takip ediyor ve hatırlatma yapıyoruz. İlk muayenede detaylı bir aşı planı oluşturuyoruz.",
        },
        {
          q: "Yabancı müşterilere İngilizce destek var mı?",
          a: "Evet, kliniğimizde İngilizce iletişim desteği sunuyoruz. Marmaris'te yaşayan veya tatil yapan yabancı misafirlerimize de hizmet vermekteyiz.",
        },
        {
          q: "Konumunuza nasıl ulaşırım?",
          a: "Marmaris merkezde yer alan kliniğimize Google Maps üzerinden kolayca yol tarifi alabilirsiniz. Detaylı konum bilgisi için iletişim bölümümüzü inceleyebilirsiniz.",
        },
      ],
    },
    contact: {
      title: "İletişim",
      subtitle: "Bize ulaşmak için aşağıdaki bilgileri kullanabilirsiniz.",
      address: "Adres",
      addressValue: "Çıldır Mah. 153. Sk. No:20/A, 48700 Marmaris/Muğla",
      phone: "Telefon",
      phoneValue: "+90 505 956 36 67",
      hours: "Çalışma Saatleri",
      hoursValue: "Pazartesi - Cumartesi: 09:00 - 19:00",
      hoursSunday: "Pazar: 13:00 - 19:00",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      callBtn: "Ara",
      directionsBtn: "Yol Tarifi Al",
      whatsappBtn: "WhatsApp ile Ulaş",
    },
    footer: {
      desc: "Marmaris'te evcil dostlarınız için güvenilir, modern ve profesyonel veteriner hizmeti.",
      rights: "Tüm hakları saklıdır.",
      quickLinks: "Hızlı Bağlantılar",
      contactInfo: "İletişim Bilgileri",
      langSupport: "Türkçe ve İngilizce hizmet vermekteyiz.",
    },
  },
  en: {
    nav: {
      about: "About Us",
      services: "Services",
      clinic: "Our Clinic",
      faq: "FAQ",
      contact: "Contact",
      appointment: "Book Now",
    },
    hero: {
      title: "Riva Veterinary Clinic",
      subtitle:
        "Veterinary care in central Marmaris. Call, message us, or get directions now.",
      cta: "Book Appointment",
      call: "Call Now",
      whatsapp: "Message on WhatsApp",
      directions: "Get Directions",
    },
    services: {
      title: "Our Services",
      subtitle:
        "We offer comprehensive and professional veterinary services for your beloved pets.",
      items: [
        {
          title: "General Examination",
          desc: "Thorough physical examination and health assessment to monitor your pet's overall condition.",
        },
        {
          title: "Vaccination",
          desc: "Preventive vaccination programs following regular schedules to protect against diseases.",
        },
        {
          title: "Surgical Procedures",
          desc: "Safe surgical operations and sterilization procedures with modern equipment.",
        },
        {
          title: "Emergency Care",
          desc: "Quick and effective treatment for situations requiring emergency veterinary intervention.",
        },
        {
          title: "Laboratory",
          desc: "Accurate diagnosis through blood tests, urinalysis, and other laboratory examinations.",
        },
        {
          title: "Ultrasound / Imaging",
          desc: "Internal organ evaluation with advanced ultrasound and imaging technologies.",
        },
        {
          title: "Pet Nutrition Counseling",
          desc: "Nutrition programs and dietary recommendations tailored to your pet's age and species.",
        },
        {
          title: "Preventive Medicine",
          desc: "Safeguarding your pet's health with regular check-ups and preventive measures.",
        },
      ],
      moreTitle: "Other services",
    },
    about: {
      title: "About Our Clinic",
      subtitle: "Modern, hygienic, and trusted veterinary care",
      p1: "Riva Veterinary Clinic serves in the heart of Marmaris with modern equipment and an experienced team, committed to providing the best veterinary care for your beloved companions.",
      p2: "Hygiene, professionalism, and animal welfare are our top priorities. We give individual attention to every patient and provide transparent, clear information to their owners.",
      p3: "Our goal is to be a trusted partner in protecting your pet's health and improving their quality of life.",
      features: [
        "Modern and sterile clinical environment",
        "Experienced veterinary team",
        "Up-to-date diagnostic and treatment methods",
        "Animal welfare-focused approach",
      ],
    },
    appointment: {
      title: "Book an Appointment",
      subtitle:
        "Fill out the form and we'll get back to you via WhatsApp as soon as possible.",
      name: "Full Name",
      phone: "Phone",
      email: "Email (optional)",
      petType: "Pet Type",
      petTypes: ["Dog", "Cat", "Bird", "Other"],
      subject: "Subject",
      subjects: [
        "General Exam",
        "Vaccination",
        "Emergency",
        "Surgery",
        "Consultation",
        "Other",
      ],
      date: "Preferred Date/Time",
      message: "Your Message",
      send: "Send via WhatsApp",
      sendEmail: "Send via Email",
      namePlaceholder: "Your full name",
      phonePlaceholder: "+90 5XX XXX XX XX",
      emailPlaceholder: "example@email.com",
      messagePlaceholder: "Any additional information...",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to commonly asked questions",
      items: [
        {
          q: "Can I visit without an appointment?",
          a: "Yes, walk-ins are welcome. However, we prioritize patients with appointments. To minimize waiting time, we recommend booking via WhatsApp.",
        },
        {
          q: "Can I reach you in emergencies?",
          a: "For emergencies, you can call us or reach out via WhatsApp. We prioritize urgent cases during our working hours.",
        },
        {
          q: "Do you provide vaccination tracking?",
          a: "Yes, we regularly track your pet's vaccination schedule and send reminders. We create a detailed vaccination plan during the first examination.",
        },
        {
          q: "Do you offer English language support?",
          a: "Yes, we provide English communication support at our clinic. We also serve foreign guests living in or visiting Marmaris.",
        },
        {
          q: "How can I reach your location?",
          a: "Our clinic is centrally located in Marmaris. You can easily get directions via Google Maps. Please check our contact section for detailed location information.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "You can reach us using the information below.",
      address: "Address",
      addressValue: "Çıldır Mah. 153. Sk. No:20/A, 48700 Marmaris/Muğla",
      phone: "Phone",
      phoneValue: "+90 505 956 36 67",
      hours: "Working Hours",
      hoursValue: "Monday - Saturday: 09:00 - 19:00",
      hoursSunday: "Sunday: 13:00 - 19:00",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      callBtn: "Call",
      directionsBtn: "Get Directions",
      whatsappBtn: "Contact via WhatsApp",
    },
    footer: {
      desc: "Trusted, modern, and professional veterinary care for your beloved companions in Marmaris.",
      rights: "All rights reserved.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      langSupport: "We provide services in Turkish and English.",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
