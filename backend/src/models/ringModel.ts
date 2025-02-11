import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  _id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true }
});

const ringModel = mongoose.model('Ring', schema);

export default ringModel;
