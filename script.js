// ==============================
// I TO EYE WEBSITE
// script.js
// ==============================

// Mobile Navigation

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});

// Close menu when a navigation link is clicked

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Shrink header while scrolling

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.padding = "12px 60px";
        header.style.background = "rgba(31,58,95,.9)";

    }

    else{

        header.style.padding = "18px 60px";
        header.style.background = "rgba(31,58,95,.65)";

    }

});
