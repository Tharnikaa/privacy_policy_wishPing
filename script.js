document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Dark/Light Theme Switcher
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve stored theme preference or default to system preference (dark)
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else {
    htmlElement.setAttribute('data-theme', 'light');
  }

  // Toggle Theme Function
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add brief animation class to prevent layout transitions issues
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 400);
  });

  // ==========================================================================
  // 2. Table of Contents & Scroll Spy (IntersectionObserver)
  // ==========================================================================
  const sections = document.querySelectorAll('.scroll-section');
  const tocLinks = document.querySelectorAll('.toc a');

  const observerOptions = {
    root: null, // viewport
    rootMargin: '-20% 0px -60% 0px', // triggers when section occupies the sweet-spot of screen
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        tocLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));

  // ==========================================================================
  // 3. Smooth Keyboard/A11y Scroll Handling for TOC Links
  // ==========================================================================
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Offset scroll for sticky header height
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Add class to link manually to make UI snap immediately responsive
        tocLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // ==========================================================================
  // 4. Scroll Reveal Card Animations
  // ==========================================================================
  const cards = document.querySelectorAll('.card');
  
  const cardObserverOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger slightly before the card enters viewport
    threshold: 0.1
  };

  const cardObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-load');
        observer.unobserve(entry.target); // Trigger animation only once
      }
    });
  };

  const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);
  cards.forEach(card => cardObserver.observe(card));
});
