// BREEZE LUX CLEANERS - OPTIMIZED JAVASCRIPT
(function(){
  'use strict';
  
  // Cache DOM elements
  const loader = document.getElementById('loader');
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const track = document.getElementById('testiTrack');
  const dotsContainer = document.getElementById('testiDots');
  const leadForm = document.getElementById('leadForm');
  const floatWA = document.getElementById('floatWA');
  
  // Hide loader quickly
  if(loader){
    setTimeout(()=>loader.classList.add('loader-hidden'),100);
  }
  
  // Simple testimonials data
  const testimonials = [
    {name:"Diana Mwangi",text:"Absolutely stunning results. My home smells like a 5-star hotel.",location:"Karen, Nairobi"},
    {name:"Michael Kipruto",text:"Best cleaning agency in Nairobi. Immaculate and efficient.",location:"Westlands"},
    {name:"Sophia Wanjiku",text:"Post-construction mess turned spotless. Worth every shilling.",location:"Lavington"}
  ];
  
  let currentTestimonial = 0;
  let testimonialInterval;
  
  // Services data
  const services = [
    {name:"Laundry Services",icon:"fa-tshirt",price:"from KSh 3,500"},
    {name:"Standard Cleaning",icon:"fa-home",price:"from KSh 4,900"},
    {name:"Sofa Vacuum",icon:"fa-couch",price:"from KSh 2,500"},
    {name:"Mattress Cleaning",icon:"fa-bed",price:"from KSh 3,200"}
  ];
  
  // Pricing data
  const pricing = [
    {name:"Essential",price:"KSh 4,900",features:["2 rooms + hallway","Standard equipment","24h guarantee"],popular:false},
    {name:"Luxury Clean",price:"KSh 9,900",features:["Deep clean (4 rooms)","Laundry 15kg included","Eco products + steam"],popular:true},
    {name:"Executive",price:"KSh 18,900",features:["Full home cleaning","Sofa + mattress care","Post-event ready"],popular:false}
  ];
  
  // Render services
  function renderServices(){
    const grid = document.getElementById('servicesGrid');
    if(!grid) return;
    grid.innerHTML = services.map(s => `
      <div class="service-card animate-on-scroll">
        <div class="service-icon"><i class="fas ${s.icon}" aria-hidden="true"></i></div>
        <h3>${s.name}</h3>
        <p>${s.price}</p>
      </div>
    `).join('');
  }
  
  // Render pricing
  function renderPricing(){
    const container = document.getElementById('pricingCards');
    if(!container) return;
    container.innerHTML = pricing.map(p => `
      <div class="price-card ${p.popular ? 'featured-plan' : ''} animate-on-scroll">
        <h3>${p.name} ${p.popular ? '<span style="background:#22C55E;color:white;font-size:.7rem;padding:.2rem .6rem;border-radius:30px;margin-left:.5rem;">⭐ Popular</span>' : ''}</h3>
        <div class="price">${p.price}</div>
        <ul class="price-features">${p.features.map(f => `<li><i class="fas fa-check-circle" aria-hidden="true"></i> ${f}</li>`).join('')}</ul>
        <a href="https://wa.me/254758966762" class="btn-primary btn-full" style="text-align:center;text-decoration:none;">Select Plan →</a>
      </div>
    `).join('');
  }
  
  // Render testimonials
  function renderTestimonials(){
    if(!track) return;
    track.innerHTML = testimonials.map((t,idx) => `
      <div class="testimonial-card" role="group" aria-label="Testimonial ${idx+1}">
        <div class="testimonial-content">
          <div class="testimonial-rating">★★★★★</div>
          <p class="testimonial-text">"${t.text}"</p>
          <h3 class="testimonial-author">${t.name}</h3>
          <p style="font-size:.8rem;color:#6b7280;">${t.location}</p>
        </div>
      </div>
    `).join('');
    updateCarousel();
    createDots();
  }
  
  function updateCarousel(){
    if(track) track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    updateDots();
  }
  
  function createDots(){
    if(!dotsContainer) return;
    dotsContainer.innerHTML = testimonials.map((_,idx) => `
      <button class="dot ${idx === currentTestimonial ? 'active' : ''}" data-index="${idx}" aria-label="Go to testimonial ${idx+1}" aria-current="${idx === currentTestimonial}"></button>
    `).join('');
    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click',()=>{
        currentTestimonial = parseInt(dot.dataset.index);
        updateCarousel();
        resetAutoSlide();
      });
    });
  }
  
  function updateDots(){
    document.querySelectorAll('.dot').forEach((dot,idx)=>{
      dot.classList.toggle('active', idx === currentTestimonial);
      dot.setAttribute('aria-current', idx === currentTestimonial ? 'true' : 'false');
    });
  }
  
  function nextTestimonial(){ currentTestimonial = (currentTestimonial + 1) % testimonials.length; updateCarousel(); }
  function prevTestimonial(){ currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length; updateCarousel(); }
  function startAutoSlide(){ testimonialInterval = setInterval(nextTestimonial, 5000); }
  function resetAutoSlide(){ clearInterval(testimonialInterval); startAutoSlide(); }
  
  // Intersection Observer for animations
  function initScrollReveal(){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
    },{threshold:.1});
    document.querySelectorAll('.animate-on-scroll, .service-card, .price-card').forEach(el=>observer.observe(el));
  }
  
  // Mobile menu
  function initMobileMenu(){
    if(menuToggle && navMenu){
      menuToggle.addEventListener('click',()=>{
        const expanded = navMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', expanded);
      });
      document.querySelectorAll('.nav-links a').forEach(link=>{
        link.addEventListener('click',()=>{ navMenu.classList.remove('active'); menuToggle.setAttribute('aria-expanded','false'); });
      });
    }
  }
  
  // Smooth scroll
  function initSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(link=>{
      link.addEventListener('click',function(e){
        const hash = this.getAttribute('href');
        if(hash === '#') return;
        const target = document.querySelector(hash);
        if(target){
          e.preventDefault();
          const offset = navbar?.offsetHeight || 80;
          window.scrollTo({ top: target.offsetTop - offset - 20, behavior: 'smooth' });
        }
      });
    });
  }
  
  // Sticky nav
  function initStickyNav(){
    if(!navbar) return;
    window.addEventListener('scroll',()=>{
      navbar.style.top = window.scrollY > 50 ? '10px' : '20px';
    });
  }
  
  // Form submission
  function initLeadForm(){
    if(leadForm){
      leadForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const name = document.getElementById('fullName')?.value;
        if(!name) { alert('Please enter your name.'); return; }
        alert(`Thank you, ${name}! Our concierge will contact you shortly.`);
        leadForm.reset();
      });
    }
  }
  
  // WhatsApp button
  if(floatWA){
    floatWA.addEventListener('click',()=> window.open('https://wa.me/254758966762','_blank'));
  }
  
  // Initialize
  function init(){
    renderServices();
    renderPricing();
    renderTestimonials();
    initScrollReveal();
    initMobileMenu();
    initSmoothScroll();
    initStickyNav();
    initLeadForm();
    if(prevBtn) prevBtn.addEventListener('click',()=>{ prevTestimonial(); resetAutoSlide(); });
    if(nextBtn) nextBtn.addEventListener('click',()=>{ nextTestimonial(); resetAutoSlide(); });
    startAutoSlide();
  }
  
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
