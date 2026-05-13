/* ============================================
   BREEZE LUX CLEANERS - CONFIGURATION FILE
   Centralized content management
   Update this file to change website content
   ============================================ */

const BREEZE_LUX_CONFIG = {
  // ========== BRAND INFORMATION ==========
  brand: {
    name: "Breeze Lux Cleaners",
    shortName: "BREEZE LUX",
    tagline: "Luxury Cleaning & Laundry Services",
    description: "Premium eco-luxury cleaning & laundry services in Nairobi. White glove treatment for homes & businesses.",
    founded: 2022,
    phone: "+254758966762",
    phoneFormatted: "254 758 966 762",
    email: "hello@breezelux.com",
    address: "Nairobi, Kenya — Westlands",
    whatsappNumber: "254758966762",
    socialMedia: {
      instagram: "https://instagram.com/breezeluxcleaners",
      facebook: "https://facebook.com/breezeluxcleaners",
      twitter: "https://twitter.com/breezelux",
      linkedin: "https://linkedin.com/company/breezelux"
    }
  },

  // ========== HERO SECTION ==========
  hero: {
    badge: "NAIROBI'S ELITE CLEANING",
    headline: "Where luxury meets",
    highlightText: "spotless perfection",
    description: "Premium cleaning & laundry for residences, offices & events. Eco-luxury service trusted by 500+ elite clients.",
    stats: [
      { value: "500+", label: "Projects" },
      { value: "4.98", label: "★ Reviews" },
      { value: "24/7", label: "Support" }
    ],
    ctaPrimary: {
      text: "WhatsApp Concierge",
      icon: "fab fa-whatsapp",
      action: "whatsapp"
    },
    ctaSecondary: {
      text: "Free Quote",
      icon: "fas fa-arrow-right",
      action: "contact"
    }
  },

  // ========== SERVICES SECTION ==========
  services: {
    badge: "our expertise",
    title: "Tailored solutions",
    titleHighlight: "for every surface",
    subtitle: "Precision cleaning with eco-luxury products and certified technicians",
    items: [
      {
        id: "laundry",
        name: "Laundry Services",
        icon: "fas fa-tshirt",
        price: "from KSh 3,500",
        description: "Premium wash & fold with eco-friendly detergents",
        rating: 5,
        popular: true
      },
      {
        id: "standard-cleaning",
        name: "Standard Cleaning",
        icon: "fas fa-home",
        price: "from KSh 4,900",
        description: "Complete home refresh with attention to every detail",
        rating: 5,
        popular: false
      },
      {
        id: "sofa-vacuum",
        name: "Sofa Vacuum",
        icon: "fas fa-couch",
        price: "from KSh 2,500",
        description: "Deep extraction cleaning for all fabric types",
        rating: 5,
        popular: false
      },
      {
        id: "mattress-cleaning",
        name: "Mattress Cleaning",
        icon: "fas fa-bed",
        price: "from KSh 3,200",
        description: "Eliminate allergens, dust mites & stains",
        rating: 5,
        popular: true
      }
    ]
  },

  // ========== WHY CHOOSE US SECTION ==========
  whyChooseUs: {
    badge: "why choose us",
    title: "White glove",
    titleHighlight: "excellence",
    description: "Certified technicians, hospital-grade equipment, and eco-luxury products. We don't just clean — we restore.",
    trustBadges: [
      { icon: "fas fa-trophy", text: "Best of Nairobi 2025" },
      { icon: "fab fa-google", text: "4.9 Google Rating" },
      { icon: "fas fa-certificate", text: "Eco-Certified" }
    ],
    counters: [
      { target: 1240, label: "Happy Homes", suffix: "+" },
      { target: 100, label: "Satisfaction %", suffix: "%" },
      { target: 48, label: "Min Response", suffix: "" },
      { target: 250, label: "5-Star Reviews", suffix: "+" }
    ]
  },

  // ========== PRICING PLANS ==========
  pricing: {
    badge: "investment",
    title: "Transparent",
    titleHighlight: "pricing",
    plans: [
      {
        id: "essential",
        name: "Essential",
        price: "KSh 4,900",
        priceDetails: "per session",
        features: [
          "2 rooms + hallway",
          "Standard equipment",
          "24h satisfaction guarantee",
          "Basic sanitization"
        ],
        popular: false,
        ctaText: "Select Plan →",
        recommended: false
      },
      {
        id: "luxury",
        name: "Luxury Clean",
        price: "KSh 9,900",
        priceDetails: "per session",
        features: [
          "Deep clean (4 rooms)",
          "Laundry 15kg included",
          "Eco products + steam",
          "Priority scheduling",
          "Free follow-up inspection"
        ],
        popular: true,
        ctaText: "Select Plan →",
        recommended: true,
        badge: "⭐ Popular"
      },
      {
        id: "executive",
        name: "Executive",
        price: "KSh 18,900",
        priceDetails: "per session",
        features: [
          "Full home cleaning",
          "Sofa + mattress care",
          "Post-event ready",
          "Same-day service",
          "VIP concierge support",
          "Monthly maintenance plan"
        ],
        popular: false,
        ctaText: "Select Plan →",
        recommended: false
      }
    ]
  },

  // ========== TESTIMONIALS ==========
  testimonials: {
    badge: "social proof",
    title: "Trusted by Nairobi's elite",
    items: [
      {
        id: 1,
        name: "Diana Mwangi",
        location: "Karen, Nairobi",
        rating: 5,
        text: "Absolutely stunning results. My home smells like a 5-star hotel. Professional, punctual, and meticulous.",
        verified: true,
        date: "March 2025"
      },
      {
        id: 2,
        name: "Michael Kipruto",
        location: "Westlands",
        rating: 5,
        text: "Best cleaning agency in Nairobi. They transformed my office after construction — immaculate and efficient.",
        verified: true,
        date: "February 2025"
      },
      {
        id: 3,
        name: "Sophia Wanjiku",
        location: "Lavington",
        rating: 5,
        text: "Post-construction mess turned spotless. Worth every shilling. Will definitely book again!",
        verified: true,
        date: "January 2025"
      }
    ],
    autoSlideInterval: 5000
  },

  // ========== FAQ SECTION ==========
  faq: {
    badge: "questions",
    title: "Frequently asked",
    items: [
      {
        question: "What products do you use?",
        answer: "We use eco-friendly, hospital-grade disinfectants and steam technology — safe for children and pets."
      },
      {
        question: "Do you cover all Nairobi?",
        answer: "Yes — Westlands, Karen, Lavington, Kilimani, Runda, and CBD included with no travel fees."
      },
      {
        question: "Are your teams insured?",
        answer: "Fully insured and bonded. Every team member undergoes background verification."
      },
      {
        question: "How do I book a service?",
        answer: "Simply click the WhatsApp button or fill out our quote form. Our concierge will confirm your booking within 30 minutes."
      },
      {
        question: "What if I'm not satisfied?",
        answer: "We offer a 100% satisfaction guarantee. If you're not happy, we'll re-clean at no extra cost."
      }
    ]
  },

  // ========== CONTACT SECTION ==========
  contact: {
    formTitle: "Request a",
    formTitleHighlight: "bespoke quote",
    serviceOptions: [
      "Select Service",
      "Home Deep Clean",
      "Sofa / Mattress Cleaning",
      "Post-Construction",
      "Laundry Services",
      "Commercial Cleaning",
      "Event Cleanup"
    ],
    submitButton: {
      text: "Send Request",
      icon: "fas fa-paper-plane"
    }
  },

  // ========== CTA BANNER ==========
  ctaBanner: {
    title: "Experience the Breeze Lux difference",
    subtitle: "Book your first service and receive 15% off — limited offer for new clients",
    buttonText: "Claim 15% off",
    buttonIcon: "fas fa-arrow-right",
    discountCode: "BREEZE15"
  },

  // ========== FOOTER SECTION ==========
  footer: {
    description: "Redefining cleanliness with white-glove service and eco-luxury standards.",
    socialLinks: [
      { platform: "instagram", icon: "fab fa-instagram", url: "#" },
      { platform: "facebook", icon: "fab fa-facebook-f", url: "#" },
      { platform: "linkedin", icon: "fab fa-linkedin-in", url: "#" },
      { platform: "twitter", icon: "fab fa-x-twitter", url: "#" }
    ],
    footerLinks: {
      services: [
        { text: "Laundry", href: "#services-section" },
        { text: "Deep Cleaning", href: "#services-section" },
        { text: "Sofa Cleaning", href: "#services-section" },
        { text: "Mattress Care", href: "#services-section" }
      ],
      support: [
        { text: "FAQs", href: "#faq" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Careers", href: "#" }
      ]
    },
    newsletter: {
      title: "Get 10% off",
      subtitle: "Subscribe for exclusive offers",
      placeholder: "Your email",
      buttonIcon: "fas fa-arrow-right"
    }
  },

  // ========== FLOATING WHATSAPP ==========
  floatingWhatsApp: {
    text: "24/7 Concierge",
    icon: "fab fa-whatsapp fa-lg",
    message: "Hello! I'd like to book a premium cleaning service"
  }
};

// Export for global access
if (typeof window !== 'undefined') {
  window.BREEZE_LUX_CONFIG = BREEZE_LUX_CONFIG;
}
