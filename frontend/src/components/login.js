class LoginModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id="login-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-[999]">
          <div class="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl mx-4 md:mx-auto overflow-hidden relative">
            <!-- Form -->
            <div class="w-full md:w-1/2 p-6 md:p-10">
              <h2 class="text-2xl md:text-4xl font-semibold text-[#AC654A] text-center mb-6">Masuk</h2>
              <form id="login-form-modal">
                <label class="block text-sm md:text-base mb-2 text-gray-700">Email</label>
                <input type="email" id="email" class="w-full mb-4 px-4 py-2 border bg-[#FBFBFB] rounded-lg focus:ring focus:ring-[#A9CDA8]" required>
                <label class="block text-sm md:text-base mb-2 text-gray-700">Kata Sandi</label>
                <input type="password" id="password" class="w-full px-4 py-2 border bg-[#FBFBFB] rounded-lg focus:ring focus:ring-[#A9CDA8]" required>
                <div class="flex justify-end mt-2">
                  <a href="#" class="text-sm text-gray-500 hover:underline">Lupa Sandi?</a>
                </div>
                <button type="submit" class="bg-[#4F834F] text-white font-semibold rounded-lg py-2 w-full mt-6 hover:bg-[#385D38]">Masuk</button>
              </form>
              <p class="text-center text-sm text-gray-600 mt-4">Belum memiliki akun? 
                <a href="#" id="go-register" class="text-[#4F834F] hover:underline">Daftar</a>
              </p>
            </div>
            <!-- Image -->
            <div class="w-full md:w-1/2 hidden md:flex flex-col justify-between rounded-l-[20px] overflow-hidden relative">
              <img src="/public/img/scenery-boat-with-flag-indonesia.png" class="w-full h-full object-cover absolute z-0" />
              <div class="p-6 z-10 relative text-white">
                <h2 class="text-xl md:text-3xl font-semibold">Selamat Datang Kembali di Eksplor Nusantara!</h2>
              </div>
            </div>
            <button id="close-login" class="absolute top-5 left-4 w-8 h-8 flex items-center justify-center text-[#4F834F] hover:text-white text-2xl z-10 rounded-full hover:bg-[#4F834F] hover:shadow-lg transition-all duration-300 ease-in-out active:scale-90"> &times;</button>
          </div>
        </div>
      `;

    const loginModal = this.querySelector("#login-modal");
    this.querySelector("#close-login").addEventListener("click", () => {
      loginModal.classList.add("hidden");
      loginModal.classList.remove("flex");
    });

    this.querySelector("#go-register").addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.classList.add("hidden");
      loginModal.classList.remove("flex");
      document.getElementById("register-modal").classList.remove("hidden");
      document.getElementById("register-modal").classList.add("flex");
    });

    loginModal.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        loginModal.classList.add("hidden");
        loginModal.classList.remove("flex");
      }
    });

    this.querySelector("#login-form-modal").addEventListener(
      "submit",
      async (e) => {
        e.preventDefault();
        const email = this.querySelector("#email").value;
        const password = this.querySelector("#password").value;

        try {
          const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) throw new Error("Login gagal");

          const data = await res.json();
          document.cookie = `token=${data.token}; path=/`;

          Swal.fire({
            icon: "success",
            title: "Berhasil Masuk!",
            text: "Selamat datang kembali!",
            confirmButtonColor: "#4F834F",
          }).then(() => {
            loginModal.classList.add("hidden");
            loginModal.classList.remove("flex");
            location.reload();
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Gagal Masuk",
            text: "Email atau password salah!",
            confirmButtonColor: "#AC654A",
          });
        }
      }
    );
  }
}

customElements.define("login-modal", LoginModal);
