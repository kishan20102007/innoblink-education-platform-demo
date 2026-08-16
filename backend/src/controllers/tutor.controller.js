import { body } from 'express-validator';
import TutorApplication from '../models/TutorApplication.js';
import { sendLeadEmails } from '../services/email.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const toArray = (value) => (Array.isArray(value) ? value : value ? [value] : []);

export const tutorValidation = [
  body('name').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('qualification').trim().notEmpty().withMessage('Qualification is required'),
  body('experience')
    .trim()
    .isIn(['Fresher', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10+ Years'])
    .withMessage('Valid experience is required'),
  body('curricula').custom((value) => {
    const selections = toArray(value);
    if (!selections.length) throw new Error('At least one curricula option is required');
    return true;
  }),
  body('grades').custom((value) => {
    const selections = toArray(value);
    if (!selections.length) throw new Error('At least one grade, level, program, or course is required');
    return true;
  }),
  body('subjects').custom((value) => {
    const selections = toArray(value);
    if (!selections.length) throw new Error('At least one subject is required');
    return true;
  }),
  body('otherSubjectExpertise').trim().notEmpty().withMessage('Other subject expertise is required'),
  body('country').trim().notEmpty().withMessage('Country is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

export const createTutorApplication = asyncHandler(async (req, res) => {
  if (!req.file) {
    const error = new Error('Resume file is required');
    error.statusCode = 422;
    throw error;
  }

  const application = await TutorApplication.create({
    ...req.body,
    curricula: toArray(req.body.curricula),
    grades: toArray(req.body.grades),
    subjects: toArray(req.body.subjects),
    resumePath: req.file.path
  });

  await sendLeadEmails({ type: 'Tutor Application', lead: application.toObject() });
  res.status(201).json({ message: 'Tutor application submitted', item: application });
});
