// File: routes/adminRoutes.js
const express = require('express');
const { getAllUsers } = require('../controllers/adminController');
const auth = require('../middleware/auth'); 
const { deleteUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);

module.exports = router;
