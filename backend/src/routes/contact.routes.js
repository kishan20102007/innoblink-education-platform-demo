import express from 'express';
import { contactValidation, createContactSubmission } from '../controllers/contact.controller.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.post('/', contactValidation, validate, createContactSubmission);

export default router;
