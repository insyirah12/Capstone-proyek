import streamlit as st
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io

# Judul Aplikasi
st.title("Aplikasi Klasifikasi Penyakit Kulit")

# Muat model
try:
    model = load_model('model_klasifikasi.h5')
    st.success("Model berhasil dimuat!")
except Exception as e:
    st.error(f"Gagal memuat model: {str(e)}")
    st.stop()

# Pemetaan kelas ke penyakit
DISEASE_MAP = {
    "0": "Actinic keratosis",
    "1": "Benign keratosis",
    "2": "Dermatofibroma",
    "3": "Melanocytic nevus",
    "4": "Melanoma",
    "5": "Squamous cell carcinoma",
    "6": "Tinea Ringworm Candidiasis",
    "7": "Vascular lesion"
}

# Rekomendasi
RECOMMENDATIONS = {
    "Actinic keratosis": "Perlu evaluasi dokter kulit. Dapat diobati dengan krioterapi atau resep obat topikal.",
    # ... (tambahkan rekomendasi lainnya sesuai kebutuhan)
}

# Unggah gambar
uploaded_file = st.file_uploader("Unggah gambar kulit", type=["jpg", "png", "jpeg"])

if uploaded_file is not None:
    try:
        # Baca dan proses gambar
        img = Image.open(io.BytesIO(uploaded_file.read()))
        st.image(img, caption="Gambar yang diunggah", width=200)
        
        # Pra-pemrosesan
        img = img.resize((224, 224))
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)
        
        # Prediksi
        prediction = model.predict(img_array)
        class_id = str(np.argmax(prediction[0]))
        confidence = float(np.max(prediction[0]))
        disease = DISEASE_MAP.get(class_id, "Tidak diketahui")
        
        # Tampilkan hasil
        st.subheader("Hasil Prediksi:")
        st.write(f"**Penyakit:** {disease}")
        st.write(f"**Tingkat Kepercayaan:** {confidence:.2%}")
        st.write(f"**Rekomendasi:** {RECOMMENDATIONS.get(disease, 'Konsultasikan ke dokter kulit')}")
        
    except Exception as e:
        st.error(f"Terjadi error: {str(e)}")