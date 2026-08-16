import express from 'express';
import { body } from 'express-validator';
import { deleteResource, downloadTutorResume, listResource, loginAdmin, viewTutorResume } from '../controllers/admin.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.post(
  '/login',
  [body('email').isEmail().withMessage('Valid email is required'), body('password').notEmpty().withMessage('Password is required')],
  validate,
  loginAdmin
);
router.get('/tutors/:id/resume', protect, viewTutorResume);
router.get('/tutors/:id/resume/download', protect, downloadTutorResume);
router.get('/:resource', protect, listResource);
router.delete('/:resource/:id', protect, deleteResource);

export default router;
