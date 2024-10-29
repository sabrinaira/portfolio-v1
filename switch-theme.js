document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme'); // default to light
  console.log('Applying saved theme on page load:', savedTheme); // Log applied theme
  switchTheme(savedTheme); // Apply the saved theme
});

const btn = document.getElementById('toggle-button');
const theme = document.getElementById('theme-link');
const image = document.getElementById('darkModeImg');
const fcIcon = document.getElementById('fc1');
const symbol = document.getElementById('button-symbol');

function switchTheme(newTheme) {
  // console.log('switchTheme function called with theme:', newTheme);
  const body = document.body; // Reference to body

  // Apply transition class
  body.classList.add('transitioning');

  if (newTheme === 'dark') {
    if (image) image.src = 'assets/sabrina_dark-ver.jpg';
    theme.href = 'portfolio-styles_dark.css';
    symbol.src = 'assets/light-mode-50.png';
    fcIcon.src = 'assets/future-code-1-logo-darkblue_64.png';
    body.dataset.theme = 'dark'; // Use data attribute for easier CSS targeting
    console.log('Applying dark theme styles');
  } else {
    if (image) image.src = 'assets/sabrina_light-ver.jpg';
    theme.href = 'portfolio-styles.css';
    symbol.src = 'assets/dark-mode-50.png';
    fcIcon.src = 'assets/future-code-1-logo_64.png';
    body.dataset.theme = 'light';
    console.log('Applying light theme styles');
  }

  // Save theme preference
  localStorage.setItem('theme', newTheme);
  console.log('Saved theme to localStorage:', newTheme); 

  // Remove the transition class after a brief moment to allow the transition to complete
  setTimeout(() => {
    body.classList.remove('transitioning');
  }, 300); // Match this time to the CSS transition duration
}

// Toggle themes on button click
btn.addEventListener('click', () => {
  const currentTheme =
    theme.getAttribute('href') === 'portfolio-styles.css' ? 'dark' : 'light';
  // console.log('Current theme before toggle:', currentTheme);
  switchTheme(currentTheme); // Toggle theme without page reload
});
