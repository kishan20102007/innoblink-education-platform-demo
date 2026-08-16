import { body } from 'express-validator';
import DemoBooking from '../models/DemoBooking.js';
import { sendLeadEmails } from '../services/email.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const coursesWithSelection = ['CBSE', 'ICSE', 'Cambridge', 'IB', 'Other Courses'];

export const demoValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('alternativeNumber').trim().notEmpty().withMessage('Alternative number is required'),
  body('country').trim().notEmpty().withMessage('Country is required'),
  body('course').trim().notEmpty().withMessage('Course is required'),
  body('grade').custom((value, { req }) => {
    if (coursesWithSelection.includes(req.body.course) && !String(value || '').trim()) {
      throw new Error('Grade, level, program, or course selection is required');
    }
    return true;
  }),
  body('subject').custom((value, { req }) => {
    const noSubjectRequired = req.body.course === 'Other Courses' && req.body.grade === 'Robotics';
    if (!noSubjectRequired && !String(value || '').trim()) {
      throw new Error('Subject is required');
    }
    return true;
  }),
  body('message').trim().notEmpty().withMessage('Message is required')
];

export const createDemoBooking = asyncHandler(async (req, res) => {
  const booking = await DemoBooking.create(req.body);
  await sendLeadEmails({ type: 'Demo Booking', lead: booking.toObject() });
  res.status(201).json({ message: 'Demo booking submitted', item: booking });
});
