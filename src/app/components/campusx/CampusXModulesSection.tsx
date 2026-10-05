import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  FolderGit2,
  MessageSquare,
  Bus,
  Building2,
  Briefcase,
  QrCode,
  Clock,
  CalendarDays,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  FileText,
  Users2,
  Zap,
} from "lucide-react";

interface ModuleCard {
  id: string;
  code: string;
  title: string;
  category: string;
  icon: any;
  color: string;
  bg: string;
  tag: string;
  summary: string;
  features: string[];
  metrics: { label: string; value: string };
}

const modules: ModuleCard[] = [
  {
    id: "academic",
    code: "M1",
    title: "Academic Core",
    category: "Academics",
    icon: GraduationCap,
    color: "text-[#1677FF]",
    bg: "bg-[#EBF3FF]",
    tag: "Core Layer",
    summary: "Complete academic tracking from lecture to graduation with zero paper marksheets.",
    features: [
      "Live CT, Mid & Final Marks with running GPA",
      "Real-time attendance percentage per course",
      "Chapter-level syllabus progress & coverage",
      "Semester fee vault with digital PDF receipts",
    ],
    metrics: { label: "Performance", value: "Real-time CGPA" },
  },
  {
    id: "vault",
    code: "M2",
    title: "Learning Vault",
    category: "Resources",
    icon: FolderGit2,
    color: "text-[#8B5CF6]",
    bg: "bg-[#F3EEFF]",
    tag: "Knowledge Base",
    summary: "Centralized repository for peer-reviewed notes, previous year exams, and faculty slides.",
    features: [
      "Searchable Previous Year Questions (PYQs)",
      "Batch-filtered notes with peer upvote system",
      "Version-controlled faculty lecture slides",
      "Lab reports, submission trackers & viva banks",
    ],
    metrics: { label: "Catalog", value: "100% Courseware" },
  },
  {
    id: "comms",
    code: "M3",
    title: "Communication Hub",
    category: "Networking",
    icon: MessageSquare,
    color: "text-[#0EA5E9]",
    bg: "bg-[#E0F2FE]",
    tag: "Zero WhatsApp Chaos",
    summary: "Official institutional messaging channels with role-based moderation and archived notices.",
    features: [
      "Official University Broadcast & Notice Board",
      "Auto-generated batch & department groups",
      "One-way faculty announcement broadcast channels",
      "Direct encrypted messaging between peers",
    ],
    metrics: { label: "Broadcast", value: "Verified Notices" },
  },
  {
    id: "services",
    code: "M4",
    title: "Campus Life & Services",
    category: "Logistics",
    icon: Bus,
    color: "text-[#16A66A]",
    bg: "bg-[#EAF8F1]",
    tag: "Real-time Telemetry",
    summary: "Digital infrastructure for transportation, campus facilities, and rapid emergency response.",
    features: [
      "Crowdsourced live GPS campus bus tracker",
      "One-tap Emergency SOS to campus medical & security",
      "Daily canteen menu & meal schedules",
      "Library book reservation & due-date alerts",
    ],
    metrics: { label: "Transit", value: "Live GPS Telemetry" },
  },
  {
    id: "hall",
    code: "M5",
    title: "Hall & Mess Management",
    category: "Residential",
    icon: Building2,
    color: "text-[#F97316]",
    bg: "bg-[#FFF4EB]",
    tag: "Transparent Living",
    summary: "Replaces manual paper registers with automated mess billing and daily meal tracking.",
    features: [
      "Daily resident meal receipt & QR confirmation",
      "Automated monthly mess bill calculator",
      "Room-wise resident directory for administration",
      "Digital hall fee payment history & status",
    ],
    metrics: { label: "Registers", value: "Zero Paper Records" },
  },
  {
    id: "careers",
    code: "M7 & M8",
    title: "Career & Alumni Network",
    category: "Opportunities",
    icon: Briefcase,
    color: "text-[#D946EF]",
    bg: "bg-[#FDF2F8]",
    tag: "Lifelong Pipeline",
    summary: "Direct industry pipeline connecting aerospace undergraduates with alumni mentors and recruiters.",
    features: [
      "Verified aerospace jobs & internship board",
      "1-on-1 alumni mentorship request & booking",
      "Searchable alumni directory by batch & company",
      "National & international scholarship tracker",
    ],
    metrics: { label: "Placement", value: "Direct Referrals" },
  },
];

