# Machine Learning Part of "Explore-Nusantara"
Dataset Soure: https://www.kaggle.com/datasets/farazbeniqnomf/indonesiaecotourism + manually scrapped from google maps

## Fitur

*   Rekomendasi tempat wisata berdasarkan kesamaan konten.
*   Dataset tempat wisata di Indonesia yang beragam.
*   Penggunaan TF-IDF untuk representasi teks.

## Cara Penggunaan

1.  Pastikan Anda memiliki library yang diperlukan, seperti Pandas, Scikit-learn, Sastrawi, dan lainnya. Install dengan `pip install -r requirements.txt`.
2.  Jalankan notebook `Recommendation.ipynb` di Google Colab.

## Dataset

Dataset yang digunakan berisi informasi tentang berbagai tempat wisata di Indonesia, termasuk nama, deskripsi, kategori, kota, rating, dan gambar.

## Model

Model yang digunakan adalah _content-based filtering_ dengan TF-IDF untuk representasi teks dan cosine similarity untuk menghitung kesamaan antar tempat wisata.
