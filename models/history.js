// history.js
const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  isMalignant: {
    type: Boolean,
    required: true
  },
  probability: {
    type: Number,
    required: true,
    min: 0,
    max: 1
  },
  diseaseName: {
    type: String,
    required: true
  },
  features: {
    asymmetry: String,
    border: String,
    color: String,
    diameter: String,
    evolution: String
  },
  recommendation: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('History', HistorySchema);