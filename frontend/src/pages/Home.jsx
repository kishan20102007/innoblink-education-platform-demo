import { motion } from 'framer-motion';
import { Award, Globe2, GraduationCap, Users } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BrandImage from '../components/common/BrandImage.jsx';
import PremiumButton from '../components/common/PremiumButton.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import SEO from '../components/common/SEO.jsx';
import CourseCard from '../components/CourseCard.jsx';
import { assets } from '../data/assets.js';
import { company, faqs, stats, testimonials, trustPillars, whyChoose } from '../data/company.js';
import { allCourses, cambridgeCourses, ibCourses } from '../data/courses.js';

export default function Home() {
  const { openDemo, openTutor } = useOutletContext();
  const featured = [cambridgeCourses[2], cambridgeCourses[4], ibCourses[2], allCourses.find((c) => c.slug === 'coding-ai')];
  const icons = [GraduationCap, Globe2, Award, Users];

  return (
    <>
      <SEO title="Premium Global Education Consultancy" />
      <section className="relative overflow-hidden bg-[#f6fbff] py-14 md:py-16">
        <div className="container grid items-center gap-8 lg:grid-cols-[42%_58%] lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-[580px] rounded-r-[42px] px-0 py-8 lg:px-8"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 40%, rgba(255,255,255,0.25) 70%, transparent 100%)'
            }}
          >
            <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-blue shadow-sm"></p>
            <h1 className="font-display text-5xl font-black leading-tight text-blue-900 md:text-7xl">
              Edu<span className="gradient-text">Enrich</span>
              <span className="block text-3xl text-slate-700 md:text-5xl">Tailored Tution Program Globally</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A premium education ecosystem for global students, parents and tutors, combining personalised live classes, structured academic mentoring and professional support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PremiumButton onClick={openDemo}>Book a Demo</PremiumButton>
              <a href="#courses" className="inline-flex items-center justify-center rounded-full border border-brand-blue/20 bg-white px-6 py-3 text-sm font-bold text-brand-blue transition hover:border-brand-teal hover:text-brand-teal">
                Explore Courses
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['Live Classes', Users],
                ['Expert Tutors', GraduationCap],
                ['Global Community', Globe2],
                ['Future Ready Skills', Award]
              ].map(([label, Icon]) => (
                <div key={label} className="rounded-2xl border border-white/80 bg-white/85 p-3 text-center shadow-sm backdrop-blur">
                  <Icon className="mx-auto mb-2 text-brand-teal" size={22} />
                  <p className="text-xs font-black leading-4 text-brand-ink">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-h-[340px] overflow-hidden rounded-[32px] shadow-premium md:min-h-[460px] lg:min-h-[620px] lg:rounded-[42px]"
          >
            <img
              src={assets.heroBackground}
              alt="Student learning online with global tutoring support"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[24px] border border-slate-100 bg-slate-50 p-6 text-center">
              <p className="font-display text-4xl font-black text-brand-blue">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Trust & reliability</p>
            <h2 className="mt-4 font-display text-4xl font-black text-brand-ink">Global support with personal academic attention</h2>
            <p className="mt-5 leading-8 text-slate-600">EduEnrich is built for families who need reliable tutors, curricula clarity, one-on-one mentorship and flexible online learning across time zones.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPillars.map((item) => (
              <div key={item} className="rounded-[22px] border border-slate-100 bg-[#f8fbff] p-5 font-bold text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f8fbff]">
        <div className="container">
          <SectionHeader eyebrow="Why EduEnrich" title="Designed for trust, clarity and measurable progress" text="Every learner receives a structured pathway, not a random class schedule." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-[24px] bg-white p-6 shadow-sm">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white">
                  {(() => {
                    const Icon = icons[index % icons.length];
                    return <Icon size={22} />;
                  })()}
                </div>
                <p className="font-semibold leading-7 text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="section-pad bg-white">
        <div className="container">
          <SectionHeader eyebrow="Featured programs" title="International curricula with focused learning tracks" text="Explore high-demand academic programs supported by expert tutors and clear progress systems." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#07152d] text-white">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <BrandImage src={assets.tutorClass} alt="Tutor led online class" className="aspect-[1.25] rounded-[32px]" />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-orange">Tutor highlights</p>
            <h2 className="mt-4 font-display text-4xl font-black md:text-5xl">Tutor Partnership Program</h2>
            <p className="mt-5 leading-8 text-slate-300">Earn by teaching globally, join the EduEnrich tutor network, teach from anywhere and connect global learners through flexible online teaching.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Earn by teaching globally', 'Flexible online teaching', 'Global student reach', 'Partner with EduEnrich'].map((item) => (
                <p key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-white">{item}</p>
              ))}
            </div>
            <PremiumButton className="mt-8" onClick={openTutor}>Join as Tutor Partner</PremiumButton>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <SectionHeader eyebrow="Student success" title="Confidence that parents can see and students can feel" />
          <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3500 }} pagination={{ clickable: true }} spaceBetween={24} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="min-h-72 rounded-[28px] border border-slate-100 bg-slate-50 p-7">
                  <p className="text-lg leading-8 text-slate-700">"{item.quote}"</p>
                  <p className="mt-6 font-bold text-brand-ink">{item.name}</p>
                  <p className="text-sm text-brand-teal">{item.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="section-pad bg-[#f8fbff]">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">FAQ</p>
            <h2 className="mt-4 font-display text-4xl font-black text-brand-ink">Clear answers before you begin</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-[22px] bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-bold text-brand-ink">{faq.question}</summary>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-gradient py-16 text-white">
        <div className="container grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-4xl font-black">Start the EduEnrich journey today</h2>
            <p className="mt-3 text-white/85">Get course guidance, tutor matching and a personalised demo consultation.</p>
          </div>
          <PremiumButton variant="secondary" onClick={openDemo}>Book a Demo</PremiumButton>
        </div>
      </section>
    </>
  );
}
