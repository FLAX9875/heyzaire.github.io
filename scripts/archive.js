document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".folder");
  const folderView = document.getElementById("folder-view");
  const folderTitle = document.getElementById("folder-title");
  const closeBtn = document.getElementById("close-folder");

  folders.forEach(folder => {
    folder.addEventListener("dblclick", () => {
      folderView.classList.add("active");
      folderTitle.textContent = folder.querySelector("span").textContent;
    });
  });

  closeBtn.addEventListener("click", () => {
    folderView.classList.remove("active");
  });
});

