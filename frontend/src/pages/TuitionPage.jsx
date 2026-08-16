import { CheckCircle2 } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import PremiumButton from '../components/common/PremiumButton.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import SEO from '../components/common/SEO.jsx';

export default function TuitionPage({ tuition }) {
  const { openDemo } = useOutletContext();

  return (
    <>
      <SEO title={tuition.title} description={tuition.subtitle} path={`/tuitions/${tuition.slug}`} />
      <section className="premium-grid bg-[#f8fbff] py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Tuitions</p>
            <h1 className="mt-4 font-display text-5xl font-black text-brand-ink">{tuition.title}</h1>
            <p className="mt-3 text-xl font-bold text-brand-orange">{tuition.subtitle}</p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              EduEnrich tuition pathways are designed for students who need academic clarity, flexible online support and a teaching model that fits their learning style.
            </p>
            <PremiumButton className="mt-8" onClick={openDemo}>Book Demo</PremiumButton>
          </div>
          <div className="glass rounded-[32px] p-7">
            <h2 className="text-2xl font-black text-brand-ink">Benefits</h2>
            <div className="mt-5 space-y-4">
              {tuition.benefits.map((benefit) => (
                <p key={benefit} className="flex items-center gap-3 font-semibold text-slate-700">
                  <CheckCircle2 className="text-brand-green" /> {benefit}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeader eyebrow="Learning model" title="Structured support with flexible delivery" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Learning approach', tuition.approach],
              ['Student support', tuition.support],
              ['Teaching methodology', [tuition.methodology]],
              ['Flexible scheduling', [tuition.scheduling]],
              ['Why choose EduEnrich', [tuition.why]]
            ].map(([title, items]) => (
              <div key={title} className="rounded-[28px] bg-slate-50 p-7">
                <h2 className="font-display text-2xl font-black text-brand-blue">{title}</h2>
                <div className="mt-5 space-y-3">
                  {items.map((item) => (
                    <p key={item} className="flex gap-3 font-semibold text-slate-700">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-green" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
