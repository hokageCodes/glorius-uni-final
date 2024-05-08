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
    const { facultyId } = req.params;
    console.log("Requested faculty ID:", facultyId);
    try {
        const departments = await Department.find({ facultyId: facultyId });
        if (!departments.length) {
            console.log("No departments found for this faculty ID:", facultyId);
            return res.status(404).json({ message: "No departments found" });
        }
        res.json(departments);
    } catch (error) {
        console.error("Error fetching departments:", error);
        res.status(500).json({ message: error.message });
    }
};
