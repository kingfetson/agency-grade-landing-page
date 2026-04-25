```javascript
/* ============================================
   BREEZE LUX CLEANERS - PREMIUM INTERACTIONS
   Agency-grade JavaScript | Vanilla JS
   ============================================ */

// ========== LOADER ==========
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 800);
  }
});

// ========== SERVICES DATA & RENDER ==========
const servicesData = [
  { name: "Laundry Services", icon: "fas fa-tshirt", price: "from KSh 3,500" },
  { name: "Standard Cleaning", icon: "fas fa-home", price: "from KSh 4,900" },
  { name: "Sofa Vacuum", icon: "fas fa-couch", price: "from KSh 2,500" },
  { name: "Mattress Cleaning", icon: "fas fa-bed", price: "from KSh 3,200" },
  { name: "Post Event", icon: "fas fa-calendar-check", price: "from KSh 8,000" },
  { name: "Post Construction", icon: "fas fa-hard-hat", price: "from KSh 12,000" }
];

const servicesGrid = document.getElementById('servicesGrid');
if (servicesGrid) {
  servicesData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card-premium animate-on-scroll';
    card.innerHTML = `
      <div class="service-icon"><i class="${service.icon}"></i></div>
      <h3>${service.name}</h3>
      <p>${service.price}</p>
      <div class="service-rating">
        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      </div>
    `;
    servicesGrid.appendChild(card);
  });
}

// ========== PRICING DATA & RENDER ==========
const pricingData = [
  { name: "Essential", price: "KSh 4,900", features: ["2 rooms + hallway", "Standard equipment", "24h guarantee"], popular: false },
  { name: "Luxury Clean", price: "KSh 9,900", features: ["Deep clean (4 rooms)", "Laundry 15kg included", "Eco products + steam"], popular: true },
  { name: "Executive", price: "KSh 18,900", features: ["Full home cleaning", "Sofa + mattress care", "Post-event ready"], popular: false }
];

const pricingContainer = document.getElementById('pricingCards');
if (pricingContainer) {
  pricingData.forEach(plan => {
    const card = document.createElement('div');
    card.className = `price-card ${plan.popular ? 'featured-plan' : ''} animate-on-scroll`;
    card.innerHTML = `
      <h3>${plan.name} ${plan.popular ? '<span style="background:#22C55E; color:white; font-size:0.7rem; padding:0.2rem 0.6rem; border-radius:30px; margin-left:0.5rem;">⭐ Popular</span>' : ''}</h3>
      <div class="price">${plan.price}</div>
      <ul class="price-features">
        ${plan.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
      </ul>
      <a href="https://wa.me/254758966762?text=I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan" class="btn-primary btn-full" style="text-align:center; text-decoration:none;">Select Plan →</a>
    `;
    pricingContainer.appendChild(card);
  });
}

// ========== TESTIMONIALS CAROUSEL ==========
const testimonials = [
  { name: "Diana Mwangi", text: "Absolutely stunning results. My home smells like a 5-star hotel. Professional, punctual, and meticulous.", rating: 5, location: "Karen, Nairobi" },
  { name: "Michael Kipruto", text: "Best cleaning agency in Nairobi. They transformed my office after construction — immaculate and efficient.", rating: 5, location: "Westlands" },
  { name: "Sophia Wanjiku", text: "Post-construction mess turned spotless. Worth every shilling. Will definitely book again!", rating: 5, location: "Lavington" },
  { name: "James Omondi", text: "The sofa cleaning service is magic! My 5-year-old couch looks brand new. Highly recommend.", rating: 5, location: "Runda" }
];

let currentTestimonial = 0;
let testimonialInterval;
const track = document.getElementById('testiTrack');
const dotsContainer = document.getElementById('testiDots');

function renderTestimonials() {
  if (!track) return;
  track.innerHTML = '';
  testimonials.forEach((t, idx) => {
    const slide = document.createElement('div');
    slide.className = 'testimonial-card';
    slide.innerHTML = `
      <div class="testimonial-content">
        <div class="testimonial-rating">
          ${Array(5).fill('<i class="fas fa-star"></i>').join('')}
        </div>
        <p class="testimonial-text">"${t.text}"</p>
        <h4 class="testimonial-author">${t.name}</h4>
        <p style="font-size:0.8rem; color:#6b7280;">${t.location}</p>
      </div>
    `;
    track.appendChild(slide);
  });
  updateCarousel();
  createDots();
}

function updateCarousel() {
  if (track) {
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
  }
  updateDots();
}

function createDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  testimonials.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', () => {
      currentTestimonial = idx;
      updateCarousel();
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentTestimonial);
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateCarousel();
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateCarousel();
}

function startAutoSlide() {
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

function resetAutoSlide() {
  clearInterval(testimonialInterval);
  startAutoSlide();
}

// Initialize testimonials
renderTestimonials();
startAutoSlide();

// Event listeners for testimonial controls
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
if (prevBtn) prevBtn.addEventListener('click', () => { prevTestimonial(); resetAutoSlide(); });
if (nextBtn) nextBtn.addEventListener('click', () => { nextTestimonial(); resetAutoSlide(); });

// ========== ANIMATED COUNTERS ==========
const counters = document.querySelectorAll('.counter-number');
let countersStarted = false;

function animateCounters() {
  if (countersStarted) return;
  countersStarted = true;
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// ========== BEFORE/AFTER SLIDER ==========
function initComparisonSlider() {
  const overlay = document.getElementById('dragOverlay');
  const handle = document.getElementById('dragHandle');
  const container = document.querySelector('.slider-container');
  
  if (!overlay || !handle || !container) return;
  
  let isDragging = false;
  
  const moveSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = (clientX - rect.left) / rect.width;
    x = Math.min(Math.max(x, 0.02), 0.98);
    overlay.style.width = `${x * 100}%`;
    handle.style.left = `${x * 100}%`;
  };
  
  const onMouseMove = (e) => {
    if (!isDragging) return;
    moveSlider(e.clientX);
  };
  
  const onTouchMove = (e) => {
    if (!isDragging) return;
    moveSlider(e.touches[0].clientX);
    e.preventDefault();
  };
  
  handle.addEventListener('mousedown', () => { isDragging = true; });
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', () => { isDragging = false; });
  
  handle.addEventListener('touchstart', (e) => { isDragging = true; e.preventDefault(); });
  window.addEventListener('touchmove', onTouchMove);
  window.addEventListener('touchend', () => { isDragging = false; });
}

// Initialize slider after DOM loads
initComparisonSlider();

// ========== FAQ ACCORDION ==========
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
  
  // Open first FAQ by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
  }
}

initFaqAccordion();

// ========== SCROLL REVEAL ANIMATIONS ==========
function initScrollReveal() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .service-card-premium, .price-card, .step, .type-card, .counter-card, .faq-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  animatedElements.forEach(el => observer.observe(el));
  
  // Also observe counters section for animation trigger
  const countersSection = document.querySelector('.counter-grid');
  if (countersSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          animateCounters();
        }
      });
    }, { threshold: 0.3 });
    counterObserver.observe(countersSection);
  }
}

initScrollReveal();

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
}

initMobileMenu();

// ========== STICKY NAVBAR EFFECT ==========
function initStickyNav() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.top = '10px';
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.top = '20px';
      navbar.style.background = 'rgba(255, 255, 255, 0.92)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
    }
  });
}

initStickyNav();

// ========== SMOOTH SCROLLING ==========
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

initSmoothScroll();

// ========== FLOATING WHATSAPP BUTTON ==========
function initFloatingWhatsApp() {
  const floatWA = document.getElementById('floatWA');
  if (floatWA) {
    floatWA.addEventListener('click', () => {
      window.open('https://wa.me/254758966762?text=Hello%21%20I%27d%20like%20to%20book%20a%20premium%20cleaning%20service', '_blank');
    });
  }
}

initFloatingWhatsApp();

// ========== LEAD FORM SUBMISSION ==========
function initLeadForm() {
  const form = document.getElementById('leadForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = form.querySelector('input[placeholder="Full name"]')?.value || '';
    const phone = form.querySelector('input[placeholder="Phone number"]')?.value || '';
    
    if (!name || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <div style="background:#22C55E; color:white; padding:1rem; border-radius:1rem; margin-top:1rem; text-align:center;">
        ✓ Thank you, ${name}! Our concierge will contact you via WhatsApp within 1 hour.
      </div>
    `;
    
    form.appendChild(successMessage);
    form.reset();
    
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
    
    // Optional: Send to WhatsApp via webhook simulation
    console.log('Lead submitted:', { name, phone });
  });
}

