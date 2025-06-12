#  Skivio: Deteksi Dini Kanker Kulit dan Lesi Jinak dengan Model Pembelajaran Mesin

##  Deskripsi Proyek
**Skivio** adalah aplikasi berbasis kecerdasan buatan (AI) yang bertujuan untuk membantu masyarakat dalam melakukan deteksi dini terhadap kanker kulit dan lesi jinak melalui analisis gambar kulit. Dengan memanfaatkan teknologi pembelajaran mesin, khususnya model MobilenetV2, aplikasi ini dapat memberikan hasil klasifikasi secara instan, serta rekomendasi tindakan lanjutan yang mudah dipahami.

##  Tujuan Proyek
- Mengembangkan model klasifikasi citra berbasis deep learning untuk mendeteksi jenis penyakit kulit.
- Mengintegrasikan model ke dalam aplikasi web yang mudah digunakan masyarakat umum.
- Menyediakan hasil klasifikasi dan rekomendasi tindakan secara cepat dan akurat.

##  Teknologi & Tools
**ML & Data:**
- Google Colab, TensorFlow, Keras, Scikit-learn, OpenCV, PIL
- Dataset: [ISIC 2019 - Kaggle](https://www.kaggle.com/datasets/salviohexia/isic-2019-skin-lesion-images-for-classification)

**Web:**
- Frontend: React.js + Vite
- Backend: Flask
- Desain UI: Figma

##  Fitur Utama
- Upload gambar kulit untuk klasifikasi lesi jinak atau kanker kulit.
- Hasil prediksi dengan tingkat kepercayaan.
- Rekomendasi langkah selanjutnya bagi pengguna.
- UI responsif dan intuitif.

##  Link Proyek
-  **Google Colab Notebook**: [Link ke model](https://colab.research.google.com/drive/10TXyZttuilfw9cTasXO47gIRFtu_86Rv?usp=sharing)
-  **Desain UI di Figma**: [Link ke desain Figma](https://www.figma.com/design/dUXNUFV4QWJS6QNEQYfiNR/Untitled?node-id=0-1&t=NoxNzvk8aNc5cLRw-1)
- 

##  Jadwal & Progres
| Minggu | Machine Learning                        | Frontend & Backend                           |
|--------|------------------------------------------|----------------------------------------------|
| 1      | Pengumpulan & preprocessing data         | Desain awal UI, setup struktur proyek        |
| 2      | Training model CNN, evaluasi awal        | Implementasi UI, setup backend API dasar     |
| 3      | Optimasi model, ekspor model             | Integrasi model ke backend, deteksi & output |
| 4      | Pengujian akhir & dokumentasi            | Debugging aplikasi & penyusunan dokumentasi  |

##  Struktur Folder
Skivio/
├── design/ # Gambar ekspor desain Figma
├── notebooks/ # Notebook Google Colab
└── README.md

##  Evaluasi Model
- Metode: CNN (custom), Random Forest (baseline)
- Metrik: Akurasi, Precision, Recall, Confusion Matrix
- Tools: Scikit-learn, Matplotlib, Seaborn

##  Kendala & Solusi
1. **Dataset tidak seimbang** → Augmentasi dan pemilihan subset data
2. **Integrasi model ke web** → Optimasi model, modularisasi backend
3. **Akurasi tidak stabil** → Fine-tuning, eksplorasi arsitektur lain
4. **Keterbatasan komputasi** → Gunakan Google Colab GPU
5. **Privasi pengguna** → Sistem tidak menyimpan gambar pengguna secara permanen

##  Tim
| Nama                         | Peran                    | Institusi                              |
|------------------------------|---------------------------|-----------------------------------------|
| A. Fitrah Mula Putra         | ML Engineer               | Politeknik Negeri Ujung Pandang         |
| Fina Alfianti                | ML Engineer               | Politeknik Negeri Ujung Pandang         |
| Sahra Zulqaidah              | ML Engineer               | Politeknik Negeri Ujung Pandang         |
| Jumriana                     | Frontend/Backend Developer| Politeknik Negeri Ujung Pandang         |
| Fakhry Muzhaffar Arif        | Frontend/Backend Developer| Politeknik Negeri Ujung Pandang         |
| Insyirah Fitrah Ramadhani M.Z| Frontend/Backend Developer| Politeknik Negeri Ujung Pandang         |

##  Tema: Health Innovation  
ID Tim: **CC25-CF343**

 
