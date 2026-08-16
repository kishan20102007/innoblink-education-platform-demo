import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCurriculum } from '../hooks/useCurriculum.js';
import { submitDemo } from '../services/api.js';
import { courseCategoryOptions, getCourseSelection, getSelectedSubjects } from '../utils/courseSelections.js';
import PremiumButton from './common/PremiumButton.jsx';

const initialState = {
  name: '',
  email: '',
  phone: '',
  alternativeNumber: '',
  country: '',
  course: '',
  grade: '',
  subject: '',
  message: ''
};

export default function BookDemoForm({ onDone, submitLabel = 'Confirm Demo Request' }) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { data: curriculaData } = useCurriculum();
  const courseSelection = getCourseSelection(form.course, curriculaData);
  const selectedSubjects = getSelectedSubjects(form.course, form.grade, curriculaData);
  const needsLevel = Boolean(form.course && courseSelection.levels.length);
  const showSubjectField = Boolean(form.course && (!needsLevel || form.grade));

  const update = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'course' ? { grade: '', subject: '' } : {}),
      ...(name === 'grade' ? { subject: '' } : {})
    }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const currentForm = event.currentTarget;
    if (!currentForm.checkValidity()) {
      currentForm.reportValidity();
      return;
    }

    setLoading(true);
    try {
      await submitDemo(form);
      setSuccess(true);
      setForm(initialState);
      toast.success('Demo request sent successfully');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Unable to submit demo request');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="mt-8 rounded-3xl bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-green-500 text-white"><Check size={30} /></div>
        <h3 className="text-2xl font-bold text-brand-ink">Request received</h3>
        <p className="mt-2 text-slate-600">Our team will contact you shortly with the next steps.</p>
        <PremiumButton className="mt-6" onClick={() => { setSuccess(false); onDone?.(); }}>
          Done
        </PremiumButton>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-7 grid gap-4 md:grid-cols-2">
      {[
        ['name', 'Name'],
        ['email', 'Email'],
        ['phone', 'Phone'],
        ['alternativeNumber', 'Alternative Number'],
        ['country', 'Country']
      ].map(([field, label]) => (
        <input
          key={field}
          required
          type={field === 'email' ? 'email' : 'text'}
          name={field}
          value={form[field]}
          onChange={update}
          placeholder={label}
          className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
        />
      ))}
      <select
        required
        name="course"
        value={form.course}
        onChange={update}
        className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2"
      >
        <option value="">Course interested</option>
        {courseCategoryOptions.map((course) => (
          <option key={course} value={course}>{course}</option>
        ))}
      </select>
      <AnimatePresence>
        {needsLevel && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:col-span-2"
          >
            <select
              required
              name="grade"
              value={form.grade}
              onChange={update}
              className="focus-ring w-full rounded-2xl border border-slate-200 px-4 py-3"
            >
              <option value="">{courseSelection.levelLabel}</option>
              {courseSelection.levels.map((level) => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showSubjectField && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:col-span-2"
          >
            <select
              required={selectedSubjects.length > 0}
              disabled={!selectedSubjects.length}
              name="subject"
              value={form.subject}
              onChange={update}
              className="focus-ring w-full rounded-2xl border border-slate-200 px-4 py-3 disabled:bg-slate-50 disabled:text-slate-500"
            >
              <option value="">{selectedSubjects.length ? 'Select subject' : 'No subject selection required'}</option>
              {selectedSubjects.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </motion.div>
        )}
      </AnimatePresence>
      <textarea
        required
        name="message"
        value={form.message}
        onChange={update}
        placeholder="Message"
        rows="4"
        className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2"
      />
      <PremiumButton type="submit" className="md:col-span-2" disabled={loading}>
        {loading ? 'Submitting...' : submitLabel}
      </PremiumButton>
    </form>
  );
}
