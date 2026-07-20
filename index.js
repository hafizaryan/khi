function throttle(fn, wait) {
  let t = null;
  return function (...args) {
    if (t) return;
    t = setTimeout(() => {
      t = null;
      fn.apply(this, args);
    }, wait);
  };
}

// Mobile menu
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");
const navOverlay = document.getElementById("navOverlay");
const siteHeader = document.querySelector("header");

function syncHeaderHeight() {
  if (!siteHeader) return;
  const height = siteHeader.offsetHeight;
  document.documentElement.style.setProperty("--header-h", `${height}px`);
}

function setMenuOpen(isOpen) {
  if (!mainNav || !mobileMenuBtn) return;

  mainNav.classList.toggle("active", isOpen);
  navOverlay?.classList.toggle("active", isOpen);
  if (navOverlay) navOverlay.setAttribute("aria-hidden", (!isOpen).toString());

  mobileMenuBtn.setAttribute("aria-expanded", isOpen.toString());
  mobileMenuBtn.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
  );

  document.body.classList.toggle("menu-open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function closeMobileMenu() {
  setMenuOpen(false);
}

function openMobileMenu() {
  syncHeaderHeight();
  setMenuOpen(true);
}

function toggleMobileMenu() {
  const willOpen = !mainNav?.classList.contains("active");
  if (willOpen) openMobileMenu();
  else closeMobileMenu();
}

if (mobileMenuBtn && mainNav) {
  syncHeaderHeight();

  mobileMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  });

  navOverlay?.addEventListener("click", () => {
    closeMobileMenu();
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("active")) {
      closeMobileMenu();
      mobileMenuBtn.focus();
    }
  });

  window.addEventListener(
    "resize",
    throttle(() => {
      syncHeaderHeight();
      if (window.innerWidth > 768 && mainNav.classList.contains("active")) {
        closeMobileMenu();
      }
    }, 100)
  );
}

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const headerHeight = document.querySelector("header")?.offsetHeight || 72;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    closeMobileMenu();
    history.replaceState(null, "", href);
  });
});

// Sticky header visual feedback
window.addEventListener(
  "scroll",
  throttle(() => {
    const header = document.querySelector("header");
    if (!header) return;
    header.classList.toggle("is-scrolled", window.pageYOffset > 80);
  }, 16)
);

// Back to top visibility
const backToTop = document.getElementById("backToTop");
window.addEventListener(
  "scroll",
  throttle(() => {
    if (!backToTop) return;
    if (window.pageYOffset > 400) backToTop.classList.add("active");
    else backToTop.classList.remove("active");
  }, 100)
);

// ===== ANIMATION SYSTEM =====

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// --- Hero Floating Particles ---
function createHeroParticles() {
  const container = document.getElementById("heroParticles");
  if (!container || prefersReducedMotion) return;

  const particleCount = window.innerWidth < 768 ? 8 : 18;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "hero-particle";

    // Randomize particle properties
    const size = Math.random() * 6 + 3;
    const alpha = Math.random() * 0.3 + 0.1;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 5;
    const tx = (Math.random() - 0.5) * 200;
    const ty = -(Math.random() * 200 + 50);
    const left = Math.random() * 100;
    const top = Math.random() * 100;

    particle.style.cssText = `
      --size: ${size}px;
      --alpha: ${alpha};
      --dur: ${duration}s;
      --delay: ${delay}s;
      --tx: ${tx}px;
      --ty: ${ty}px;
      left: ${left}%;
      top: ${top}%;
    `;

    container.appendChild(particle);
  }
}

// --- Scroll Reveal (IntersectionObserver) ---
function initScrollReveal() {
  if (prefersReducedMotion) {
    // Show all elements immediately
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => el.classList.add("revealed"));
    document
      .querySelectorAll(".facility-card")
      .forEach((el) => el.classList.add("revealed"));
    document
      .querySelectorAll("footer .footer-container")
      .forEach((el) => el.classList.add("revealed"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  // Observe all reveal elements
  document
    .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
    .forEach((el) => revealObserver.observe(el));

  // Footer reveal
  document
    .querySelectorAll("footer .footer-container")
    .forEach((el) => revealObserver.observe(el));
}

// --- Staggered Facility Cards ---
function initFacilityCardStagger() {
  const cards = document.querySelectorAll(".facility-card");
  if (!cards.length) return;

  if (prefersReducedMotion) {
    cards.forEach((card) => card.classList.add("revealed"));
    return;
  }

  // Assign stagger delays
  cards.forEach((card, i) => {
    card.style.setProperty("--stagger-delay", `${i * 0.08}s`);
  });

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reveal all cards when the grid becomes visible
          const grid = entry.target.closest(".facilities-grid");
          if (grid) {
            grid.querySelectorAll(".facility-card").forEach((card) => {
              card.classList.add("revealed");
            });
          }
          cardObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  // Observe the first card as a trigger
  if (cards[0]) {
    cardObserver.observe(cards[0]);
  }
}

// --- Animated Line Under Section Headings ---
function initHeadingLines() {
  const headings = document.querySelectorAll(".section-title h2");
  if (!headings.length) return;

  if (prefersReducedMotion) {
    headings.forEach((h) => h.classList.add("line-visible"));
    return;
  }

  const lineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("line-visible");
          lineObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  headings.forEach((h) => lineObserver.observe(h));
}

// --- Tilt Effect on Facility Cards (mouse hover) ---
function initCardTilt() {
  if (prefersReducedMotion) return;
  if (window.matchMedia("(hover: none)").matches) return;

  document.querySelectorAll(".facility-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `translateY(-6px) scale(1.02) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// --- Initialize all animations ---
document.addEventListener("DOMContentLoaded", () => {
  createHeroParticles();
  initScrollReveal();
  initFacilityCardStagger();
  initHeadingLines();
  initCardTilt();
});

// Service worker (PWA)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
