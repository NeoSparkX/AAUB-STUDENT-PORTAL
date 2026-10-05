import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  Award,
  Shield,
  UtensilsCrossed,
  Flag,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  Target,
} from "lucide-react";

interface AboutSectionProps {
  onViewDetails?: () => void;
}

const roles = [
  {
    role: "Student",
    icon: GraduationCap,
    color: "text-[#1677FF]",
    bg: "bg-[#EBF3FF]",
    scope: "Academic tracking, PYQ vault, live bus GPS, hall meals & community events.",
  },
  {
    role: "Faculty",
    icon: School,
    color: "text-[#8B5CF6]",
    bg: "bg-[#F3EEFF]",
    scope: "Continuous assessment input, lecture slides upload, syllabus tracking & office hours.",
  },
  {
    role: "Alumni",
    icon: Award,
    color: "text-[#0EA5E9]",
    bg: "bg-[#E0F2FE]",
    scope: "Lifelong directory access, 1-on-1 mentorship matching, and junior job postings.",
  },
  {
    role: "University Admin",
    icon: Shield,
    color: "text-[#16A66A]",
    bg: "bg-[#EAF8F1]",
    scope: "University-wide broadcasts, role approvals, module controls, and security audits.",
  },
  {
    role: "Hall Manager",
    icon: UtensilsCrossed,
    color: "text-[#F97316]",
    bg: "bg-[#FFF4EB]",
    scope: "Daily meal attendance, room-wise resident tracking, and auto mess billing.",
  },
  {
    role: "Club Admin",
    icon: Flag,
    color: "text-[#D946EF]",
    bg: "bg-[#FDF2F8]",
    scope: "Dedicated club portal, event RSVP management, member rosters, and campus polls.",
  },
];

export function AboutSection({ onViewDetails }: AboutSectionProps) {
  const [activeRole, setActiveRole] = useState(0);

  return (
    <section id="roles" className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 scroll-mt-24">
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-[0_4px_24px_rgba(15,23,42,0.03)]">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-14"
        >
          <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[30px] sm:text-[38px] lg:text-[42px] tracking-tight leading-[1.1]">
            Engineered for Every Campus Stakeholder
          </h2>
          <p className="font-['Inter',sans-serif] text-[#64748B] text-[15px] sm:text-[17px] mt-3 leading-relaxed">
            Role-based interfaces tailored precisely to how students, professors, hall managers, and alumni interact with AAUB.
          </p>
        </motion.div>

        {/* 6 User Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {roles.map((r, idx) => {
            const Icon = r.icon;
            const isCurrent = activeRole === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                onMouseEnter={() => setActiveRole(idx)}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-default ${
                  isCurrent
                    ? "bg-[#F8FAFC] border-[#1677FF]/40 shadow-[0_8px_24px_rgba(22,119,255,0.06)]"
                    : "bg-white border-black/[0.05] hover:border-black/[0.1] hover:shadow-xs"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl ${r.bg} ${r.color} flex items-center justify-center shrink-0 shadow-xs`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[16px]">
                      {r.role}
                    </h4>
                  </div>
                </div>
                <p className="text-[13px] text-[#475467] leading-relaxed">
                  {r.scope}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Institutional Mission & Vision Split Card */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-8 border-t border-black/[0.06] scroll-mt-24"
        >
          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.04] hover:bg-white hover:border-black/[0.08] hover:shadow-xs transition-colors"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <Eye className="w-4 h-4 text-[#1677FF]" />
              <h4 className="font-bold text-[#0B1633] text-[15px] uppercase tracking-wider">
                AAUB Vision
              </h4>
            </div>
            <p className="text-[13.5px] text-[#475467] leading-relaxed">
              To be a leading international university in aviation, aerospace, and emerging digital technology, delivering world-class accredited education and spearheading sovereign research.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.04] hover:bg-white hover:border-black/[0.08] hover:shadow-xs transition-colors"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <Target className="w-4 h-4 text-[#1677FF]" />
              <h4 className="font-bold text-[#0B1633] text-[15px] uppercase tracking-wider">
                AAUB Mission
              </h4>
            </div>
            <p className="text-[13.5px] text-[#475467] leading-relaxed">
              To transform students into world-class aerospace engineers, aviators, and innovators equipped with the technical excellence and sovereign leadership to drive national and global aerospace sectors.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center pt-8 mt-4"
        >
          <button
            onClick={() => window.open("https://aaub.edu.bd/content/about-us", "_blank")}
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#1677FF] hover:text-[#0958d9] transition-colors cursor-pointer group"
          >
            <span>Learn more about AAUB history, administration, and campus</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
