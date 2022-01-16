const retourAccueil = document.querySelector(".back");
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    retourAccueil.style.top = 0;
  } else {
    retourAccueil.style.top = "-50px";
  }
});
const redirectPj1 = document.querySelector(".btnpj1");
redirectPj1.addEventListener("click", () => {
  window.open("https://github.com/asab03/Home-Travel");
});

const redirectPj2 = document.querySelector(".btnpj2");
redirectPj2.addEventListener("click", () => {
  window.open("https://github.com/asab03/shortcuts-API");
});

const redirectPj3 = document.querySelector(".btnpj3");
redirectPj3.addEventListener("click", () => {
  window.open("https://github.com/asab03/todolist");
});

/* Redirection vers page github en touchant les images sur mobile

const redirectPj1T = document.querySelector(".btn1");
redirectPj1T.addEventListener("touchstart", () => {
  window.open("https://github.com/asab03/Home-Travel");
});
const redirectPj2T = document.querySelector(".btn2");
redirectPj2T.addEventListener("touchstart", () => {
  window.open("https://github.com/asab03/shortcuts-API");
});
const redirectPj3T = document.querySelector(".btn3");
redirectPj3T.addEventListener("touchstart", () => {
  window.open("https://github.com/asab03/todolist");
});*/
