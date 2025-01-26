const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo a');
const hamburgerSpan = document.querySelector('.hamburger span');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    logo.classList.add('logo-scrolled');
    hamburger.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    logo.classList.remove('logo-scrolled');
    hamburger.classList.remove('scrolled');

  }
});
new Typed('#dynamic-text', {
  strings: [
    "StudySite!",
    "Your Learning Partner!",
    "A Hub for Knowledge!"
  ],
  typeSpeed: 90,
  backSpeed: 70,
  loop: true
});

