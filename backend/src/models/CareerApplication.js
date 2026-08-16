import mongoose from 'mongoose';

const careerApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    subjectExpertise: { type: String, required: true, trim: true },
    experience: { type: String, trim: true },
    message: { type: String, trim: true },
    resumePath: { type: String, required: true },
    status: { type: String, enum: ['new', 'reviewing', 'shortlisted', 'rejected'], default: 'new' }
  },
  { timestamps: true }
);

export default mongoose.model('CareerApplication', careerApplicationSchema);
