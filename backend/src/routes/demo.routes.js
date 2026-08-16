import express from 'express';
import { createDemoBooking, demoValidation } from '../controllers/demo.controller.js';
import { validate } from '../middleware/validate.middleware.js';

const router = express.Router();

router.post('/', demoValidation, validate, createDemoBooking);

export default router;
