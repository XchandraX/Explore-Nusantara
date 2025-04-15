import "./login.js";
import "./register.js";

class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="relative fixed top-0 left-0 w-full z-50 bg-[#FAF5F2] shadow-md px-4 sm:px-6 md:px-10 lg:px-16 py-3">
        <div class="flex items-center justify-between w-full max-w-7xl mx-auto">
          <a href="index.html" class="flex items-center gap-2">
            <img src="/public/img/explore-nusantara-logo.png" alt="Logo" class="w-10" />
            <span class="text-[#AC654A] text-xl font-semibold">Explore Nusantara</span>
          </a>

          <button id="menu-toggle" class="md:hidden focus:outline-none text-[#AC654A] text-2xl">
            <i class="bx bx-menu"></i>
          </button>

          <ul id="nav-menu" class="hidden md:flex gap-6 items-center text-sm font-medium absolute md:static top-14 left-0 w-full md:w-auto bg-[#FAF5F2] md:bg-transparent md:shadow-none shadow-md px-4 py-4 md:p-0 flex-col md:flex-row z-40 transition-all duration-300 ease-in-out">
            <li><a href="index.html" class="nav-link block py-2 md:py-0 font-semibold underline decoration-[#4F834F] underline-offset-4 hover:relative group">Beranda
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a></li>
            <li><a href="destinasi.html" class="nav-link block py-2 md:py-0 hover:relative group">Destinasi
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a></li>
            <li><a href="budaya.html" class="nav-link block py-2 md:py-0 hover:relative group">Budaya
              <span class="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a></li>
            <li class="md:hidden flex flex-row flex-wrap gap-4 mt-2 items-center justify-between">
              <div class="relative flex-1 min-w-[150px]">
                <input type="text" placeholder="Cari..." class="w-full px-4 py-2 text-sm rounded-full border focus:ring-2 focus:ring-[#4F834F]" />
                <button class="absolute right-3 top-1/2 -translate-y-1/2">
                  <img src="/public/icon/search-icon.png" alt="Cari" class="w-4" />
                </button>
              </div>
              <div class="relative min-w-[100px]">
                <button id="mobile-language-toggle" class="flex items-center justify-between w-full px-4 py-2 border rounded-md">
                  <i class="bx bx-globe mr-2"></i><span>ID</span><i class="bx bx-chevron-down ml-auto"></i>
                </button>
                <ul id="mobile-language-dropdown" class="hidden absolute z-50 mt-1 bg-white border rounded shadow-md w-full">
                  <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-sm" data-lang="id">ID</a></li>
                  <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-sm" data-lang="en">EN</a></li>
                </ul>
              </div>
              <button id="mobile-login-btn" class="bg-[#4F834F] text-white px-4 py-2 rounded-lg text-sm font-semibold transition hover:bg-[#385D38] min-w-[80px]">
                Masuk
              </button>
            </li>
          </ul>

          <div class="hidden flex md:flex items-center gap-4">
            <div class="relative w-28 md:w-48 lg:w-64">
              <input type="text" placeholder="Cari..." class="w-full px-4 py-2 text-sm rounded-full border focus:ring-2 focus:ring-[#4F834F]" />
              <button class="absolute right-3 top-1/2 -translate-y-1/2">
                <img src="/public/icon/search-icon.png" alt="Cari" class="w-4" />
              </button>
            </div>

            <div class="relative group">
              <button id="language-toggle" class="flex items-center gap-1 text-sm font-medium hover:text-[#4F834F]">
                <i class="bx bx-globe"></i><span id="language-text">ID</span><i class="bx bx-chevron-down text-xs"></i>
              </button>
              <ul id="language-dropdown" class="absolute right-0 mt-2 bg-white border rounded shadow-md hidden group-hover:block transition ease-out duration-300">
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-sm" data-lang="id">ID</a></li>
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 text-sm" data-lang="en">EN</a></li>
              </ul>
            </div>

            <button id="desktop-login-btn" class="bg-[#4F834F] text-white px-4 py-2 rounded-lg hover:bg-[#304b30] text-sm font-semibold transition-all duration-200">Masuk</button>
          </div>
        </div>
      </nav>
      <div id="menu-overlay" class="hidden fixed inset-0 bg-black bg-opacity-40 z-30"></div>
      <login-modal></login-modal>
      <register-modal></register-modal>
      `;

    const toggleDropdown = (toggle, dropdown) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("hidden");
      });
    };

    const menuToggle = this.querySelector("#menu-toggle");
    const navMenu = this.querySelector("#nav-menu");
    const overlay = this.querySelector("#menu-overlay");

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });

    overlay.addEventListener("click", () => {
      navMenu.classList.add("hidden");
      overlay.classList.add("hidden");
    });

    toggleDropdown(
      this.querySelector("#language-toggle"),
      this.querySelector("#language-dropdown")
    );
    toggleDropdown(
      this.querySelector("#mobile-language-toggle"),
      this.querySelector("#mobile-language-dropdown")
    );

    const loginModal = document.getElementById("login-modal");
    [
      this.querySelector("#desktop-login-btn"),
      this.querySelector("#mobile-login-btn"),
    ].forEach((btn) => {
      if (btn)
        btn.addEventListener("click", () => {
          loginModal.classList.remove("hidden");
          loginModal.classList.add("flex");
        });
    });
  }
}
customElements.define("navbar-section", CustomNavbar);
