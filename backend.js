/* ============================================================
   NJ VISUALS — backend.js
   Navbar · Mobile Menu · Portfolio Filter · Stats Counter
   Scroll Reveal · Video Modal · Smooth Scroll · Cursor
   ============================================================ */
'use strict';

const qs  = (s, c=document) => c.querySelector(s);
const qsa = (s, c=document) => [...c.querySelectorAll(s)];

/* ============================================================
   LANGUAGE & TRANSLATION SYSTEM
   ============================================================ */
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.careers': 'Careers',
    'nav.cta': 'Connect with Us',
    'hero.title': 'WE DON\'T SHOOT<br> WE CRAFT LEGACY',
    'hero.tagline': 'Indore | Pan India | Destination Worldwide',
    'hero.cta': 'Work with NJ',
    'stats.weddings': 'WEDDINGS CRAFTED',
    'stats.brands': 'BRANDS TRANSFORMATION',
    'stats.years': 'YEARS OF ARTISTRY',
    'stats.highlight': 'Same-Day Cinematic Edits available.',
    'legacy.heading': 'CHOOSE YOUR LEGACY',
    'service.1.title': 'WEDDING &<br>PRE-WEDDING SHOOTS',
    'service.1.desc': 'Flawless stories.<br>Cinematic memories.',
    'service.1.cta': 'Create Your Memories',
    'service.2.title': 'BRAND BUILDING &<br>SOCIAL MEDIA MARKETING',
    'service.2.desc': 'Strategies that dominate.<br>Campaigns that convert.',
    'service.2.cta': 'Scale Your Brand',
    'service.3.title': 'CREATOR SHOOT &<br>PERSONAL BRAND BUILDING',
    'service.3.desc': 'Short form. Big impact.<br>Impossible to ignore.',
    'service.3.cta': 'Start Creating',
    'trusted.heading': 'Trusted by leading creators and brands',
  },
  hi: {
    'nav.home': 'होम',
    'nav.services': 'सेवाएं',
    'nav.contact': 'संपर्क',
    'nav.careers': 'करियर',
    'nav.cta': 'हमसे जुड़ें',
    'hero.title': 'हम शूट नहीं करते<br> हम विरासत बनाते हैं',
    'hero.tagline': 'इंदौर | पैन इंडिया | दुनिया भर में गंतव्य',
    'hero.cta': 'NJ के साथ काम करें',
    'stats.weddings': 'विवाह तैयार किए',
    'stats.brands': 'ब्रांड परिवर्तन',
    'stats.years': 'कलात्मकता के वर्ष',
    'stats.highlight': 'समान-दिन सिनेमाटिक संपादन उपलब्ध है।',
    'legacy.heading': 'अपनी विरासत चुनें',
    'service.1.title': 'विवाह और<br>प्री-वेडिंग शूट',
    'service.1.desc': 'त्रुटिहीन कहानियाँ।<br>सिनेमाटिक यादें।',
    'service.1.cta': 'अपनी यादें बनाएं',
    'service.2.title': 'ब्रांड बिल्डिंग और<br>सोशल मीडिया मार्केटिंग',
    'service.2.desc': 'प्रभुत्व की रणनीति।<br>रूपांतरण अभियान।',
    'service.2.cta': 'अपना ब्रांड बढ़ाएं',
    'service.3.title': 'निर्माता शूट और<br>व्यक्तिगत ब्रांड बिल्डिंग',
    'service.3.desc': 'लघु रूप। बड़ा प्रभाव।<br>अपरिहार्य।',
    'service.3.cta': 'बनाना शुरू करें',
    'trusted.heading': 'शीर्ष निर्माताओं और ब्रांडों द्वारा विश्वस्त',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.careers': 'Carreras',
    'nav.cta': 'Conéctate con nosotros',
    'hero.title': 'NO DISPARAMOS<br> CREAMOS LEGADO',
    'hero.tagline': 'Indore | Pan India | Destino Worldwide',
    'hero.cta': 'Trabajar con NJ',
    'stats.weddings': 'BODAS CREADAS',
    'stats.brands': 'TRANSFORMACIÓN DE MARCAS',
    'stats.years': 'AÑOS DE ARTESANÍA',
    'stats.highlight': 'Ediciones cinematográficas del mismo día disponibles.',
    'legacy.heading': 'ELIGE TU LEGADO',
    'service.1.title': 'BODAS Y<br>SESIONES PRE-BODA',
    'service.1.desc': 'Historias impecables.<br>Recuerdos cinematográficos.',
    'service.1.cta': 'Crea tus recuerdos',
    'service.2.title': 'CONSTRUCCIÓN DE MARCA Y<br>MARKETING EN REDES SOCIALES',
    'service.2.desc': 'Estrategias que dominan.<br>Campañas que convierten.',
    'service.2.cta': 'Amplía tu marca',
    'service.3.title': 'SESIONES DE CREADOR Y<br>CONSTRUCCIÓN DE MARCA PERSONAL',
    'service.3.desc': 'Forma corta. Gran impacto.<br>Imposible ignorar.',
    'service.3.cta': 'Comienza a crear',
    'trusted.heading': 'Confiado por creadores y marcas líderes',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.careers': 'Carrières',
    'nav.cta': 'Connectez-vous avec nous',
    'hero.title': 'NOUS NE TOURNONS PAS<br> NOUS CRÉONS L\'HÉRITAGE',
    'hero.tagline': 'Indore | Pan India | Destination Mondial',
    'hero.cta': 'Travailler avec NJ',
    'stats.weddings': 'MARIAGES CRÉÉS',
    'stats.brands': 'TRANSFORMATION DE MARQUES',
    'stats.years': 'ANNÉES D\'ARTISANAT',
    'stats.highlight': 'Éditions cinématographiques du jour même disponibles.',
    'legacy.heading': 'CHOISISSEZ VOTRE HÉRITAGE',
    'service.1.title': 'MARIAGES ET<br>SÉANCES PRÉ-MARIAGE',
    'service.1.desc': 'Des histoires impeccables.<br>Des souvenirs cinématographiques.',
    'service.1.cta': 'Créez vos souvenirs',
    'service.2.title': 'CONSTRUCTION DE MARQUE ET<br>MARKETING SUR LES RÉSEAUX SOCIAUX',
    'service.2.desc': 'Des stratégies qui dominent.<br>Des campagnes qui convertissent.',
    'service.2.cta': 'Développez votre marque',
    'service.3.title': 'SÉANCES DE CRÉATEUR ET<br>CONSTRUCTION DE MARQUE PERSONNELLE',
    'service.3.desc': 'Format court. Grand impact.<br>Impossible à ignorer.',
    'service.3.cta': 'Commencez à créer',
    'trusted.heading': 'Approuvé par les créateurs et les marques leaders',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    'nav.careers': 'Karriere',
    'nav.cta': 'Verbinden Sie sich mit uns',
    'hero.title': 'WIR SCHREITEN NICHT<br> WIR SCHAFFEN VERMÄCHTNIS',
    'hero.tagline': 'Indore | Pan India | Ziel Worldwide',
    'hero.cta': 'Mit NJ arbeiten',
    'stats.weddings': 'HOCHZEITEN GESTALTET',
    'stats.brands': 'MARKENTRANSFORMATION',
    'stats.years': 'JAHRE DES HANDWERKS',
    'stats.highlight': 'Kinematografische Bearbeitungen am selben Tag verfügbar.',
    'legacy.heading': 'WÄHLEN SIE IHREN ERBE',
    'service.1.title': 'HOCHZEITEN UND<br>PRE-WEDDING-FOTOSHOOTINGS',
    'service.1.desc': 'Fehlerlose Geschichten.<br>Kinematografische Erinnerungen.',
    'service.1.cta': 'Erstelle deine Erinnerungen',
    'service.2.title': 'MARKENAUFBAU UND<br>SOCIAL-MEDIA-MARKETING',
    'service.2.desc': 'Strategien, die dominieren.<br>Kampagnen, die konvertieren.',
    'service.2.cta': 'Erweitern Sie Ihre Marke',
    'service.3.title': 'CREATOR-SHOOTING UND<br>PERSÖNLICHER MARKENAUFBAU',
    'service.3.desc': 'Kurzform. Große Wirkung.<br>Unmöglich zu ignorieren.',
    'service.3.cta': 'Beginnen Sie zu erstellen',
    'trusted.heading': 'Vertraut von führenden Erstellern und Marken',
  }
};

