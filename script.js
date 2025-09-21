// Typewriter effect
const text = ["Data Analyst", "Python Developer", "SQL Enthusiast", "Power BI Specialist"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typewriter");

  if (isDeleting) {
    currentText = text[index].substring(0, charIndex--);
  } else {
    currentText = text[index].substring(0, charIndex++);
  }

  element.textContent = currentText;

  if (!isDeleting && charIndex === text[index].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % text.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);
