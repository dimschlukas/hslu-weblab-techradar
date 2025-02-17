import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true }
});

const categoryModel = mongoose.model('Category', schema);

export default categoryModel;
