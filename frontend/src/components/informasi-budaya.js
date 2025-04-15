class artikelSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section id="info-budaya" class="px-6 md:px-16 my-12 md:my-20">
            <h2 class="font-semibold text-2xl md:text-3xl mb-2 md:mb-8">
            <span class="text-[#AC654A]">Informasi</span>
            <span class="text-black">Budaya</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            <!-- Kartu Besar -->
            <div
                class="md:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-3xl mx-auto transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div class="relative">
                <img
                    src="/public/img/budaya-kalimantan.png"
                    alt="Budaya Kalimantan"
                    class="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-t-2xl" />
                <span
                    class="absolute bottom-0 left-0 bg-[#AC654A] text-white px-3 py-1.5 text-xs sm:text-sm rounded-tr-lg rounded-bl-lg">
                    Budaya & Tradisi
                </span>
                </div>

                <div class="p-4 sm:p-6 space-y-3">
                <h3
                    class="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
                    Desa Adat di Kalimantan, Kental akan Budaya dan Tradisi
                </h3>
                <p class="text-gray-600 text-sm sm:text-base">
                    Membahas soal budaya, Pulau Kalimantan memang tidak ada
                    habisnya...
                    <a
                    href="culture_information.html"
                    class="text-[#4F834F] font-semibold"
                    >Baca Selengkapnya.</a
                    >
                </p>
                <div
                    class="flex justify-between items-center text-gray-500 text-xs sm:text-sm pt-2">
                    <span class="flex items-center">
                    <img
                        src="/public/icon/calendar-icon.png"
                        alt="Calendar Icon"
                        class="h-4 sm:h-5 mr-2" />
                    8 Agustus 2024
                    </span>
                    <span class="flex items-center">
                    <img
                        src="/public/icon/eyes-icon.png"
                        alt="Eyes Icon"
                        class="h-4 sm:h-5 mr-2" />
                    20
                    </span>
                </div>
                </div>
            </div>

            <!-- Kartu Kecil -->
            <div class="grid grid-cols-1 gap-3 w-[100%]">
                <!-- Kartu Kecil 1 -->
                <div
                class="bg-white rounded-2xl shadow-lg overflow-hidden flex h-32 sm:h-36 md:h-40 w-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div class="relative w-32 sm:w-36 md:w-[45%] h-full">
                    <img
                    src="/public/img/budaya-kalimantan.png"
                    alt="Budaya Kalimantan"
                    class="w-full h-full object-cover rounded-l-2xl" />
                    <span
                    class="absolute bottom-0 left-0 bg-[#AC654A] text-white px-3 py-1.5 text-[10px] sm:text-xs rounded-tr-lg rounded-bl-lg">
                    Budaya & Tradisi
                    </span>
                </div>

                <div
                    class="p-3 md:p-4 flex flex-col justify-between w-[calc(100%-8rem)] sm:w-[calc(100%-9rem)] md:w-[55%]">
                    <h3
                    class="text-sm sm:text-base md:text-lg font-semibold leading-snug">
                    Desa Adat di Kalimantan, Kental akan Budaya dan Tradisi
                    </h3>
                    <div
                    class="flex justify-between text-gray-500 text-[10px] sm:text-xs mt-2">
                    <span class="flex items-center">
                        <img
                        src="/public/icon/calendar-icon.png"
                        alt="Calendar Icon"
                        class="h-4 mr-1.5" />
                        8 Agustus 2024
                    </span>
                    <span class="flex items-center">
                        <img
                        src="/public/icon/eyes-icon.png"
                        alt="Eyes Icon"
                        class="h-4 mr-1.5" />
                        20
                    </span>
                    </div>
                </div>
                </div>

                <!-- Kartu Kecil 2 -->
                <div
                class="bg-white rounded-2xl shadow-lg overflow-hidden flex h-32 sm:h-36 md:h-40 w-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div class="relative w-32 sm:w-36 md:w-[45%] h-full">
                    <img
                    src="/public/img/budaya-kalimantan.png"
                    alt="Budaya Kalimantan"
                    class="w-full h-full object-cover rounded-l-2xl" />
                    <span
                    class="absolute bottom-0 left-0 bg-[#AC654A] text-white px-3 py-1.5 text-[10px] sm:text-xs rounded-tr-lg rounded-bl-lg">
                    Budaya & Tradisi
                    </span>
                </div>

                <div
                    class="p-3 md:p-4 flex flex-col justify-between w-[calc(100%-8rem)] sm:w-[calc(100%-9rem)] md:w-[55%]">
                    <h3
                    class="text-sm sm:text-base md:text-lg font-semibold leading-snug">
                    Desa Adat di Kalimantan, Kental akan Budaya dan Tradisi
                    </h3>
                    <div
                    class="flex justify-between text-gray-500 text-[10px] sm:text-xs mt-2">
                    <span class="flex items-center">
                        <img
                        src="/public/icon/calendar-icon.png"
                        alt="Calendar Icon"
                        class="h-4 mr-1.5" />
                        8 Agustus 2024
                    </span>
                    <span class="flex items-center">
                        <img
                        src="/public/icon/eyes-icon.png"
                        alt="Eyes Icon"
                        class="h-4 mr-1.5" />
                        20
                    </span>
                    </div>
                </div>
                </div>

                <!-- Kartu Kecil 3 -->
                <div
                class="bg-white rounded-2xl shadow-lg overflow-hidden flex h-32 sm:h-36 md:h-40 w-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div class="relative w-32 sm:w-36 md:w-[45%] h-full">
                    <img
                    src="/public/img/budaya-kalimantan.png"
                    alt="Budaya Kalimantan"
                    class="w-full h-full object-cover rounded-l-2xl" />
                    <span
                    class="absolute bottom-0 left-0 bg-[#AC654A] text-white px-3 py-1.5 text-[10px] sm:text-xs rounded-tr-lg rounded-bl-lg">
                    Budaya & Tradisi
                    </span>
                </div>

                <div
                    class="p-3 md:p-4 flex flex-col justify-between w-[calc(100%-8rem)] sm:w-[calc(100%-9rem)] md:w-[55%]">
                    <h3
                    class="text-sm sm:text-base md:text-lg font-semibold leading-snug">
                    Desa Adat di Kalimantan, Kental akan Budaya dan Tradisi
                    </h3>
                    <div
                    class="flex justify-between text-gray-500 text-[10px] sm:text-xs mt-2">
                    <span class="flex items-center">
                        <img
                        src="/public/icon/calendar-icon.png"
                        alt="Calendar Icon"
                        class="h-4 mr-1.5" />
                        8 Agustus 2024
                    </span>
                    <span class="flex items-center">
                        <img
                        src="/public/icon/eyes-icon.png"
                        alt="Eyes Icon"
                        class="h-4 mr-1.5" />
                        20
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <!-- Tombol -->
            <div class="text-center mt-9 md:mt-16 flex justify-center">
            <a
                href="#"
                class="px-3 md:px-4 py-1 md:py-2 border-2 border-solid border-[#4F834F] rounded-lg text-smmd:text-base text-[#4F834F] font-semibold hover:bg-[#4F834F] hover:text-white transition">
                Temukan Lagi
            </a>
            </div>
        </section>
        `;
  }
}

customElements.define("informasi-budaya", artikelSection);
