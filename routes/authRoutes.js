// authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { addHistory, getHistory, deleteHistory } = require('../controllers/historyController');
const auth = require('../middleware/auth');

// Auth routes
router.post('/register', register);
router.post('/login', login);

// History routes (protected)
router.post('/history', auth, addHistory);
router.get('/history', auth, getHistory);
router.delete('/history/:id', auth, deleteHistory);

module.exports = router;