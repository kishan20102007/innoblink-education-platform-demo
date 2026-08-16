import { Calendar } from "lucide-react";

export default function FloatingDemoButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-24
        right-6
        z-50
        h-16
        w-16
        rounded-full
        bg-gradient-to-r
        from-blue-600
        to-teal-500
        shadow-2xl
        flex
        items-center
        justify-center
        hover:scale-110
        transition-all
      "
      aria-label="Book Demo"
    >
      <Calendar size={30} color="white" />

    </button>
  );
}