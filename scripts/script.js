// ---------------- DARK/LIGHT THEME TOGGLE ----------------
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.src = "assets/icons/sun.svg";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeIcon.src = isLight ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
  themeIcon.style.transform = "rotate(360deg)";
  themeIcon.style.transition = "transform 0.8s ease";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ---------------- FADE-IN ANIMATION ----------------
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
