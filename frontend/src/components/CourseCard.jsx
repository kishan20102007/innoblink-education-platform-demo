import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CourseCard({ course }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-premium"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">{course.category}</p>
      <h3 className="mt-3 text-2xl font-black text-brand-ink">{course.title}</h3>
      <p className="mt-2 text-sm font-semibold text-brand-orange">{course.subtitle}</p>
      <p className="mt-4 leading-7 text-slate-600">{course.overview}</p>
      <div className="mt-5 space-y-2">
        {course.benefits.slice(0, 3).map((benefit) => (
          <p key={benefit} className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle2 size={16} className="text-brand-green" /> {benefit}
          </p>
        ))}
      </div>
      <Link to={`/courses/${course.slug}`} className="mt-6 inline-flex items-center gap-2 font-bold text-brand-blue">
        View program <ArrowRight size={17} />
      </Link>
    </motion.article>
  );
}
