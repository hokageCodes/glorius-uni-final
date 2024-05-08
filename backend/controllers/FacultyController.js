// controllers/FacultyController.js
const Faculty = require('../models/Faculty');

exports.createFaculty = async (req, res) => {
    try {
        const { name, description } = req.body; // Ensure no 'id' is being used unless explicitly needed
        const newFaculty = new Faculty({ name, description });
        await newFaculty.save();
        res.status(201).json(newFaculty);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Duplicate entry for faculty. Please ensure the faculty is unique.' });
        } else {
            console.error('Error creating faculty:', error);
            res.status(500).json({ message: 'Failed to create faculty', error: error.message });
        }
    }
};

exports.getAllFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find({});
        res.json(faculties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
