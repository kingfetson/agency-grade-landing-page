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
      },
      {
        id: "post-event",
        name: "Post Event",
        icon: "fas fa-calendar-check",
        price: "from KSh 8,000",
        description: "Same-day cleanup for parties and gatherings",
        rating: 5,
        popular: false
      },
      {
        id: "post-construction",
        name: "Post Construction",
        icon: "fas fa-hard-hat",
        price: "from KSh 12,000",
        description: "Industrial-grade dust removal & sanitization",
        rating: 5,
        popular: false
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

  // ========== SERVICE TYPES (Commercial/Residential) ==========
  serviceTypes: {
    title: "Serving",
    titleHighlight: "Home & Business",
    items: [
      {
        type: "residential",
        icon: "fas fa-home",
        title: "Residential",
        description: "Deep clean, move-out, recurring luxury cleaning for discerning homeowners.",
        ctaText: "Learn more →"
      },
      {
        type: "commercial",
        icon: "fas fa-building",
        title: "Commercial",
        description: "Offices, retail, post-construction, and event cleaning for businesses.",
        ctaText: "Learn more →"
      }
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
        avatar: null,
        verified: true,
        date: "March 2025"
      },
      {
        id: 2,
        name: "Michael Kipruto",
        location: "Westlands",
        rating: 5,
        text: "Best cleaning agency in Nairobi. They transformed my office after construction — immaculate and efficient.",
        avatar: null,
        verified: true,
        date: "February 2025"
      },
      {
        id: 3,
        name: "Sophia Wanjiku",
        location: "Lavington",
        rating: 5,
        text: "Post-construction mess turned spotless. Worth every shilling. Will definitely book again!",
        avatar: null,
        verified: true,
        date: "January 2025"
      },
      {
        id: 4,
        name: "James Omondi",
        location: "Runda",
        rating: 5,
        text: "The sofa cleaning service is magic! My 5-year-old couch looks brand new. Highly recommend.",
        avatar: null,
        verified: false,
        date: "December 2024"
      },
      {
        id: 5,
        name: "Grace Wanjiru",
        location: "Kilimani",
        rating: 5,
        text: "Punctual, thorough, and incredibly professional. My go-to cleaning service in Nairobi.",
        avatar: null,
        verified: true,
        date: "November 2024"
      }
    ],
    autoSlideInterval: 5000
  },

  // ========== PROCESS STEPS ==========
  process: {
    badge: "how it works",
    title: "Simple",
    titleHighlight: "3-step",
    steps: [
      {
        number: "01",
        icon: "fas fa-calendar-plus",
        title: "Book",
        description: "WhatsApp or online form — 2 minutes"
      },
      {
        number: "02",
        icon: "fas fa-brush",
        title: "We Clean",
        description: "Specialist team arrives fully equipped"
      },
      {
        number: "03",
        icon: "fas fa-smile-wink",
        title: "Enjoy",
        description: "Sparkling guarantee & follow-up"
      }
    ]
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
      },
      {
        question: "Do I need to be home?",
        answer: "Not necessarily. We can arrange key pickup or access codes for your convenience."
      }
    ]
  },

  // ========== CONTACT SECTION ==========
  contact: {
    formTitle: "Request a",
    formTitleHighlight: "bespoke quote",
    formFields: [
      { type: "text", placeholder: "Full name", required: true, name: "name" },
      { type: "email", placeholder: "Email address", required: false, name: "email" },
      { type: "tel", placeholder: "Phone number", required: true, name: "phone" }
    ],
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
    },
    contactDetails: [
      { icon: "fab fa-whatsapp", text: "+254 758 966 762", action: "whatsapp" },
      { icon: "fas fa-envelope", text: "hello@breezelux.com", action: "email" },
      { icon: "fas fa-map-pin", text: "Nairobi, Kenya — Westlands", action: "map" }
    ]
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
      { platform: "instagram", icon: "fab fa-instagram", url: "https://instagram.com/breezeluxcleaners" },
      { platform: "facebook", icon: "fab fa-facebook-f", url: "https://facebook.com/breezeluxcleaners" },
      { platform: "linkedin", icon: "fab fa-linkedin-in", url: "https://linkedin.com/company/breezelux" },
      { platform: "twitter", icon: "fab fa-x-twitter", url: "https://twitter.com/breezelux" }
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
    },
    trustBadges: [
      { icon: "fas fa-shield-alt", text: "Insured" },
      { icon: "fas fa-leaf", text: "Eco-Friendly" }
    ]
  },

  // ========== FLOATING WHATSAPP ==========
  floatingWhatsApp: {
    text: "24/7 Concierge",
    icon: "fab fa-whatsapp fa-lg",
    message: "Hello! I'd like to book a premium cleaning service"
  },

  // ========== SEO & META ==========
  seo: {
    title: "Breeze Lux Cleaners | Luxury Cleaning & Laundry – Nairobi's Premium Service",
    description: "Premium eco-luxury cleaning & laundry services in Nairobi. White glove treatment for homes & businesses. Book your elite cleaning experience today.",
    keywords: "cleaning services Nairobi, luxury cleaning, laundry services, sofa cleaning, mattress cleaning, post-construction cleaning",
    ogImage: "https://breezelux.com/og-image.jpg"
  }
};

// ========== EXPORT FOR USE IN SCRIPT.JS ==========
// If using ES6 modules (uncomment the line below when using modules)
// export default BREEZE_LUX_CONFIG;

// For global access (available in script.js)
if (typeof window !== 'undefined') {
  window.BREEZE_LUX_CONFIG = BREEZE_LUX_CONFIG;
}

// For Node.js environment (if using build tools)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BREEZE_LUX_CONFIG;
}
