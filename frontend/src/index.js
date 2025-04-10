import "./components/navbar.js";
import "./components/footer.js";
import "./components/destination-card.js";

//Menu Navbar
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});



