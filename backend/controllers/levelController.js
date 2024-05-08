// controllers/levelController.js
const Level = require('../models/Level');

exports.createLevel = async (req, res) => {
    try {
        const { id, level, departmentId, semesters } = req.body;
        const newLevel = new Level({ id, level, departmentId, semesters });
        await newLevel.save();
        res.status(201).json(newLevel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLevelsByDepartment = async (req, res) => {
    const { departmentId } = req.params;
    console.log("Fetching levels for Department ID:", departmentId);

    try {
        const levels = await Level.find({ departmentId: departmentId });
        if (!levels.length) {
            console.log("No levels found for department:", departmentId);
            return res.status(404).json({ message: "No levels found" });
        }
        console.log("Found levels:", levels);
        res.json(levels);
    } catch (error) {
        console.error("Error fetching levels:", error);
        res.status(500).json({ message: error.message });
    }
};
