# EduEnrich Complete Setup Guide

This project is a MERN stack website with:

- React/Vite frontend
- Node/Express backend
- MongoDB with Mongoose
- Nodemailer email automation
- Dynamic CBSE/ICSE curricula parsing from `Subjects curriculum wise.xlsx`

## A. Frontend Setup

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=919052391740
```

Run frontend:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## B. Backend Setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/eduenrich
JWT_SECRET=replace_with_a_long_random_secret
ADMIN_EMAIL=admin@eduenrichgobal.com
ADMIN_PASSWORD=ChangeThisStrongPassword123!
COMPANY_EMAIL=connect@eduenrichgobal.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=connect@eduenrichgobal.com
SMTP_PASS=your_gmail_app_password
MAIL_FROM="EduEnrich <connect@eduenrichgobal.com>"
CURRICULUM_XLSX_PATH=./data/Subjects curriculum wise.xlsx
```

Run backend:

```bash
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

## C. MongoDB Atlas Setup

1. Go to MongoDB Atlas and create an account.
2. Create a new free or paid cluster.
3. Create a database user under Database Access.
4. Add a username and strong password.
5. Go to Network Access and add your IP address.
6. For deployment, add Render/Railway outbound IPs or temporarily allow `0.0.0.0/0` if your hosting provider requires it.
7. Click Connect, choose Drivers, and copy the MongoDB connection string.
8. Replace `<username>`, `<password>`, and database name in the connection string.
9. Add it to `backend/.env` as `MONGODB_URI`.

Example:

```env
MONGODB_URI=mongodb+srv://eduenrich_admin:password@cluster0.xxxxx.mongodb.net/eduenrich
```

## D. Nodemailer / Gmail SMTP Setup

1. Use a Gmail or Google Workspace account.
2. Enable 2-Step Verification on the Google account.
3. Go to Google Account > Security > App passwords.
4. Generate an app password for Mail.
5. Use that password as `SMTP_PASS`.
6. Configure:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=connect@eduenrichgobal.com
SMTP_PASS=your_16_character_app_password
MAIL_FROM="EduEnrich <connect@eduenrichgobal.com>"
COMPANY_EMAIL=connect@eduenrichgobal.com
```

Email automation runs for:

- Book Demo form
- Contact form
- Career form
- Tutor application form

## E. Required Environment Variables

Frontend:

```env
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=919052391740
```

Backend:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@eduenrichgobal.com
ADMIN_PASSWORD=your_admin_password
COMPANY_EMAIL=connect@eduenrichgobal.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=connect@eduenrichgobal.com
SMTP_PASS=your_app_password
MAIL_FROM="EduEnrich <connect@eduenrichgobal.com>"
```

Optional backend variable:

```env
CURRICULUM_XLSX_PATH=./data/Subjects curriculum wise.xlsx
```

## F. Running The Full Project

From the project root:

```bash
npm run install:all
npm run dev
```

Local URLs:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5000
API:      http://localhost:5000/api
```

## G. Dynamic XLSX Curricula

The backend reads:

```text
backend/data/Subjects curriculum wise.xlsx
```

It dynamically generates:

```text
Indian Curricula
  CBSE
    Grade
      Subjects
  ICSE
    Grade
      Subjects
```

API endpoints:

```text
GET /api/curriculum
GET /api/curriculum/:curriculum/:grade/:subject
```

To update CBSE/ICSE subjects later, replace the XLSX file in `backend/data` and restart the backend.

## H. Deployment

Frontend on Vercel:

1. Import the repository.
2. Set root directory to `frontend`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add:

```env
VITE_API_URL=https://your-backend-domain.com/api
VITE_WHATSAPP_NUMBER=919052391740
```

Backend on Render or Railway:

1. Create a new web service.
2. Set root directory to `backend`.
3. Build command: `npm install`.
4. Start command: `npm start`.
5. Add all backend environment variables.
6. Upload or commit `backend/data/Subjects curriculum wise.xlsx`.
7. Set `CLIENT_URL` to the deployed Vercel frontend URL.

Database:

- Use MongoDB Atlas for production.
- Add the production backend IP/network to Atlas Network Access.

## I. Domain Connection

Frontend custom domain:

1. Add the domain in Vercel.
2. Add the required DNS records at your domain provider.
3. Wait for SSL to activate.

Backend custom domain:

1. Add the custom domain in Render/Railway.
2. Add DNS records.
3. Update frontend `VITE_API_URL`.

After domain setup, update:

```env
CLIENT_URL=https://yourdomain.com
VITE_API_URL=https://api.yourdomain.com/api
```

## Useful API Summary

```text
POST   /api/demo
POST   /api/contact
POST   /api/careers
POST   /api/tutors
GET    /api/curriculum
GET    /api/curriculum/:curriculum/:grade/:subject
POST   /api/admin/login
GET    /api/admin/bookings
GET    /api/admin/contacts
GET    /api/admin/careers
GET    /api/admin/tutors
DELETE /api/admin/:resource/:id
```
