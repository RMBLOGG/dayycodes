/* ═══════════════════════════════════════════════════════════════════
   PORTFOLIO — RAMDAN HIDAYAH  (Updated v2)
   main.js
   ═══════════════════════════════════════════════════════════════════ */

'use strict';

/* ─── 1. CURSOR GLOW ─────────────────────────────────────────────── */
(function initCursorGlow() {
  var glow = document.getElementById('cursorGlow');
  if (!glow) return;
  var isDesktop = window.matchMedia('(pointer: fine)').matches;
  if (!isDesktop) { glow.style.display = 'none'; return; }

  var mouseX = 0, mouseY = 0, posX = 0, posY = 0;
  document.addEventListener('mousemove', function(e) { mouseX = e.clientX; mouseY = e.clientY; });
  function animateCursor() {
    posX += (mouseX - posX) * 0.08;
    posY += (mouseY - posY) * 0.08;
    glow.style.transform = 'translate(calc(' + posX + 'px - 50%), calc(' + posY + 'px - 50%))';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
})();


/* ─── 2. THEME TOGGLE (Dark / Light) ────────────────────────────── */
(function initTheme() {
  var btn  = document.getElementById('themeToggle');
  var icon = document.getElementById('themeIcon');
  var html = document.documentElement;

  var saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);

  if (btn) {
    btn.addEventListener('click', function() {
      var current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    if (icon) {
      icon.className = t === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }
})();


/* ─── 3. LANGUAGE TOGGLE (ID / EN) ──────────────────────────────── */
var TRANSLATIONS = {
  id: {
    'nav.about':      'Tentang',
    'nav.skills':     'Skills',
    'nav.projects':   'Proyek',
    'nav.experience': 'Pengalaman',
    'nav.contact':    'Kontak',
    'hero.greeting':  'Halo, saya',
    'hero.rolePrefix':'Seorang ',
    'hero.tagline':   'Developer indie yang membangun platform streaming & web app kreatif dengan pendekatan desain yang clean dan modern.',
    'hero.available': 'Open to work',
    'hero.yearsExp':  'Thn Pengalaman',
    'hero.cta1':      'Lihat Karya',
    'hero.cta2':      'Hubungi Saya',
    'about.title':       'Tentang',
    'about.titleAccent': 'Saya',
    'about.badge':    'Full Stack Dev',
    'about.subtitle': 'Developer & Creator',
    'about.bio1':     'Developer indie yang suka bikin platform streaming dan web app kreatif. Fokus di Flask, Python, dan desain UI yang clean dan modern.',
    'about.bio2':     'Dari anime streaming sampai live score bola — saya membangun produk digital yang bukan cuma fungsional, tapi juga enak dipandang dan nyaman dipakai. Setiap proyek adalah kesempatan untuk belajar sesuatu yang baru.',
    'about.d1':       'Self-taught developer sejak 2021',
    'about.d2':       'Spesialis platform streaming & web apps',
    'about.d3':       'Juga develop Android app via AIDE (Java)',
    'about.d4':       'Deploy di Vercel, Railway & Supabase',
    'about.d5':       'Berpengalaman web scraping & API discovery',
    'about.cvBtn':    'Download CV',
    'about.stat1':    'Tahun Pengalaman',
    'about.stat2':    'Proyek Selesai',
    'about.stat3':    'Klien Puas',
    'skills.title':       'Keahlian',
    'skills.titleAccent': 'Teknis',
    'skills.subtitle':    'Tools dan teknologi yang saya kuasai untuk membangun produk digital.',
    'projects.title':      'Karya',
    'projects.titleAccent':'Terbaru',
    'projects.subtitle':   'Kumpulan proyek yang telah saya bangun dengan penuh semangat.',
    'projects.visitBtn':   'Kunjungi',
    'exp.title':       'Perjalanan',
    'exp.titleAccent': 'Karier',
    'exp.subtitle':    'Jejak pengalaman membangun produk digital dari 2021 hingga sekarang.',
    'exp.now':   'Sekarang',
    'exp.j1t':   'Indie Developer & Freelancer',
    'exp.j1d':   'Membangun dan mengoperasikan beberapa platform web secara mandiri, termasuk anime streaming, live score, dan berbagai web app kreatif yang dimonetisasi melalui ad network.',
    'exp.j2t':   'Web Developer',
    'exp.j2c':   'Proyek Klien Freelance',
    'exp.j2d':   'Mengembangkan berbagai website untuk klien lokal, mulai dari landing page bisnis, toko online sederhana, hingga dashboard admin berbasis Flask dan Python.',
    'exp.j3t':   'Belajar Mandiri — Full Stack Web',
    'exp.j3d':   'Mulai mendalami Flask, REST API, dan Supabase melalui proyek-proyek pribadi. Membangun fondasi kuat dalam pengembangan web full stack dan desain UI/UX.',
    'exp.j4t':   'Android Developer (Java)',
    'exp.j4c':   'Proyek Pribadi',
    'exp.j4d':   'Membangun beberapa aplikasi Android dengan Java menggunakan AIDE, termasuk app manga reader dan streaming anime dengan fitur Google OAuth login.',
    'contact.title':      'Mari',
    'contact.titleAccent':'Terhubung',
    'contact.subtitle':   'Punya project seru? Yuk ngobrol!',
    'contact.fn':    'Nama Lengkap',
    'contact.fm':    'Pesan',
    'contact.fs':    'Kirim Pesan',
    'contact.loc':   'Lokasi',
    'contact.hrs':   'jam',
    'contact.status':'Open for projects',
    'contact.findme':'Temukan saya di:',
    'footer.made':   'Dibuat dengan'
  },
  en: {
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.projects':   'Projects',
    'nav.experience': 'Experience',
    'nav.contact':    'Contact',
    'hero.greeting':  'Hello, I\'m',
    'hero.rolePrefix':'A ',
    'hero.tagline':   'Indie developer building streaming platforms & creative web apps with clean, modern design.',
    'hero.available': 'Open to work',
    'hero.yearsExp':  'Yrs Exp',
    'hero.cta1':      'View Work',
    'hero.cta2':      'Contact Me',
    'about.title':       'About',
    'about.titleAccent': 'Me',
    'about.badge':    'Full Stack Dev',
    'about.subtitle': 'Developer & Creator',
    'about.bio1':     'Indie developer passionate about building streaming platforms and creative web apps. Focused on Flask, Python, and clean, modern UI design.',
    'about.bio2':     'From anime streaming to football live scores — I build digital products that are not just functional, but also visually pleasing and easy to use. Every project is a chance to learn something new.',
    'about.d1':       'Self-taught developer since 2021',
    'about.d2':       'Specialist in streaming platforms & web apps',
    'about.d3':       'Also builds Android apps via AIDE (Java)',
    'about.d4':       'Deploy on Vercel, Railway & Supabase',
    'about.d5':       'Experienced in web scraping & API discovery',
    'about.cvBtn':    'Download CV',
    'about.stat1':    'Years Experience',
    'about.stat2':    'Projects Done',
    'about.stat3':    'Happy Clients',
    'skills.title':       'Technical',
    'skills.titleAccent': 'Skills',
    'skills.subtitle':    'Tools and technologies I use to build digital products.',
    'projects.title':      'Recent',
    'projects.titleAccent':'Works',
    'projects.subtitle':   'A collection of projects I built with passion.',
    'projects.visitBtn':   'Visit Site',
    'exp.title':       'Career',
    'exp.titleAccent': 'Journey',
    'exp.subtitle':    'Track record of building digital products from 2021 to present.',
    'exp.now':   'Present',
    'exp.j1t':   'Indie Developer & Freelancer',
    'exp.j1d':   'Built and operated several web platforms independently — anime streaming, live scores, and various creative web apps monetized via ad networks.',
    'exp.j2t':   'Web Developer',
    'exp.j2c':   'Freelance Client Projects',
    'exp.j2d':   'Developed websites for local clients — business landing pages, simple e-commerce, and Flask-based admin dashboards.',
    'exp.j3t':   'Self-Study — Full Stack Web',
    'exp.j3d':   'Dived deep into Flask, REST API, and Supabase through personal projects. Built a solid foundation in full stack web development and UI/UX design.',
    'exp.j4t':   'Android Developer (Java)',
    'exp.j4c':   'Personal Projects',
    'exp.j4d':   'Built several Android apps in Java using AIDE — including a manga reader and anime streaming app with Google OAuth login.',
    'contact.title':      'Let\'s',
    'contact.titleAccent':'Connect',
    'contact.subtitle':   'Have an exciting project? Let\'s talk!',
    'contact.fn':    'Full Name',
    'contact.fm':    'Message',
    'contact.fs':    'Send Message',
    'contact.loc':   'Location',
    'contact.hrs':   'hours',
    'contact.status':'Open for projects',
    'contact.findme':'Find me on:',
    'footer.made':   'Made with'
  }
};

var TYPING_ROLES = {
  id: ['Full Stack Developer', 'Web Designer', 'Freelancer', 'Anime Enthusiast'],
  en: ['Full Stack Developer', 'Web Designer', 'Freelancer', 'Anime Enthusiast']
};

var currentLang = localStorage.getItem('lang') || 'id';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  var label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'id' ? 'ID' : 'EN';

  var els = document.querySelectorAll('[data-i18n]');
  els.forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
}

(function initLang() {
  applyLang(currentLang);

  var btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', function() {
      applyLang(currentLang === 'id' ? 'en' : 'id');
    });
  }
})();


