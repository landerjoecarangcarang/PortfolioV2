// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar scroll + active link
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navLinks a");
const sections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute("href")));

function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    if (!s) continue;
    const r = s.getBoundingClientRect();
    if (r.top <= 120 && r.bottom >= 120) {
      navLinks.forEach(a => a.classList.remove("active"));
      navLinks[i].classList.add("active");
      break;
    }
  }
}
window.addEventListener("scroll", onScroll);
onScroll();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));
