import SEO from '../components/common/SEO.jsx';

const sections = [
  ['Introduction', 'EduEnrich provides online tutoring, demo sessions, academic guidance, doubt-clearing support and related education services through its website and communication channels. By accessing the website or requesting services, you agree to these Terms and Conditions.'],
  ['Definitions', 'Courses mean educational programs listed by EduEnrich. Students include learners, parents or guardians requesting classes. Tutors are independent teaching partners engaged to deliver online learning support. Content includes text, graphics, images, learning material, video, audio and other resources.'],
  ['Terms of Service', 'Users agree to provide accurate information, use the platform lawfully, and allow EduEnrich to contact them through phone, email, SMS or WhatsApp for service-related communication. EduEnrich may update service details, schedules, tutor assignments and policies when required.'],
  ['Eligibility', 'Students below 18 years should use EduEnrich services through a parent or guardian. Users must be legally capable of entering into service arrangements or must act through an authorised guardian.'],
  ['Course Listings', 'Course information, curricula details, schedules, tutor availability and learning plans are provided for academic guidance. EduEnrich may revise listings, tutor allocation or schedules to maintain service quality.'],
  ['Payment Terms', 'Course fees, payment schedules and invoices will be communicated before enrolment confirmation. Students or parents are responsible for completing agreed payments on time.'],
  ['Cancellations and Refunds', 'Once classes or tutor allocation have started, refunds are subject to EduEnrich policy, tutor scheduling commitments and service usage. EduEnrich may offer alternative tutor support or revised scheduling where appropriate.'],
  ['User Conduct', 'Users must not misuse the website, copy materials unlawfully, disrupt services, impersonate others, scrape website data, or use EduEnrich branding without permission.'],
  ['Tutor Relationship', 'Tutors engaged by EduEnrich may operate as independent teaching partners. Tutors must maintain professional conduct, confidentiality, punctuality and academic integrity.'],
  ['Privacy and Data', 'EduEnrich collects only necessary information for counselling, scheduling, communication, class delivery and administration. Users may contact EduEnrich for corrections or service-related privacy requests.'],
  ['Intellectual Property', 'EduEnrich website content, course structures, communication templates and brand assets belong to EduEnrich or their respective owners. They may not be reused without written permission.'],
  ['Limitation of Liability', 'EduEnrich aims to provide reliable academic support, but results depend on student participation, attendance, practice and external examination standards.'],
  ['Contact', 'For questions about these Terms and Conditions, contact EduEnrich at connect@eduenrichgobal.com.']
];

export default function Terms() {
  return (
    <>
      <SEO title="Terms and Conditions" path="/terms-and-conditions" />
      <section className="section-pad bg-[#f8fbff]">
        <div className="container max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Legal</p>
          <h1 className="mt-4 font-display text-5xl font-black text-brand-ink">Terms and Conditions</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">Professional education service terms for EduEnrich students, parents, tutors and website users.</p>
          <div className="mt-10 space-y-5">
            {sections.map(([title, text], index) => (
              <article key={title} className="rounded-[24px] bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-brand-orange">{String(index + 1).padStart(2, '0')}</p>
                <h2 className="mt-2 text-2xl font-black text-brand-blue">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
