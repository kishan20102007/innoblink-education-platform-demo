import { Helmet } from 'react-helmet-async';
import { company } from '../../data/company.js';

export default function SEO({ title, description, path = '/' }) {
  const pageTitle = title ? `${title} | ${company.name}` : `${company.name} | Global Education`;
  const pageDescription =
    description ||
    'EduEnrich provides premium online tutoring for Cambridge, IB, coding, AI, English, Olympiad and international curricula.';

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://eduenrichglobal.com${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
