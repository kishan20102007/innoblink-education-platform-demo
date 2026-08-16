import { motion } from 'framer-motion';
import { BookOpenCheck, CheckCircle2, GraduationCap, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import PremiumButton from '../components/common/PremiumButton.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import SEO from '../components/common/SEO.jsx';
import { fetchIndianSubject } from '../services/api.js';

function buildCourseContent(course) {
  const { curriculum, grade, subject } = course;
  return {
    title: `${curriculum.curriculum} ${grade.grade} ${subject.name}`,
    description: `Personalised ${subject.name} tutoring for ${curriculum.curriculum} ${grade.grade} students with concept clarity, guided practice, assessment support and parent-friendly progress communication.`,
    syllabus: [
      'Curricula-aligned topic mapping',
      'Foundation strengthening and guided practice',
      'Worksheet, assignment and doubt-clearing support',
      'Chapter-wise revision and test preparation',
      'Progress review with next-step recommendations'
    ],
    outcomes: [
      'Understand core concepts with confidence',
      'Apply methods in school assignments and tests',
      'Improve accuracy, presentation and academic discipline',
      'Build stronger study routines for long-term success'
    ],
    skills: [
      'Conceptual thinking',
      'Problem solving',
      'Exam readiness',
      'Communication and presentation',
      'Independent learning habits'
    ],
    topics: [
      `${subject.name} fundamentals`,
      `${grade.grade} school syllabus support`,
      'Practice questions and worksheets',
      'Revision, recap and assessment drills'
    ]
  };
}

export default function IndianSubjectPage() {
  const { openDemo } = useOutletContext();
  const params = useParams();
  const [state, setState] = useState({ loading: true, course: null, error: null });

  useEffect(() => {
    setState({ loading: true, course: null, error: null });
    fetchIndianSubject(params.curriculum, params.grade, params.subject)
      .then(({ data }) => setState({ loading: false, course: data.item, error: null }))
      .catch((error) => setState({ loading: false, course: null, error }));
  }, [params.curriculum, params.grade, params.subject]);

  if (state.loading) {
    return <section className="section-pad bg-[#f8fbff]"><div className="container font-bold text-brand-blue">Loading curricula...</div></section>;
  }

  if (state.error || !state.course) {
    return <section className="section-pad bg-[#f8fbff]"><div className="container font-bold text-brand-ink">Course not found.</div></section>;
  }

  const content = buildCourseContent(state.course);

  return (
    <>
      <SEO title={content.title} description={content.description} path={`/indian-curriculum/${params.curriculum}/${params.grade}/${params.subject}`} />
      <section className="premium-grid bg-[#f8fbff] py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Indian Curricula</p>
            <h1 className="mt-4 font-display text-5xl font-black text-brand-ink">{content.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{content.description}</p>
            <PremiumButton className="mt-8" onClick={openDemo}>Book a Demo</PremiumButton>
          </motion.div>
          <div className="glass rounded-[32px] p-7">
            <h2 className="text-2xl font-black text-brand-ink">Course Snapshot</h2>
            <div className="mt-5 space-y-4">
              {[
                ['Curricula', state.course.curriculum.curriculum],
                ['Grade', state.course.grade.grade],
                ['Subject', state.course.subject.name],
                ['Mode', 'Live online one-on-one mentoring']
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">{label}</p>
                  <p className="mt-1 font-bold text-slate-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-6 lg:grid-cols-2">
          {[
            ['Syllabus overview', content.syllabus, BookOpenCheck],
            ['Learning outcomes', content.outcomes, Target],
            ['Topics covered', content.topics, GraduationCap],
            ['Skills students will learn', content.skills, CheckCircle2]
          ].map(([title, items, Icon]) => (
            <div key={title} className="rounded-[28px] bg-slate-50 p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient text-white"><Icon size={20} /></span>
                <h2 className="font-display text-2xl font-black text-brand-blue">{title}</h2>
              </div>
              <div className="space-y-3">
                {items.map((item) => (
                  <p key={item} className="flex gap-3 font-semibold text-slate-700">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-green" /> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[#f8fbff]">
        <div className="container">
          <SectionHeader eyebrow="EduEnrich method" title="Structured tutoring with academic accountability" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['Why choose EduEnrich', 'Experienced tutors, personalised plans, flexible schedules and clear parent communication.'],
              ['Teaching methodology', 'Diagnostic review, concept teaching, guided practice, revision, feedback and progress tracking.'],
              ['Benefits of online learning', 'Learn from anywhere with live attention, digital resources, flexible timing and focused mentoring.']
            ].map(([title, text]) => (
              <div key={title} className="rounded-[24px] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-brand-ink">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