let currentLang = localStorage.getItem('njLang') || detectBrowserLanguage();

const detectBrowserLanguage = () => {
  const supported = ['en', 'hi', 'es', 'fr', 'de'];
  const browserLang = navigator.language.split('-')[0];
  return supported.includes(browserLang) ? browserLang : 'en';
};

const setLanguage = (lang) => {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('njLang', lang);
  updatePageContent(lang);
  if (qs('#langSelect')) qs('#langSelect').value = lang;
  document.documentElement.lang = lang;
};

const t = (key) => translations[currentLang]?.[key] || translations['en']?.[key] || key;

const updatePageContent = (lang) => {
  // Update navigation
  const navLinks = qsa('.nav-link');
  if (navLinks[0]) navLinks[0].textContent = t('nav.home');
  if (navLinks[1]) navLinks[1].textContent = t('nav.services');
  if (navLinks[2]) navLinks[2].textContent = t('nav.contact');
  if (navLinks[3]) navLinks[3].textContent = t('nav.careers');
  
  const navCTA = qs('.btn-nav-cta');
  if (navCTA) navCTA.textContent = t('nav.cta');

  // Update hero
  const heroTitle = qs('.hero-title');
  if (heroTitle) heroTitle.innerHTML = t('hero.title');
  const heroTagline = qs('.hero-tagline');
  if (heroTagline) heroTagline.textContent = t('hero.tagline');
  const heroCTA = qs('.btn-hero-primary');
  if (heroCTA) heroCTA.textContent = t('hero.cta');

  // Update stats
  const statsItems = qsa('.stats-item');
  if (statsItems[0]) statsItems[0].innerHTML = `<strong class="stats-num" data-target="500">0</strong><strong>+</strong><span>${t('stats.weddings')}</span>`;
  if (statsItems[1]) statsItems[1].innerHTML = `<span>${t('stats.brands')}</span>`;
  if (statsItems[2]) statsItems[2].innerHTML = `<strong class="stats-num" data-target="5">0</strong><strong>+</strong><span>${t('stats.years')}</span>`;
  const statsHighlight = qs('.stats-highlight');
  if (statsHighlight) statsHighlight.textContent = t('stats.highlight');

  // Update legacy heading
  const legacyHeading = qs('.legacy-heading');
  if (legacyHeading) legacyHeading.textContent = t('legacy.heading');

  // Update services
  const serviceTitles = qsa('.service-title');
  const serviceDescs = qsa('.service-desc');
  const serviceCTAs = qsa('.service-cta');
  
  if (serviceTitles[0]) serviceTitles[0].innerHTML = t('service.1.title');
  if (serviceDescs[0]) serviceDescs[0].innerHTML = t('service.1.desc');
  if (serviceCTAs[0]) serviceCTAs[0].innerHTML = `${t('service.1.cta')} <span class="arrow">→</span>`;
  
  if (serviceTitles[1]) serviceTitles[1].innerHTML = t('service.2.title');
  if (serviceDescs[1]) serviceDescs[1].innerHTML = t('service.2.desc');
  if (serviceCTAs[1]) serviceCTAs[1].innerHTML = `${t('service.2.cta')} <span class="arrow">→</span>`;
  
  if (serviceTitles[2]) serviceTitles[2].innerHTML = t('service.3.title');
  if (serviceDescs[2]) serviceDescs[2].innerHTML = t('service.3.desc');
  if (serviceCTAs[2]) serviceCTAs[2].innerHTML = `${t('service.3.cta')} <span class="arrow">→</span>`;

  // Update trusted section
  const trustedHeading = qs('.trusted-wrap h2');
  if (trustedHeading) trustedHeading.textContent = t('trusted.heading');
};

