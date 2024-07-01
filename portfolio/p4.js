// Get the navigation bar element
const nav = document.querySelector('nav');

// Get the button element
const button = document.querySelector('button');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Toggle the class "scrolled" on the navigation bar
  nav.classList.toggle('scrolled');
});

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // If the user has scrolled down far enough, add the class "scrolled" to the navigation bar
  if (scrollPosition > 200) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Add an event listener to the dropdown menu
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown menu when the user clicks outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown') && !event.target.matches('.dropdown-content')) {
    dropdownContent.classList.remove('show');
  }
});

// Add a loading animation to the website
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.classList.add('loaded');
});

// Add a smooth scrolling effect to the website
const links = document.querySelectorAll('a[href*="#"]');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Add a responsive design to the website
const mediaQuery = window.matchMedia('(max-width: 768px)');

mediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    nav.classList.add('mobile');
  } else {
    nav.classList.remove('mobile');
  }
});

// Add a sticky navigation bar to the website
const stickyNav = document.querySelector('.sticky-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    stickyNav.classList.add('sticky');
  } else {
    stickyNav.classList.remove('sticky');
  }
});

// Add a fade-in effect to the website's content
const content = document.querySelector('.content');

window.addEventListener('load', () => {
  content.classList.add('fade-in');
});

// Add a parallax effect to the website's background
const background = document.querySelector('.background');

window.addEventListener('scroll', () => {
  background.style.transform = translateY(${window.scrollY * 0.5}px);
});