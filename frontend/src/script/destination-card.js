//CUSTOM ELEMENT DESTINATION CARD BELUM JADI

class destinationCard extends HTMLElement {
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <div class="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src="/frontend/src/asset/img/tanah-lot.png" alt="Tanah Lot" class="w-full h-60 object-cover rounded-tl-xl rounded-tr-xl">
            <div class="p-6 mb-4">
                <h3 class="text-2xl font-semibold">Tanah Lot</h3>
                <p class="text-gray-500 text-base flex items-center mt-1 gap-1">
                    <img src="/frontend/src/asset/icon/location-icon.png" alt="location-icon" class="h-4 opacity-60">
                    Tabanan, Bali
                </p>
                <span class="text-sm font-normal text-[#C59172] bg-[#F3EAE1] px-2 py-2 rounded-md flex items-center gap-1 mt-2 mb-2 justify-between">
                    Wisata Alam
                    <img src="/frontend/src/asset/icon/daun.png" alt="" class="w-4 h-4">
                </span>
                <p class="text-gray-600 text-sm mt-2 mb-6">
                    Tanah Lot adalah salah satu destinasi wisata ikonik di Bali yang terkenal dengan pura yang berdiri di atas batu karang besar  di tepi laut.
                </p>

                <a href="#" class="bg-[#4F834F] text-white text-center py-2 px-3 rounded-lg hover:bg-[#304b30]">
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