const initLanguageSystem = () => {
  const langSelect = qs('#langSelect');
  if (!langSelect) return;
  
  // Set initial language based on browser
  setLanguage(currentLang);
  
  langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
};


/* ============================================================
   0. LOADER — REMOVED FOR FASTER LOAD
   ============================================================ */


/* ============================================================
   SHARED — one single submitToSheet used by both forms
   ============================================================ */
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxhDJkwGpunf6fVpzZdskA0nAs3RnzG1HQTR4seP97IS4WJpyWKCpadIsB9jyidbRT/exec';

const submitToSheet = async (data) => {
  // No Content-Type header — avoids CORS preflight that GAS cannot handle
  const res = await fetch(SCRIPT_URL, {
    method : 'POST',
    body   : JSON.stringify(data),
  });
  try {
    return await res.json();
  } catch {
    // GAS redirect made response unreadable — row was still written
    return { success: true };
  }
};

/* ============================================================
   1. NAVBAR
   ============================================================ */
const initNavbar = () => {
  const nav = qs('.navbar');
  if (!nav) return;
  const tick = () => nav.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', tick, { passive: true });
  tick();

  const sections = qsa('section[id]');
  const links    = qsa('.nav-link');
  if (!sections.length || !links.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
    });
  }, { threshold: 0.35, rootMargin: `-${nav.offsetHeight}px 0px 0px 0px` });

  sections.forEach(s => io.observe(s));
};

