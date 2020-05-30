// getter-setter toggling aria-checked on color toggle
const darkMode = (turnOn) => {
  let darkModeToggle = document.getElementById('dark-mode-toggle');
  if (turnOn === undefined) return darkModeToggle.getAttribute('aria-checked') === 'true';
  darkModeToggle.setAttribute('aria-checked', turnOn);
}

// set set of 3 color options
const setRootVars = (darkColor, lightColor, midColor) => {
  const root = document.querySelector(':root');
  if (darkColor) root.style.setProperty('--dark-color-current', darkColor);
  if (lightColor) root.style.setProperty('--light-color-current', lightColor);
  if (midColor) root.style.setProperty('--mid-color-current', midColor);
}

// switch current background and text colors to light and dark based on whether we're entering dark mode
const toggleDarkMode = (evt) => {
  const isDarkModeOn = darkMode();
  const root = document.querySelector(':root');
  root.style.setProperty('--background-color', `var(--${isDarkModeOn ? 'light' : 'dark'}-color-current)`);
  root.style.setProperty('--text-color', `var(--${isDarkModeOn ? 'dark' : 'light'}-color-current)`);
  darkMode(!isDarkModeOn);
};

// inspired by https://codepen.io/neilorangepeel/pen/GopwNr
const generateAndSetRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const lightColor = `hsl(${hue}, 100%, 50%)`;
  const darkColor = `hsl(${hue}, 100%, 20%)`;
  const midColor = `hsl(${hue}, 100%, 30%)`;

  setRootVars(darkColor, lightColor, midColor)
}

const resetToDefaultStyle = () => {
  setRootVars("var(--dark-theme-background)", "var(--dark-theme-text)", "var(--dark-theme-active");
  darkMode(true)
}

// set event handlers
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
document.getElementById("button-random-mode").addEventListener("click", generateAndSetRandomColor);
document.getElementById("button-default-mode").addEventListener("click", resetToDefaultStyle);