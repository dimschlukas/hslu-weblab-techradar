import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import technologyRoutes from './routes/technologyRoutes.js';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import logRoutes from './routes/logRoutes.js';
import cors from 'cors';

const app = express();

// Connect to database
connectDB();

// CORS options
const corsOptions = {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  exposedHeaders: ['Authorization']
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/technologies', technologyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/logs', logRoutes);

export default app;