/* ─── 4. NAVBAR — HAMBURGER FIX + CLOSE BTN ─────────────────────── */
(function initNavbar() {
  var navbar    = document.getElementById('navbar');
  var navLinks  = document.querySelectorAll('.nav-link');
  var sections  = document.querySelectorAll('section[id]');
  var hamburger = document.getElementById('hamburger');
  var hambIcon  = document.getElementById('hambIcon');
  var navMenu   = document.getElementById('navLinks');

  if (!navbar) return;

  // Inject close button inside mobile menu
  if (navMenu) {
    var closeBtn = document.createElement('button');
    closeBtn.className = 'nav-close-btn';
    closeBtn.setAttribute('aria-label', 'Close menu');
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    navMenu.appendChild(closeBtn);
    closeBtn.addEventListener('click', closeMenu);
  }

  function closeMenu() {
    if (navMenu) navMenu.classList.remove('open');
    if (hamburger) hamburger.classList.remove('open');
    if (hambIcon) { hambIcon.className = 'fa-solid fa-bars'; }
  }

  function openMenu() {
    if (navMenu) navMenu.classList.add('open');
    if (hamburger) hamburger.classList.add('open');
    if (hambIcon) { hambIcon.className = 'fa-solid fa-xmark'; }
  }

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateScrollTop();
    updateActiveNav();
  }

  function updateActiveNav() {
    var current = '';
    sections.forEach(function(sec) {
      var top    = sec.offsetTop - 120;
      var bottom = top + sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(function(link) {
      var href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Close on nav link click
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        closeMenu();
        setTimeout(function() {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  });

  // Toggle hamburger
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      if (navMenu && navMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close on outside click
  document.addEventListener('click', function(e) {
    if (!navMenu || !hamburger) return;
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      if (navMenu.classList.contains('open')) closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
})();


/* ─── 5. SCROLL TO TOP ───────────────────────────────────────────── */
var scrollTopBtn = document.getElementById('scrollTop');
function updateScrollTop() {
  if (!scrollTopBtn) return;
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ─── 6. HERO TYPING EFFECT ──────────────────────────────────────── */
(function initTyping() {
  var el = document.getElementById('typingText');
  if (!el) return;

  var roleIdx = 0, charIdx = 0, isDeleting = false, pauseCount = 0;

  function getRoles() {
    return TYPING_ROLES[currentLang] || TYPING_ROLES['id'];
  }

  function type() {
    var roles = getRoles();
    var currentRole = roles[roleIdx % roles.length];

    if (isDeleting) {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    var speed = isDeleting ? 60 : 110;

    if (!isDeleting && charIdx === currentRole.length) {
      pauseCount++;
      if (pauseCount > 1) { isDeleting = true; pauseCount = 0; }
      speed = 1400;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 400;
    }
    setTimeout(type, speed);
  }
  setTimeout(type, 800);
})();


/* ─── 7. CANVAS PARTICLE BACKGROUND ─────────────────────────────── */
(function initParticles() {
  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
  }

  function createParticles() {
    particles = [];
    var count = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3, vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.1, dAlpha: (Math.random() - 0.5) * 0.004
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) {
      p.x += p.vx; p.y += p.vy; p.alpha += p.dAlpha;
      if (p.alpha <= 0.05 || p.alpha >= 0.7) p.dAlpha *= -1;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(168, 85, 247, ' + p.alpha + ')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); createParticles(); draw();
  window.addEventListener('resize', function() { resize(); createParticles(); });
})();


/* ─── 8. SCROLL REVEAL ───────────────────────────────────────────── */
(function initScrollReveal() {
  document.body.classList.add('js-ready');
  var revealEls = document.querySelectorAll('.reveal, .reveal-left');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  revealEls.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(function() { el.classList.add('visible'); }, 100);
    } else {
      observer.observe(el);
    }
  });
})();


/* ─── 9. SKILL PROGRESS BARS ─────────────────────────────────────── */
(function initSkillBars() {
  var bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var bar = entry.target;
        bar.style.width = bar.getAttribute('data-width') + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(function(bar) { observer.observe(bar); });
})();


/* ─── 10. COUNT-UP ANIMATION ─────────────────────────────────────── */
(function initCountUp() {
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el     = entry.target;
        var target = parseInt(el.getAttribute('data-target'), 10);
        var dur    = 1500;
        var step   = target / (dur / 16);
        var current = 0;
        var timer = setInterval(function() {
          current += step;
          if (current >= target) { el.textContent = target; clearInterval(timer); }
          else { el.textContent = Math.floor(current); }
        }, 16);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(function(el) { observer.observe(el); });
})();


/* ─── 11. IMAGE SKELETON & FALLBACK ──────────────────────────────── */
function removeSkeleton(id) {
  var skeleton = document.getElementById('skeleton-' + id);
  if (skeleton) {
    skeleton.style.transition = 'opacity 0.4s ease';
    skeleton.style.opacity    = '0';
    setTimeout(function() { if (skeleton.parentNode) skeleton.parentNode.removeChild(skeleton); }, 400);
  }
}

/* Auto-hide semua skeleton setelah max 5 detik — supaya nggak nutup thumbnail */
(function autoHideSkeletons() {
  setTimeout(function() {
    document.querySelectorAll('[id^="skeleton-"]').forEach(function(sk) {
      var idNum = sk.id.replace('skeleton-', '');
      removeSkeleton(idNum);
    });
  }, 5000);
})();

function handleImgError(img, id, title, color) {
  removeSkeleton(id);
  img.style.display = 'none';
  var fallback = document.createElement('div');
  fallback.className = 'card-fallback';
  fallback.style.background = 'linear-gradient(135deg, ' + color + '22 0%, #0a0a0f 100%)';
  fallback.innerHTML = '<div style="text-align:center;"><div style="font-size:2rem;margin-bottom:8px;opacity:0.3;"><i class="fa-solid fa-globe-asia"></i></div><div>' + title + '</div></div>';
  if (img.parentNode) img.parentNode.insertBefore(fallback, img);
}


/* ─── 12. FLASH MESSAGE AUTO-DISMISS ────────────────────────────── */
(function initFlashDismiss() {
  var flash = document.getElementById('flashMsg');
  if (!flash) return;
  setTimeout(function() {
    flash.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    flash.style.opacity    = '0';
    flash.style.transform  = 'translateX(120%)';
    setTimeout(function() { if (flash.parentNode) flash.parentNode.removeChild(flash); }, 500);
  }, 3000);
})();


/* ─── 13. SMOOTH SCROLL ──────────────────────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = anchor.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();


/* ─── 14. ACTIVE NAV ON LOAD ─────────────────────────────────────── */
window.addEventListener('load', function() {
  window.dispatchEvent(new Event('scroll'));
});


/* ─── 15. TEXT EFFECTS (Shimmer + Glitch + Letter Reveal) ───────── */
(function initTextEffects() {

  /* ── A. LETTER REVEAL — section titles & subtitles ── */
  function splitAndReveal(el, delay) {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    var text = el.textContent;
    el.textContent = '';
    el.style.visibility = 'visible';

    var frag = document.createDocumentFragment();
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement('span');
      span.className = 'letter-reveal-char';
      span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      span.style.animationDelay = (delay + i * 35) + 'ms';
      frag.appendChild(span);
    }
    el.appendChild(frag);
  }

  var revealTargets = document.querySelectorAll(
    '.section-tag, .section-subtitle, .timeline-title, .info-label, .footer-tagline'
  );

  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        splitAndReveal(entry.target, 0);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  revealTargets.forEach(function(el) {
    el.style.visibility = 'hidden';
    revealObs.observe(el);
  });


  /* ── B. SHIMMER SWEEP — section-title h2 headings ── */
  var shimmerTargets = document.querySelectorAll('.section-title');
  var shimmerObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('shimmer-active');
        shimmerObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  shimmerTargets.forEach(function(el) { shimmerObs.observe(el); });


  /* ── C. GLITCH EFFECT — hero name ── */
  var heroName = document.querySelector('.hero-name');
  if (heroName) {
    function triggerGlitch() {
      heroName.classList.add('glitch-active');
      setTimeout(function() { heroName.classList.remove('glitch-active'); }, 600);
      // random next glitch: 4–10 seconds
      setTimeout(triggerGlitch, 4000 + Math.random() * 6000);
    }
    setTimeout(triggerGlitch, 2500);
  }


  /* ── D. MAGNETIC HOVER — nav links & buttons ── */
  document.querySelectorAll('.nav-link, .btn, .social-link, .social-btn').forEach(function(el) {
    el.addEventListener('mousemove', function(e) {
      var rect = el.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = (e.clientX - cx) * 0.25;
      var dy = (e.clientY - cy) * 0.25;
      el.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
    });
    el.addEventListener('mouseleave', function() {
      el.style.transform = '';
    });
  });

})();


/* ═══════════════════════════════════════════════════════════════════
   INTERACTION ANIMATIONS v3 — main.js additions
   ═══════════════════════════════════════════════════════════════════ */

/* ── A. SCROLL PROGRESS BAR ── */
(function initScrollProgress() {
  var bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  }, { passive: true });
})();


/* ── B. RIPPLE EFFECT ON BUTTONS ── */
(function initRipple() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn, .card-btn, .overlay-btn, .scroll-top');
    if (!btn) return;
    var rect   = btn.getBoundingClientRect();
    var size   = Math.max(rect.width, rect.height);
    var ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.cssText =
      'width:' + size + 'px;height:' + size + 'px;' +
      'left:' + (e.clientX - rect.left - size / 2) + 'px;' +
      'top:' + (e.clientY - rect.top - size / 2) + 'px;';
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(function() { ripple.remove(); }, 700);
  });
})();


