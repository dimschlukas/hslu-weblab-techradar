import mongoose from 'mongoose';
import dotenv from 'dotenv';
import '../models/categoryModel.js';
import '../models/ringModel.js';
import '../models/technologyModel.js';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
