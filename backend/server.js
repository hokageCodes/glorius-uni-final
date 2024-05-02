require('dotenv').config(); // Make sure this line is at the top
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');


const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); 
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
