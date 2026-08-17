import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import adminRoutes from './routes/admin.routes.js';
import careerRoutes from './routes/career.routes.js';
import contactRoutes from './routes/contact.routes.js';
import curriculumRoutes from './routes/curriculum.routes.js';
import demoRoutes from './routes/demo.routes.js';
import tutorRoutes from './routes/tutor.routes.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

const app = express();

app.use(helmet());
const allowedOrigins = [
    "http://localhost:5173",
    process.env.CLIENT_URL
].filter(Boolean);

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests without an origin
            // such as Postman/server-to-server requests
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
        credentials: true
    })
);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 120 }));

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'EduEnrich API' }));
app.use('/api/curriculum', curriculumRoutes);
app.use('/api/demo', demoRoutes);
app.use('/api/tutors', tutorRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/admin', adminRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
