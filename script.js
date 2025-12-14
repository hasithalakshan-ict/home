
// Toggle mobile navigation menu
document.getElementById('hamburgerBtn').addEventListener('click', function () {
  const nav = document.getElementById('navLinks');
  const expanded = this.getAttribute('aria-expanded') === 'true';

  nav.classList.toggle('mobile-active');  // <-- changed here
  this.setAttribute('aria-expanded', !expanded);
});


// Animate .slide-in and .timetable-card elements on scroll
const slideElements = document.querySelectorAll('.slide-in, .timetable-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.2
});

slideElements.forEach(el => observer.observe(el));

// Typing animation for the quote title
const titleElement = document.querySelector(".quote-title");
const subElement = document.querySelector(".quote-sub");

if (titleElement && subElement) {
  const fullText = "සොඳුරුතම\nඋසස් පෙළ\nICT\nගවේෂණය";
  let i = 0;
  let buffer = "";
  titleElement.textContent = "";
  subElement.innerHTML = "";

  function typeAll() {
    if (i < fullText.length) {
      const char = fullText.charAt(i);
      if (i < 9) {
        buffer += (char === "\n") ? "" : char;
        titleElement.textContent = buffer;
      } else {
        subElement.innerHTML += (char === "\n") ? "<br>" : char;
      }
      i++;
      setTimeout(typeAll, 100);
    }
  }

  typeAll();
}

// Dark mode toggle button logic
const toggleBtn = document.getElementById('themeToggle');

// On load, apply saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
} else {
  // default icon moon (light mode)
  toggleBtn.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙'; // moon icon for light mode
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️'; // sun icon for dark mode
    localStorage.setItem('theme', 'dark');
  }
});







document.addEventListener("DOMContentLoaded", function() {
  const snowContainer = document.body;
  
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄"; 
    
    // Randomize position, size, and speed
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; 
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; 
    snowflake.style.opacity = Math.random();
    
    snowContainer.appendChild(snowflake);
    
    // Remove snowflake after it falls to keep the site fast
    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }

  // Create a new snowflake every 100 milliseconds
  setInterval(createSnowflake, 100);
});