/* ============================================================
   2. MOBILE MENU
   ============================================================ */
const initMobileMenu = () => {
  const btn    = qs('#hamburger');
  const drawer = qs('#mobileNav');
  if (!btn || !drawer) return;

  const toggle = (force) => {
    const open = force !== undefined ? force : !btn.classList.contains('open');
    btn.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    btn.setAttribute('aria-expanded', open);
  };

  btn.addEventListener('click', () => toggle());
  qsa('.nav-link', drawer).forEach(l => l.addEventListener('click', () => toggle(false)));
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !drawer.contains(e.target)) toggle(false);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
};

/* ============================================================
   3. PORTFOLIO FILTER
   ============================================================ */
const initPortfolioFilter = () => {
  const filters = qsa('.port-filter');
  const items   = qsa('.port-item');
  if (!filters.length || !items.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const cat = btn.dataset.filter;
      items.forEach(item => {
        const match = cat === 'all' || item.dataset.cat === cat;
        item.classList.toggle('hidden', !match);
      });

      setTimeout(() => {
        qsa('.port-item:not(.hidden)').forEach(el => {
          if (!el.classList.contains('visible')) el.classList.add('visible');
        });
      }, 50);
    });
  });
};

/* ============================================================
   4. SCROLL REVEAL
   ============================================================ */
const initScrollReveal = () => {
  const selectors = [
    '.section-header', '.legacy-heading', '.legacy-card',
    '.port-filters', '.port-item',
    '.vt-row', '.reviews-left', '.reviews-right',
    '.cta-content', '.footer-brand', '.footer-col',
  ];
  selectors.forEach(sel => {
    qsa(sel).forEach((el, i) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        if (i > 0 && i <= 4) el.classList.add(`reveal-delay-${Math.min(i, 4)}`);
      }
    });
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  qsa('.reveal').forEach(el => io.observe(el));
};

/* ============================================================
   5. SMOOTH SCROLL
   ============================================================ */
const initSmoothScroll = () => {
  const navH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '72', 10
  );
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = qs(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
  });
};

/* ============================================================
   6. STATS COUNTER
   ============================================================ */
