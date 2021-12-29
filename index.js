const retourAccueil = document.querySelector(".back");
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    retourAccueil.style.top = 0;
  } else {
    retourAccueil.style.top = "-50px";
  }
});
