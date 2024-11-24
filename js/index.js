// Select all nav links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Function to set active link based on scroll position
window.addEventListener('scroll', () => {
  let currentSection = '';

  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Adjust offset if needed
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const viewportHeight = window.innerHeight;

    if (window.scrollY > viewportHeight) { // Change to white background after viewport
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });