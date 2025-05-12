const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');
const label = document.getElementById('theme-label');
const navLinks = document.getElementById('nav-links');
const hamburger = document.getElementById('hamburger');

// Apply theme
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    icon.className = 'fas fa-moon';
    label.textContent = 'Dark';
  } else {
    icon.className = '';
    label.textContent = '☀️ Light';
  }
}

// Load theme
window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);
};

// Toggle theme
toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});

// Toggle nav links on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile nav when a link is clicked
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// Add hover event to toggle dropdown and arrow rotation
// Get elements
// Get elements
const dropdown = document.querySelector('.dropdown');
const arrow = document.getElementById('arrow');

// Add hover event listener to toggle the dropdown and arrow rotation
dropdown.addEventListener('mouseover', () => {
  dropdown.classList.add('active');
});

dropdown.addEventListener('mouseout', () => {
  dropdown.classList.remove('active');
});




const headings = document.querySelectorAll('.moving-heading');
const emoji = document.getElementById('emoji');

document.addEventListener('mousemove', (e) => {
  const x = -(e.clientX - window.innerWidth / 2) / 40;
  const y = -(window.innerHeight / 2 - e.clientY) / 40;

  headings.forEach(heading => {
    heading.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
});









const yearBtn = document.getElementById('yearBtn');
  const semesterBtn = document.getElementById('semesterBtn');
  const yearContent = document.querySelector('.year-content');
  const semesterContent = document.querySelector('.semester-content');

  yearBtn.addEventListener('click', () => {
    yearBtn.classList.add('active');
    semesterBtn.classList.remove('active');
    yearContent.classList.add('active');
    semesterContent.classList.remove('active');
  });

  semesterBtn.addEventListener('click', () => {
    semesterBtn.classList.add('active');
    yearBtn.classList.remove('active');
    semesterContent.classList.add('active');
    yearContent.classList.remove('active');
  });







const text = document.getElementById("revealText");

function updateMask(x, y) {
  const mask = `radial-gradient(
    ellipse 400px 350px at ${x}px ${y}px,
    white 0%,
    transparent 100%
  )`;

  text.style.webkitMaskImage = mask;
  text.style.maskImage = mask; // Fallback for non-WebKit
}

// Update on mouse move
document.getElementById("revealSection").addEventListener("mousemove", (e) => {
  updateMask(e.clientX, e.clientY);
});

// Reset to center on mouse leave
// document.getElementById("revealSection").addEventListener("mouseleave", () => {
//   updateMask(window.innerWidth / 2, window.innerHeight / 2);
// });

// Set default visible area on page load
window.addEventListener("load", () => {
  updateMask(window.innerWidth / 2, window.innerHeight / 2);
});
