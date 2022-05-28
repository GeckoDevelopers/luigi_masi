const d = document;
const openHamburger = d.querySelector("#js-open-hamburger-menu");
const hamburger = d.querySelector("#js-hamburger-menu");
const bodyFixed = d.querySelector("#js-pos-fixed");
const line1 = d.querySelector("#line1");
const line2 = d.querySelector("#line2");
const line3 = d.querySelector("#line3");

const hamburgerMenu = () => {
  hamburger.classList.toggle("hamburger--active");
  bodyFixed.classList.toggle("hamburger--pos-fixed");
  line1.classList.toggle("hamburger__line1--selected");
  line2.classList.toggle("hamburger__line2--selected");
  line3.classList.toggle("hamburger__line3--selected");
};

openHamburger.addEventListener("click", hamburgerMenu);