/* ── C. PARTICLE BURST ON HERO CLICK ── */
(function initParticleBurst() {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  var colors = ['#a855f7','#7c3aed','#06b6d4','#4ade80','#fbbf24','#f472b6'];

  hero.addEventListener('click', function(e) {
    var count = 14;
    for (var i = 0; i < count; i++) {
      (function(i) {
        var dot = document.createElement('div');
        dot.className = 'burst-particle';
        var size  = Math.random() * 7 + 4;
        var angle = (i / count) * 360 + Math.random() * 25;
        var dist  = Math.random() * 100 + 60;
        var tx    = Math.cos(angle * Math.PI / 180) * dist;
        var ty    = Math.sin(angle * Math.PI / 180) * dist;
        var dur   = (Math.random() * 400 + 500) + 'ms';
        dot.style.cssText =
          'width:' + size + 'px;height:' + size + 'px;' +
          'background:' + colors[i % colors.length] + ';' +
          'left:' + (e.clientX - size / 2) + 'px;' +
          'top:' + (e.clientY - size / 2) + 'px;' +
          '--tx:' + tx + 'px;--ty:' + ty + 'px;--dur:' + dur + ';';
        document.body.appendChild(dot);
        setTimeout(function() { dot.remove(); }, 1000);
      })(i);
    }
  });
})();


