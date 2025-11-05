// DARK/LIGHT THEME TOGGLE WITH FADE
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function smoothThemeTransition() {
  document.body.classList.add("transition");
  window.setTimeout(() => {
    document.body.classList.remove("transition");
  }, 600);
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.src = "assets/icons/sun.svg";
}

themeToggle.addEventListener("click", () => {
  smoothThemeTransition();
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeIcon.src = isLight ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// SMOOTH FADE-IN ON SCROLL
const fadeElems = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

fadeElems.forEach(el => observer.observe(el));

