import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO.jsx';

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-[#f8fbff] p-6 text-center">
      <SEO title="Page Not Found" />
      <div>
        <h1 className="font-display text-6xl font-black text-brand-blue">404</h1>
        <p className="mt-4 text-xl font-bold text-brand-ink">This EduEnrich page is not available.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-brand-gradient px-6 py-3 font-bold text-white">Return Home</Link>
      </div>
    </section>
  );
}
