var menuButton = document.getElementById("menuicon");
var menulinks = document.getElementById("navlinks");
var menuCloseButton = document.getElementById("menucloseicon");
var menublur = document.getElementById("menublur");


menuCloseButton.addEventListener("click", () => {
  menulinks.style.display = "none";
  menublur.style.display = "none";
  menuButton.style.display = "inline-block";
  menuCloseButton.style.display = "none";
});

menuButton.addEventListener("click", () => {
  menulinks.style.display = "flex";
  menublur.style.display = "block";
  menuButton.style.display = "none";
  menuCloseButton.style.display = "inline-block";
  menuCloseButton.style.zIndex = "99";
});
