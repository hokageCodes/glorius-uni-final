// models/Department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    facultyId: { type: String, required: true },
    name: { type: String, required: true }
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
