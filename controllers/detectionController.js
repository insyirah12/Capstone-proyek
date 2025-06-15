const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

exports.analyzeImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    // Create form data to send to Flask API
    const formData = new FormData();
    formData.append('image', fs.createReadStream(req.file.path));

    // Call Flask API
    const response = await axios.post('http://localhost:5001/predict', formData, {
      headers: {
        ...formData.getHeaders(),
        'Content-Type': 'multipart/form-data'
      }
    });

    // Move the file to permanent storage
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    const newPath = path.join(uploadDir, req.file.filename);
    fs.renameSync(req.file.path, newPath);

    // Return analysis results with image URL
    res.json({
      ...response.data,
      imageUrl: `/uploads/${req.file.filename}`
    });

  } catch (error) {
    console.error('Detection error:', error);
    
    // Clean up if file exists
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ 
      error: 'Analysis failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};