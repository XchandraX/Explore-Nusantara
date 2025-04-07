import "./navbar.js";
import "./footer.js";
import "./destination-card.js";
// import destinations from "./example-data.js";

//Menu Navbar
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// untuk membuat hover menetap
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("page-btn")) {
      const buttons = document.querySelectorAll(".page-btn");
  
      buttons.forEach(btn => {
        btn.classList.remove("bg-[#ac654a]", "text-white");
        btn.classList.add("text-gray-500");
      });
  
      e.target.classList.remove("text-gray-500");
      e.target.classList.add("bg-[#ac654a]", "text-white");
    }
  });

