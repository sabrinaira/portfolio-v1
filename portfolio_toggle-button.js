// Select the button
const btn = document.getElementById('toggle-button');
// Select the stylesheet <link>
const theme = document.getElementById('theme-link');
const image = document.getElementById('darkModeImg');

// Listen for a click on the button
btn.addEventListener('click', function () {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute('href') == 'portfolio-styles.css') {
    // ... then switch it to "dark-theme.css"
    theme.href = 'portfolio-styles_dark.css';
    image.src = 'assets/sabrinaira-profile-pic-dark.jpg';
    // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = 'portfolio-styles.css';
    image.src = 'assets/sabrinaira-profile-pic-light.jpg';
  }
});
