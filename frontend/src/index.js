import "./components/navbar.js";
import "./components/hero-section.js";
import "./components/destination-section.js";
import "./components/kuis.js";
import "./components/fun-fact.js";
import "./components/informasi-budaya.js";
import "./components/footer.js";
import "./components/destination-card.js";

//Menu Navbar
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Kuis Destinasi
  document.addEventListener("DOMContentLoaded", () => {
    const introSection = document.querySelector("#introSection");
    const quizSection = document.querySelector("#quizSection");
    const startBtn = document.querySelector("#start-quiz-btn");
    const questions = document.querySelectorAll(".question");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const dots = document.querySelectorAll(".w-2.h-2");
    const answers = [];
    const answerButtons = document.querySelectorAll(".answer-btn");

    let currentStep = 0;

    // Mulai Kuis
    startBtn.addEventListener("click", () => {
      introSection.classList.add("hidden");
      quizSection.classList.remove("hidden");
    });
  
    function updateQuizUI() {
      questions.forEach((question, index) => {
        question.classList.toggle("hidden", index !== currentStep);
      });
  
      // Update dots indicator
      dots.forEach((dot, index) => {
        dot.classList.toggle("bg-white", index === currentStep);
        dot.classList.toggle("bg-white/70", index !== currentStep);
      });
  
      // Sembunyikan tombol kembali di step pertama
      prevBtn.style.visibility = currentStep === 0 ? 'hidden' : 'visible';
  
      // Ubah tombol "Lanjut" menjadi "Selesai" di step terakhir
      nextBtn.innerHTML = currentStep === questions.length - 1 ? 'Selesai' : 'Lanjut<span class="ml-2">→</span>';
    }

    // Answer Button
    answerButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parentQuestion = btn.closest(".question");
        const questionIndex = parseInt(parentQuestion.dataset.questionIndex);

      // Menghapus "active" di semua pilihan jawaban
      parentQuestion.querySelectorAll(".answer-btn").forEach(b => {
        b.classList.remove("ring-2", "ring-offset-3", "ring-[#385D38]", "bg-[#F4F9F4]");
      });

      // Tandai jawaban ini sebagai "Active"
      btn.classList.add("ring-2", "ring-offset-3", "ring-[#385D38]", "bg-[#F4F9F4]");

      // Simpan jawaban (sesuai value yang ingin diatur)
      answers[questionIndex] = btn.textContent.trim();
      });
    });
  
    nextBtn.addEventListener("click", () => {
      if (currentStep < questions.length - 1) {
        currentStep++;
        updateQuizUI();
      } else {
        alert("Kuis selesai! Terima kasih 🙌");
        // Di sini kamu bisa simpan jawaban ke localStorage atau kirim ke server
      }
    });
  
    prevBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateQuizUI();
      }
    });
  
    updateQuizUI(); // Inisialisasi pertama
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Fetch data when the page loads
    fetchData();
  });
  
  // Function to fetch data from your API
  async function fetchData() {
    try {
      const response = await fetch('/api/destinasi/tanah-lot'); 
      const data = await response.json();
  
      // Injecting data into the page
      document.querySelector('h2').textContent = data.nama_tempat;
      document.querySelector('#destination-description p').innerHTML = data.deskripsi;
      document.querySelector('.bg-[#EADBD1]').textContent = data.kategori;
      document.querySelector('.text-gray-600').textContent = `Mulai dari: ${data.harga_tiket}`;
  
      // Looping through the reviews and inserting them
      const reviewsContainer = document.querySelector('#review-wisatawan');
      data.reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('border', 'rounded-xl', 'shadow-sm', 'p-6', 'mt-5');
        reviewCard.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex gap-3 items-center">
              <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div class="grid">
                <span class="font-semibold text-base mb-1">${review.nama}</span>
                <span class="font-normal text-gray-500 text-sm">${review.tanggal}</span>
              </div>
            </div>
            <div class="flex items-center gap-1">
              <span class="font-normal text-gray-500 text-sm">${review.rating}</span>
              ${generateStars(review.rating)}
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-6">${review.ulasan}</p>
        `;
        reviewsContainer.appendChild(reviewCard);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Function to generate star icons based on rating
  function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += `<img src="/frontend/src/asset/icon/star-yellow.png" alt="star" class="w-4 ${i < rating ? 'opacity-100' : 'opacity-60'}">`;
    }
    return stars;
  }
  