const btn = document.getElementById('toggle-button');
const theme = document.getElementById('theme-link');
const image = document.getElementById('darkModeImg');
const fcIcon = document.getElementById('fc1');
const symbol = document.getElementById('button-symbol');

// Function to switch theme
function switchTheme(newTheme) {
  const body = document.body; // Reference to body

  // Apply transition class
  body.classList.add('transitioning');

  if (newTheme === 'dark') {
    theme.href = 'portfolio-styles_dark.css';
    symbol.src = 'assets/icons8-sun-32.png';
    fcIcon.src = 'assets/future-code-1-logo-darkblue_64.png';
    image.src = 'assets/sabrina_dark-ver.jpg';
    body.dataset.theme = 'dark'; // Use data attribute for easier CSS targeting
  } else {
    theme.href = 'portfolio-styles.css';
    symbol.src = 'assets/icons8-dark-mode-32.png';
    fcIcon.src = 'assets/future-code-1-logo_64.png';
    image.src = 'assets/sabrina_light-ver.jpg';
    body.dataset.theme = 'light'; // Use data attribute for easier CSS targeting
  }

  // Save theme preference
  localStorage.setItem('theme', newTheme);

  // Remove the transition class after a brief moment to allow the transition to complete
  setTimeout(() => {
    body.classList.remove('transitioning');
  }, 300); // Match this time to your CSS transition duration
}

// Apply stored theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'; // default to light
  switchTheme(savedTheme); // Apply the saved theme
});

// Toggle themes on button click
btn.addEventListener('click', () => {
  const currentTheme =
    theme.getAttribute('href') === 'portfolio-styles.css' ? 'dark' : 'light';
  switchTheme(currentTheme); // Toggle theme without page reload
});
