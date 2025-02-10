import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: '' }
  },
  { timestamps: true }
);

const UserModel = mongoose.model('User', schema);

export default UserModel;
