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
























const subjects = [
  {
    name: "Basic Programming with C",
    description: "C language basics, loops, arrays, functions, and more.",
    semester: 1
  },
  {
    name: "History Science and Tech",
    description: "Indian scientific heritage, historical innovations.",
    semester: 1
  },
  {
    name: "Basic Electrical Engineering",
    description: "Electrical fundamentals, circuits, laws and machines.",
    semester: 1
  },
  {
    name: "Data Structures",
    description: "Stacks, queues, trees, graphs, and time complexities.",
    semester: 3
  },
  {
    name: "Computer Networks",
    description: "Networking fundamentals, OSI, TCP/IP, and protocols.",
    semester: 5
  }
];

document.getElementById("semesterSelect").addEventListener("change", function () {
  const selectedSem = parseInt(this.value);
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  const filtered = subjects.filter((subj) => subj.semester === selectedSem);

  filtered.forEach((subj) => {
    const year = subj.semester <= 2 ? "1st Year"
               : subj.semester <= 4 ? "2nd Year"
               : "3rd Year";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${subj.name}</h3>
      <p>${subj.description}</p>
      <div class="tags">
        <span class="tag">${subj.name}</span>
        <span class="tag">${subj.semester} Sem</span>
        <span class="tag">${year}</span>
      </div>
    `;
    container.appendChild(card);
  });
});
