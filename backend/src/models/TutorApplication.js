import mongoose from 'mongoose';

const tutorApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    qualification: { type: String, required: true, trim: true },
    experience: { type: String, required: true, trim: true },
    curricula: [{ type: String, required: true, trim: true }],
    grades: [{ type: String, required: true, trim: true }],
    subjects: [{ type: String, required: true, trim: true }],
    otherSubjectExpertise: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    resumePath: { type: String, required: true },
    status: { type: String, enum: ['new', 'reviewing', 'shortlisted', 'closed'], default: 'new' }
  },
  { timestamps: true }
);

export default mongoose.model('TutorApplication', tutorApplicationSchema);
