import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    ring: { type: String, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    justification: { type: String, trim: true },
    published: { type: Boolean, default: true },
    publishedAt: { type: Date }
  },
  { timestamps: true }
);

const TechnologyModel = mongoose.model('Technology', schema);

export default TechnologyModel;
