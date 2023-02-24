const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListEl = document.querySelector(".social-list");

menuEl.addEventListener("click", () => {
  menuEl.classList.toggle("rotate");
  socialListEl.classList.toggle("hide");
});

const liEl = document.querySelectorAll(".social-list li");

liEl.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    menuTextEl.innerHTML = liEl.innerHTML;
    socialListEl.classList.add("hide");
    menuEl.classList.toggle("rotate");
  });
});
