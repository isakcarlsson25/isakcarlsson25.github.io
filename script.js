document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'); //get colorcode
  }

  function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return { gradient: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`, color1, color2 };
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const { gradient, color1 } = getRandomGradient();
      document.documentElement.style.background = gradient; // change background
      themeToggle.style.backgroundColor = color1; // change color on button
    });
  }
});