const initStatsCounter = () => {
  qsa('.stats-num').forEach(el => {
    const end = parseInt(el.dataset.target || el.textContent, 10);
    if (isNaN(end)) return;
    let started = false;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        io.disconnect();
        const dur   = 1600;
        const start = performance.now();
        const step  = now => {
          const p = Math.min((now - start) / dur, 1);
          el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * end);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.8 });

    io.observe(el);
  });
};

/* ============================================================
   7. VIDEO MODAL
   ============================================================ */
const initVideoModal = () => {
  const modal = qs('#vModal');
  const body  = qs('#vModalBody');
  const close = qs('#vModalClose');
  const bg    = qs('#vModalBg');
  if (!modal) return;

  const open = (url) => {
    body.innerHTML = url
      ? `<iframe src="${url}" allow="autoplay; fullscreen" allowfullscreen></iframe>`
      : `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#C6A86E;font-family:Georgia,serif;font-size:1.2rem;background:#111">Video coming soon</div>`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.hidden = true;
    body.innerHTML = '';
    document.body.style.overflow = '';
  };

  qsa('.vt-thumb').forEach(btn => btn.addEventListener('click', () => open(btn.dataset.video || '')));
  close?.addEventListener('click', closeModal);
  bg?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
};

/* ============================================================
   7.4. IMAGE LIGHTBOX (service photos + portfolio)
   ============================================================ */
const initImageLightbox = () => {
  const modal = qs('#imageModal');
  const modalImg = qs('#imageModalImg');
  const closeBtn = qs('#imageModalClose');
  const bg = qs('#imageModalBg');
  if (!modal || !modalImg || !closeBtn || !bg) return;

  const openModal = (src, alt) => {
    modalImg.src = src;
    modalImg.alt = alt || 'Image preview';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.hidden = true;
    modalImg.src = '';
    document.body.style.overflow = '';
  };

  const photoSelectors = '.service-photos img, .photo-slot img, .port-item img';
  qsa(photoSelectors).forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openModal(img.src, img.alt || ''));
  });

  closeBtn.addEventListener('click', closeModal);
  bg.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
};

/* ============================================================
   7.5. BOOKING MODAL (index.html)
   ============================================================ */
const initBookingModal = () => {
  const openBtn     = qs('#openBookingModal');
  const modal       = qs('#bookingModal');
  const bg          = qs('#bookingModalBg');
  const close       = qs('#bookingModalClose');
  const form        = qs('#bookingForm');
  const feedback    = qs('#bookingFeedback');

  if (!openBtn || !modal || !bg || !close || !form) return;

  const storageKey = 'njVisualsBookingDraft';

  const saveDraft = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({
        name:      qs('#bookName').value,
        phone:     qs('#bookPhone').value,
        service:   qs('#bookService').value,
        eventDate: qs('#bookEventDate').value,
        budget:    qs('#bookBudget').value,
        message:   qs('#bookMessage').value,
      }));
    } catch (e) {}
  };

  const loadDraft = () => {
    try {
      const d = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (!d) return;
      if (d.name)      qs('#bookName').value      = d.name;
      if (d.phone)     qs('#bookPhone').value     = d.phone;
      if (d.service)   qs('#bookService').value   = d.service;
      if (d.eventDate) qs('#bookEventDate').value = d.eventDate;
      if (d.budget)    qs('#bookBudget').value    = d.budget;
      if (d.message)   qs('#bookMessage').value   = d.message;
    } catch (e) {}
  };

  const clearDraft = () => localStorage.removeItem(storageKey);

  const showFeedback = (msg, type = 'success') => {
    feedback.textContent = msg;
    feedback.className = `booking-feedback ${type}`;
  };

  const openModal = () => {
    loadDraft();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    feedback.textContent = '';
    feedback.className = 'booking-feedback';
    qs('#bookName')?.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      type:      'booking',
      name:      qs('#bookName').value.trim(),
      phone:     qs('#bookPhone').value.trim(),
      service:   qs('#bookService').value,
      eventDate: qs('#bookEventDate').value,
      budget:    qs('#bookBudget').value,
      message:   qs('#bookMessage').value.trim(),
    };

    if (!data.name)  { showFeedback('Please enter your name.', 'error'); return; }
    if (!data.phone) { showFeedback('Please enter your phone number.', 'error'); return; }

    showFeedback('Sending…', 'success');

    try {
      const result = await submitToSheet(data);
      if (result.success) {
        showFeedback('✅ Request sent! We will contact you soon.', 'success');
        form.reset();
        clearDraft();
        setTimeout(closeModal, 1800);
      } else {
        showFeedback('❌ Submission failed: ' + (result.error || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Booking submit error:', err);
      showFeedback('❌ Network error. Please try again.', 'error');
    }
  });

  openBtn.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);
  bg.addEventListener('click', closeModal);
  ['#bookName','#bookPhone','#bookService','#bookEventDate','#bookBudget','#bookMessage']
    .forEach(sel => qs(sel)?.addEventListener('input', saveDraft));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
};

