// scripts/script.js
// 1) Theme toggle with animation (sun/moon movement & smooth fade)
// 2) Fade-in appearance for .fade-in elements
// 3) Placeholder population for scrobble/commit/post (you can replace with API later)

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  // Load saved theme
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    body.classList.add("light-mode");
    themeIcon.src = "assets/icons/sun.svg";
  } else {
    themeIcon.src = "assets/icons/moon.svg";
  }

  // animate icon helper
  function animateIcon(isLight) {
    themeIcon.style.transition = "transform 0.8s ease, filter 0.6s ease";
    themeIcon.style.transform = "rotate(360deg) scale(1.08)";
    themeIcon.style.filter = `drop-shadow(0 0 12px rgba(179,128,255,0.9))`;
    setTimeout(() => {
      themeIcon.style.transform = "";
      themeIcon.style.filter = "";
    }, 850);
    themeIcon.src = isLight ? "assets/icons/sun.svg" : "assets/icons/moon.svg";
  }

  themeToggle.addEventListener("click", () => {
    const nowLight = !body.classList.contains("light-mode");
    if (nowLight) body.classList.add("light-mode"); else body.classList.remove("light-mode");
    animateIcon(nowLight);
    localStorage.setItem("theme", nowLight ? "light" : "dark");
  });

  // Fade-in observer
  const fadeElems = document.querySelectorAll(".fade-in");
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  fadeElems.forEach(e => obs.observe(e));

  // Populate placeholders (you can wire to APIs later)
  const scrobbleEl = document.getElementById("scrobble");
  const commitEl = document.getElementById("last-commit");
  const postEl = document.getElementById("latest-post");
  if (scrobbleEl) scrobbleEl.textContent = "—"; // replace with logic
  if (commitEl) commitEl.textContent = "—";
  if (postEl) postEl.textContent = "—";

  // Ensure images/icons load (workaround when svg styling causes invisibility)
  // No styling that hides the github icon; icons must be in assets/icons exactly.
});
