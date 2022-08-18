const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".link-container");
const navLink = document.querySelector(".nav-link");
navToggle.addEventListener("click", function () {
  const containerHeight = linkContainer.getBoundingClientRect().height;
  const navHeight = navLink.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linkContainer.style.height = `${navHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});

const navBar = document.querySelector(".nav");
const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeights = navBar.getBoundingClientRect().height;
  if (scrollHeight > navHeights) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 550) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});
