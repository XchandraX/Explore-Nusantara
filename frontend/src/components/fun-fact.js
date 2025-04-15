class funFactSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="indonesia-funfact" class="px-4 py-10 sm:px-8 md:py-20">
            <div class="relative w-full max-w-screen-lg mx-auto">
                <!-- Peta -->
                <img src="/public/img/indonesia-map.png" alt="Peta Indonesia" class="w-full object-contain">

                <!-- Teks -->
                <p class="absolute inset-x-0 bottom-6 md:bottom-20 text-center text-base sm:text-xl md:text-3xl font-semibold text-[#4F834F] px-4 sm:px-12 leading-snug">
                    “Tahukah kamu? Indonesia memiliki lebih dari 17.000 pulau dengan ribuan budaya unik dan destinasi menakjubkan yang siap dieksplorasi!”
                </p>
            </div>
        </section>
        `;
  }
}

customElements.define("fun-fact", funFactSection);
