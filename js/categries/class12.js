// Get all the tab buttons and notes content sections
const tabButtons = document.querySelectorAll(".tab-btn");
const notesContent = document.querySelector(".notes-content");
const notesLists = document.querySelectorAll(".notes-list");

// Add event listeners to each tab button
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the active class from all tab buttons and notes
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    notesLists.forEach((list) => list.classList.remove("active"));

    // Add the active class to the clicked tab button
    button.classList.add("active");

    // Get the target notes section
    const targetId = button.getAttribute("data-target");
    const targetList = document.getElementById(targetId);

    // Add the active class to the target notes section
    targetList.classList.add("active");

    // Align the notes content based on the button's position
    if (button.classList.contains("left")) {
      notesContent.classList.remove("align-center", "align-right");
      notesContent.classList.add("align-left");
    } else if (button.classList.contains("center")) {
      notesContent.classList.remove("align-left", "align-right");
      notesContent.classList.add("align-center");
    } else if (button.classList.contains("right")) {
      notesContent.classList.remove("align-left", "align-center");
      notesContent.classList.add("align-right");
    }
  });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// JavaScript to handle tab functionality
document.querySelectorAll("#pyqs-section .tab-btn").forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove 'active' class from all buttons and lists
    document.querySelectorAll("#pyqs-section .tab-btn").forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll("#pyqs-section .pyqs-list").forEach((list) => list.classList.remove("active"));

    // Add 'active' class to the clicked button and the corresponding list
    this.classList.add("active");
    const targetList = document.getElementById(this.dataset.target);

    // Adjust position of the target list to appear just below the clicked button
    targetList.style.left = `${this.offsetLeft}px`; // Align with the button
    targetList.style.width = `${this.offsetWidth}px`; // Match button width
    targetList.classList.add("active");
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



