const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if username or email exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ 
        error: existingUser.username === username 
          ? 'Username already taken' 
          : 'Email already in use' 
      });
    }

    // Create user
    const user = await User.create({ username, email, password });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ 
      token, 
      user: { 
        username: user.username,
        email: user.email 
      } 
    });
  } catch (err) {
    console.error('Registration error:', err);  // Add this line
    res.status(500).json({ error: 'Server error' });
  }
};

// Login user (now allows login via username OR email)
exports.login = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    // Find user by username OR email
    const user = await User.findOne({
      $or: [
        { username: usernameOrEmail },
        { email: usernameOrEmail }
      ]
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ 
      token, 
      user: { 
        username: user.username,
        email: user.email 
      } 
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};