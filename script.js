/* ============================================
   BREEZE LUX CLEANERS - MAIN JAVASCRIPT
   Agency-grade functionality | Vanilla JS
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  
  // ========== LOADER ==========
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('loader-hidden');
    }, 800);
  }

  // ========== RENDER SERVICES FROM CONFIG ==========
  function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid || !window.BREEZE_LUX_CONFIG) return;
    
    const services = window.BREEZE_LUX_CONFIG.services.items;
    servicesGrid.innerHTML = '';
    
    services.forEach(service => {
      const card = document.createElement('div');
      card.className = 'service-card animate-on-scroll';
      card.innerHTML = `
        <div class="service-icon"><i class="${service.icon}" aria-hidden="true"></i></div>
        <h3>${service.name}</h3>
        <p>${service.price}</p>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">${service.description}</p>
      `;
      servicesGrid.appendChild(card);
    });
  }

  // ========== RENDER PRICING FROM CONFIG ==========
  function renderPricing() {
    const pricingContainer = document.getElementById('pricingCards');
    if (!pricingContainer || !window.BREEZE_LUX_CONFIG) return;
    
    const plans = window.BREEZE_LUX_CONFIG.pricing.plans;
    pricingContainer.innerHTML = '';
    
    plans.forEach(plan => {
      const card = document.createElement('div');
      card.className = `price-card ${plan.popular ? 'featured-plan' : ''} animate-on-scroll`;
      card.innerHTML = `
        <h3>${plan.name} ${plan.popular ? '<span style="background:#22C55E; color:white; font-size:0.7rem; padding:0.2rem 0.6rem; border-radius:30px; margin-left:0.5rem;">⭐ Popular</span>' : ''}</h3>
        <div class="price">${plan.price}</div>
        <ul class="price-features">
          ${plan.features.map(f => `<li><i class="fas fa-check-circle" aria-hidden="true"></i> ${f}</li>`).join('')}
        </ul>
        <a href="https://wa.me/254758966762?text=I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan" class="btn-primary btn-full" style="text-align:center; text-decoration:none;">${plan.ctaText}</a>
      `;
      pricingContainer.appendChild(card);
    });
  }

  // ========== RENDER TESTIMONIALS FROM CONFIG ==========
  let currentTestimonial = 0;
  let testimonialInterval;
  const track = document.getElementById('testiTrack');
  const dotsContainer = document.getElementById('testiDots');

  function renderTestimonials() {
    if (!track || !window.BREEZE_LUX_CONFIG) return;
    
    const testimonials = window.BREEZE_LUX_CONFIG.testimonials.items;
    track.innerHTML = '';
    
    testimonials.forEach((t, idx) => {
      const slide = document.createElement('div');
      slide.className = 'testimonial-card';
      slide.setAttribute('role', 'group');
      slide.setAttribute('aria-label', `Testimonial ${idx + 1} of ${testimonials.length}`);
      slide.innerHTML = `
        <div class="testimonial-content">
          <div class="testimonial-rating">${'★'.repeat(t.rating)}</div>
          <p class="testimonial-text">"${t.text}"</p>
          <h3 class="testimonial-author">${t.name}</h3>
          <p style="font-size:0.8rem; color:#6b7280;">${t.location}</p>
        </div>
      `;
      track.appendChild(slide);
    });
    
    updateCarousel();
    createDots();
  }

  function updateCarousel() {
    if (track) track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    updateDots();
  }

  function createDots() {
    if (!dotsContainer || !window.BREEZE_LUX_CONFIG) return;
    
    const testimonials = window.BREEZE_LUX_CONFIG.testimonials.items;
    dotsContainer.innerHTML = '';
    
    testimonials.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
      dot.setAttribute('data-index', idx);
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
      dot.setAttribute('aria-current', idx === currentTestimonial ? 'true' : 'false');
    });
  }

  function nextTestimonial() {
    if (!window.BREEZE_LUX_CONFIG) return;
    const testimonials = window.BREEZE_LUX_CONFIG.testimonials.items;
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateCarousel();
  }

  function prevTestimonial() {
    if (!window.BREEZE_LUX_CONFIG) return;
    const testimonials = window.BREEZE_LUX_CONFIG.testimonials.items;
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateCarousel();
  }

  function startAutoSlide() {
    if (!window.BREEZE_LUX_CONFIG) return;
    const interval = window.BREEZE_LUX_CONFIG.testimonials.autoSlideInterval || 5000;
    testimonialInterval = setInterval(nextTestimonial, interval);
  }

  function resetAutoSlide() {
    clearInterval(testimonialInterval);
    startAutoSlide();
  }

  // ========== RENDER FAQ FROM CONFIG ==========
  function renderFaq() {
    const faqGrid = document.getElementById('faqGrid');
    if (!faqGrid || !window.BREEZE_LUX_CONFIG) return;
    
    const faqItems = window.BREEZE_LUX_CONFIG.faq.items;
    faqGrid.innerHTML = '';
    
    faqItems.forEach((item, idx) => {
      const faqItem = document.createElement('div');
      faqItem.className = 'faq-item';
      faqItem.innerHTML = `
        <div class="faq-question" role="button" tabindex="0" aria-expanded="false" aria-controls="faq-answer-${idx}">
          <span>${item.question}</span>
          <i class="fas fa-chevron-down" aria-hidden="true"></i>
        </div>
        <div class="faq-answer" id="faq-answer-${idx}">${item.answer}</div>
      `;
      faqGrid.appendChild(faqItem);
    });
    
    // Open first FAQ by default
    const firstFaq = faqGrid.querySelector('.faq-item');
    if (firstFaq) firstFaq.classList.add('active');
  }

  // ========== FAQ ACCORDION FUNCTIONALITY ==========
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question');
      if (question) {
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          const expanded = question.getAttribute('aria-expanded') === 'true';
          item.classList.toggle('active');
          question.setAttribute('aria-expanded', !expanded);
        });
        question.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
          }
        });
      }
    });
  }

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

  // ========== SCROLL REVEAL ANIMATIONS ==========
  function initScrollReveal() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .service-card, .price-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Observe counters section
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

  // ========== MOBILE MENU ==========
  function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        const expanded = navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', expanded);
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      });
      
      // Close menu when clicking a link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          const icon = menuToggle.querySelector('i');
          if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        });
      });
    }
  }

  // ========== SMOOTH SCROLLING ==========
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
          const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      });
    });
  }

  // ========== FLOATING WHATSAPP BUTTON ==========
  function initFloatingWhatsApp() {
    const floatWA = document.getElementById('floatWA');
    if (floatWA) {
      floatWA.addEventListener('click', () => {
        window.open('https://wa.me/254758966762?text=Hello%21%20I%27d%20like%20to%20book%20a%20premium%20cleaning%20service', '_blank');
      });
    }
  }

  // ========== LEAD FORM SUBMISSION ==========
  function initLeadForm() {
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
      leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('fullName')?.value || '';
        const phone = document.getElementById('phoneNumber')?.value || '';
        
        if (!name || !phone) {
          alert('Please fill in your name and phone number.');
          return;
        }
        
        alert(`Thank you, ${name}! Our concierge will contact you via WhatsApp within 1 hour.`);
        leadForm.reset();
      });
    }
  }

  // ========== NEWSLETTER FORM ==========
  function initNewsletter() {
    const newsletterBtn = document.querySelector('.newsletter-form button');
    const newsletterInput = document.getElementById('newsletterEmail');
    
    if (newsletterBtn && newsletterInput) {
      newsletterBtn.addEventListener('click', () => {
        if (newsletterInput.value.includes('@')) {
          alert('Thanks for subscribing! Get 10% off your next booking.');
          newsletterInput.value = '';
        } else {
          alert('Please enter a valid email address.');
        }
      });
    }
  }

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

  // ========== UPDATE FOOTER YEAR ==========
  function updateFooterYear() {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
      const year = new Date().getFullYear();
      footerYear.innerHTML = `© ${year} Breeze Lux Cleaners — Luxury Redefined. All rights reserved.`;
    }
  }

  // ========== INITIALIZE TESTIMONIAL CONTROLS ==========
  function initTestimonialControls() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetAutoSlide();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextTestimonial();
        resetAutoSlide();
      });
    }
  }

  // ========== CALL ALL INIT FUNCTIONS ==========
  function init() {
    renderServices();
    renderPricing();
    renderTestimonials();
    renderFaq();
    initFaqAccordion();
    initScrollReveal();
    initMobileMenu();
    initSmoothScroll();
    initFloatingWhatsApp();
    initLeadForm();
    initNewsletter();
    initStickyNav();
    updateFooterYear();
    initTestimonialControls();
    startAutoSlide();
  }

  // Start everything
  init();
});

// Console log for agency cred
console.log('%c BREEZE LUX CLEANERS | Premium Website ', 'background: #22C55E; color: white; font-size: 14px; padding: 8px 16px; border-radius: 30px;');
console.log('%c Built with accessibility and performance in mind', 'color: #22C55E; font-size: 12px;');
