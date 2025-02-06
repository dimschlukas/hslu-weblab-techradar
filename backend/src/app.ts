import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

export default app;
