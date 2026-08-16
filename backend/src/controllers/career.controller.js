import { body } from 'express-validator';
import CareerApplication from '../models/CareerApplication.js';
import { sendLeadEmails } from '../services/email.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const careerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('subjectExpertise').trim().notEmpty().withMessage('Subject expertise is required')
];

export const createCareerApplication = asyncHandler(async (req, res) => {
  if (!req.file) {
    const error = new Error('Resume file is required');
    error.statusCode = 422;
    throw error;
  }

  const application = await CareerApplication.create({
    ...req.body,
    resumePath: req.file.path
  });

  await sendLeadEmails({ type: 'Career Application', lead: application.toObject() });
  res.status(201).json({ message: 'Career application submitted', item: application });
});
