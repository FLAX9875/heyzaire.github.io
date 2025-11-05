const folders = document.querySelectorAll(".folder");
const folderView = document.getElementById("folder-view");
const folderTitle = document.getElementById("folder-title");
const folderDescription = document.getElementById("folder-description");
const closeFolder = document.getElementById("close-folder");

const folderData = {
  music: {
    title: "🎵 Music",
    description: "A collection of tracks, playlists, and sound experiments curated by Zaire.",
  },
  git: {
    title: "💻 Git Projects",
    description: "Repositories, side projects, and open-source work you can explore on GitHub.",
  },
  gallery: {
    title: "🖼️ Gallery",
    description: "Visual art, screenshots, and design experiments from Zaire’s creative work.",
  },
};

folders.forEach(folder => {
  let clickTimeout = null;

  folder.addEventListener("click", () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      clickTimeout = null;

      const folderKey = folder.dataset.folder;
      const data = folderData[folderKey];
      folderTitle.textContent = data.title;
      folderDescription.textContent = data.description;

      folderView.classList.remove("hidden");
    } else {
      clickTimeout = setTimeout(() => {
        clearTimeout(clickTimeout);
        clickTimeout = null;
      }, 300);
    }
  });
});

closeFolder.addEventListener("click", () => {
  folderView.classList.add("hidden");
});
