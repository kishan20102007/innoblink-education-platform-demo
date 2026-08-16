import { findSubjectCourse, getCurriculumData } from '../services/curriculum.service.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const listCurriculum = asyncHandler(async (_req, res) => {
  res.json({ items: getCurriculumData() });
});

export const getSubjectCourse = asyncHandler(async (req, res) => {
  const course = findSubjectCourse(req.params.curriculum, req.params.grade, req.params.subject);
  if (!course) {
    const error = new Error('Curricula subject not found');
    error.statusCode = 404;
    throw error;
  }
  res.json({ item: course });
});
