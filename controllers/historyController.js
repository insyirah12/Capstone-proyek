const mongoose = require('mongoose'); // Add this at the top
const History = require('../models/history');
const User = require('../models/user');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads'); // Adjusted path
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, 'skin-' + uniqueSuffix + ext);
  }
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  }
});

exports.addHistory = async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      upload.single('image')(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    const historyItem = new History({
      user: req.userId,
      date: req.body.date || new Date(),
      imageUrl,
      isMalignant: req.body.isMalignant === 'true',
      probability: parseFloat(req.body.probability),
      diseaseName: req.body.diseaseName || 'Unknown', // Ensure this is included
      features: JSON.parse(req.body.features),
      recommendation: req.body.recommendation
    });

    const savedItem = await historyItem.save();
    res.status(201).json(savedItem);

  } catch (err) {
    console.error('History save error:', err);
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ 
      error: 'Server error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await History.find({ user: req.userId })
      .sort({ date: -1 });
    
    res.json(history);
  } catch (err) {
    console.error('Get history error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Add new endpoint for getting image separately
exports.getHistoryImage = async (req, res) => {
  try {
    const item = await History.findOne({
      _id: req.params.id,
      user: req.userId
    }).select('image');
    
    if (!item) return res.status(404).json({ error: 'Not found' });
    
    res.json({ image: item.image });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteHistory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const deletedItem = await History.findOneAndDelete({
      _id: id,
      user: req.userId
    });

    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found or not owned by user' });
    }

    res.json({ message: 'History item deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ 
      error: 'Server error',
      details: error.message 
    });
  }
};