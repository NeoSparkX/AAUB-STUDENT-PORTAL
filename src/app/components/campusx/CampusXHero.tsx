import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Bus,
  GraduationCap,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import imgAaubSeal from "@/assets/41f88c4974abfcca8d71231b0413ad2fc852764c.png";
import imgPanoramicBg from "@/assets/campusx-panoramic-bg.jpg";
import { CampusXFeatureDock } from "./CampusXFeatureDock";

interface CampusXHeroProps {
  isSignedIn?: boolean;
  onGetStarted?: () => void;
  onGoToDashboard?: () => void;
  onSelectFeature?: (featureId: string) => void;
}

export function CampusXHero({
  isSignedIn = false,
  onGetStarted,
  onGoToDashboard,
  onSelectFeature,
}: CampusXHeroProps) {

  // 4 circular student portraits for social proof
  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  ];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pt-[95px] sm:pt-[105px] pb-6 sm:pb-8 flex flex-col justify-between"
      style={{ minHeight: "840px" }}
    >
      {/* =========================================================================
          BACKGROUND LAYER: Full Panoramic AAUB Campus Landscape (Image 2)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* The Panoramic Campus Scene */}
        <img
          src={imgPanoramicBg}
          alt="Aviation and Aerospace University Bangladesh (AAUB) Campus"
          className="w-full h-full object-cover object-[center_36%]"
        />

        {/* High-visibility atmospheric gradient on left ensuring text is 100% crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-45% to-transparent w-full lg:w-[64%]" />
        <div className="absolute -left-10 top-10 w-[580px] h-[520px] bg-white/80 rounded-full blur-3xl pointer-events-none" />

        {/* Soft top gradient */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* =========================================================================
          HERO MAIN CONTENT & 4 FLOATING GLASS CARDS
          ========================================================================= */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 w-full flex-1 flex flex-col justify-between">
        {/* Top/Mid Hero Stage */}
        <div className="relative min-h-[460px] sm:min-h-[500px] flex items-center mt-2 sm:mt-4">
          {/* -------------------------------------------------------------------
              LEFT COLUMN: Institutional Identity, Typography, CTAs, Trust Proof
              ------------------------------------------------------------------- */}
          <div className="max-w-xl py-2 z-20">
            {/* Small Institutional Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-white/95 shadow-xs mb-3 sm:mb-4 transition-all cursor-default"
            >
              <img
                src={imgAaubSeal}
                alt="AAUB Official Crest"
                className="w-4 h-4 object-contain rounded-full shadow-xs"
              />
              <span className="font-['Inter',sans-serif] text-[12px] sm:text-[12.5px] font-medium text-[#1E293B]">
                Aviation and Aerospace University Bangladesh
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
            </motion.div>

            {/* Display Headings (Exact Typographic Weight & Hierarchy of Image 2) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="font-['Inter',sans-serif] font-black text-[#0F172A] text-[52px] sm:text-[68px] md:text-[76px] lg:text-[86px] leading-[0.92] tracking-[-0.035em]">
                AAUB <br />
                <span>
                  Campus<span className="text-[#1677FF]">X</span>
                </span>
              </h1>

              {/* Sub-tagline */}
              <p className="font-['Manrope',sans-serif] font-bold text-[#0F172A] text-[19px] sm:text-[22px] lg:text-[24px] tracking-tight mt-3">
                One platform. Unified Everything.
              </p>

              {/* Description - High contrast, perfectly legible text */}
              <p className="font-['Inter',sans-serif] font-medium text-[#1E293B] text-[15px] sm:text-[16px] leading-[1.65] max-w-[500px] mt-3">
                Academics, communication, campus services, hall management, career
                opportunities, alumni networking and everything you need at AAUB in
                one intelligent platform.
              </p>
            </motion.div>

            {/* Action Button & Trust Proof in place of Watch Overview */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-7"
            >
              <button
                onClick={isSignedIn ? onGoToDashboard : onGetStarted}
                className="bg-[#0F172A] hover:bg-[#020617] text-white font-['Inter',sans-serif] font-semibold text-[14px] sm:text-[14.5px] px-6 sm:px-7 py-3 rounded-full shadow-[0_6px_20px_rgba(15,23,42,0.2)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.3)] transition-all duration-200 cursor-pointer flex items-center gap-2 group"
              >
                <span>{isSignedIn ? "Go to Dashboard" : "Get Started"}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* 3K+ Students Social Proof moved into place of Watch Overview */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  {studentAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="AAUB Student"
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover shadow-xs"
                    />
                  ))}
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#334155] whitespace-nowrap">
                  <strong className="text-[#0F172A] font-bold">3K+</strong> students already connected
                </span>
              </div>
            </motion.div>
          </div>

          {/* -------------------------------------------------------------------
              FLOATING GLASS CARDS (Exact Positions & Icons from Image 2)
              ------------------------------------------------------------------- */}
          {/* CARD 1: Class Schedule (Top Center-Left, above left roofline) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              scale: { duration: 0.6, delay: 0.2 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            className="hidden md:flex absolute top-[6%] lg:top-[8%] left-[44%] lg:left-[43%] z-30"
          >
            <div className="bg-white/80 hover:bg-white/95 backdrop-blur-2xl -webkit-backdrop-blur-2xl border border-white/90 shadow-[0_12px_36px_rgba(15,23,42,0.08)] rounded-[18px] px-3.5 py-2.5 flex items-center gap-3 cursor-pointer transition-all duration-200">
              <div className="w-8 h-8 rounded-xl bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center shrink-0 shadow-xs">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <div className="flex items-center gap-1">
                  <span className="font-['Inter',sans-serif] font-bold text-[#0F172A] text-[12.5px]">
                    Class Schedule
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
                </div>
                <span className="font-['Inter',sans-serif] text-[#64748B] text-[10.5px]">
                  Next class in 2 hours
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Campus Bus (Mid-Left, hovering over tree line) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -15 }}
            animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              scale: { duration: 0.6, delay: 0.3 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            className="hidden md:flex absolute top-[42%] lg:top-[44%] left-[39%] lg:left-[39%] z-30"
          >
            <div className="bg-white/80 hover:bg-white/95 backdrop-blur-2xl -webkit-backdrop-blur-2xl border border-white/90 shadow-[0_12px_36px_rgba(15,23,42,0.08)] rounded-[18px] px-3.5 py-2.5 flex items-center gap-3 cursor-pointer transition-all duration-200">
              <div className="w-8 h-8 rounded-xl bg-[#EAF8F1] text-[#16A66A] flex items-center justify-center shrink-0 shadow-xs">
                <Bus className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left pr-2">
                <span className="font-['Inter',sans-serif] font-bold text-[#0F172A] text-[12.5px]">
                  Campus Bus
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-['Inter',sans-serif] text-[#64748B] text-[10.5px]">
                    Live Tracking
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981] animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Academic Progress (Upper Right in the Sky) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              scale: { duration: 0.6, delay: 0.4 },
              y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            className="hidden md:flex absolute top-[8%] lg:top-[10%] right-[3%] lg:right-[4%] z-30"
          >
            <div className="bg-white/80 hover:bg-white/95 backdrop-blur-2xl -webkit-backdrop-blur-2xl border border-white/90 shadow-[0_12px_36px_rgba(15,23,42,0.08)] rounded-[18px] px-3.5 py-2.5 flex items-center gap-3 cursor-pointer transition-all duration-200">
              <div className="w-8 h-8 rounded-xl bg-[#1677FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <div className="flex items-center gap-1">
                  <span className="font-['Inter',sans-serif] font-bold text-[#0F172A] text-[12.5px]">
                    Academic Progress
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
                </div>
                <span className="font-['Inter',sans-serif] font-semibold text-[#1677FF] text-[11px] mt-0.5">
                  CGPA 3.72
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Upcoming Event (Mid Right, below Card 3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 15 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              scale: { duration: 0.6, delay: 0.5 },
              y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
            }}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            className="hidden md:flex absolute top-[32%] lg:top-[34%] right-[3%] lg:right-[4%] z-30"
          >
            <div className="bg-white/80 hover:bg-white/95 backdrop-blur-2xl -webkit-backdrop-blur-2xl border border-white/90 shadow-[0_12px_36px_rgba(15,23,42,0.08)] rounded-[18px] px-3.5 py-2.5 flex items-center gap-3 cursor-pointer transition-all duration-200">
              <div className="w-8 h-8 rounded-xl bg-[#FDF0F5] text-[#E94B8A] flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left pr-1">
                <div className="flex items-center gap-1">
                  <span className="font-['Inter',sans-serif] font-bold text-[#0F172A] text-[12.5px]">
                    Upcoming Event
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[#0F172A] text-[11px] mt-0.5">
                  Avionics Day 2026
                </span>
                <span className="font-['Inter',sans-serif] text-[#64748B] text-[10px]">
                  03 Oct, 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* -------------------------------------------------------------------
            BOTTOM FLOATING DOCK: "Everything You Need. In One Place."
            ------------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="mt-4 sm:mt-6 w-full z-20"
        >
          <CampusXFeatureDock
            onSelectFeature={onSelectFeature}
            onExploreAll={() => {
              const el = document.getElementById("faculties");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
