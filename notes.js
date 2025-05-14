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
























// const subjects = [
//   {
//     name: "Basic Programming with C",
//     description: "C language basics, loops, arrays, functions, and more.",
//     semester: 1
//   },
//   {
//     name: "History Science and Tech",
//     description: "Indian scientific heritage, historical innovations.",
//     semester: 1
//   },
//   {
//     name: "Basic Electrical Engineering",
//     description: "Electrical fundamentals, circuits, laws and machines.",
//     semester: 1
//   },
//   {
//     name: "Data Structures",
//     description: "Stacks, queues, trees, graphs, and time complexities.",
//     semester: 3
//   },
//   {
//     name: "Computer Networks",
//     description: "Networking fundamentals, OSI, TCP/IP, and protocols.",
//     semester: 5
//   },
//   {
//     name: "Basic Programming with C",
//     description: "C language basics, loops, arrays, functions, and more.",
//     semester: 1
//   },
//   {
//     name: "History Science and Tech",
//     description: "Indian scientific heritage, historical innovations.",
//     semester: 1
//   },
//   {
//     name: "Basic Electrical Engineering",
//     description: "Electrical fundamentals, circuits, laws and machines.",
//     semester: 1
//   },
//   {
//     name: "Data Structures",
//     description: "Stacks, queues, trees, graphs, and time complexities.",
//     semester: 3
//   },
//   {
//     name: "Computer Networks",
//     description: "Networking fundamentals, OSI, TCP/IP, and protocols.",
//     semester: 5
//   },
//   {
//     name: "Basic Programming with C",
//     description: "C language basics, loops, arrays, functions, and more.",
//     semester: 1
//   },
//   {
//     name: "History Science and Tech",
//     description: "Indian scientific heritage, historical innovations.",
//     semester: 1
//   },
//   {
//     name: "Basic Electrical Engineering",
//     description: "Electrical fundamentals, circuits, laws and machines.",
//     semester: 1
//   },
//   {
//     name: "Data Structures",
//     description: "Stacks, queues, trees, graphs, and time complexities.",
//     semester: 3
//   },
//   {
//     name: "Computer Networks",
//     description: "Networking fundamentals, OSI, TCP/IP, and protocols.",
//     semester: 5
//   },
//   {
//     name: "Basic Programming with C",
//     description: "C language basics, loops, arrays, functions, and more.",
//     semester: 1
//   },
//   {
//     name: "History Science and Tech",
//     description: "Indian scientific heritage, historical innovations.",
//     semester: 1
//   },
//   {
//     name: "Basic Electrical Engineering",
//     description: "Electrical fundamentals, circuits, laws and machines.",
//     semester: 1
//   },
//   {
//     name: "Data Structures",
//     description: "Stacks, queues, trees, graphs, and time complexities.",
//     semester: 3
//   },
//   {
//     name: "Computer Networks",
//     description: "Networking fundamentals, OSI, TCP/IP, and protocols.",
//     semester: 5
//   },
// ];
let subjects = [];

fetch('/data/subject.json')
  .then(response => response.json())
  .then(data => {
    subjects = data;
    initFilterLogic(); // Call logic after loading
  })
  .catch(err => {
    console.error("Failed to load subjects.json:", err);
  });
function initFilterLogic() {
  const universitySelect = document.getElementById("universitySelect");
  const courseSelect = document.getElementById("courseSelect");
  const semesterSelect = document.getElementById("semesterSelect");
  const container = document.getElementById("cardsContainer");

  // Initial state: disable course and semester selects
  courseSelect.disabled = true;
  semesterSelect.disabled = true;

  // When university is selected
  universitySelect.addEventListener("change", () => {
    if (universitySelect.value) {
      courseSelect.disabled = false;
    } else {
      courseSelect.disabled = true;
      semesterSelect.disabled = true;
    }

    // Clear selection (but not to empty)
    courseSelect.selectedIndex = 0;
    semesterSelect.selectedIndex = 0;
    container.innerHTML = "";
  });

  // When course is selected
  courseSelect.addEventListener("change", () => {
    if (courseSelect.value) {
      semesterSelect.disabled = false;
    } else {
      semesterSelect.disabled = true;
    }

    semesterSelect.selectedIndex = 0;
    container.innerHTML = "";
  });

  // When semester is selected
  semesterSelect.addEventListener("change", () => {
    const university = universitySelect.value;
    const course = courseSelect.value;
    const semester = parseInt(semesterSelect.value);

    // Only continue if all fields are selected
    if (!university || !course || isNaN(semester)) {
      container.innerHTML = "";
      return;
    }

    const filtered = subjects.filter((subj) => subj.semester === semester);
    container.innerHTML = "";

    if (filtered.length === 0) {
      container.innerHTML = `<p style="color: white; font-size: 1rem;">No subjects found for the selected semester.</p>`;
      return;
    }

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

    // Smooth scroll to card container
    setTimeout(() => {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  });
}

