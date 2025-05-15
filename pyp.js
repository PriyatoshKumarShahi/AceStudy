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































let subjects = [];

fetch('/data/subject.json')
  .then(response => response.json())
  .then(data => {
    subjects = data;
    initFilterLogic();
    displayDefaultSubjects(); // show some subjects by default
  })
  .catch(err => {
    console.error("Failed to load subjects.json:", err);
  });

function initFilterLogic() {
  const universitySelect = document.getElementById("universitySelect");
  const courseSelect = document.getElementById("courseSelect");
  const semesterSelect = document.getElementById("semesterSelect");
  const container = document.getElementById("cardsContainer");

  courseSelect.disabled = true;
  semesterSelect.disabled = true;

  universitySelect.addEventListener("change", () => {
    if (universitySelect.value) {
      courseSelect.disabled = false;
    } else {
      courseSelect.disabled = true;
      semesterSelect.disabled = true;
    }

    courseSelect.selectedIndex = 0;
    semesterSelect.selectedIndex = 0;
    // container.innerHTML = "";
  });

  courseSelect.addEventListener("change", () => {
    if (courseSelect.value) {
      semesterSelect.disabled = false;
    } else {
      semesterSelect.disabled = true;
    }

    semesterSelect.selectedIndex = 0;
    // container.innerHTML = "";
  });

  semesterSelect.addEventListener("change", () => {
    const university = universitySelect.value;
    const course = courseSelect.value;
    const semester = parseInt(semesterSelect.value);

    if (!university || !course || isNaN(semester)) {
      container.innerHTML = "";
      return;
    }



    setTimeout(() => {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    const filtered = subjects.filter(subj => subj.semester === semester);
    displaySubjects(filtered);
  });
}

// Helper to get ordinal string like "1st", "2nd", etc.
function getOrdinalSuffix(n) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

// Create slug from subject name
function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

// Render subject cards to container
function displaySubjects(subjectArray) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  if (subjectArray.length === 0) {
    container.innerHTML = `<p style="color: white; font-size: 1rem;">No subjects found.</p>`;
    return;
  }

  subjectArray.forEach((subj) => {
    const year = subj.semester <= 2 ? "1st Year"
               : subj.semester <= 4 ? "2nd Year"
               : "3rd Year";

    const slug = slugify(subj.name);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${subj.name}</h3>
      <p>${subj.description}</p>
      <div class="tags">
        <span class="tag">${subj.name}</span>
        <span class="tag">${getOrdinalSuffix(subj.semester)} Semester</span>
        <span class="tag">${year}</span>
      </div>
      <div class="read-notes-wrapper">
        <a href="notes/${slug}" class="read-notes-btn" ><i class="fa-solid fa-book-open"></i> Read Notes <i class="fa-solid fa-arrow-right-long"></i></a>

      </div>
    `;
    container.appendChild(card);
  });

 
}

// Show 6 random default subjects before any selection
function displayDefaultSubjects() {
  const defaultSubjects = [...subjects]
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  displaySubjects(defaultSubjects);
}

