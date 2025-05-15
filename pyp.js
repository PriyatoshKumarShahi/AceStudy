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































let papers = [];

fetch('/data/pyp.json')
  .then(response => response.json())
  .then(data => {
    papers = data;
    initFilterLogic();
    displayDefaultSubjects();
  })
  .catch(err => console.error("Failed to load pyp.json:", err));

function initFilterLogic() {
  const universitySelect = document.getElementById("universitySelect");
  const courseSelect = document.getElementById("courseSelect");
  const semesterSelect = document.getElementById("semesterSelect");
  const yearSelect = document.getElementById("yearSelect");
  const container = document.getElementById("cardsContainer");

  // Disable all but university initially
  courseSelect.disabled = true;
  semesterSelect.disabled = true;
  yearSelect.disabled = true;

  universitySelect.addEventListener("change", () => {
    courseSelect.disabled = !universitySelect.value;
    semesterSelect.disabled = true;
    yearSelect.disabled = true;
    courseSelect.selectedIndex = 0;
    semesterSelect.selectedIndex = 0;
    yearSelect.selectedIndex = 0;
  });

  courseSelect.addEventListener("change", () => {
    semesterSelect.disabled = !courseSelect.value;
    yearSelect.disabled = true;
    semesterSelect.selectedIndex = 0;
    yearSelect.selectedIndex = 0;
  });

  semesterSelect.addEventListener("change", () => {
    yearSelect.disabled = !semesterSelect.value;
    yearSelect.selectedIndex = 0;
  });

  yearSelect.addEventListener("change", () => {
    const university = universitySelect.value;
    const course = courseSelect.value;
    const semester = parseInt(semesterSelect.value);
    const year = yearSelect.value;

    if (!university || !course || isNaN(semester) || !year) {
      container.innerHTML = "";
      return;
    }

    const filtered = papers.filter(
      item =>
        item.university === university &&
        item.course === course &&
        item.semester === semester &&
        item.year === year
    );

    container.scrollIntoView({ behavior: "smooth", block: "start" });
    displaySubjects(filtered);
  });
}

function displaySubjects(subjectArray) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  if (subjectArray.length === 0) {
    container.innerHTML = `<p style="color:white;">No papers found.</p>`;
    return;
  }

  subjectArray.forEach(paper => {
    const year = paper.semester <= 2 ? "1st Year"
               : paper.semester <= 4 ? "2nd Year"
               : "3rd Year";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${paper.subject}</h3>
      <p>Question Paper</p>
      <div class="tags">
        <span class="tag">${getOrdinalSuffix(paper.semester)} Semester</span>
        <span class="tag">${paper.year}</span>
        <span class="tag">${year}</span>
      </div>
      <div class="read-notes-wrapper">
        <a href="${paper.url}" target="_blank" class="read-notes-btn">
          <i class="fa-solid fa-file-pdf"></i> Open Paper <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function getOrdinalSuffix(n) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

function displayDefaultSubjects() {
  const defaults = [...papers].sort(() => 0.5 - Math.random()).slice(0, 6);
  displaySubjects(defaults);
}
