// --- THEME TOGGLE WITH ANIMATION ---
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.src = "assets/icons/sun.svg";
}

// On click toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeIcon.src = isLight ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
  themeIcon.style.transform = "rotate(360deg)";
  themeIcon.style.filter = isLight
    ? "drop-shadow(0 0 10px var(--accent)) hue-rotate(60deg)"
    : "drop-shadow(0 0 10px var(--accent)) hue-rotate(260deg)";
  setTimeout(() => (themeIcon.style.transform = ""), 800);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// --- FADE-IN ---
const fadeElems = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeElems.forEach((el) => appearOnScroll.observe(el));
