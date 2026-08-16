import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../data/assets.js';
import { cambridgeCourses, ibCourses, otherCourses } from '../data/courses.js';
import { tuitions } from '../data/tuitions.js';
import { useCurriculum } from '../hooks/useCurriculum.js';

function courseLabel(course) {
  return course.title.replace('Cambridge ', '').replace('IB ', '').replace('Coding & AI Basics', 'Coding / AI Basics');
}

const otherCourseNavItems = [
  { slug: 'robotics', label: 'Robotics' },
  { slug: 'coding-ai', label: 'Coding' },
  { slug: 'coding-ai', label: 'AI Basics' },
  ...otherCourses
    .filter((course) => !['robotics', 'coding-ai'].includes(course.slug))
    .map((course) => ({ slug: course.slug, label: courseLabel(course) }))
];

function CurriculumColumn({ curriculum, onNavigate }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="mb-3 text-sm font-black text-brand-blue">{curriculum.curriculum}</p>
      <div className="space-y-3">
        {curriculum.grades.map((grade) => (
          <details key={`${curriculum.slug}-${grade.slug}`} className="rounded-xl bg-white p-3">
            <summary className="cursor-pointer text-sm font-bold text-brand-ink">{grade.grade}</summary>
            <div className="mt-3 flex flex-wrap gap-2">
              {grade.subjects.map((subject) => (
                <Link
                  key={subject.slug}
                  to={`/indian-curriculum/${curriculum.slug}/${grade.slug}/${subject.slug}`}
                  onClick={onNavigate}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-brand-teal hover:text-white"
                >
                  {subject.name}
                </Link>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: curriculumData } = useCurriculum();

  const navLink = ({ isActive }) =>
    `text-sm font-semibold transition-colors ${isActive ? 'text-brand-teal' : 'text-slate-700 hover:text-brand-blue'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/82 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between lg:justify-start">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src={assets.logo} alt="EduEnrich logo" className="h-14 w-14 rounded-2xl object-contain" />
          <div>
            <p className="font-display text-[34px] font-black leading-none text-blue-900">Edu<span className="text-brand-teal">Enrich</span></p>
            <p className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.14em] text-slate-800 sm:block">Enriching Global Learners</p>
          </div>
        </Link>

        <nav className="ml-auto mr-7 hidden items-center gap-6 xl:gap-7 lg:flex">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <NavLink to="/about" className={navLink}>About</NavLink>

          <div className="group relative py-7">
            <button className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-blue">Courses</button>
            <div className="invisible absolute left-1/2 top-[72px] max-h-[72vh] w-[900px] -translate-x-1/2 translate-y-2 overflow-auto rounded-3xl border border-slate-100 bg-white/95 p-4 opacity-0 shadow-premium backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid gap-4 lg:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="mb-3 text-sm font-black text-brand-blue">Cambridge</p>
                  {[...cambridgeCourses].map((course) => (
                    <Link key={course.slug} to={`/courses/${course.slug}`} className="block rounded-2xl px-4 py-3 hover:bg-white">
                      <span className="font-bold text-brand-ink">{courseLabel(course)}</span>
                    </Link>
                  ))}
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="mb-3 text-sm font-black text-brand-blue">IB</p>
                  {ibCourses.map((course) => (
                    <Link key={course.slug} to={`/courses/${course.slug}`} className="block rounded-2xl px-4 py-3 hover:bg-white">
                      <span className="font-bold text-brand-ink">{courseLabel(course)}</span>
                    </Link>
                  ))}
                  <p className="mb-3 mt-5 text-sm font-black text-brand-blue">Other Courses</p>
                  {otherCourseNavItems.map((course) => (
                    <Link key={`${course.slug}-${course.label}`} to={`/courses/${course.slug}`} className="block rounded-2xl px-4 py-3 hover:bg-white">
                      <span className="font-bold text-brand-ink">{course.label}</span>
                    </Link>
                  ))}
                </div>
                <div className="grid gap-4 lg:col-span-2 lg:grid-cols-2">
                  {curriculumData.map((curriculum) => (
                    <CurriculumColumn key={curriculum.slug} curriculum={curriculum} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group relative py-7">
            <button className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-blue">Tuitions</button>
            <div className="invisible absolute left-0 top-[72px] w-72 translate-y-2 rounded-3xl border border-slate-100 bg-white/95 p-3 opacity-0 shadow-premium backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {tuitions.map((tuition) => (
                <Link key={tuition.slug} to={`/tuitions/${tuition.slug}`} className="block rounded-2xl px-4 py-3 hover:bg-slate-50">
                  <span className="font-bold text-brand-ink">{tuition.title}</span>
                  <span className="block text-xs text-slate-500">{tuition.subtitle}</span>
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/careers" className={navLink}>Career</NavLink>
          <NavLink to="/contact" className={navLink}>Contact</NavLink>
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a href="https://example.com" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-brand-gradient px-5 text-sm font-bold leading-none text-white shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glass">
            Sign Up
          </a>
        </div>

        <button className="rounded-full bg-slate-100 p-3 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white p-4 lg:hidden">
          <div className="container grid gap-3">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/careers', 'Career'],
              ['/contact', 'Contact']
            ].map(([path, label]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                {label}
              </NavLink>
            ))}

            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="mb-2 px-2 text-sm font-bold text-brand-blue">Courses</p>
              {[
                ['Cambridge', cambridgeCourses],
                ['IB', ibCourses],
                ['Other Courses', otherCourseNavItems]
              ].map(([label, items]) => (
                <details key={label} className="rounded-xl bg-white p-3">
                  <summary className="cursor-pointer text-sm font-bold text-brand-ink">{label}</summary>
                  <div className="mt-2 grid gap-1">
                    {items.map((item) => (
                      <Link key={`${item.slug}-${item.label || item.title}`} to={`/courses/${item.slug}`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-1.5 text-xs text-slate-600">
                        {item.label || courseLabel(item)}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
              {curriculumData.map((curriculum) => (
                <details key={curriculum.slug} className="rounded-xl bg-white p-3">
                  <summary className="cursor-pointer text-sm font-bold text-brand-ink">{curriculum.curriculum}</summary>
                  <div className="mt-3 space-y-2">
                    {curriculum.grades.map((grade) => (
                      <details key={grade.slug} className="rounded-xl bg-slate-50 p-2">
                        <summary className="cursor-pointer text-sm font-semibold text-slate-700">{grade.grade}</summary>
                        <div className="mt-2 grid gap-1">
                          {grade.subjects.map((subject) => (
                            <Link
                              key={subject.slug}
                              to={`/indian-curriculum/${curriculum.slug}/${grade.slug}/${subject.slug}`}
                              onClick={() => setOpen(false)}
                              className="rounded-lg px-2 py-1.5 text-xs text-slate-600"
                            >
                              {subject.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="mb-2 px-2 text-sm font-bold text-brand-blue">Tuitions</p>
              {tuitions.map((tuition) => (
                <Link key={tuition.slug} to={`/tuitions/${tuition.slug}`} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm text-slate-700">
                  {tuition.title}
                </Link>
              ))}
            </div>

            <a href="https://example.com" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-brand-gradient px-5 text-center text-sm font-bold leading-none text-white shadow-premium">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
