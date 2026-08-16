import { Clock, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import BookDemoForm from '../components/BookDemoForm.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import SEO from '../components/common/SEO.jsx';
import { company } from '../data/company.js';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" path="/contact" />
      <section className="section-pad bg-[#f8fbff]">
        <div className="container">
          <SectionHeader eyebrow="Contact" title="Speak with EduEnrich" text="For demos, course counselling, tutor onboarding or collaboration contact our team." />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [Mail, 'Email', company.email],
                  [Clock, 'Response time', 'Within 24 hours'],
                  [ShieldCheck, 'Support', 'Parents, students and tutors']
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-[24px] bg-white p-5 shadow-sm">
                    <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient text-white"><Icon size={20} /></span>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-teal">{title}</p>
                    <p className="mt-2 font-bold text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] text-white"><MessageCircle size={20} /></span>
                  <div>
                    <h3 className="text-xl font-black text-brand-ink">WhatsApp support</h3>
                    <p className="mt-2 text-slate-600">Connect quickly for demo scheduling, course guidance and tutor partnership questions.</p>
                    <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-[#25D366] px-5 py-2 text-sm font-bold text-white">Message on WhatsApp</a>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white"><MapPin size={20} /></span>
                  <div>
                    <h3 className="text-xl font-black text-brand-ink">Global online office</h3>
                    <p className="mt-2 text-slate-600">{company.address}</p>
                    <p className="mt-2 font-semibold text-slate-700">Office hours: Monday to Saturday, 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] bg-white p-6 shadow-premium">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Book a Demo</p>
              <h2 className="mt-3 font-display text-3xl font-black text-brand-ink">Start with an expert academic consultation</h2>
              <p className="mt-3 text-slate-600">Tell us what the learner needs. EduEnrich will match the right course pathway and tutor profile.</p>
              <BookDemoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
