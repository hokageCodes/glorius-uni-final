// models/Department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    facultyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty', required: true },
    name: { type: String, required: true },
    numLevels: { type: Number, required: true }  // Storing the number of levels
});

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
