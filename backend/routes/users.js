// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

// Use auth middleware to secure all admin routes
router.get('/users', auth, getAllUsers);
router.get('/users/:id', auth, getUserById);
router.put('/users/:id', auth, updateUser);
router.delete('/users/:id', auth, deleteUser);

module.exports = router;
