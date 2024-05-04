// routes/faculties.js
const express = require('express');
const router = express.Router();
const { getAllFaculties, createFaculty } = require('../controllers/FacultyController');

router.get('/', getAllFaculties);
router.post('/', createFaculty);

module.exports = router;
