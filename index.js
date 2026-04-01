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

function closeMobileMenu() {
  if (!mainNav || !mobileMenuBtn) return;
  mainNav.classList.remove("active");
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
  mobileMenuBtn.setAttribute("aria-expanded", "false");
  mobileMenuBtn.setAttribute("aria-label", "Buka menu navigasi");
  document.body.style.overflow = "";
}

if (mobileMenuBtn && mainNav) {
  mobileMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isActive = mainNav.classList.toggle("active");
    mobileMenuBtn.innerHTML = isActive
      ? '<i class="fas fa-times" aria-hidden="true"></i>'
      : '<i class="fas fa-bars" aria-hidden="true"></i>';
    mobileMenuBtn.setAttribute("aria-expanded", isActive.toString());
    mobileMenuBtn.setAttribute(
      "aria-label",
      isActive ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
    document.body.style.overflow = isActive ? "hidden" : "";
  });

  document.addEventListener("click", (e) => {
    if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      if (mainNav.classList.contains("active")) closeMobileMenu();
    }
  });
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

// Service worker (PWA)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
