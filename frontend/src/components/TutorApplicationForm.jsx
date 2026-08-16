import { Check } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCurriculum } from '../hooks/useCurriculum.js';
import { submitTutor } from '../services/api.js';
import { buildTutorSelectionGroups } from '../utils/courseSelections.js';
import PremiumButton from './common/PremiumButton.jsx';

const fields = [
  ['name', 'Full Name'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['qualification', 'Qualification'],
  ['country', 'Country']
];

const experienceOptions = [
  'Fresher',
  '1 Year',
  '2 Years',
  '3 Years',
  '4 Years',
  '5 Years',
  '6 Years',
  '7 Years',
  '8 Years',
  '9 Years',
  '10+ Years'
];

export default function TutorApplicationForm({ onDone }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { data: curriculaData } = useCurriculum();
  const curriculaGroups = buildTutorSelectionGroups(curriculaData);

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    if (!formData.getAll('curricula').length) {
      toast.error('Please select at least one curricula option');
      return;
    }
    if (!formData.getAll('grades').length) {
      toast.error('Please select at least one grade, level, program, or course');
      return;
    }
    if (!formData.getAll('subjects').length) {
      toast.error('Please select at least one subject');
      return;
    }

    setLoading(true);
    try {
      await submitTutor(formData);
      setSuccess(true);
      form.reset();
      toast.success('Tutor application submitted');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Unable to submit tutor application');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="mt-8 rounded-3xl bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-green-500 text-white"><Check size={30} /></div>
        <h3 className="text-2xl font-bold text-brand-ink">Application received</h3>
        <p className="mt-2 text-slate-600">Our team will review your profile and contact you shortly.</p>
        <PremiumButton className="mt-6" onClick={() => { setSuccess(false); onDone?.(); }}>Done</PremiumButton>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-7 grid gap-4 md:grid-cols-2">
      {fields.map(([name, label]) => (
        <input
          key={name}
          required
          name={name}
          type={name === 'email' ? 'email' : 'text'}
          placeholder={label}
          className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
        />
      ))}
      <select required name="experience" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3">
        <option value="">Experience</option>
        {experienceOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div className="rounded-2xl border border-slate-200 p-4 md:col-span-2">
        <p className="mb-3 text-sm font-bold text-brand-ink">Curricula</p>
        <div className="grid gap-3">
          {curriculaGroups.map((group, index) => (
            <details key={group.key} open={index < 2} className="rounded-xl bg-slate-50 px-3 py-2">
              <summary className="cursor-pointer text-sm font-bold text-brand-ink">{group.label}</summary>
              <label className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <input type="checkbox" name="curricula" value={group.label} className="h-4 w-4 accent-brand-teal" />
                {group.label}
              </label>
              <div className="mt-3 grid gap-3">
                {group.levels.map((level) => (
                  <div key={level.value} className="rounded-xl bg-white p-3">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <input type="checkbox" name="grades" value={level.value} className="h-4 w-4 accent-brand-teal" />
                      {level.label}
                    </label>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {level.subjects.map((subject) => (
                        <label key={subject} className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                          <input type="checkbox" name="subjects" value={subject} className="h-4 w-4 accent-brand-teal" />
                          {subject.split(' - ').pop()}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
      <textarea required name="otherSubjectExpertise" rows="3" placeholder="Other Subject Expertise" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
      <div>
        <label className="mb-2 block text-sm font-bold text-brand-ink">Upload Resume</label>
        <input required name="resume" type="file" accept=".pdf,.doc,.docx" className="focus-ring w-full rounded-2xl border border-slate-200 px-4 py-3" />
        <p className="mt-2 text-xs font-semibold text-slate-500">PDF/DOC/DOCX only. Maximum file size: 1 MB</p>
      </div>
      <textarea required name="message" rows="4" placeholder="Message" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3 md:col-span-2" />
      <PremiumButton type="submit" disabled={loading} className="md:col-span-2">
        {loading ? 'Submitting...' : 'Submit Tutor Application'}
      </PremiumButton>
    </form>
  );
}
