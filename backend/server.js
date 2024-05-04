require('dotenv').config(); // Make sure this line is at the top
const authRoutes = require('./routes/authRoutes');
const facultiesRoutes = require('./routes/faculties');
const departmentsRoutes = require('./routes/departments');
const levelsRoutes = require('./routes/levels');


const cors = require('cors');

const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); 
app.use('/api/auth', authRoutes);
app.use('/api/faculties', facultiesRoutes);
app.use('/api/departments', departmentsRoutes);
app.use('/api/levels', levelsRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
