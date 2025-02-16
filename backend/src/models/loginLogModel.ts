import mongoose, { Schema } from 'mongoose';

const schema = new mongoose.Schema({
  type: String,
  success: Boolean,
  email: String,
  ipAddress: String,
  reason: String,
  timestamp: { type: Date, default: Date.now }
});

const LoginLog = mongoose.model('LoginLog', schema);

export default LoginLog;
