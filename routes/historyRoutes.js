const express = require('express');
const router = express.Router();
const { addHistory, getHistory, deleteHistory } = require('../controllers/historyController');
const auth = require('../middleware/auth');

// All history routes require authentication
router.post('/', auth, addHistory);
router.get('/', auth, getHistory);
router.delete('/:id', auth, deleteHistory);

module.exports = router;