import connectDB from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

export default app;
