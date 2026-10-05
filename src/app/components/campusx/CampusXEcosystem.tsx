import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  MessageSquare,
  Bus,
  Home,
  Users,
  Briefcase,
  Compass,
  Network,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { CampusXLogo } from "./CampusXLogo";

export function CampusXEcosystem() {
  const [selectedNode, setSelectedNode] = useState<string>("academics");

  const nodes = [
    {
      id: "academics",
      label: "Academics",
      category: "Core Engine",
      icon: BookOpen,
      color: "#1677FF",
      bg: "bg-[#EBF3FF]",
      border: "border-[#1677FF]/20",
      description:
        "Centralized curriculum tracking, credit records, semester exam registrations, and transparent grading metrics.",
      stats: ["4 Faculties", "12 Degree Programs", "98.4% On-time Schedule"],
      highlights: [
        "Real-time gradebook sync",
        "Automated prerequisite clearance",
        "Digital syllabus repository",
      ],
    },
    {
      id: "communication",
      label: "Communication",
      category: "Messaging",
      icon: MessageSquare,
      color: "#8B5CF6",
      bg: "bg-[#F3EEFF]",
      border: "border-[#8B5CF6]/20",
      description:
        "Official university dispatch system broadcasting emergency announcements, department circulars, and course updates.",
      stats: ["Zero Email Spills", "100% Student Reach", "Instant Push Notices"],
      highlights: [
        "Priority alert levels (Critical, Academic, General)",
        "Verified faculty dispatch channels",
        "SMS backup for urgent notices",
      ],
    },
    {
      id: "services",
      label: "Campus Services",
      category: "Operations",
      icon: Bus,
      color: "#16A66A",
      bg: "bg-[#EAF8F1]",
      border: "border-[#16A66A]/20",
      description:
        "Live transit tracking for Rangpur-Lalmonirhat routes, digital entry credentials, library reservations, and cafeteria tokens.",
      stats: ["8 Bus Routes", "Real-time GPS", "Contactless Turnstiles"],
      highlights: [
        "Live bus ETA & delay warnings",
        "Campus digital pass generation",
        "Cafeteria meal slot booking",
      ],
    },
    {
      id: "hall",
      label: "Hall Management",
      category: "Residential",
      icon: Home,
      color: "#EA580C",
      bg: "bg-[#FFF2EA]",
      border: "border-[#EA580C]/20",
      description:
        "Complete residential hall operations for dining fee dues, seat allocations, guest logbooks, and maintenance requests.",
      stats: ["2 Residential Halls", "Automated Feast Tokens", "Smart Room Passes"],
      highlights: [
        "Instant dining token toggle",
        "Hall gate curfew logs",
        "Rapid room maintenance ticketing",
      ],
    },
    {
      id: "clubs",
      label: "Clubs & Events",
      category: "Community",
      icon: Users,
      color: "#E94B8A",
      bg: "bg-[#FDF0F5]",
      border: "border-[#E94B8A]/20",
      description:
        "Central hub for AAUB Avionics Club, Rover Team, cultural festivals, sports meets, and national aerospace hackathons.",
      stats: ["20+ Registered Clubs", "Annual Tech Fest", "Online Registration"],
      highlights: [
        "Single-click event signups",
        "Club executive member election portal",
        "Certificate verification system",
      ],
    },
    {
      id: "careers",
      label: "Careers & Internships",
      category: "Placement",
      icon: Briefcase,
      color: "#9A5B28",
      bg: "bg-[#FAF1E8]",
      border: "border-[#9A5B28]/20",
      description:
        "Direct recruitment pipeline connecting AAUB undergraduates with Civil Aviation, national airlines, defense research, and aerospace firms.",
      stats: ["45+ Partner Companies", "92% Placement Rate", "Verified Industry Mentors"],
      highlights: [
        "Aviation-tailored CV builder",
        "Direct referral from alumni",
        "Apprenticeship credit validation",
      ],
    },
    {
      id: "research",
      label: "Aerospace Research",
      category: "Innovation",
      icon: Compass,
      color: "#0891B2",
      bg: "bg-[#E6F7FA]",
      border: "border-[#0891B2]/20",
      description:
        "Collaborative project spaces for UAV aerodynamics, small-satellite telemetry, avionics flight computer software, and rocketry.",
      stats: ["3 Dedicated Labs", "18 Ongoing Papers", "Govt. Research Grants"],
      highlights: [
        "Telemetry dataset sharing",
        "Co-author collaboration workspace",
        "Lab equipment slot scheduling",
      ],
    },
    {
      id: "alumni",
      label: "Alumni Network",
      category: "Network",
      icon: Network,
      color: "#665CFF",
      bg: "bg-[#EEEDFC]",
      border: "border-[#665CFF]/20",
      description:
        "Global directory of AAUB graduates serving in civil aviation, commercial airlines, satellite communications, and academic institutions worldwide.",
      stats: ["12 Global Chapters", "1-on-1 Mentorship", "Annual Homecoming"],
      highlights: [
        "Alumni coffee chat matchmaking",
        "Endowment scholarship grants",
        "Aerospace industry referral network",
      ],
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section id="ecosystem" className="py-16 sm:py-24 bg-[#F4F8FC] relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B163308_1px,transparent_1px),linear-gradient(to_bottom,#0B163308_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-[12px] font-semibold tracking-wide uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Unified Campus Network</span>
          </div>
          <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[32px] sm:text-[44px] lg:text-[48px] tracking-tight leading-[1.05]">
            Everything connected.
          </h2>
          <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] sm:text-[17px] mt-3 leading-relaxed">
            CampusX links every physical facility and academic department at AAUB into one continuous, synchronized digital ecosystem.
          </p>
        </div>

        {/* =========================================================================
            INTERACTIVE ECOSYSTEM HUB & SATELLITE TILES
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left / Grid of Ecosystem Satellite Nodes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;

              return (
                <motion.div
                  key={node.id}
                  whileHover={{ y: -3 }}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-white shadow-[0_12px_36px_rgba(22,119,255,0.14)] ring-2 ring-[#1677FF] border-transparent"
                      : "bg-white/70 hover:bg-white border border-white/80 hover:shadow-[0_8px_24px_rgba(16,24,40,0.06)]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${node.bg} flex items-center justify-center shrink-0 shadow-xs`}
                        style={{ color: node.color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[15px] leading-tight">
                          {node.label}
                        </h4>
                        <span className="text-[11px] font-medium text-[#667085]">
                          {node.category}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#1677FF] text-white"
                          : "bg-black/[0.04] text-[#667085]"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <p className="font-['Inter',sans-serif] text-[#475467] text-[12.5px] leading-relaxed mt-3 line-clamp-2">
                    {node.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right / Interactive Center Core & Active Node Deep-Dive Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNodeData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-white/90 shadow-[0_16px_48px_rgba(11,22,51,0.08)] flex-1 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background soft glow matching node accent color */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-15 blur-2xl pointer-events-none"
                  style={{ backgroundColor: activeNodeData.color }}
                />

                {/* Top Badge & Title */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl ${activeNodeData.bg} flex items-center justify-center`}
                        style={{ color: activeNodeData.color }}
                      >
                        <activeNodeData.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                          {activeNodeData.category} System
                        </span>
                        <h3 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[22px]">
                          {activeNodeData.label}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                      Live & Synced
                    </span>
                  </div>

                  <p className="font-['Inter',sans-serif] text-[#475467] text-[14.5px] leading-relaxed mb-6">
                    {activeNodeData.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#0B1633]">
                      Integrated Capabilities
                    </span>
                    {activeNodeData.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[13.5px] text-[#101828]">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: activeNodeData.color }}
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3 Metric Pills */}
                <div className="pt-4 border-t border-black/[0.06] mt-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {activeNodeData.stats.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#F4F8FC] border border-black/[0.04]"
                      >
                        <span className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[12px] block">
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
