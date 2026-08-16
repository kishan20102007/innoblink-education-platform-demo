import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Chatbot from '../components/Chatbot.jsx';
import DemoModal from '../components/DemoModal.jsx';
import FloatingActions from '../components/FloatingActions.jsx';
import FloatingDemoButton from '../components/FloatingDemoButton.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import TutorModal from '../components/TutorModal.jsx';

export default function MainLayout() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [tutorOpen, setTutorOpen] = useState(false);

  return (
    <>
      <Navbar onDemo={() => setDemoOpen(true)} />
      <main>
        <Outlet context={{ openDemo: () => setDemoOpen(true), openTutor: () => setTutorOpen(true) }} />
      </main>
      <Footer />
      <FloatingActions />
      <FloatingDemoButton onClick={() => setDemoOpen(true)} />
      <Chatbot onDemo={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <TutorModal open={tutorOpen} onClose={() => setTutorOpen(false)} />
    </>
  );
}
