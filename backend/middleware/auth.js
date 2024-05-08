// File: middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).send('User not found');
    }
    if (user.role !== 'admin') {
      return res.status(403).send('Access denied');
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send('Please authenticate.');
  }
};

module.exports = auth;