/* ── D. 3D TILT ON SKILL CARDS ── */
(function initTilt() {
  document.querySelectorAll('.skill-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top  + rect.height / 2;
      var rx = (e.clientY - cy) / (rect.height / 2) * -10;
      var ry = (e.clientX - cx) / (rect.width  / 2) *  10;
      card.style.transform = 'perspective(500px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-3px)';
      card.style.boxShadow = '0 12px 36px rgba(124,58,237,0.3)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
})();


/* ── E. SPOTLIGHT EFFECT ON PROJECT CARDS ── */
(function initSpotlight() {
  document.querySelectorAll('.project-card').forEach(function(card) {
    var spot = document.createElement('div');
    spot.className = 'card-spotlight';
    card.appendChild(spot);

    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      spot.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      spot.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  });
})();


/* ── F. FORM SHAKE ON EMPTY SUBMIT ── */
(function initFormShake() {
  var form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    var btn = form.querySelector('[type="submit"]');
    var hasEmpty = false;
    form.querySelectorAll('[required]').forEach(function(input) {
      if (!input.value.trim()) {
        hasEmpty = true;
        input.style.borderColor = '#f87171';
        setTimeout(function() { input.style.borderColor = ''; }, 1500);
      }
    });
    if (hasEmpty) {
      e.preventDefault();
      form.classList.remove('form-shake');
      void form.offsetWidth; // reflow to restart animation
      form.classList.add('form-shake');
      setTimeout(function() { form.classList.remove('form-shake'); }, 600);
      return;
    }
    // Show loading state
    if (btn) {
      btn.classList.add('btn-loading');
      btn.querySelector('span').textContent = 'Mengirim...';
    }
  });
})();


