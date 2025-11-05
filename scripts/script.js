// THEME TOGGLE
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.src = "assets/icons/sun.svg";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeIcon.style.opacity = 0;
  setTimeout(() => {
    themeIcon.src = isLight ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
    themeIcon.style.opacity = 1;
  }, 200);
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// FADE-IN
const fadeElems = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeElems.forEach(el => appearOnScroll.observe(el));
