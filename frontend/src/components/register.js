class RegisterModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="register-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-[999]">
        <div class="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl mx-4 md:mx-auto overflow-hidden relative">
          <!-- Form -->
          <div class="w-full md:w-1/2 p-6 md:p-10">
            <h2 class="text-2xl md:text-4xl font-semibold text-[#AC654A] text-center mb-6">Daftar</h2>
            <form id="register-form-modal">
              <label class="block text-sm md:text-base mb-2 text-gray-700">Nama</label>
              <input type="text" id="register-name" class="w-full mb-4 px-4 py-2 border bg-[#FBFBFB] rounded-lg focus:ring focus:ring-[#A9CDA8]" required>
              <label class="block text-sm md:text-base mb-2 text-gray-700">Email</label>
              <input type="email" id="register-email" class="w-full mb-4 px-4 py-2 border bg-[#FBFBFB] rounded-lg focus:ring focus:ring-[#A9CDA8]" required>
              <label class="block text-sm md:text-base mb-2 text-gray-700">Kata Sandi</label>
              <input type="password" id="register-password" class="w-full px-4 py-2 border bg-[#FBFBFB] rounded-lg focus:ring focus:ring-[#A9CDA8]" required>
              <button type="submit" class="bg-[#4F834F] text-white font-semibold rounded-lg py-2 w-full mt-6 hover:bg-[#385D38]">Daftar</button>
            </form>
            <p class="text-center text-sm text-gray-600 mt-4">Sudah punya akun? 
              <a href="#" id="go-login" class="text-[#4F834F] hover:underline">Masuk</a>
            </p>
          </div>
          <!-- Image -->
          <div class="w-full md:w-1/2 hidden md:flex flex-col justify-between overflow-hidden relative">
            <img src="/public/img/scenery-boat-with-flag-indonesia.png" class="w-full h-full object-cover absolute z-0" />
            <div class="p-6 z-10 relative text-white">
              <h2 class="text-xl md:text-3xl font-semibold">Selamat Datang di Eksplor Nusantara!</h2>
            </div>
          </div>
          <button id="close-register" class="absolute top-5 right-4 w-8 h-8 flex items-center justify-center text-[#4F834F] hover:text-white text-xl z-10 rounded-full hover:bg-[#4F834F] hover:shadow-lg transition-all duration-300 ease-in-out active:scale-90">&times;</button>
        </div>
      </div>
    `;

    const registerModal = this.querySelector("#register-modal");
    this.querySelector("#close-register").addEventListener("click", () => {
      registerModal.classList.add("hidden");
      registerModal.classList.remove("flex");
    });

    this.querySelector("#go-login").addEventListener("click", (e) => {
      e.preventDefault();
      registerModal.classList.add("hidden");
      registerModal.classList.remove("flex");
      document.getElementById("login-modal").classList.remove("hidden");
      document.getElementById("login-modal").classList.add("flex");
    });

    registerModal.addEventListener("click", (e) => {
      if (e.target === registerModal) {
        registerModal.classList.add("hidden");
        registerModal.classList.remove("flex");
      }
    });

    const form = this.querySelector("#register-form-modal");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = this.querySelector("#register-name").value.trim();
      const email = this.querySelector("#register-email").value.trim();
      const password = this.querySelector("#register-password").value;

      const data = { name, email, password };

      try {
        const res = await fetch("http://localhost:9000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const contentType = res.headers.get("content-type");

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Server Error: ${res.status} - ${errorText}`);
        }

        if (contentType && contentType.includes("application/json")) {
          const result = await res.json();

          Swal.fire({
            title: "Berhasil!",
            text: "Registrasi berhasil, silakan login.",
            icon: "success",
            confirmButtonText: "Oke",
          }).then(() => {
            // Tutup register modal, buka login modal
            registerModal.classList.add("hidden");
            registerModal.classList.remove("flex");

            const loginModal = document.getElementById("login-modal");
            loginModal.classList.remove("hidden");
            loginModal.classList.add("flex");

            // Reset form
            form.reset();
          });
        } else {
          const text = await res.text();
          throw new Error("Expected JSON, got: " + text.slice(0, 100));
        }
      } catch (err) {
        console.error("Error saat register:", err.message);
        Swal.fire({
          title: "Gagal!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Tutup",
        });
      }
    });
  }
}

customElements.define("register-modal", RegisterModal);
