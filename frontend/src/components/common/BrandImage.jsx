export default function BrandImage({ src, alt, className = '', imgClassName = '' }) {
  return (
    <div className={`overflow-hidden bg-slate-100 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 hover:scale-105 ${imgClassName}`}
      />
    </div>
  );
}
