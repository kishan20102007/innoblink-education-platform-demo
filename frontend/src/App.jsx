import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import CoursePage from './pages/CoursePage.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import IndianSubjectPage from './pages/IndianSubjectPage.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import NotFound from './pages/NotFound.jsx';
import Terms from './pages/Terms.jsx';
import { allCourses } from './data/courses.js';
import { tuitions } from './data/tuitions.js';
import TuitionPage from './pages/TuitionPage.jsx';

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {allCourses.map((course) => (
            <Route
              key={course.slug}
              path={`courses/${course.slug}`}
              element={<CoursePage course={course} />}
            />
          ))}
          <Route path="indian-curriculum/:curriculum/:grade/:subject" element={<IndianSubjectPage />} />
          {tuitions.map((tuition) => (
            <Route
              key={tuition.slug}
              path={`tuitions/${tuition.slug}`}
              element={<TuitionPage tuition={tuition} />}
            />
          ))}
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms-and-conditions" element={<Terms />} />
        </Route>
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
