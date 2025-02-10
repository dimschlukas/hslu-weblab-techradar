import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// CORS options
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
  exposedHeaders: ['Authorization']
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

export default app;
