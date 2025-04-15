class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="hero" class="px-4 sm:px-6 md:px-10 lg:px-16 py-20">
          <div class="mx-auto flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl">
            <!-- Teks -->
            <div class="md:w-1/2 text-center md:text-left">
                <h1 class="font-semibold text-[clamp(1.8rem,4vw,3rem)] leading-snug mb-4">
                <span class="text-[#AC654A] block">Eksplor Indonesia</span>
                <span class="text-black">Keindahan dan Petualangan Bersatu</span>
                </h1>
                <p class="text-[clamp(0.9rem,2vw,1.125rem)] text-gray-700 leading-relaxed">
                Rasakan pengalaman wisata yang menggabungkan keindahan alam, budaya yang kaya, dan petualangan seru dalam satu destinasi.
                </p>
                <button class="bg-[#4F834F] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#304b30] mt-6 transition duration-300 text-sm sm:text-base">
                Mulai Petualangan
                </button>
            </div>
  
            <!-- Gambar -->
            <div class="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 px-8 items-center">
                <img src="/public/img/pura-bali.png" alt="Pura Bali" class="w-full max-w-[300px] row-span-2 aspect-[3/4] object-cover rounded-xl mx-auto" />
                <img src="/public/img/candi-prambanan.png" alt="Candi Prambanan" class="w-full max-w-[150px] object-cover rounded-xl aspect-[3/4] mx-auto" />
                <img src="/public/img/tari-bali.png" alt="Tari Bali" class="w-full max-w-[150px] object-cover rounded-xl aspect-[3/4] mx-auto" />
            </div>
          </div>
        </section>
      `;
  }
}

customElements.define("hero-section", HeroSection);
