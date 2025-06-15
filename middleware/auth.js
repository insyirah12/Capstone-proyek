const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;  // Make sure this matches your JWT payload
    next();
  } catch (err) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};