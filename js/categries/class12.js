// NOTES SECTION FUNCTIONALITY
document.querySelectorAll("#notes-section .tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all notes tabs and lists
    document.querySelectorAll("#notes-section .tab-btn").forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll("#notes-section .notes-list").forEach((list) => list.classList.remove("active"));

    // Activate the clicked button
    button.classList.add("active");

    // Show the corresponding notes content
    const targetList = document.getElementById(button.getAttribute("data-target"));
    targetList.classList.add("active");

    // Align content based on the button's position
    const notesContent = document.querySelector(".notes-content");
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

// NOTES SECTION FUNCTIONALITY
document.querySelectorAll("#pyqs-section .tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all notes tabs and lists
    document.querySelectorAll("#pyqs-section .tab-btn").forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll("#pyqs-section .pyqs-list").forEach((list) => list.classList.remove("active"));

    // Activate the clicked button
    button.classList.add("active");

    // Show the corresponding notes content
    const targetList = document.getElementById(button.getAttribute("data-target"));
    targetList.classList.add("active");

    // Align content based on the button's position
    const pyqsContent = document.querySelector(".pyqs-content");
    if (button.classList.contains("left")) {
      pyqsContent.classList.remove("align-center", "align-right");
      pyqsContent.classList.add("align-left");
    } else if (button.classList.contains("center")) {
      pyqsContent.classList.remove("align-left", "align-right");
      pyqsContent.classList.add("align-center");
    } else if (button.classList.contains("right")) {
      pyqsContent.classList.remove("align-left", "align-center");
      pyqsContent.classList.add("align-right");
    }
  });
});










// PYQS SECTION FUNCTIONALITY
// document.querySelectorAll("#pyqs-section .tab-btn").forEach((tab) => {
//   tab.addEventListener("click", function () {
//     // Remove 'active' class from all buttons and lists
//     document.querySelectorAll("#pyqs-section .tab-btn").forEach((btn) => btn.classList.remove("active"));
//     document.querySelectorAll("#pyqs-section .pyqs-list").forEach((list) => list.classList.remove("active"));

//     // Add 'active' class to the clicked button and the corresponding list
//     this.classList.add("active");
//     const targetList = document.getElementById(this.dataset.target);

//     // Set its position just below the button
//     targetList.style.top = `${this.offsetTop + this.offsetHeight}px`; // Position below button
//     targetList.style.left = `${this.offsetLeft + this.offsetWidth / 2}px`; // Align center with button
//     targetList.style.transform = "translateX(-50%)"; // Ensure perfect centering
//     targetList.style.width = `${this.offsetWidth}px`; // Match button width
//     targetList.classList.add("active");
//   });
// });



// HAMBURGER MENU TOGGLE
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SMOOTH SCROLLING FOR NAVIGATION LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.classList.add("logo-scrolled");
    hamburger.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("logo-scrolled");
    hamburger.classList.remove("scrolled");
  }
});