/* ============================================================
   7.6. APPLICATION MODAL (careers.html)
   ============================================================ */
const initApplicationModal = () => {
  const modal      = qs('#applyModal');
  const bg         = qs('#applyModalBg');
  const close      = qs('#applyModalClose');
  const form       = qs('#applyForm');
  const thankYou   = qs('#thankYou');
  const jobTitleEl = qs('#jobTitle');
  const openBtns   = qsa('.btn-job-apply');

  if (!modal || !bg || !close || !form) return;

  let currentJob = '';

  const showFeedback = (msg, type = 'success') => {
    const fb = qs('#applyFeedback');
    if (!fb) return;
    fb.textContent = msg;
    fb.className = `booking-feedback ${type}`;
  };

  const openModal = (jobName) => {
    currentJob = jobName || '';
    if (jobTitleEl) jobTitleEl.textContent = currentJob;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    form.hidden = false;
    if (thankYou) thankYou.hidden = true;
    showFeedback('');
    qs('#appFullName')?.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    form.reset();
    form.hidden = false;
    if (thankYou) thankYou.hidden = true;
    showFeedback('');
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      type:      'application',
      position:  currentJob,
      fullName:  qs('#appFullName').value.trim(),
      email:     qs('#appEmail').value.trim(),
      phone:     qs('#appPhone').value.trim(),
      resume:    qs('#appResume').files[0] ? qs('#appResume').files[0].name : 'Not provided',
      hasCamera: qs('input[name="appCamera"]:checked')?.value || '',
    };

    if (!data.fullName)  { showFeedback('Please enter your full name.', 'error'); return; }
    if (!data.email)     { showFeedback('Please enter your email.', 'error'); return; }
    if (!data.phone)     { showFeedback('Please enter your phone number.', 'error'); return; }
    if (!data.hasCamera) { showFeedback('Please select your camera setup option.', 'error'); return; }

    showFeedback('Sending…', 'success');

    try {
      const result = await submitToSheet(data);
      if (result.success) {
        form.hidden = true;
        if (thankYou) thankYou.hidden = false;
        setTimeout(closeModal, 3000);
      } else {
        showFeedback('❌ Submission failed: ' + (result.error || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Application submit error:', err);
      showFeedback('❌ Network error. Please try again.', 'error');
    }
  });

  openBtns.forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.job || '')));
  close.addEventListener('click', closeModal);
  bg.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
};


/* AI */

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const initMagnetic = () => {
  const els = document.querySelectorAll('.btn-primary, .btn-nav-cta');

  els.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.03)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
};


/* ============================================================
   7.7. WHY NJ ROTATOR
   ============================================================ */
const initWhyNJRotator = () => {
  const container = qs('#whyRotator');
  if (!container) return;

  const lines = [
    'Why NJ Visuals',
    'Most content is made to be seen.',
    'Ours is made to be remembered.',
    'If it\'s not intentional, we don\'t create it.',
  ];

  let index = 0;

  const showNext = () => {
    const newLine = document.createElement('div');
    newLine.className = 'why-rotator-line';
    newLine.textContent = lines[index % lines.length];

    container.appendChild(newLine);

    requestAnimationFrame(() => newLine.classList.add('visible'));

    const oldLine = container.children[0];
    if (container.children.length > 1 && oldLine !== newLine) {
      oldLine.classList.remove('visible');
      oldLine.classList.add('exit');
      setTimeout(() => oldLine.remove(), 520);
    }

    index += 1;
  };

  showNext();
  setInterval(showNext, 2800);
};

