class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="bg-[#4F834F] w-full">
            <!-- Footer Content -->
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-6 py-10 text-center md:text-left gap-6">
                <!-- Logo -->
                <div class="flex justify-center md:justify-start items-center">
                    <img src="/public/img/logo-explore-nusantara-putih.png" alt="Logo Explore Nusantara" class="w-12 mr-2">
                    <span class="text-white text-xl font-semibold">Explore Nusantara</span>
                </div>

                <!-- Navigation -->
                <ul class="grid md:flex justify-center md:justify-center md:space-x-10 text-white font-normal">
                    <li class="py-2"><a href="#" class="hover:text-[#CEE4CE]">Beranda</a></li>
                    <li class="py-2"><a href="#" class="hover:text-[#CEE4CE]">Destinasi</a></li>
                    <li class="py-2"><a href="#" class="hover:text-[#CEE4CE]">Budaya</a></li>
                </ul>

                <!-- Social Media -->
                <ul class="flex justify-center md:justify-end space-x-4 mt-3 md:mt-0">
                    <li><a href="#"><img src="/public/icon/instagram-icon.png" alt="Instagram" class="h-6"></a></li>
                    <li><a href="#"><img src="/public/icon/facebook-icon.png" alt="Facebook" class="h-6"></a></li>
                    <li><a href="#"><img src="/public/icon/twitter-icon.png" alt="Twitter" class="h-6"></a></li>
                </ul>
            </div>

            <!-- Copyright -->
            <div class="bg-[#385D38] py-2">
                <p class="text-white text-center text-sm">© 2025 Explore Nusantara. All Rights Reserved</p>
            </div>
        </footer>
        `;
  }
}
customElements.define("footer-section", CustomFooter);
