document.addEventListener("DOMContentLoaded", () => {
  // Get all tab buttons and notes sections
  const tabButtons = document.querySelectorAll(".tab-btn");
  const notesSections = document.querySelectorAll(".notes-list");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the "active" class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // Add the "active" class to the clicked button
      button.classList.add("active");

      // Hide all notes sections
      notesSections.forEach((section) => section.classList.remove("active"));

      // Get the target notes section from the clicked button
      const targetSection = document.getElementById(button.dataset.target);

      // Show the targeted notes section
      targetSection.classList.add("active");
    });
  });
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});