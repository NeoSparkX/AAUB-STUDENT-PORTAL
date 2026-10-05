import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Bus,
  CreditCard,
  Bell,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function CampusXStudentExperience() {
  const [activeTab, setActiveTab] = useState<"overview" | "academics" | "transit">("overview");

  return (
    <section id="students" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-[12px] font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Command Center</span>
          </div>
          <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[32px] sm:text-[44px] lg:text-[48px] tracking-tight leading-[1.05]">
            Your entire university life, in one place.
          </h2>
          <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] sm:text-[17px] mt-3 leading-relaxed">
            From the morning lecture hall to the evening campus shuttle, CampusX organizes your daily academic rhythm with zero cognitive friction.
          </p>
        </div>

        {/* Dashboard Frame (Section 28 & 29) */}
        <div className="bg-[#F4F8FC] border border-[#D9E2EC] rounded-[28px] sm:rounded-[32px] p-4 sm:p-7 shadow-[0_20px_50px_rgba(11,22,51,0.06)]">
          {/* Simulated Dashboard Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-black/[0.06] gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1677FF] to-[#665CFF] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                AK
              </div>
              <div>
                <h4 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[15px] leading-tight">
                  Abrar Khan
                </h4>
                <p className="text-[12px] text-[#667085]">
                  B.Sc. Avionics Engineering • ID: 2204018
                </p>
              </div>
            </div>

            {/* Quick Status Chips */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[12px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Semester 05 Active
              </span>
              <span className="px-3 py-1 rounded-full text-[12px] font-semibold bg-white border border-[#D9E2EC] text-[#0B1633]">
                CGPA 3.72
              </span>
            </div>
          </div>

          {/* 6 Realistic Dashboard Panels Grid (Section 28 & 29) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6">
            {/* Panel 1: Today's Class Schedule */}
            <div className="bg-white rounded-2xl p-5 border border-white/80 shadow-[0_4px_16px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-3">
                  <div className="flex items-center gap-2 text-[#0B1633] font-bold text-[14px]">
                    <Clock className="w-4 h-4 text-[#1677FF]" />
                    <span>Today's Classes</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#1677FF] bg-[#EBF3FF] px-2 py-0.5 rounded-full">
                    Tuesday
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#F4F8FC] border border-black/[0.03]">
                    <div className="flex items-center justify-between text-[11px] text-[#667085] mb-1">
                      <span>10:30 AM – 12:00 PM</span>
                      <span className="font-semibold text-emerald-600">Starting in 2h</span>
                    </div>
                    <div className="font-bold text-[#0B1633] text-[13.5px]">
                      Digital Electronics & Logic
                    </div>
                    <div className="text-[11.5px] text-[#667085] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> Academic Block 02, Room 204
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-black/[0.06] opacity-75">
                    <div className="flex items-center justify-between text-[11px] text-[#667085] mb-1">
                      <span>02:00 PM – 03:30 PM</span>
                      <span>Upcoming</span>
                    </div>
                    <div className="font-bold text-[#0B1633] text-[13.5px]">
                      Aerospace Materials & Structures
                    </div>
                    <div className="text-[11.5px] text-[#667085] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" /> Materials Testing Lab
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full text-center text-[12px] font-semibold text-[#1677FF] hover:underline pt-3 mt-2 border-t border-black/[0.05] cursor-pointer">
                View Full Weekly Routine →
              </button>
            </div>

            {/* Panel 2: Attendance Radar */}
            <div className="bg-white rounded-2xl p-5 border border-white/80 shadow-[0_4px_16px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-3">
                  <div className="flex items-center gap-2 text-[#0B1633] font-bold text-[14px]">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Attendance Records</span>
                  </div>
                  <span className="text-[11.5px] font-bold text-emerald-600">
                    Safe (91% Avg)
                  </span>
                </div>

                <div className="space-y-3.5 my-2">
                  <div>
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="font-medium text-[#0B1633]">Digital Electronics</span>
                      <span className="font-bold text-emerald-600">87%</span>
                    </div>
                    <div className="w-full bg-[#E5E7EB] rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "87%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="font-medium text-[#0B1633]">Aerospace Materials</span>
                      <span className="font-bold text-emerald-600">92%</span>
                    </div>
                    <div className="w-full bg-[#E5E7EB] rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "92%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="font-medium text-[#0B1633]">Microprocessor Lab</span>
                      <span className="font-bold text-emerald-600">95%</span>
                    </div>
                    <div className="w-full bg-[#E5E7EB] rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "95%" }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-[11px] text-emerald-800 flex items-center gap-1.5 mt-2">
                <CheckCircle className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                <span>All course criteria cleared for mid-term exams.</span>
              </div>
            </div>

            {/* Panel 3: Live Transit Telemetry */}
            <div className="bg-white rounded-2xl p-5 border border-white/80 shadow-[0_4px_16px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-3">
                  <div className="flex items-center gap-2 text-[#0B1633] font-bold text-[14px]">
                    <Bus className="w-4 h-4 text-[#1677FF]" />
                    <span>Campus Shuttle</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                    Live GPS
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F8FC] border border-black/[0.04]">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[11px] uppercase font-bold text-[#667085]">
                        Route 02 • Morning Express
                      </span>
                      <div className="font-bold text-[#0B1633] text-[14px]">
                        Lalmonirhat Gate → Campus
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-lg bg-[#1677FF] text-white text-[11px] font-bold">
                      Bus #04
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-black/[0.05]">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[12px] font-semibold text-[#0B1633]">
                      Arriving at Main Gate in 03 mins
                    </span>
                  </div>
                </div>

                <div className="mt-3 space-y-1.5 text-[11.5px] text-[#667085]">
                  <div className="flex justify-between">
                    <span>Driver: Md. Rafiqul Islam</span>
                    <span className="text-[#0B1633] font-medium">+880 171X-XXXXXX</span>
                  </div>
                </div>
              </div>

              <button className="w-full text-center text-[12px] font-semibold text-[#1677FF] hover:underline pt-3 mt-2 border-t border-black/[0.05] cursor-pointer">
                Open Campus Live Map →
              </button>
            </div>

            {/* Panel 4: Assignments & Deadlines */}
            <div className="bg-white rounded-2xl p-5 border border-white/80 shadow-[0_4px_16px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-3">
                  <div className="flex items-center gap-2 text-[#0B1633] font-bold text-[14px]">
                    <Calendar className="w-4 h-4 text-[#EA580C]" />
                    <span>Assignments & Quizzes</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#EA580C] bg-[#FFF2EA] px-2 py-0.5 rounded-full">
                    2 Pending
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl border border-[#EA580C]/20 bg-[#FFF9F5]">
                    <div className="flex justify-between text-[11px] text-[#EA580C] font-semibold mb-1">
                      <span>Due Tomorrow, 11:59 PM</span>
                      <span>15% Weight</span>
                    </div>
                    <div className="font-bold text-[#0B1633] text-[13px]">
                      FPGA Verilog State Machine Design
                    </div>
                    <div className="text-[11px] text-[#667085] mt-0.5">
                      Course: Digital Electronics Lab
                    </div>
                  </div>

                  <div className="p-3 rounded-xl border border-black/[0.06] bg-[#F4F8FC]">
                    <div className="flex justify-between text-[11px] text-[#667085] mb-1">
                      <span>Due 08 Oct, 2026</span>
                      <span>Assignment 03</span>
                    </div>
                    <div className="font-bold text-[#0B1633] text-[13px]">
                      Wing Aerodynamic Lift Distribution
                    </div>
                    <div className="text-[11px] text-[#667085] mt-0.5">
                      Course: Flight Mechanics
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full text-center text-[12px] font-semibold text-[#1677FF] hover:underline pt-3 mt-2 border-t border-black/[0.05] cursor-pointer">
                Submit Homework Files →
              </button>
            </div>

            {/* Panel 5: Tuition & Dining Fees */}
            <div className="bg-white rounded-2xl p-5 border border-white/80 shadow-[0_4px_16px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-3">
                  <div className="flex items-center gap-2 text-[#0B1633] font-bold text-[14px]">
                    <CreditCard className="w-4 h-4 text-[#1677FF]" />
                    <span>Fees & Smart Pay</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    No Dues
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F8FC] border border-black/[0.04] mb-3">
                  <span className="text-[11px] text-[#667085]">Hall Dining Balance</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="font-black text-[#0B1633] text-[20px]">
                      ৳ 2,450.00
                    </span>
                    <span className="text-[11px] text-emerald-600 font-semibold">
                      Valid till Oct 31
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-[12px]">
                  <div className="flex justify-between py-1 border-b border-black/[0.04]">
                    <span className="text-[#667085]">Semester Tuition</span>
                    <span className="font-semibold text-emerald-600">Paid in Full</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#667085]">Lab Caution Fee</span>
                    <span className="font-semibold text-[#0B1633]">Cleared</span>
                  </div>
                </div>
              </div>

              <button className="w-full text-center text-[12px] font-semibold text-[#1677FF] hover:underline pt-3 mt-2 border-t border-black/[0.05] cursor-pointer">
                Recharge Dining Balance →
              </button>
            </div>

            {/* Panel 6: Unified Notification Timeline */}
            <div className="bg-white rounded-2xl p-5 border border-white/80 shadow-[0_4px_16px_rgba(16,24,40,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.05] mb-3">
                  <div className="flex items-center gap-2 text-[#0B1633] font-bold text-[14px]">
                    <Bell className="w-4 h-4 text-[#8B5CF6]" />
                    <span>Real-time Alerts</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
                </div>

                <div className="space-y-3">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#1677FF] mt-1.5 shrink-0" />
                    <div>
                      <div className="text-[12px] font-bold text-[#0B1633]">
                        Dept. of Avionics Circular
                      </div>
                      <div className="text-[11px] text-[#667085] leading-snug">
                        Room changed: Digital Electronics shifted to Lab 204.
                      </div>
                      <div className="text-[10px] text-[#667085]/80 mt-0.5">10:32 AM Today</div>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <div>
                      <div className="text-[12px] font-bold text-[#0B1633]">
                        Transport Dispatch
                      </div>
                      <div className="text-[11px] text-[#667085] leading-snug">
                        Extra evening return shuttle added for 5:30 PM.
                      </div>
                      <div className="text-[10px] text-[#667085]/80 mt-0.5">09:14 AM Today</div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full text-center text-[12px] font-semibold text-[#1677FF] hover:underline pt-3 mt-2 border-t border-black/[0.05] cursor-pointer">
                View All Notices Archive →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
