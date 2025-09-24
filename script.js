/* ==================== TYPING EFFECT ==================== */
const typing = document.getElementById("typing");
const roles = [
  "Data Analyst ",
  "Python Developer ",
  "SQL Enthusiast ",
  "Power BI Learner "
];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      current = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = roles[i].substring(0, j--);
    }
    typing.innerHTML = current;

    if (j === roles[i].length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    } else if (j < 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

/* ==================== NAVBAR ACTIVE LINK & HEADER SCROLL ==================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const top = window.scrollY;

  // Navbar active links
  sections.forEach(sec => {
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(".navlist a[href*=" + id + "]")?.classList.add("active");
    }
  });

  // Header background change
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ==================== FADE-IN ANIMATION ON SCROLL ==================== */
const fadeElems = document.querySelectorAll(
  ".skills-list span, .project-card, .about p"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElems.forEach(el => observer.observe(el));

/* ==================== MOBILE MENU TOGGLE ==================== */
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
  menuIcon.classList.toggle("bx-x"); // change hamburger to cross
});

// Close menu when clicking a link (mobile)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navList.classList.contains("open")) {
      navList.classList.remove("open");
      menuIcon.classList.remove("bx-x");
    }
  });
});
