import express from 'express';
import { createTutorApplication, tutorValidation } from '../controllers/tutor.controller.js';
import { uploadResume } from '../middleware/upload.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.post('/', uploadResume.single('resume'), tutorValidation, validate, createTutorApplication);

export default router;
