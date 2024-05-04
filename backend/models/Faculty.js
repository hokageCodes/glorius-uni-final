// models/Faculty.js
const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true }
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
