class kuisSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section
        id="introSection"
        class="min-h-screen flex flex-col justify-center items-center bg-[#4F834F] text-white px-6">
        <h2 class="text-2xl md:text-3xl font-semibold my-16 text-center">
          Atur Preferensi Destinasi
        </h2>
        <div class="relative flex justify-center items-center w-full max-w-2xl m-12">
          
          <!-- Gambar Pulau Indonesia (besar di tengah) -->
          <img
            src="/public/img/indonesia-island.png"
            alt="Pulau Indonesia"
            class="w-72 rounded-lg shadow-lg z-10 relative" />
          
          <!-- Gambar Borobudur (numpuk di atas Pulau Indonesia) -->
          <img
            src="/public/img/borobudur.png"
            alt="Borobudur"
            class="absolute top-[-40px] left-96 w-40 rounded-lg shadow-lg z-20" />
          
          <!-- Gambar Bali (numpuk di atas Pulau Indonesia, di bawah Borobudur) -->
          <img
            src="/public/img/temple-bali-indonesia.png"
            alt="Bali"
            class="absolute bottom-[-40px] left-96 w-40 rounded-lg shadow-lg z-20" />
        </div>
        
        <p class="italic mt-16 mb-4 text-sm md:text-base text-center">
          “Temukan Destinasi Impianmu!”
        </p>
        
        <button
          id="start-quiz-btn"
          onclick="startQuiz()"
          class="bg-white text-sm text-[#4F834F] px-5 py-2 rounded-lg font-medium hover:bg-[#385D38] hover:text-white transition">
          Mulai Kuis
        </button>
      </section>
    `;
  }
}

customElements.define("kuis-section", kuisSection);
