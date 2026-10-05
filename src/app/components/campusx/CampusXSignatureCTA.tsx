import { ArrowUpRight, ShieldCheck, Compass } from "lucide-react";

interface CampusXSignatureCTAProps {
  onEnterCampusX: () => void;
  onExploreFeatures: () => void;
}

export function CampusXSignatureCTA({
  onEnterCampusX,
  onExploreFeatures,
}: CampusXSignatureCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#0B1633] text-white relative overflow-hidden">
      {/* Subtle atmospheric blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1677FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        <div className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 lg:p-20 text-center max-w-4xl mx-auto shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">

          {/* Headline */}
          <h2 className="font-['Inter',sans-serif] font-black text-white text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-tight">
            Your campus is already connected. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
              Now connect to it.
            </span>
          </h2>

          <p className="font-['Inter',sans-serif] text-white/70 text-[16px] sm:text-[18px] max-w-2xl mx-auto mt-5 leading-relaxed">
            Join thousands of AAUB students, faculty members, and researchers on the unified platform designed specifically for our aerospace campus.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10">
            <button
              onClick={onEnterCampusX}
              className="bg-[#1677FF] hover:bg-[#0958d9] text-white font-['Inter',sans-serif] font-semibold text-[15px] px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(22,119,255,0.4)] transition-all duration-200 cursor-pointer flex items-center gap-2 group"
            >
              <span>Enter CampusX</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onExploreFeatures}
              className="bg-white/10 hover:bg-white/15 text-white font-['Inter',sans-serif] font-semibold text-[15px] px-8 py-4 rounded-full border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Features</span>
            </button>
          </div>

          {/* Security & Affiliation Guarantee */}
          <div className="pt-10 mt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Institutional Single Sign-On</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div>Zero Third-Party Data Sharing</div>
            <span className="hidden sm:inline">•</span>
            <div>Aviation and Aerospace University Bangladesh</div>
          </div>
        </div>
      </div>
    </section>
  );
}
