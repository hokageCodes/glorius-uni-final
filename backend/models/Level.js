const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    level: { type: Number, required: true },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    semesters: [{ 
        semester: { type: Number, required: true },
        pastQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PastQuestion' }]
    }]
});
const Level = mongoose.model('Level', levelSchema);

module.exports = Level;
