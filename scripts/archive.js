const folders = document.querySelectorAll(".folder");

folders.forEach(folder => {
  let open = false;
  folder.addEventListener("dblclick", () => {
    open = !open;
    folder.querySelector(".folder-icon").style.background = open
      ? "linear-gradient(145deg, #b08aff, #8f6fff)"
      : "linear-gradient(145deg, #3a3a46, #2b2b35)";
  });
});
