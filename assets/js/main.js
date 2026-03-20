// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Prevent body scroll when menu open
  });
}

// Close menu on link click (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    const isLight = body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// ===== NAVBAR SCROLL SHADOW =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ===== SMOOTH SCROLLING & ACTIVE LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getHash());
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `/${current}.html` || link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial call

// ===== FORM SUBMISSION (Basic - replace with real backend) =====
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate submission
    alert('Thank you! Your message has been sent. We\'ll get back to you soon.');
    form.reset();
  });
});

// ===== BODY NO-SCROLL FOR MOBILE MENU =====
document.body.classList.toggle('no-scroll', false); // Reset