// controllers/FacultyController.js
const Faculty = require('../models/Faculty');

exports.createFaculty = async (req, res) => {
    try {
        const { id, name, description } = req.body;
        const newFaculty = new Faculty({ id, name, description });
        await newFaculty.save();
        res.status(201).json(newFaculty);
    } catch (error) {
        console.error('Error creating faculty:', error);
        res.status(500).json({ message: 'Failed to create faculty', error: error.message });
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
