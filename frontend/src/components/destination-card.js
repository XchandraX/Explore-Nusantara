//CUSTOM ELEMENT DESTINATION CARD BELUM JADI

class destinationCard extends HTMLElement {
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <div class="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl md:max-w-xl">
                <img src="/frontend/src/asset/img/tanah-lot.png" alt="Tanah Lot" class="w-174 h-auto md:w-full md:h-60 object-cover rounded-tl-xl rounded-tr-xl">
                <div class="p-4 md:p-6 md:mb-4">
                    <h3 class="text-xl md:text-2xl font-semibold">Tanah Lot</h3>
                    <p class="text-gray-500 text-xs md:text-base flex items-center md:mt-1 gap-1">
                        <img src="/frontend/src/asset/icon/location-icon.png" alt="location-icon" class="h-3 md:h-4 opacity-60">
                        Tabanan, Bali
                    </p>
                    <span class="text-xs md:text-sm font-normal text-[#C59172] bg-[#F3EAE1] px-1 md:px-2 py-1 md:py-2 rounded-md flex items-center gap-1 mt-2 mb-2 justify-between">
                        Wisata Alam
                        <img src="/frontend/src/asset/icon/daun.png" alt="" class="w-2 md:w-4 h-2 md:h-4">
                    </span>
                    <p class="text-gray-600 text-xs md:text-sm mt-2 mb-2 d:mb-6">
                        Tanah Lot adalah salah satu destinasi wisata ikonik di Bali yang terkenal dengan pura yang berdiri di atas batu karang besar  di tepi laut.
                    </p>

                    <a href="#" class="bg-[#4F834F] text-sm md:text-base text-white text-center py-1 md:py-2 px-2 md:px-3 rounded-md md:rounded-lg hover:bg-[#304b30]">
                        Selengkapnya
                    </a>
                </div>
            </div>
    `;
    }
}

customElements.define("destination-card", destinationCard);


    // constructor() {
    //     super();
    // }

    // connectedCallback() {
    //     this.render();
    // }

    // static get observedAttributes() {
    //     return ["img", "place_name", "city", "category", "place_description"];
    // }

    // attributeChangedCallback() {
    //     this.render();
    // }

    // render() {
        // const img = this.getAttribute("img") || "";
        // const placeName = this.getAttribute("place_name") || "Nama Destinasi";
        // const location = this.getAttribute("location") || "Lokasi";
        // const category = this.getAttribute("category") || "Kategori";
        // const fullDesc = this.getAttribute("place_description") || "Deskripsi tidak tersedia";
        // const id = this.getAttribute("id") || ""; // ID untuk navigasi detail


