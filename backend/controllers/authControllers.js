// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (user) => {
  return jwt.sign({ userId: user._id }, 'hulkong', { expiresIn: '1h' });
};

exports.signup = async (req, res) => {
  const { name, email, password, matricNumber } = req.body;
  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      matricNumber
    });

    const token = generateToken(newUser);
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 }); // 1 hour
    res.status(201).json({ token, userId: newUser._id, name: newUser.name, email: newUser.email, matricNumber: newUser.matricNumber });
  } catch (error) {
    res.status(500).json({ error: 'Server error during user registration' });
  }
};

exports.login = async (req, res) => {
  const { identifier, password } = req.body;  // 'identifier' can be either email or matric number
  try {
    const user = await User.findOne({
      $or: [{ email: identifier }, { matricNumber: identifier }]
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', maxAge: 3600000 }); // 1 hour
    res.json({ token, userId: user._id, name: user.name, email: user.email, matricNumber: user.matricNumber });
  } catch (error) {
    res.status(500).json({ error: 'Server error during user login' });
  }
};
