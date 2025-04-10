class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-3 shadow-md bg-[#FAF5F2]">
                <!-- Logo -->
                <a href="#" class="flex items-center">
                    <img src="/frontend/src/asset/img/explore-nusantara-logo.png" alt="Explore Nusantara Logo" class="w-6 md:w-12 mr-2">
                    <span class="text-[#AC654A] text-sm md:text-xl font-semibold">Explore Nusantara</span>
                </a>
            
                <!-- Menu Hamburger (Mobile) -->
                <button id="menu-toggle" class="md:hidden">
                    <img src="/frontend/src/asset/icon/menu-hamburger.png" alt="menu-hamburger" class="w-5">
                </button>

                <!-- Navigasi di Tengah -->
                <ul class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-16">
                    <li><a href="/frontend/src/pages/main-landing-page.html" class="text-black hover:text-[#4F834F]">Beranda</a></li>
                    <li><a href="/frontend/src/pages/destinasi-landing-page.html" class="text-black hover:text-[#4F834F]">Destinasi</a></li>
                    <li><a href="/frontend/src/pages/budaya-landing-page.html" class="text-black hover:text-[#4F834F]">Budaya</a></li>
                </ul>
            
                <!-- Search, Bahasa, dan Tombol Masuk -->
                <div class="hidden md:flex items-center space-x-4">
                    <!-- Search Bar -->
                    <div class="relative hidden md:block">
                        <input type="text" placeholder="Cari..." class="px-4 py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <img src="/frontend/src/asset/icon/search-icon.png" alt="search-icon" class="h-6">
                        </button>
                    </div>
            
                    <!-- Opsi Bahasa -->
                    <select class="bg-transparent text-[#222222] font-normal focus:outline-none">
                        <option value="id">ID</option>
                        <option value="en">EN</option>
                    </select>
            
                    <!-- Tombol Masuk -->
                    <a href="/frontend/src/pages/login-page.html" class="block text-center bg-[#4F834F] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#304b30]">
                        Masuk
                    </a>
                </div>

                <!-- Menu Mobile -->
                <div id="mobile-menu" class="hidden fixed top-16 left-0 w-full bg-[#FAF5F2] shadow-md md:hidden">
                    <ul class="flex flex-col items-center space-y-4 py-4">
                        <li><a href="/frontend/src/pages/main-landing-page.html" class="text-black hover:text-[#4F834F]">Beranda</a></li>
                        <li><a href="/frontend/src/pages/destinasi-landing-page.html" class="text-black hover:text-[#4F834F]">Destinasi</a></li>
                        <li><a href="/frontend/src/pages/budaya-landing-page.html" class="text-black hover:text-[#4F834F]">Budaya</a></li>
                        <li>
                            <!-- Search Bar (Mobile) -->
                            <div class="relative">
                                <input type="text" placeholder="Cari..." class="px-4 py-2 w-64 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                                    <img src="/frontend/src/asset/icon/search-icon.png" alt="search-icon" class="h-6">
                                </button>
                            </div>
                        </li>
                        <li>
                            <!-- Opsi Bahasa (Mobile) -->
                            <select class="bg-transparent text-[#222222] font-normal focus:outline-none">
                                <option value="id">ID</option>
                                <option value="en">EN</option>
                            </select>
                        </li>
                        <li>
                            <!-- Tombol Masuk (Mobile) -->
                            <a href="/frontend/src/pages/login-page.html" class="block text-center bg-[#4F834F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#304b30]">
                                Masuk
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);
