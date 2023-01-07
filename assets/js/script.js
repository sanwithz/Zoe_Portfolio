'use strict';



/**
 * Preloader
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * Navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements([navToggleBtn, overlay], "click", toggleNavbar);

const closeNavbar = function () {
  navToggleBtn.classList.remove("active");
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
}

addEventOnElements(navLinks, "click", closeNavbar);



/**
 * Header
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 150 ? "add" : "remove"]("active");
});



/**
 * Scroll reveal
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const isElementOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2;

    if (isElementOnScreen) revealElements[i].classList.add("revealed");
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



/**
 * Custom cursor
 */

const cursor = document.querySelector("[data-cursor]");
const hoveredElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

window.addEventListener("mousemove", function (e) {
  cursor.animate({
    top: `${e.clientY}px`,
    left: `${e.clientX}px`,
  }, { duration: 1000, fill: "forwards" });
});

addEventOnElements(hoveredElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoveredElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});