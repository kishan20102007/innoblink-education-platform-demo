import express from 'express';
import { getSubjectCourse, listCurriculum } from '../controllers/curriculum.controller.js';

const router = express.Router();

router.get('/', listCurriculum);
router.get('/:curriculum/:grade/:subject', getSubjectCourse);

export default router;
