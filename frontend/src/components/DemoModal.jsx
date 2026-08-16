import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import BookDemoForm from './BookDemoForm.jsx';

export default function DemoModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-auto rounded-[28px] bg-white p-6 shadow-2xl md:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"
              aria-label="Close demo form"
            >
              <X size={20} />
            </button>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Book a Demo</p>
            <h2 className="mt-3 font-display text-3xl font-black text-brand-ink">Start with an expert academic consultation</h2>
            <p className="mt-3 text-slate-600">Tell us what the learner needs. EduEnrich will match the right course pathway and tutor profile.</p>
            <BookDemoForm onDone={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