/* ── G. SKILL BAR SPARKLE ── */
(function initSkillSparkle() {
  var bars = document.querySelectorAll('.skill-bar-fill');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var bar = entry.target;
        setTimeout(function() { bar.classList.add('filled'); }, 1200);
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(function(b) { obs.observe(b); });
})();


/* ── H. CURSOR TRAIL (desktop only) ── */
(function initCursorTrail() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  var trails = [];
  var count  = 6;
  for (var i = 0; i < count; i++) {
    var dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.opacity = (1 - i / count) * 0.6;
    dot.style.width = dot.style.height = (6 - i) + 'px';
    document.body.appendChild(dot);
    trails.push({ el: dot, x: 0, y: 0 });
  }

  var mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX; mouseY = e.clientY;
  });

  (function animate() {
    var px = mouseX, py = mouseY;
    trails.forEach(function(t, i) {
      t.x += (px - t.x) * (0.35 - i * 0.04);
      t.y += (py - t.y) * (0.35 - i * 0.04);
      t.el.style.left = t.x + 'px';
      t.el.style.top  = t.y + 'px';
      px = t.x; py = t.y;
    });
    requestAnimationFrame(animate);
  })();
})();


/* ── I. SECTION TAG POP-IN ── */
(function initTagPopIn() {
  var tags = document.querySelectorAll('.section-tag');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('tag-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  tags.forEach(function(t) { obs.observe(t); });
})();


/* ── J. SOCIAL LINK EASTER EGG (Konami-style click streak) ── */
(function initSocialEgg() {
  var clicks = 0;
  var socials = document.querySelectorAll('.hero-social .social-link');
  socials.forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
        clicks++;
        if (clicks >= 3) {
          clicks = 0;
          // burst confetti from center
          var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
          var colors = ['#a855f7','#06b6d4','#4ade80','#fbbf24','#f472b6','#7c3aed'];
          for (var i = 0; i < 30; i++) {
            (function(i) {
              var dot = document.createElement('div');
              dot.className = 'burst-particle';
              var size  = Math.random() * 9 + 5;
              var angle = Math.random() * 360;
              var dist  = Math.random() * 200 + 80;
              dot.style.cssText =
                'width:' + size + 'px;height:' + size + 'px;' +
                'background:' + colors[i % colors.length] + ';' +
                'left:' + cx + 'px;top:' + cy + 'px;' +
                '--tx:' + (Math.cos(angle * Math.PI / 180) * dist) + 'px;' +
                '--ty:' + (Math.sin(angle * Math.PI / 180) * dist) + 'px;' +
                '--dur:' + (Math.random() * 600 + 600) + 'ms;';
              document.body.appendChild(dot);
              setTimeout(function() { dot.remove(); }, 1400);
            })(i);
          }
        }
      }
    });
  });
})();



