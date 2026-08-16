import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import TutorApplicationForm from './TutorApplicationForm.jsx';

export default function TutorModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[82] grid place-items-center bg-slate-950/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-auto rounded-[28px] bg-white p-6 shadow-2xl md:p-8"
          >
            <button onClick={onClose} className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200" aria-label="Close tutor form">
              <X size={20} />
            </button>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-orange">Tutor Partnership Program</p>
            <h2 className="mt-3 font-display text-3xl font-black text-brand-ink">Join as a Tutor Partner</h2>
            <p className="mt-3 text-slate-600">Teach globally, work flexibly, and partner with EduEnrich to support learners across international and Indian curricula.</p>
            <TutorApplicationForm onDone={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
