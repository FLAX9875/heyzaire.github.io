// scripts/archive.js
document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".folder");
  const overlay = document.getElementById("folderOverlay");
  const overlayTitle = document.getElementById("overlayTitle");
  const closeBtn = document.getElementById("closeOverlay");

  // double click detection (simple)
  folders.forEach(folder => {
    let timer = null;
    folder.addEventListener("click", (e) => {
      if (timer === null) {
        timer = setTimeout(() => { clearTimeout(timer); timer = null; }, 300);
      } else {
        // double click detected
        clearTimeout(timer);
        timer = null;
        const key = folder.dataset.key || "folder";
        overlayTitle.textContent = folder.querySelector(".folder-label").textContent;
        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden", "false");
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
    }
  });
});
