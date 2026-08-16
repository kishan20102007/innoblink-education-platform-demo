import { body } from 'express-validator';
import ContactSubmission from '../models/ContactSubmission.js';
import { sendLeadEmails } from '../services/email.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const contactValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

export const createContactSubmission = asyncHandler(async (req, res) => {
  const submission = await ContactSubmission.create(req.body);
  await sendLeadEmails({ type: 'Contact Submission', lead: submission.toObject() });
  res.status(201).json({ message: 'Contact submission saved', item: submission });
});
