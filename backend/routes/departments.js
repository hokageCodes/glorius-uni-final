// routes/departments.js
const express = require('express');
const router = express.Router();
const { getDepartmentsByFaculty, createDepartment } = require('../controllers/departmentController');

router.get('/:facultyId', getDepartmentsByFaculty);
router.post('/', createDepartment);

module.exports = router;