/* ── PROJECT FILTER TABS ── */
(function initProjectFilter() {
  var tabs       = document.querySelectorAll('.filter-tab');
  var cards      = document.querySelectorAll('.project-card');
  var tabsWrap   = document.getElementById('filterTabs');
  var grid       = document.getElementById('projectsGrid');
  if (!tabs.length || !cards.length || !tabsWrap) return;

  /* ── Create sliding pill ── */
  var pill = document.createElement('div');
  pill.className = 'filter-tab-pill';
  tabsWrap.appendChild(pill);

  function movePill(tab) {
    pill.style.left  = tab.offsetLeft + 'px';
    pill.style.width = tab.offsetWidth + 'px';
  }

  /* ── Init pill on active tab ── */
  var activeTab = tabsWrap.querySelector('.filter-tab.active');
  if (activeTab) {
    // wait for layout
    requestAnimationFrame(function() { movePill(activeTab); });
  }

  /* ── Filter logic ── */
  function filterCards(category) {
    /* measure grid height before to avoid jump */
    grid.style.minHeight = grid.offsetHeight + 'px';

    cards.forEach(function(card) {
      var cat = card.getAttribute('data-category') || 'web';
      var show = (category === 'all' || cat === category);
      if (show) {
        card.classList.remove('filter-hide');
        card.classList.add('filter-show');
      } else {
        card.classList.remove('filter-show');
        card.classList.add('filter-hide');
      }
    });

    /* release fixed height after transition */
    setTimeout(function() { grid.style.minHeight = ''; }, 450);
  }

  /* ── Tab click ── */
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      movePill(tab);

      /* scroll tab into view smoothly */
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

      filterCards(tab.getAttribute('data-filter'));
    });
  });

  /* ── Drag-to-scroll on tabs (touch + mouse) ── */
  var isDown = false, startX = 0, scrollLeft = 0;
  tabsWrap.addEventListener('mousedown', function(e) {
    isDown = true; startX = e.pageX - tabsWrap.offsetLeft;
    scrollLeft = tabsWrap.scrollLeft;
    tabsWrap.style.cursor = 'grabbing';
  });
  tabsWrap.addEventListener('mouseleave', function() { isDown = false; tabsWrap.style.cursor = ''; });
  tabsWrap.addEventListener('mouseup',    function() { isDown = false; tabsWrap.style.cursor = ''; });
  tabsWrap.addEventListener('mousemove',  function(e) {
    if (!isDown) return;
    e.preventDefault();
    var x    = e.pageX - tabsWrap.offsetLeft;
    var walk = (x - startX) * 1.5;
    tabsWrap.scrollLeft = scrollLeft - walk;
  });

  /* ── Init: show all ── */
  cards.forEach(function(c) { c.classList.add('filter-show'); });
})();

