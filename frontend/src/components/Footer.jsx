import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { company } from '../data/company.js';

const socialIcons = [
  ['Facebook', FaFacebookF, company.socials.facebook],
  ['Instagram', FaInstagram, company.socials.instagram],
  ['LinkedIn', FaLinkedinIn, company.socials.linkedin],
  ['YouTube', FaYoutube, company.socials.youtube],
  ['X', FaXTwitter, company.socials.x]
];

export default function Footer() {
  return (
    <footer className="bg-[#07152d] py-14 text-white">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="font-display text-6xl font-black">Edu<span className="text-brand-teal">Enrich</span></h2>
          <p className="mt-3 max-w-md text-sm uppercase tracking-[0.18em] text-slate-300">{company.tagline}</p>
          <p className="mt-5 max-w-md leading-7 text-slate-300">Premium global online education support for students, parents and tutors across CBSE and ICSE academic pathways.</p>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Explore</h3>
          <div className="grid gap-2 text-slate-300">
            <Link to="/about">About EduEnrich</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/admin/login">Admin Login</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Connect With Us</h3>
          <div className="flex flex-wrap gap-3">
            {socialIcons.map(([label, Icon, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        {/* <div>
          <h3 className="mb-4 font-bold">Indian Curricula</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {curriculumData.map((curriculum) => (
              <div key={curriculum.slug}>
                <p className="mb-3 font-bold text-white">{curriculum.curriculum}</p>
                <div className="space-y-2">
                  {curriculum.grades.map((grade) => {
                    const firstSubject = grade.subjects[0];
                    return firstSubject ? (
                      <Link
                        key={grade.slug}
                        to={`/indian-curriculum/${curriculum.slug}/${grade.slug}/${firstSubject.slug}`}
                        className="block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300 transition hover:bg-brand-teal hover:text-white"
                      >
                        {grade.grade}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
        (c) {new Date().getFullYear()} EduEnrich. All rights reserved. Contact: {company.email}
      </div>
    </footer>
  );
}
