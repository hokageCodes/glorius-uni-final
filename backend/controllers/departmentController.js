// controllers/departmentController.js
const Department = require('../models/Department');
const Faculty = require('../models/Faculty');

exports.createDepartment = async (req, res) => {
    const { id, facultyId, name } = req.body;
    try {
        const facultyExists = await Faculty.findOne({ id: facultyId });
        if (!facultyExists) {
            return res.status(404).json({ message: "Faculty not found" });
        }
        const newDepartment = new Department({ id, facultyId, name });
        await newDepartment.save();
        res.status(201).json(newDepartment);
    } catch (error) {
        console.error("Error creating department:", error);
        res.status(500).json({ message: "Server error while creating department", error: error.message });
    }
};

exports.getDepartmentsByFaculty = async (req, res) => {
    try {
        const { facultyId } = req.params;
        const departments = await Department.find({ facultyId: facultyId });
        res.json(departments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
