import {
  TrendingUp,
  Award,
  Bell,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Calendar,
  Sparkles,
} from "lucide-react";

export function CampusXAcademicIntel() {
  const notifications = [
    {
      time: "10:32 AM Today",
      sender: "Department of Avionics",
      badge: "Classroom Shift",
      badgeColor: "bg-[#1677FF]/10 text-[#1677FF] border-[#1677FF]/20",
      title: "Digital Electronics & Logic Lab Relocated",
      desc: "Today's 10:30 AM lab will be conducted in Computer Lab 204 (Academic Complex) for hardware synthesis simulation.",
    },
    {
      time: "09:14 AM Today",
      sender: "Campus Transit Dispatch",
      badge: "Transit Update",
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      title: "Bus Route 02 (Rangpur) Running on Schedule",
      desc: "All campus shuttle buses on the Lalmonirhat-Rangpur highway are tracking with standard traffic intervals.",
    },
    {
      time: "Yesterday",
      sender: "AAUB Avionics Club",
      badge: "Club Registration",
      badgeColor: "bg-[#E94B8A]/10 text-[#E94B8A] border-[#E94B8A]/20",
      title: "Registrations Open: National Cansat Competition 2026",
      desc: "Join the official AAUB team competing in atmospheric sensor telemetry design. Orientation this Thursday.",
    },
    {
      time: "02 Oct, 2026",
      sender: "Controller of Examinations",
      badge: "Academic Circular",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      title: "Fall Semester Mid-Term Examination Routine Published",
      desc: "Students are advised to verify course codes and room allocations. Admit cards will be active in CampusX.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F4F8FC] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* =========================================================================
              LEFT (6 Cols): Academic Intelligence ("See your academic life clearly.")
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-[12px] font-semibold tracking-wide uppercase mb-3">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Academic Analytics</span>
              </div>
              <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[30px] sm:text-[40px] tracking-tight leading-[1.1] mb-3">
                See your academic life clearly.
              </h2>
              <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] leading-relaxed mb-8">
                Calm, distraction-free performance summaries give students and faculty real clarity on semester credits, milestones, and grading trajectories.
              </p>
            </div>

            {/* Academic Intelligence Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[0_16px_48px_rgba(11,22,51,0.06)]">
              {/* CGPA Trajectory Block */}
              <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
                <div>
                  <span className="text-[12px] text-[#667085] uppercase tracking-wider font-bold">
                    Cumulative Grade Point Average
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-black text-[#0B1633] text-[36px] sm:text-[42px] leading-none">
                      3.72
                    </span>
                    <span className="text-[13px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +0.18 this term
                    </span>
                  </div>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center">
                  <Award className="w-7 h-7" />
                </div>
              </div>

              {/* Semester Breakdown Bars */}
              <div className="py-6 border-b border-black/[0.06] space-y-4">
                <span className="text-[12px] font-bold text-[#0B1633] uppercase tracking-wider block">
                  Semester GPA Progression
                </span>
                <div className="grid grid-cols-5 gap-2 items-end h-28 pt-2">
                  {[
                    { sem: "Sem 1", gpa: "3.45", h: "60%" },
                    { sem: "Sem 2", gpa: "3.54", h: "68%" },
                    { sem: "Sem 3", gpa: "3.62", h: "78%" },
                    { sem: "Sem 4", gpa: "3.68", h: "84%" },
                    { sem: "Sem 5", gpa: "3.72", h: "90%", current: true },
                  ].map((s, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1.5 h-full justify-end">
                      <span className="text-[11px] font-bold text-[#0B1633]">{s.gpa}</span>
                      <div className="w-full bg-[#EBF3FF] rounded-t-lg relative overflow-hidden" style={{ height: s.h }}>
                        <div
                          className={`w-full h-full rounded-t-lg ${
                            s.current ? "bg-[#1677FF]" : "bg-[#1677FF]/60"
                          }`}
                        />
                      </div>
                      <span className="text-[10px] text-[#667085] font-medium">{s.sem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Completed Credits Meter */}
              <div className="pt-6 flex items-center justify-between">
                <div>
                  <span className="text-[11.5px] text-[#667085] uppercase tracking-wider font-bold">
                    Degree Completion Progress
                  </span>
                  <div className="font-bold text-[#0B1633] text-[15px] mt-0.5">
                    84 of 160 Credits Cleared (52.5%)
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1677FF]/10 text-[#1677FF]">
                  On Track
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT (6 Cols): Communication ("Never miss what matters.")
              ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-[12px] font-semibold tracking-wide uppercase mb-3">
                <Bell className="w-3.5 h-3.5" />
                <span>Unified Circular Dispatch</span>
              </div>
              <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[30px] sm:text-[40px] tracking-tight leading-[1.1] mb-3">
                Never miss what matters.
              </h2>
              <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] leading-relaxed mb-8">
                Eliminate scattered messaging apps. Official notices from faculty, transport updates, and student activity bulletins are centralized here.
              </p>
            </div>

            {/* Notification Stream Feed (Section 35) */}
            <div className="space-y-3.5">
              {notifications.map((n, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-white/80 shadow-[0_4px_16px_rgba(16,24,40,0.04)] hover:shadow-[0_8px_24px_rgba(16,24,40,0.07)] transition-all"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-black/[0.04] mb-2">
                    <span className="text-[11.5px] font-bold text-[#0B1633]">{n.sender}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${n.badgeColor}`}>
                        {n.badge}
                      </span>
                      <span className="text-[11px] text-[#667085]">{n.time}</span>
                    </div>
                  </div>

                  <h4 className="font-bold text-[#0B1633] text-[14px]">{n.title}</h4>
                  <p className="text-[12.5px] text-[#475467] leading-relaxed mt-1">{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
