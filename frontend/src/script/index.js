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


