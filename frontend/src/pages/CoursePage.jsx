import { CheckCircle2 } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import PremiumButton from '../components/common/PremiumButton.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import SEO from '../components/common/SEO.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { allCourses } from '../data/courses.js';

export default function CoursePage({ course }) {
  const { openDemo } = useOutletContext();
  const related = allCourses.filter((item) => item.category === course.category && item.slug !== course.slug).slice(0, 3);

  return (
    <>
      <SEO title={course.title} description={course.overview} path={`/courses/${course.slug}`} />
      <section className="premium-grid bg-[#f8fbff] py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">{course.category}</p>
            <h1 className="mt-4 font-display text-5xl font-black text-brand-ink">{course.title}</h1>
            <p className="mt-3 text-xl font-bold text-brand-orange">{course.subtitle}</p>
            <p className="mt-6 text-lg leading-8 text-slate-600">{course.overview}</p>
            <PremiumButton className="mt-8" onClick={openDemo}>Book a Demo</PremiumButton>
          </div>
          <div className="glass rounded-[32px] p-7">
            <h2 className="text-2xl font-black text-brand-ink">Program benefits</h2>
            <div className="mt-5 space-y-4">
              {course.benefits.map((benefit) => (
                <p key={benefit} className="flex items-center gap-3 font-semibold text-slate-700">
                  <CheckCircle2 className="text-brand-green" /> {benefit}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="rounded-[30px] bg-slate-50 p-8">
            <h2 className="font-display text-3xl font-black text-brand-blue">Subject categories</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {course.subjects.map((subject) => (
                <span key={subject} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">{subject}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] bg-slate-50 p-8">
            <h2 className="font-display text-3xl font-black text-brand-blue">Curricula flow</h2>
            <div className="mt-6 space-y-4">
              {course.syllabus.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-white p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-black text-white">{index + 1}</span>
                  <p className="font-semibold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-[#f8fbff]">
          <div className="container">
            <SectionHeader eyebrow="Related" title={`More ${course.category}`} />
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => <CourseCard key={item.slug} course={item} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
