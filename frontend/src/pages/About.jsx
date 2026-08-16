import { motion } from 'framer-motion';
import BrandImage from '../components/common/BrandImage.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import SEO from '../components/common/SEO.jsx';
import { assets } from '../data/assets.js';

const visionMission = [
  [
    'Vision',
    'To build a globally trusted personalized learning ecosystem that empowers students academically, enriches tutors professionally, and creates future-ready learners through innovation, mentoring, and quality education.'
  ],
  [
    'Mission',
    'To provide high-quality personalized online education accessible from anywhere in the world, bridge academic gaps through expert mentoring, build a strong tutor ecosystem, and support uninterrupted learning through flexible, technology-driven solutions.'
  ]
];

const differentiators = [
  ['Personalized Learning', 'Every student receives customized academic attention based on learning level, strengths, and improvement areas.'],
  ['Experienced Tutor Network', 'EduEnrich Global works with 200+ qualified tutors, subject experts, and mentors with strong academic and teaching backgrounds.'],
  ['One-on-One & Group Sessions', 'Students can learn through personalized one-on-one tuition or focused interactive group learning environments.'],
  ['Multi-Curricula Expertise', 'EduEnrich supports CBSE, ICSE, IGCSE and IB learners through structured academic mentoring.'],
  ['Technology Enabled Learning', 'Live interactive classes, LMS support, recorded sessions, homework, assessments, parent progress tracking, and AI-enabled initiatives support the learning journey.'],
  ['Holistic Academic Support', 'Beyond tuition, EduEnrich supports mentoring, homework, exam preparation, skill development, and competitive exam foundation.'
  ]
];

const academicPrograms = [
  'One-on-One Tuition',
  'Group Learning Sessions',
  'Subject-Wise Mentoring',
  'Homework & Assignment Support',
  'Exam Preparation',
  'Academic Gap Bridging Programs',
  'Student Mentoring'
];

const skillPrograms = ['Coding & Robotics', 'Artificial Intelligence Basics', 'Spoken English', 'Career Guidance & Mentoring'];
const grades = ['Grade 3 to Grade 12'];
const subjects = ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 'Arabic', 'Coding', 'Artificial Intelligence', 'Robotics', 'Languages & Skill Subjects'];
const students = [
  'Learners from India and abroad',
  'Gulf and Middle East learners',
  'Learners affected by school disruptions',
  'Learners requiring personal academic mentoring',
  'Developing learners needing academic improvement',
  'Academic achievers preparing for competitive examinations'
];
const tutorStandards = ['Resume Screening', 'Shortlisting', 'Demo Evaluation', 'Academic screening committee review', 'HR round', 'Training & Onboarding'];
const platformFeatures = ['Live Interactive Classes', 'Customised Learning Platform', 'Mobile Learning Support', 'Learning Management System (LMS)', 'Flexible Scheduling', 'Homework & Assessment Management', 'Recorded Sessions', 'Student Progress Reports', 'AI-Based Learning Initiatives', 'Exam Preparation Support', 'Digital Learning Resources'];
const futurePlans = ['AI-enabled learning systems', 'Global tutor network expansion', 'Robotics & coding education', 'International academic support programs', 'Hybrid learning centers', 'Advanced student analytics & mentoring systems'];
const parentTrust = ['Personalized attention', 'Qualified and experienced tutors', 'Flexible online learning', 'International curricula support', 'Student-centric mentoring', 'Technology-driven education', 'Safe and interactive learning environment', 'Confidence building for real-life challenges', 'Continuous academic monitoring'];

export default function About() {
  return (
    <>
      <SEO title="About Us" path="/about" />
      <section className="section-pad bg-[#f8fbff]">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">About EduEnrich Global</p>
            <h1 className="mt-4 font-display text-5xl font-black text-brand-ink">Empowering Students Enriching Tutors</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">EduEnrich Global is a dedicated niche education company from India committed to transforming online learning through personalized academic mentoring, quality tutoring, and technology-enabled education solutions.</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">Founded with a vision to bridge academic gaps and provide uninterrupted learning support to students across the globe, EduEnrich Global delivers high-quality one-on-one tuition and interactive group learning sessions for students from Grade 3 to Grade 12 across multiple curricula.</p>
          </div>
          <BrandImage src={assets.heroTwo} alt="EduEnrich digital learning" className="aspect-[1.45] rounded-[34px] shadow-premium" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-6 md:grid-cols-2">
          {visionMission.map(([title, text]) => (
            <div key={title} className="rounded-[30px] bg-slate-50 p-8">
              <h2 className="font-display text-3xl font-black text-brand-blue">{title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-[#f8fbff]">
        <div className="container">
          <SectionHeader eyebrow="What makes EduEnrich different" title="A mentoring-based learning approach" text="Unlike conventional online tuition platforms, EduEnrich Global combines academic excellence with personal attention and student development." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(([title, text], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-[24px] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-brand-ink">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#07152d] text-white">
        <div className="container">
          <SectionHeader eyebrow="Academic programs" title="Structured support for global learners" text="EduEnrich Global supports academic growth, skill development, exam readiness, and mentoring through flexible online programs." />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ['Academic Programs', academicPrograms],
              ['Foundation & Skill Programs', skillPrograms],
              ['Grades Covered', grades]
            ].map(([title, items]) => (
              <div key={title} className="rounded-[24px] border border-white/10 bg-white/8 p-6">
                <h3 className="text-2xl font-black text-brand-orange">{title}</h3>
                <div className="mt-5 space-y-3">
                  {items.map((item) => (
                    <p key={item} className="font-semibold text-white/90">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Subjects Offered</p>
            <h2 className="mt-4 font-display text-4xl font-black text-brand-ink">Expert tutoring across core academics and skills</h2>
            <p className="mt-5 leading-8 text-slate-600">Students receive support across school subjects, languages, coding, AI, robotics, and skill-based learning areas.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject) => (
              <span key={subject} className="rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">{subject}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f8fbff]">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] bg-white p-8 shadow-sm">
            <h2 className="font-display text-3xl font-black text-brand-blue">Our Students</h2>
            <div className="mt-6 space-y-3">
              {students.map((item) => <p key={item} className="font-semibold text-slate-700">{item}</p>)}
            </div>
          </div>
          <div className="rounded-[30px] bg-white p-8 shadow-sm">
            <h2 className="font-display text-3xl font-black text-brand-blue">Tutor Selection & Quality Standards</h2>
            <p className="mt-4 leading-7 text-slate-600">At EduEnrich Global, quality teaching is our core support system. Tutors are graduates and subject matter experts who are professionally screened and trained in online teaching methodologies.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tutorStandards.map((item) => <span key={item} className="rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeader eyebrow="Technology & Learning Platform" title="A scalable modern platform for online education" text="EduEnrich Global is building a digital learning ecosystem for global online education and transparent academic progress." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((item) => (
              <div key={item} className="rounded-[22px] border border-slate-100 bg-[#f8fbff] p-5 font-bold text-slate-700 shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f8fbff]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] bg-white p-8 shadow-sm">
            <h2 className="font-display text-3xl font-black text-brand-blue">Future Expansion Plans</h2>
            <div className="mt-6 space-y-3">
              {futurePlans.map((item) => <p key={item} className="font-semibold text-slate-700">{item}</p>)}
            </div>
          </div>
          <div className="rounded-[30px] bg-white p-8 shadow-sm">
            <h2 className="font-display text-3xl font-black text-brand-blue">Why Parents Choose EduEnrich</h2>
            <div className="mt-6 space-y-3">
              {parentTrust.map((item) => <p key={item} className="font-semibold text-slate-700">{item}</p>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
