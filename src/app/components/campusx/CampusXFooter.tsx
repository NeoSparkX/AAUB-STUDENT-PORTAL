import imgAaubSeal from "@/assets/41f88c4974abfcca8d71231b0413ad2fc852764c.png";
import { CampusXLogo } from "./CampusXLogo";
import { ShieldCheck, Heart, ArrowUp } from "lucide-react";

export function CampusXFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1633] text-white/80 pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* 4 Structured Columns (Section 42) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <CampusXLogo variant="light" />
            </div>
            <p className="font-['Manrope',sans-serif] font-bold text-white text-[16px] mb-2">
              One platform. Unified Everything.
            </p>
            <p className="text-[13px] text-white/60 leading-relaxed max-w-sm mb-6">
              The official digital layer of Aviation and Aerospace University Bangladesh (AAUB), integrating academic records, logistics telemetry, and campus services into an intelligent portal.
            </p>

            <div className="flex items-center gap-3">
              <img
                src={imgAaubSeal}
                alt="AAUB Official Seal"
                className="w-8 h-8 rounded-full object-contain"
              />
              <div className="text-[11px] text-white/50 leading-tight">
                <span className="text-white/80 font-bold block">
                  Aviation and Aerospace University Bangladesh
                </span>
                Permanent Campus, Lalmonirhat
              </div>
            </div>
          </div>

          {/* Col 2: Platform Links (2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-['Inter',sans-serif] font-bold text-white text-[14px] uppercase tracking-wider mb-4">
              Platform Modules
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a href="#modules" className="hover:text-white transition-colors">
                  Academic Intelligence
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-white transition-colors">
                  Student Life Dashboard
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-white transition-colors">
                  Live Campus Shuttle GPS
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-white transition-colors">
                  Contactless Digital Student ID
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-white transition-colors">
                  Faculty Grading & Attendance
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-white transition-colors">
                  Alumni Mentorship Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: University (2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-['Inter',sans-serif] font-bold text-white text-[14px] uppercase tracking-wider mb-4">
              University
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About AAUB & Mission
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-white transition-colors">
                  Faculty of Aviation & Space
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-white transition-colors">
                  Avionics Engineering
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-white transition-colors">
                  Clubs & Aerospace Societies
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  International Partnerships
                </a>
              </li>
              <li>
                <a href="https://aaub.edu.bd" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Official Institutional Portal ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Legal (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-['Inter',sans-serif] font-bold text-white text-[14px] uppercase tracking-wider mb-4">
              Support & Safety
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Campus Safety Hotline
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Medical Center Dispatch
                </a>
              </li>
              <li>
                <span className="text-white/50 cursor-pointer hover:text-white transition-colors">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-white/50 cursor-pointer hover:text-white transition-colors">
                  Terms of Access
                </span>
              </li>
              <li>
                <span className="text-white/50 cursor-pointer hover:text-white transition-colors">
                  Security Disclosures
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 Aviation and Aerospace University Bangladesh (AAUB). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
