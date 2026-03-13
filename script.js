// =============================================
//  CUSTOM CURSOR
// =============================================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor grow on hover
document.querySelectorAll('a, button, .project-item, .skill-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    follower.style.opacity = '0.2';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    follower.style.transform = 'translate(-50%, -50%) scale(1)';
    follower.style.opacity = '0.5';
  });
});

// =============================================
//  NAV SCROLL BEHAVIOR
// =============================================
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// =============================================
//  MOBILE MENU
// =============================================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  navToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  navToggle.textContent = '☰';
}

// =============================================
//  TYPED TEXT EFFECT
// =============================================
const roles = [
  'Frontend Developer',
  'UI/UX Designer',
  'Full Stack Engineer',
  'Creative Coder',
  'Problem Solver',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = roles[roleIndex];
  
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

type();

// =============================================
//  SCROLL REVEAL
// =============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add scroll reveal to section elements
document.querySelectorAll(
  '.about-grid, .skill-card, .project-item, .contact-inner, .section-title, .section-label'
).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = `opacity 0.7s ease ${i * 0.05}s, transform 0.7s ease ${i * 0.05}s`;
  el.classList.add('scroll-reveal');
  observer.observe(el);
});

// CSS for visible state (injected via JS)
const style = document.createElement('style');
style.textContent = '.scroll-reveal.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// =============================================
//  PROJECT ITEM HOVER PARALLAX
// =============================================
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    item.style.transform = `translateX(${x + 20}px)`;
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});

// =============================================
//  SMOOTH ACTIVE NAV HIGHLIGHT
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--fg)';
    }
  });
});v// =============================================
//  CUSTOM CURSOR
// =============================================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor grow on hover
document.querySelectorAll('a, button, .project-item, .skill-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    follower.style.opacity = '0.2';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    follower.style.transform = 'translate(-50%, -50%) scale(1)';
    follower.style.opacity = '0.5';
  });
});

// =============================================
//  NAV SCROLL BEHAVIOR
// =============================================
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// =============================================
//  MOBILE MENU
// =============================================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  navToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  navToggle.textContent = '☰';
}

// =============================================
//  TYPED TEXT EFFECT
// =============================================
const roles = [
  'Frontend Developer',
  'UI/UX Designer',
  'Full Stack Engineer',
  'Creative Coder',
  'Problem Solver',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = roles[roleIndex];
  
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(type, speed);
}

type();

// =============================================
//  SCROLL REVEAL
// =============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add scroll reveal to section elements
document.querySelectorAll(
  '.about-grid, .skill-card, .project-item, .contact-inner, .section-title, .section-label'
).forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = `opacity 0.7s ease ${i * 0.05}s, transform 0.7s ease ${i * 0.05}s`;
  el.classList.add('scroll-reveal');
  observer.observe(el);
});

// CSS for visible state (injected via JS)
const style = document.createElement('style');
style.textContent = '.scroll-reveal.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// =============================================
//  PROJECT ITEM HOVER PARALLAX
// =============================================
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    item.style.transform = `translateX(${x + 20}px)`;
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});

// =============================================
//  SMOOTH ACTIVE NAV HIGHLIGHT
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--fg)';
    }
  });
});
