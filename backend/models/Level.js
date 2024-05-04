const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },  // Custom ID for the level
    level: { type: Number, required: true },
    departmentId: { type: String, required: true, ref: 'Department' },
    semesters: [{ 
        semester: { type: Number, required: true },
        pastQuestions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PastQuestion'
        }]
    }]
});

const Level = mongoose.model('Level', levelSchema);

module.exports = Level;
