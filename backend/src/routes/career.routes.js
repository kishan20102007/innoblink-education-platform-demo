import express from 'express';
import { careerValidation, createCareerApplication } from '../controllers/career.controller.js';
import { uploadResume } from '../middleware/upload.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.post('/', uploadResume.single('resume'), careerValidation, validate, createCareerApplication);

export default router;
