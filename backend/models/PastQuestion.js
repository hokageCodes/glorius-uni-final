// models/PastQuestion.js
const mongoose = require('mongoose');

const pastQuestionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    type: { type: String, required: true }, // Example: "Midterm", "Final"
    documentUrl: { type: String, required: true },
    departmentId: { type: String, required: true, ref: 'Department' }
    // You can add level and semester if you decide not to nest them under Level model
});

const PastQuestion = mongoose.model('PastQuestion', pastQuestionSchema);

module.exports = PastQuestion;
