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

// Navbar active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist a");

window.onscroll = () => {
  let top = window.scrollY;
  sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector(".navlist a[href*=" + id + "]").classList.add("active");
    }
  });
};
