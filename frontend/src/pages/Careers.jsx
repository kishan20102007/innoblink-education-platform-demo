import SectionHeader from '../components/common/SectionHeader.jsx';
import SEO from '../components/common/SEO.jsx';
import TutorApplicationForm from '../components/TutorApplicationForm.jsx';

export default function Careers() {
  return (
    <>
      <SEO title="Careers" path="/careers" />
      <section className="section-pad bg-[#f8fbff]">
        <div className="container">
          <SectionHeader eyebrow="Careers" title="Teach and Reach Globally with EduEnrich" text="Join a professional tutor ecosystem built around clarity, trust and measurable learner progress." />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              {['Cambridge and IB subject tutors', 'CBSE and ICSE academic mentors', 'Coding, AI and robotics trainers'].map((role) => (
                <div key={role} className="rounded-[24px] bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black text-brand-ink">{role}</h3>
                  <p className="mt-2 text-slate-600">Remote role | Flexible batches | Global learners</p>
                </div>
              ))}
            </div>
            <div className="rounded-[30px] bg-white p-6 shadow-premium">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-orange">Tutor Partnership Program</p>
              <h2 className="mt-3 font-display text-3xl font-black text-brand-ink">Join as a Tutor Partner</h2>
              <p className="mt-3 text-slate-600">Teach globally, work flexibly, and partner with EduEnrich to support learners across international and Indian curricula.</p>
              <TutorApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
