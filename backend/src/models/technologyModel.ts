import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    ring: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    justification: { type: String, required: true },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const TechnologyModel = mongoose.model('Technology', schema);

export default TechnologyModel;
