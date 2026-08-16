import mongoose from 'mongoose';

const demoBookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    alternativeNumber: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    grade: {
      type: String,
      trim: true,
      required() {
        return ['CBSE', 'ICSE', 'Cambridge', 'IB', 'Other Courses'].includes(this.course);
      }
    },
    subject: {
      type: String,
      trim: true,
      required() {
        return !(this.course === 'Other Courses' && this.grade === 'Robotics');
      }
    },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ['new', 'contacted', 'scheduled', 'closed'], default: 'new' }
  },
  { timestamps: true }
);

export default mongoose.model('DemoBooking', demoBookingSchema);
