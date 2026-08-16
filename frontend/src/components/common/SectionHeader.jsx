import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mx-auto mb-12 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-black text-brand-ink md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </motion.div>
  );
}