const rdHighlights = [
  {
    icon: QrCode,
    title: "Digital Student E-ID",
    desc: "QR-based digital identification replacing lost plastic cards.",
  },
  {
    icon: Clock,
    title: "Faculty Office Hours",
    desc: "Book direct 1-on-1 consultation slots without hallway queues.",
  },
  {
    icon: CalendarDays,
    title: "Dynamic Class Timetable",
    desc: "Visual weekly timetable tailored per batch, section, and lab.",
  },
];

export function CampusXModulesSection() {
  const [selectedModule, setSelectedModule] = useState(modules[0].id);

  return (
    <section id="modules" className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 scroll-mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
      >
        <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[30px] sm:text-[38px] lg:text-[44px] tracking-tight leading-[1.08]">
          Unified University Intelligence
        </h2>
        <p className="font-['Inter',sans-serif] text-[#64748B] text-[15px] sm:text-[17px] mt-3 leading-relaxed">
          Six interconnected platform modules engineered to eliminate fragmented student tools and centralize university operations.
        </p>
      </motion.div>

      {/* 6 Core Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {modules.map((mod, idx) => {
          const Icon = mod.icon;
          const isSelected = selectedModule === mod.id;

          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              onClick={() => setSelectedModule(mod.id)}
              className={`rounded-3xl p-6 sm:p-7 border cursor-pointer flex flex-col justify-between transition-colors duration-200 ${
                isSelected
                  ? "bg-white border-[#1677FF]/40 shadow-[0_12px_32px_rgba(22,119,255,0.08)] ring-1 ring-[#1677FF]/20"
                  : "bg-white/80 hover:bg-white border-[#E2E8F0] hover:border-[#CBD5E1] shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
              }`}
            >
              <div>
                {/* Top Badge & Code */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-11 h-11 rounded-2xl ${mod.bg} ${mod.color} flex items-center justify-center shrink-0 shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                        {mod.category}
                      </span>
                      <span className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[14px]">
                        {mod.code}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-[#1677FF] bg-[#1677FF]/10 px-2.5 py-1 rounded-full">
                    {mod.tag}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[20px] mb-2">
                  {mod.title}
                </h3>
                <p className="text-[13.5px] text-[#475467] leading-relaxed mb-5">
                  {mod.summary}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 pt-4 border-t border-black/[0.04]">
                  {mod.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-[12.5px] text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric Pill */}
              <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-between text-xs">
                <span className="text-[#64748B]">{mod.metrics.label}</span>
                <span className="font-bold text-[#0B1633] flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#1677FF]" />
                  {mod.metrics.value}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* R&D Feature Additions Strip */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-[0_4px_24px_rgba(15,23,42,0.03)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-black/[0.05]">
          <div>
            <h4 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[18px]">
              Next-Gen Campus Enhancements
            </h4>
            <p className="text-[13px] text-[#64748B]">
              NeoSparkX laboratory additions designed specifically for high-mobility university life.
            </p>
          </div>
          <div className="flex items-center gap-1 text-[12px] font-semibold text-[#1677FF] bg-[#1677FF]/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Built for Daily Flow</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {rdHighlights.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-4 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] flex items-start gap-3.5 transition-colors hover:bg-white hover:border-black/[0.08] hover:shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-[#1677FF] border border-black/[0.06] flex items-center justify-center shrink-0 shadow-xs">
                  <ItemIcon className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[14px] leading-tight mb-1">
                    {item.title}
                  </h5>
                  <p className="text-[12px] text-[#475467] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
