// scripts/archive.js
document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".folder");
  const overlay = document.getElementById("folderOverlay");
  const overlayTitle = document.getElementById("overlayTitle");
  const closeBtn = document.getElementById("closeOverlay");

  folders.forEach(folder => {
    let clickTimer = null;

    folder.addEventListener("click", () => {
      if (clickTimer === null) {
        clickTimer = setTimeout(() => { clearTimeout(clickTimer); clickTimer = null; }, 280);
      } else {
        clearTimeout(clickTimer);
        clickTimer = null;
        // double click action
        const label = folder.querySelector('.folder-label')?.textContent || 'Folder';
        overlayTitle.textContent = label;
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
  });
});
