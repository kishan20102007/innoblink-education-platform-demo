import { MessageCircle } from 'lucide-react';
import { company } from '../data/company.js';

export default function FloatingActions() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact EduEnrich on WhatsApp"
      className="fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-premium transition-transform hover:-translate-y-1"
    >
      <MessageCircle />
    </a>
  );
}
