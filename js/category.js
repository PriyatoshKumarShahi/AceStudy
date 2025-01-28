const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const searchInput = document.getElementById('searchInput');
const categoryCards = document.querySelectorAll('.category-card');

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();

  categoryCards.forEach((card) => {
    const category = card.getAttribute('data-category').toLowerCase();
    const title = card.querySelector('h2').innerText.toLowerCase();
    const description = card.querySelector('p').innerText.toLowerCase();

    if (
      category.includes(searchText) ||
      title.includes(searchText) 
      
    ) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
categoryCards.forEach((card) => {
  card.addEventListener('click', () => {
    const category = card.getAttribute('data-category');
    window.location.href = `/html/categories/${category}-page.html`; 
  });
});
// Get all the "Explore Category" buttons
const exploreButtons = document.querySelectorAll('.explore-btn');

// Add click event to each button
exploreButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Prevent card click event from triggering
    event.stopPropagation();

    // Get the parent card's data-category attribute
    const card = button.closest('.category-card');
    const category = card.getAttribute('data-category');

    // Redirect to the category page
    window.location.href = `/html/categories/${category}-page.html`;
  });
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
