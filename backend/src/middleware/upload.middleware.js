import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, 'uploads/resumes'),
  filename: (_req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9.]/g, '-');
    cb(null, `${Date.now()}-${safe}`);
  }
});

export const uploadResume = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowed.includes(ext)) return cb(new Error('Resume must be a PDF, DOC, or DOCX file'));
    cb(null, true);
  }
});
