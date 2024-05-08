const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Faculty = require('../models/Faculty');
const Department = require('../models/Department');
const Level = require('../models/Level');

router.post('/', async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const { name, description, departments } = req.body;

        // Create Faculty
        const faculty = new Faculty({ name, description });
        await faculty.save({ session });

        // Iterate over departments and create each with nested levels
        for (const dept of departments) {
            const newDepartment = new Department({
                name: dept.name,
                facultyId: faculty._id
            });
            await newDepartment.save({ session });

            // Create levels for each department
            for (const level of dept.levels) {
                const newLevel = new Level({
                    level: level.num,
                    departmentId: newDepartment._id,
                    semesters: level.semesters
                });
                await newLevel.save({ session });
            }
        }

        await session.commitTransaction();
        session.endSession();
        res.status(201).json({ message: 'Faculty, departments, and levels created successfully', faculty });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error('Failed to create faculty and its departments:', error);
        res.status(500).json({ message: 'Failed to create faculty, departments, and levels', error: error.message });
    }
});

module.exports = router;
