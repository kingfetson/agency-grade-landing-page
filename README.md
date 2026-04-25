
# Breeze Lux Cleaners - Premium Landing Page

A modern, conversion-focused, agency-quality landing page for a luxury cleaning service brand.

## 📁 Project Structure

```
breeze-lux-cleaners/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # JavaScript interactions and UI logic
├── config.js       # Centralized content configuration
└── README.md       # Project documentation
```

## 🚀 Quick Start

1. Download all 4 files (`index.html`, `style.css`, `script.js`, `config.js`)
2. Save them in the **same folder**
3. Open `index.html` in your browser

No build tools or dependencies required — pure HTML/CSS/JS.

## 📝 Customization Guide

### Update Content (Text, Prices, Services)

Edit `config.js` — all website content is centralized here:

```javascript
// Change company info
brand: { phone: "+254XXXXXXXXX", ... }

// Update services
services: { items: [ ... ] }

// Modify pricing
pricing: { plans: [ ... ] }

// Edit testimonials
testimonials: { items: [ ... ] }
```

### Change Colors & Styling

Edit CSS variables in `style.css`:

```css
:root {
  --primary: #22C55E;      /* Main green */
  --accent: #FACC15;       /* Yellow accent */
  --dark: #111827;         /* Dark text color */
}
```

### WhatsApp Integration

Update the WhatsApp number in `config.js`:

```javascript
brand: {
  whatsappNumber: "254758966762",  // Your number here
  phone: "+254758966762"
}
```

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky glassmorphism navigation
- ✅ Interactive before/after slider
- ✅ Animated statistics counters
- ✅ Testimonial carousel
- ✅ FAQ accordion
- ✅ WhatsApp floating button
- ✅ Smooth scroll animations
- ✅ Section reveal animations
- ✅ Contact form with validation

## 🎨 Brand Colors

| Role | Color | Hex |
|------|-------|-----|
| Primary Green | Main brand | `#22C55E` |
| Accent Yellow | Highlights | `#FACC15` |
| Dark Charcoal | Text | `#111827` |
| White | Background | `#FFFFFF` |

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS/Android)

## 📄 License

This project is for client/portfolio use. All rights reserved.

## 📞 Support

For questions or modifications, contact the development team.
```
