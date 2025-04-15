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
  