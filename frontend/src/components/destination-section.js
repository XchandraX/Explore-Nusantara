class DestinationSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="px-6 md:px-16 mt-16 md:mt-32 mb-20 md:mb-40">
            <!-- Title Destinasi -->
            <h2 class="font-semibold text-2xl md:text-3xl mb-2 md:mb-8">
            <span class="text-[#AC654A]">Destinasi</span>
            <span class="text-black">untuk Anda</span>
            </h2>
        
            <!-- Opsi Jenis Dentinasi -->
            <div class="flex gap-3 mb-5 overflow-x-auto whitespace-nowrap hide-scrollbar">
                <button class="category-button border-2 border-[#AC654A] text-black py-1 md:py-2 px-3 md:px-4 rounded-full hover:bg-[#AC654A] text-sm md:text-base hover:text-white transition">Semua</button>
                <button class="category-button border-2 border-[#AC654A] text-black py-1 md:py-2 px-3 md:px-4 rounded-full hover:bg-[#AC654A] text-sm md:text-base hover:text-white transition">Wisata Alam</button>
                <button class="category-button border-2 border-[#AC654A] text-black py-1 md:py-2 px-3 md:px-4 rounded-full hover:bg-[#AC654A] text-sm md:text-base hover:text-white transition">Pantai</button>
                <button class="category-button border-2 border-[#AC654A] text-black py-1 md:py-2 px-3 md:px-4 rounded-full hover:bg-[#AC654A] text-sm md:text-base hover:text-white transition">Sejarah</button>
                <button class="category-button border-2 border-[#AC654A] text-black py-1 md:py-2 px-3 md:px-4 rounded-full hover:bg-[#AC654A] text-sm md:text-base hover:text-white transition">Kuliner</button>
            </div>
        
            <!-- Destination Cards -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <!--Card 1-->
                <div class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl md:max-w-xl">
                    <img src="/public/img/tanah-lot.png" alt="Tanah Lot" class="w-174 h-auto md:w-full md:h-60 object-cover rounded-tl-xl rounded-tr-xl">
                    <div class="p-4 md:p-6 md:mb-4">
                        <h3 class="text-xl md:text-2xl font-semibold">Tanah Lot</h3>
                        <p class="text-gray-500 text-xs md:text-base flex items-center md:mt-1 gap-1">
                            <img src="/public/icon/location-icon.png" alt="location-icon" class="h-3 md:h-4 opacity-60">
                            Tabanan, Bali
                        </p>
                        <span class="text-xs md:text-sm font-normal text-[#C59172] bg-[#F3EAE1] px-1 md:px-2 py-1 md:py-2 rounded-md flex items-center gap-1 mt-2 mb-2 justify-between">
                            Wisata Alam
                            <img src="/public/icon/daun.png" alt="" class="w-2 md:w-4 h-2 md:h-4">
                        </span>
                        <p class="text-gray-600 text-xs md:text-sm mt-2 mb-2 d:mb-6">
                            Tanah Lot adalah salah satu destinasi wisata ikonik di Bali yang terkenal dengan pura yang berdiri di atas batu karang besar  di tepi laut.
                        </p>

                        <a href="#" class="bg-[#4F834F] text-sm md:text-base text-white text-center py-1 md:py-2 px-2 md:px-3 rounded-md md:rounded-lg hover:bg-[#304b30]">
                            Selengkapnya
                        </a>
                    </div>
                </div>

                <!--Card 2-->
                <div class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl md:max-w-xl">
                    <img src="/public/img/tanah-lot.png" alt="Tanah Lot" class="w-174 h-auto md:w-full md:h-60 object-cover rounded-tl-xl rounded-tr-xl">
                    <div class="p-4 md:p-6 md:mb-4">
                        <h3 class="text-xl md:text-2xl font-semibold">Tanah Lot</h3>
                        <p class="text-gray-500 text-xs md:text-base flex items-center md:mt-1 gap-1">
                            <img src="/public/icon/location-icon.png" alt="location-icon" class="h-3 md:h-4 opacity-60">
                            Tabanan, Bali
                        </p>
                        <span class="text-xs md:text-sm font-normal text-[#C59172] bg-[#F3EAE1] px-1 md:px-2 py-1 md:py-2 rounded-md flex items-center gap-1 mt-2 mb-2 justify-between">
                            Wisata Alam
                            <img src="/public/icon/daun.png" alt="" class="w-2 md:w-4 h-2 md:h-4">
                        </span>
                        <p class="text-gray-600 text-xs md:text-sm mt-2 mb-2 d:mb-6">
                            Tanah Lot adalah salah satu destinasi wisata ikonik di Bali yang terkenal dengan pura yang berdiri di atas batu karang besar  di tepi laut.
                        </p>

                        <a href="#" class="bg-[#4F834F] text-sm md:text-base text-white text-center py-1 md:py-2 px-2 md:px-3 rounded-md md:rounded-lg hover:bg-[#304b30]">
                            Selengkapnya
                        </a>
                    </div>
                </div>

                <!--Card 3-->
                <div class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl md:max-w-xl">
                    <img src="/public/img/tanah-lot.png" alt="Tanah Lot" class="w-174 h-auto md:w-full md:h-60 object-cover rounded-tl-xl rounded-tr-xl">
                    <div class="p-4 md:p-6 md:mb-4">
                        <h3 class="text-xl md:text-2xl font-semibold">Tanah Lot</h3>
                        <p class="text-gray-500 text-xs md:text-base flex items-center md:mt-1 gap-1">
                            <img src="/public/icon/location-icon.png" alt="location-icon" class="h-3 md:h-4 opacity-60">
                            Tabanan, Bali
                        </p>
                        <span class="text-xs md:text-sm font-normal text-[#C59172] bg-[#F3EAE1] px-1 md:px-2 py-1 md:py-2 rounded-md flex items-center gap-1 mt-2 mb-2 justify-between">
                            Wisata Alam
                            <img src="/public/icon/daun.png" alt="" class="w-2 md:w-4 h-2 md:h-4">
                        </span>
                        <p class="text-gray-600 text-xs md:text-sm mt-2 mb-2 d:mb-6">
                            Tanah Lot adalah salah satu destinasi wisata ikonik di Bali yang terkenal dengan pura yang berdiri di atas batu karang besar  di tepi laut.
                        </p>

                        <a href="#" class="bg-[#4F834F] text-sm md:text-base text-white text-center py-1 md:py-2 px-2 md:px-3 rounded-md md:rounded-lg hover:bg-[#304b30]">
                            Selengkapnya
                        </a>
                    </div>
                </div>
            </div>
        
            <!-- Pagination -->
            <div class="flex justify-center items-center space-x-2 mt-20" id="pagination">
                <!-- Tombol Sebelumnya -->
                <button id="prev">
                <img src="/public/icon/navigate-icon-30-opacity.png" alt="Navigate Previous" class="w-7 rotate-180">
                </button>
            
                <!-- Tombol Halaman -->
                <button class="page-btn px-3 py-1 bg-[#ac654a] text-white rounded">1</button>
                <button class="page-btn px-3 py-1 text-gray-700 rounded hover:bg-[#ac654a] hover:text-white transition">2</button>
                <button class="page-btn px-3 py-1 text-gray-700 rounded hover:bg-[#ac654a] hover:text-white transition">3</button>
                <button class="page-btn px-3 py-1 text-gray-700 rounded hover:bg-[#ac654a] hover:text-white transition">4</button>
                <button class="page-btn px-3 py-1 text-gray-700 rounded hover:bg-[#ac654a] hover:text-white transition">5</button>
            
                <!-- Ellipsis -->
                <span class="px-2 text-gray-500">...</span>
            
                <!-- Tombol Selanjutnya -->
                <button id="next">
                <img src="/public/icon/navigate-icon-30-opacity.png" alt="Navigate Next" class="w-7">
                </button>
            </div>
        </section>  
      `;
  }
}

customElements.define("destination-section", DestinationSection);
