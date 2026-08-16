import { ArrowRight } from 'lucide-react';

export default function PremiumButton({ children, variant = 'primary', icon = true, className = '', ...props }) {
  const styles =
    variant === 'primary'
      ? 'bg-brand-gradient text-white shadow-premium hover:shadow-glass'
      : 'border border-brand-blue/15 bg-white text-brand-blue hover:border-brand-teal hover:text-brand-teal';

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight size={17} />}
    </button>
  );
}
