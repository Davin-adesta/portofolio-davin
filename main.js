// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

  // Mobile menu toggle
  navToggle?.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active navigation link highlighting
  function highlightActiveSection() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const correspondingLink = document.querySelector(
        `.nav-link[href="#${sectionId}"]`
      );

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        correspondingLink?.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightActiveSection);

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Enhanced 3D scroll animations
  function animate3DOnScroll() {
    const elements = document.querySelectorAll(
      ".skill-card, .project-card, .about-card, .contact-item, .stat, .section-title, .contact-form, .about-text h3, .about-text p, .contact-info h3, .contact-info p"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Check if element is in viewport
      if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
        element.classList.add("animate-in");

        // Add parallax effect based on scroll position
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;

        if (element.classList.contains("parallax-element")) {
          element.style.transform = `translateY(${rate}px) translateZ(0)`;
        }
      }
    });
  }

  // 3D mouse tracking effect
  function add3DMouseTracking() {
    const cards = document.querySelectorAll(
      ".skill-card, .project-card, .about-card, .contact-form"
    );

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      });
    });
  }

  // Parallax effect for hero and sections
  function enhancedParallaxEffect() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const sections = document.querySelectorAll("section");

    if (hero) {
      const rate = scrolled * -0.3;
      hero.style.transform = `translateY(${rate}px)`;
    }

    // Add subtle parallax to section backgrounds
    sections.forEach((section, index) => {
      const rate = scrolled * (-0.1 - index * 0.02);
      if (section.querySelector("::before")) {
        section.style.backgroundPosition = `center ${rate}px`;
      }
    });
  }

  // 3D floating animation for icons
  function animate3DFloatingIcons() {
    const floatingIcons = document.querySelectorAll(".floating-icons i");

    floatingIcons.forEach((icon, index) => {
      const delay = index * 0.5;
      const duration = 4 + index * 0.5;

      icon.style.animation = `float3D ${duration}s ease-in-out infinite`;
      icon.style.animationDelay = `${delay}s`;

      // Add random rotation
      setInterval(() => {
        const randomRotateY = Math.random() * 20 - 10;
        const randomRotateX = Math.random() * 10 - 5;
        icon.style.transform += ` rotateY(${randomRotateY}deg) rotateX(${randomRotateX}deg)`;
      }, 3000 + index * 1000);
    });
  }

  // Enhanced skill bar animation with 3D effect
  // Animate skill bars on scroll
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress");
    const skillsSection = document.getElementById("skills");

    if (!skillsSection) return;

    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition > skillsSectionTop + skillsSectionHeight / 2) {
      skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        bar.style.transform = "translateZ(-10px)";
        setTimeout(() => {
          bar.style.width = width;
          bar.style.transform = "translateZ(0px)";
        }, 100);
      });
    }
  }

  // 3D tilt effect for buttons
  function add3DButtonEffects() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", (e) => {
        button.style.transform =
          "translateY(-8px) rotateX(10deg) translateZ(10px)";
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) rotateX(0deg) translateZ(0px)";
      });

      button.addEventListener("mousedown", () => {
        button.style.transform =
          "translateY(-4px) rotateX(5deg) translateZ(5px) scale(0.98)";
      });

      button.addEventListener("mouseup", () => {
        button.style.transform =
          "translateY(-8px) rotateX(10deg) translateZ(10px)";
      });
    });
  }

  // Contact form handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Simple validation
      if (!name || !email || !message) {
        alert("Mohon lengkapi semua field!");
        return;
      }

      if (!isValidEmail(email)) {
        alert("Mohon masukkan email yang valid!");
        return;
      }

      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      submitButton.textContent = "Mengirim...";
      submitButton.disabled = true;

      setTimeout(() => {
        alert("Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.");
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
  }

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Initialize all 3D functions
  add3DMouseTracking();
  animate3DFloatingIcons();
  add3DButtonEffects();

  // Event listeners
  window.addEventListener("scroll", function () {
    animate3DOnScroll();
    animateSkillBars();
    enhancedParallaxEffect();
  });

  // Enhanced project card hover effects with 3D
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform =
        "translateZ(50px) rotateX(5deg) rotateY(5deg) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform =
        "translateZ(0) rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });

  // 3D loading animation
  // Add loading animation
  window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease";
    document.body.style.transform = "perspective(1000px) rotateX(5deg)";

    setTimeout(() => {
      document.body.style.opacity = "1";
      document.body.style.transform = "perspective(1000px) rotateX(0deg)";
    }, 100);
  });

  // Enhanced ripple effect with 3D
  const style = document.createElement("style");
  style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
            transform-style: preserve-3d;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(49, 130, 206, 0.2) 100%);
            transform: scale(0);
            animation: ripple-animation-3d 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
            box-shadow: 0 0 20px rgba(49, 130, 206, 0.3);
        }
        
        @keyframes ripple-animation-3d {
            to {
                transform: scale(4) translateZ(20px);
                opacity: 0;
            }
        }
        
        /* 3D Hover effects for interactive elements */
        .nav-link, .social-link, .project-link {
            transform-style: preserve-3d;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    `;
  document.head.appendChild(style);

  // Add 3D click animations to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 800);
    });
  });

  // Console message for developers
  console.log(`
    🚀 Enhanced 3D Portfolio Website
    ✨ Featuring advanced 3D animations and scroll effects
    🎨 Modern design with interactive elements
    
    Built with ❤️ using vanilla HTML, CSS3 3D transforms, and JavaScript
    `);
});

// Enhanced interactive features with 3D effects
document.addEventListener("DOMContentLoaded", function () {
  // Enhanced intersection observer for 3D animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");

        // Add staggered animation delay for grouped elements
        const siblings = Array.from(entry.target.parentNode.children);
        const index = siblings.indexOf(entry.target);
        entry.target.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }, observerOptions);

  // Observe more elements for 3D animation
  const elementsToAnimate = document.querySelectorAll(
    ".skill-card, .project-card, .contact-item, .about-card, .stat, .section-title, .contact-form"
  );
  elementsToAnimate.forEach((el) => observer.observe(el));

  // Enhanced custom 3D cursor effect
  const cursor = document.createElement("div");
  const cursorFollower = document.createElement("div");

  cursor.classList.add("custom-cursor");
  cursorFollower.classList.add("cursor-follower");

  cursor.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: var(--secondary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: all 0.1s ease;
    transform: translate(-50%, -50%) translateZ(100px);
    box-shadow: 0 0 20px rgba(49, 130, 206, 0.5);
  `;

  cursorFollower.style.cssText = `
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid var(--secondary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate(-50%, -50%) translateZ(50px);
    opacity: 0.5;
  `;

  document.body.appendChild(cursor);
  document.body.appendChild(cursorFollower);

  let mouseX = 0,
    mouseY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  // Smooth follower animation
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursorFollower.style.left = followerX + "px";
    cursorFollower.style.top = followerY + "px";

    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Enhanced cursor interactions
  const interactiveElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card, .contact-item"
  );

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform =
        "translate(-50%, -50%) translateZ(100px) scale(1.5)";
      cursorFollower.style.transform =
        "translate(-50%, -50%) translateZ(50px) scale(1.5)";
      cursorFollower.style.opacity = "0.8";
    });

    el.addEventListener("mouseleave", () => {
      cursor.style.transform =
        "translate(-50%, -50%) translateZ(100px) scale(1)";
      cursorFollower.style.transform =
        "translate(-50%, -50%) translateZ(50px) scale(1)";
      cursorFollower.style.opacity = "0.5";
    });
  });

  // Add 3D depth to page elements based on scroll
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const elements = document.querySelectorAll(
      ".skill-card, .project-card, .about-card"
    );

    elements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1;
      const yPos = -(scrolled * speed);
      element.style.transform += ` translateY(${yPos}px)`;
    });
  });
});
