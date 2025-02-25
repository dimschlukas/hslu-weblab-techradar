import mongoose from 'mongoose';
import '../models/categoryModel.js';
import '../models/ringModel.js';
import '../models/technologyModel.js';
import { loadEnvironmentVariables } from '../utils/loadEnv.js';

loadEnvironmentVariables();

if (!process.env.MONGO_URI) {
  if (
    !process.env.MONGO_HOST ||
    !process.env.MONGO_PORT ||
    !process.env.MONGO_INITDB_DATABASE ||
    !process.env.MONGO_APP_USERNAME ||
    !process.env.MONGO_APP_PASSWORD
  ) {
    throw new Error('Missing MongoDB environment variables.');
  }
}

const MONGO_URI =
  process.env.MONGO_URI ||
  `mongodb://${process.env.MONGO_APP_USERNAME}:${process.env.MONGO_APP_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