initLeadForm();

// ========== NEWSLETTER FORM ==========
function initNewsletter() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    const button = newsletterForm.querySelector('button');
    const input = newsletterForm.querySelector('input');
    
    if (button && input) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.value.includes('@')) {
          alert('Thanks for subscribing! Get 10% off your next booking.');
          input.value = '';
        } else {
          alert('Please enter a valid email address.');
        }
      });
    }
  }
}

initNewsletter();

// ========== PARALLAX EFFECT FOR FLOATING SHAPES ==========
function initParallax() {
  const shapes = document.querySelectorAll('.floating-shape');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    shapes.forEach((shape, index) => {
      const speed = 0.3 + (index * 0.1);
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

initParallax();

// ========== ADD HOVER EFFECT TO PRICING CARDS ==========
function initPricingHover() {
  const priceCards = document.querySelectorAll('.price-card');
  
  priceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      priceCards.forEach(c => c.style.transform = 'scale(0.98)');
      card.style.transform = 'scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      priceCards.forEach(c => c.style.transform = '');
    });
  });
}

initPricingHover();

// ========== WINDOW RESIZE HANDLER ==========
function handleResize() {
  // Close mobile menu on resize if screen becomes desktop
  if (window.innerWidth > 860) {
    const navMenu = document.getElementById('navMenu');
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      const menuIcon = document.querySelector('#menuToggle i');
      if (menuIcon) {
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
      }
    }
  }
}

window.addEventListener('resize', handleResize);

// ========== ADD DYNAMIC YEAR TO FOOTER ==========
function updateFooterYear() {
  const footer = document.querySelector('.footer-bottom p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Breeze Lux Cleaners — Luxury Redefined. All rights reserved.`;
  }
}

updateFooterYear();

// ========== PERFORMANCE: LAZY LOAD IMAGES (optional enhancement) ==========
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ========== CONSOLE LOG FOR AGENCY CRED ==========
console.log('%c BREEZE LUX CLEANERS | Premium Agency Website ', 'background: #22C55E; color: white; font-size: 14px; padding: 8px 16px; border-radius: 30px;');
console.log('%c Built with precision — Conversion-focused luxury design ', 'color: #22C55E; font-size: 12px;');

// Export for global availability (optional)
window.breezeLux = {
  services: servicesData,
  pricing: pricingData,
  testimonials: testimonials
};
```
