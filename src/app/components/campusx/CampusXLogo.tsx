interface CampusXLogoProps {
  className?: string;
  variant?: "default" | "light" | "compact";
}

export function CampusXLogo({ className = "", variant = "default" }: CampusXLogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Wordmark and Institutional sub-label */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-['Inter',sans-serif] font-bold text-[19px] tracking-tight ${
            isLight ? "text-[#101828]" : "text-[#0B1633]"
          }`}
        >
          Campus<span className="text-[#1677FF]">X</span>
        </span>
        <span
          className={`font-['Inter',sans-serif] font-bold text-[9px] tracking-[0.22em] uppercase mt-0.5 ${
            isLight ? "text-[#101828]/70" : "text-[#1677FF]"
          }`}
        >
          AAUB
        </span>
      </div>
    </div>
  );
}
