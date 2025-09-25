// Typing Effect
const typing = document.getElementById("typing");
const roles = ["Data Analyst ", "Python Developer ", "SQL Enthusiast ", "Power BI Learner "];
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

// Navbar active link highlight - scroll + click optimized
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist a");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

// Function to update active link based on scroll position
function updateActiveLink() {
  let scrollPos = window.scrollY + headerHeight + 5; // small buffer

  sections.forEach(sec => {
    let offsetTop = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`.navlist a[href="#${id}"]`);
      if(activeLink) activeLink.classList.add("active");
    }
  });
}

// Scroll event
window.addEventListener("scroll", updateActiveLink);

// Click event - instant active highlight
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
