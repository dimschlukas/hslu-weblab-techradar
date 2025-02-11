import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    ring: {
      type: String,
      ref: 'Ring',
      required: true
    },
    category: {
      type: String,
      ref: 'Category',
      required: true
    },
    description: { type: String, required: true },
    justification: { type: String, required: true }
  },
  { timestamps: true }
);

const TechnologyModel = mongoose.model('Technology', schema);

export default TechnologyModel;
