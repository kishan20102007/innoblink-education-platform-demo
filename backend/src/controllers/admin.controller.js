import bcrypt from 'bcryptjs';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';
import DemoBooking from '../models/DemoBooking.js';
import TutorApplication from '../models/TutorApplication.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const resourceMap = {
  bookings: DemoBooking,
  tutors: TutorApplication
};

export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  const passwordMatches =
    adminPassword?.startsWith('$2')
      ? await bcrypt.compare(password, adminPassword)
      : password === adminPassword;

  if (email !== adminEmail || !passwordMatches) {
    const error = new Error('Invalid admin credentials');
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' });
  res.json({ token });
});

export const listResource = asyncHandler(async (req, res) => {
  const Model = resourceMap[req.params.resource];
  if (!Model) {
    const error = new Error('Invalid resource');
    error.statusCode = 404;
    throw error;
  }
  const items = await Model.find().sort({ createdAt: -1 }).limit(200);
  res.json({ items });
});

export const deleteResource = asyncHandler(async (req, res) => {
  const Model = resourceMap[req.params.resource];
  if (!Model) {
    const error = new Error('Invalid resource');
    error.statusCode = 404;
    throw error;
  }
  await Model.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export const viewTutorResume = asyncHandler(async (req, res) => {
  const application = await TutorApplication.findById(req.params.id);
  if (!application) {
    const error = new Error('Tutor application not found');
    error.statusCode = 404;
    throw error;
  }

  const absolutePath = path.resolve(application.resumePath);
  if (!fs.existsSync(absolutePath)) {
    const error = new Error('Resume file not found');
    error.statusCode = 404;
    throw error;
  }

  res.sendFile(absolutePath);
});

export const downloadTutorResume = asyncHandler(async (req, res) => {
  const application = await TutorApplication.findById(req.params.id);
  if (!application) {
    const error = new Error('Tutor application not found');
    error.statusCode = 404;
    throw error;
  }

  const absolutePath = path.resolve(application.resumePath);
  if (!fs.existsSync(absolutePath)) {
    const error = new Error('Resume file not found');
    error.statusCode = 404;
    throw error;
  }

  res.download(absolutePath);
});
