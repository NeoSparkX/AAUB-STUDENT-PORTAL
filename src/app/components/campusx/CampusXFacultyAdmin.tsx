import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Building,
  Users2,
  CheckCircle2,
  BarChart3,
  FileCheck,
  Send,
  Bus,
  Calendar,
  Sparkles,
} from "lucide-react";

export function CampusXFacultyAdmin() {
  const [activeRole, setActiveRole] = useState<"faculty" | "admin" | "clubs">("faculty");

  const roles = [
    {
      id: "faculty",
      label: "For Faculty",
      tagline: "Academic Precision & Teaching Flow",
      icon: GraduationCap,
      description:
        "Effortless grading, biometric attendance synchronization, lab scheduling, and direct circular dispatch to registered batches.",
      features: [
        {
          title: "Single-Click Attendance",
          desc: "Automated aggregation via classroom card readers or quick manual override.",
          icon: CheckCircle2,
        },
        {
          title: "Continuous Assessment Marks",
          desc: "Transparent grade curve calculator with automated student portal sync.",
          icon: BarChart3,
        },
        {
          title: "Instant Routine Changes",
          desc: "Reschedule class slots with automated room collision detection.",
          icon: Calendar,
        },
      ],
      previewStats: [
        { label: "Grade Submissions", value: "100% Digital" },
        { label: "Syllabus Compliance", value: "98.7%" },
        { label: "Student Feedback", value: "4.8 / 5.0" },
      ],
    },
    {
      id: "admin",
      label: "For Administration",
      tagline: "Campus Logistics & Operational Telemetry",
      icon: Building,
      description:
        "High-level institutional telemetry overseeing transport routes, residential hall occupancy, semester fee reconciliation, and verified student registries.",
      features: [
        {
          title: "Transport Fleet Tracking",
          desc: "Monitor all 8 inter-district campus buses, fuel logs, and driver rosters.",
          icon: Bus,
        },
        {
          title: "Hall & Dining Management",
          desc: "Real-time meal consumption forecasts preventing cafeteria wastage.",
          icon: FileCheck,
        },
        {
          title: "University-Wide Circulars",
          desc: "Deploy signed administrative orders with read-receipt confirmations.",
          icon: Send,
        },
      ],
      previewStats: [
        { label: "Daily Bus Passengers", value: "1.8K+" },
        { label: "Hall Occupancy", value: "94%" },
        { label: "Tuition Clearances", value: "Automated" },
      ],
    },
    {
      id: "clubs",
      label: "For Clubs & Societies",
      tagline: "Student Leadership & Event Orchestration",
      icon: Users2,
      description:
        "Manage executive committees, publish event registration forms, issue digitally verifiable participation certificates, and book campus venues.",
      features: [
        {
          title: "Paperless Event Approvals",
          desc: "Submit proposals directly to the Directorate of Student Affairs.",
          icon: FileCheck,
        },
        {
          title: "Participant Registrations",
          desc: "QR-code ticket validation at the entrance of auditorium & grounds.",
          icon: CheckCircle2,
        },
        {
          title: "Verifiable Certifications",
          desc: "Cryptographically signed e-certificates for competition winners.",
          icon: Sparkles,
        },
      ],
      previewStats: [
        { label: "Active Societies", value: "20+" },
        { label: "Annual Events", value: "65+" },
        { label: "Student Engagement", value: "85%" },
      ],
    },
  ];

  const currentRole = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <section id="faculty" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-[12px] font-semibold tracking-wide uppercase mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Institutional Governance</span>
          </div>
          <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[32px] sm:text-[44px] lg:text-[48px] tracking-tight leading-[1.05]">
            Built for the people who run the campus.
          </h2>
          <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] sm:text-[17px] mt-3 leading-relaxed">
            CampusX gives department heads, faculty members, logistics coordinators, and club executives the precision tools needed to govern seamlessly.
          </p>

          {/* Role Pill Switcher */}
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#F4F8FC] border border-[#D9E2EC] rounded-full mt-6 shadow-xs">
            {roles.map((r) => {
              const Icon = r.icon;
              const isSelected = activeRole === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setActiveRole(r.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#0B1633] text-white shadow-xs"
                      : "text-[#475467] hover:text-[#0B1633]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{r.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Role Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRole.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F4F8FC] rounded-3xl p-6 sm:p-10 border border-[#D9E2EC] shadow-[0_16px_48px_rgba(11,22,51,0.06)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Context & Core Features */}
              <div className="lg:col-span-7">
                <span className="text-[12px] font-bold text-[#1677FF] uppercase tracking-wider block mb-1">
                  {currentRole.tagline}
                </span>
                <h3 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[24px] sm:text-[28px] mb-4">
                  Streamlined workflows for {currentRole.label.toLowerCase()}.
                </h3>
                <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] leading-relaxed mb-8">
                  {currentRole.description}
                </p>

                <div className="space-y-4">
                  {currentRole.features.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white border border-black/[0.05] shadow-xs flex items-start gap-3.5"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0B1633] text-[14.5px]">
                            {feat.title}
                          </h4>
                          <p className="text-[12.5px] text-[#667085] mt-0.5">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Key Statistics Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[0_10px_30px_rgba(16,24,40,0.06)]">
                  <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
                    <span className="font-bold text-[#0B1633] text-[15px]">
                      Operational Efficiency
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                      Verified
                    </span>
                  </div>

                  <div className="space-y-4">
                    {currentRole.previewStats.map((st, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-[#F4F8FC] border border-black/[0.03] flex items-center justify-between"
                      >
                        <span className="font-medium text-[#475467] text-[13.5px]">
                          {st.label}
                        </span>
                        <span className="font-black text-[#0B1633] text-[18px]">
                          {st.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.06] text-center">
                    <span className="text-[12px] text-[#667085]">
                      Role-based access controlled via institutional AAUB credentials.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