/* ============================================================
   8. HERO PARALLAX
   ============================================================ */
const initParallax = () => {
  const els = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    els.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
};

/* ============================================================
   9. FOOTER YEAR
   ============================================================ */
const initFooterYear = () => {
  const el = qs('#footerYear');
  if (el) el.textContent = new Date().getFullYear();
};

/* ============================================================
   10. LAZY IMAGE SHIMMER
   ============================================================ */
const initLazyImages = () => {
  qsa('img:not([loading])').forEach(img => img.setAttribute('loading', 'lazy'));

  if (!qs('#shimmer-keyframes')) {
    const s = document.createElement('style');
    s.id = 'shimmer-keyframes';
    s.textContent = `@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`;
    document.head.appendChild(s);
  }

  qsa('img').forEach(img => {
    if (!img.complete || img.naturalWidth === 0) {
      img.style.background = 'linear-gradient(90deg,#151515 25%,#1e1e1e 50%,#151515 75%)';
      img.style.backgroundSize = '200% 100%';
      img.style.animation = 'shimmer 1.4s infinite';
      img.addEventListener('load', () => { img.style.background = ''; img.style.animation = ''; }, { once: true });
    }
  });
};

/* ============================================================
   11. CUSTOM CURSOR (desktop only) — REMOVED
   ============================================================ */
/* const initCursor = () => {
  if (window.matchMedia('(pointer:coarse)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');

  Object.assign(dot.style, {
    position:'fixed', top:'0', left:'0', width:'9px', height:'9px',
    borderRadius:'50%', background:'var(--gold)', pointerEvents:'none',
    zIndex:'99999', transform:'translate(-50%,-50%)',
    transition:'width .2s,height .2s,opacity .3s', opacity:'0', mixBlendMode:'difference',
  });
  Object.assign(ring.style, {
    position:'fixed', top:'0', left:'0', width:'34px', height:'34px',
    borderRadius:'50%', border:'1px solid var(--gold)', pointerEvents:'none',
    zIndex:'99998', transform:'translate(-50%,-50%)',
    transition:'width .3s,height .3s,opacity .3s', opacity:'0',
  });

  document.body.append(dot, ring);
  let mx=0, my=0, rx=0, ry=0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = `${mx}px`; dot.style.top = `${my}px`;
    dot.style.opacity = '1'; ring.style.opacity = '1';
  });

  const lerp = () => {
    rx += (mx-rx)*0.11; ry += (my-ry)*0.11;
    ring.style.left = `${rx}px`; ring.style.top = `${ry}px`;
    requestAnimationFrame(lerp);
  };
  lerp();

  const hover = 'a,button,.legacy-card,.port-item,.vt-thumb';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hover)) { dot.style.width = dot.style.height = '14px'; ring.style.width = ring.style.height = '50px'; }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hover)) { dot.style.width = dot.style.height = '9px'; ring.style.width = ring.style.height = '34px'; }
  });
  document.addEventListener('mouseleave', () => { dot.style.opacity = ring.style.opacity = '0'; });
}; */

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSystem();
  initNavbar();
  initMobileMenu();
  initPortfolioFilter();
  initScrollReveal();
  initSmoothScroll();
  initStatsCounter();
  initVideoModal();
  initImageLightbox();
  initBookingModal();
  initApplicationModal();
  initWhyNJRotator();
  initParallax();
  initFooterYear();
  initLazyImages();
  initMagnetic();
  // initCursor(); // Removed custom cursor animation

  console.log('%cNJ Visuals — We Don\'t Shoot. We Craft Legacy. ✦', 'color:#C6A86E;font-family:Georgia,serif;font-size:13px;');
});
