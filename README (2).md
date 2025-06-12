#  Skivio: Deteksi Dini Kanker Kulit dan Lesi Jinak dengan Model Pembelajaran Mesin

## ID Tim: CC25-CF343
**Tema**: Health Innovation
Advisor:
1. Fauzan Ihza Fajar (AD25-382)
2. Ilham Setia Pambudi (AD25-378)
Tanggal Mentoring: Jumat, 30 Mei 2025

##  Deskripsi Proyek
**Skivio** adalah sistem berbasis web yang membantu deteksi dini kanker kulit dan lesi jinak menggunakan citra kulit. Proyek ini dikembangkan untuk mengatasi keterbatasan akses layanan dermatologi, terutama di daerah terpencil Indonesia. Pengguna cukup mengunggah gambar kulit melalui antarmuka web dan sistem akan mengklasifikasikan gambar tersebut menggunakan model pembelajaran mesin.

##  Tujuan Proyek
- Mengembangkan model klasifikasi citra berbasis deep learning untuk mendeteksi jenis penyakit kulit.
- Mengintegrasikan model ke dalam aplikasi web yang mudah digunakan masyarakat umum.
- Menyediakan hasil klasifikasi dan rekomendasi tindakan secara cepat dan akurat.

##  Teknologi & Tools
**ML & Data:**
- TensorFlow + Keras
- MobileNetV2 (Transfer Learning)
- OpenCV, PIL, Scikit-learn
- Python, Jupyter Notebook
- Dataset: https://www.kaggle.com/datasets/riyaelizashaju/skin-disease-classification-image-dataset

**Web:**
- React.js (Frontend)
- Node.js + Express (Backend)
- RESTful API
- Vite / Webpack, Axios
- Flask (untuk API ML)

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
| 2      | Training model MobilenetV2, evaluasi awal        | Implementasi UI, setup backend API dasar     |
| 3      | Optimasi model, ekspor model             | Integrasi model ke backend, deteksi & output |
| 4      | Pengujian akhir & dokumentasi            | Debugging aplikasi & penyusunan dokumentasi  |

##  Struktur Folder
Skivio/
├── design/ # Gambar ekspor desain Figma
├── notebooks/ # Notebook Google Colab
└── README.md

##  Evaluasi Model
- Metode: Mobilenetv2, Random Forest (baseline)
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

 

 
