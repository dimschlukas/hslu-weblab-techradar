import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    ring: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    justification: { type: String, required: true, trim: true },
    published: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const TechnologyModel = mongoose.model('Technology', schema);

export default TechnologyModel;
