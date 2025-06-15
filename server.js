// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const auth = require('./middleware/auth');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const historyRoutes = require('./routes/historyRoutes')
const { uploadImage, addHistory } = require('./controllers/historyController');
const detectionRoutes = require('./routes/detectionRoutes');

const app = express();
const path = require('path');
const fs = require('fs');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Database connection
connectDB();

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use('/uploads', express.static(uploadsDir));


// Routes
app.use('/api', authRoutes);
app.use('/api/detection', detectionRoutes);
// Modify your history route
app.post('/api/history', auth, (req, res, next) => {
  const upload = multer({ 
    storage: multer.diskStorage({ /* your storage config */ }),
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith('image/')) cb(null, true);
      else cb(new Error('Only images allowed'), false);
    }
  }).single('image');

  upload(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
}, addHistory);
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));