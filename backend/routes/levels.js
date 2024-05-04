// File: routes/levels.js

const express = require('express');
const router = express.Router();
const { createLevel, getLevelsByDepartment } = require('../controllers/levelController');

router.post('/', createLevel); // For creating a new level
router.get('/:departmentId', getLevelsByDepartment); // To fetch levels by department

module.exports = router;
