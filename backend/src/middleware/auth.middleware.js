import jwt from 'jsonwebtoken';

export function protect(req, _res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) {
    const error = new Error('Authentication required');
    error.statusCode = 401;
    return next(error);
  }
  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    const error = new Error('Invalid or expired token');
    error.statusCode = 401;
    next(error);
  }
}
