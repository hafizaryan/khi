// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

console.log('Mobile menu button:', mobileMenuBtn);
console.log('Main nav:', mainNav);

if (mobileMenuBtn && mainNav) {
  // Add click event listener
  mobileMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Hamburger button clicked!');
    
    const isActive = mainNav.classList.toggle("active");
    mobileMenuBtn.innerHTML = isActive
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
    
    // Update ARIA attributes
    mobileMenuBtn.setAttribute('aria-expanded', isActive.toString());
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isActive ? 'hidden' : '';
    
    console.log('Menu is now:', isActive ? 'open' : 'closed');
  });

  // Add touch event for mobile devices
  mobileMenuBtn.addEventListener("touchstart", (e) => {
    console.log('Touch start on hamburger button');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });
} else {
  console.error('Mobile menu elements not found!');
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    if (href === "#") return;

    const target = document.querySelector(href);
    if (target) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (mainNav && mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        if (mobileMenuBtn) {
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
      }
      
      // Update URL without jumping
      history.replaceState(null, null, href);
    }
  });
});

// Remove unused code (Room Tabs and Testimonial Slider not present in HTML)
// Form Submission - Remove since no form exists

// Sticky Header on Scroll with improved performance
window.addEventListener("scroll", throttle(() => {
  const header = document.querySelector("header");
  if (header) {
    const scrolled = window.pageYOffset;
    if (scrolled > 100) {
      header.style.padding = "0.5rem 0";
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.25)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.padding = "1rem 0";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      header.style.backdropFilter = "none";
    }
  }
}, 16));

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver';
  document.head.appendChild(script);
}

// Performance monitoring
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      }
    }
  });
  observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
