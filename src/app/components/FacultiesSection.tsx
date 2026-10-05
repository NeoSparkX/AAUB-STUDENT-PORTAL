import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Plane, Satellite, Cpu, ArrowUpRight, BookOpen } from "lucide-react";

interface FacultyCard {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  departments: number;
  programs: string[];
}

const faculties: FacultyCard[] = [
  {
    id: "space",
    title: "Space Science & Applications",
    subtitle: "Faculty of Space Science, Engineering and Applications",
    icon: Rocket,
    iconBg: "bg-[#EBF3FF]",
    iconColor: "text-[#1677FF]",
    departments: 2,
    programs: ["B.Sc. in Space Science", "M.Sc. in Satellite Engineering"],
  },
  {
    id: "aviation",
    title: "Aviation Engineering",
    subtitle: "Faculty of Aviation Engineering and Technology",
    icon: Plane,
    iconBg: "bg-[#FFF4EB]",
    iconColor: "text-[#F97316]",
    departments: 2,
    programs: ["B.Sc. in Aeronautical Eng.", "Aerospace Maintenance"],
  },
  {
    id: "avionics",
    title: "Avionics Engineering",
    subtitle: "Faculty of Avionics Engineering & Systems",
    icon: Satellite,
    iconBg: "bg-[#F3EEFF]",
    iconColor: "text-[#8B5CF6]",
    departments: 2,
    programs: ["B.Sc. in Avionics Eng.", "Radar & Navigation Systems"],
  },
  {
    id: "technology",
    title: "Aerospace Technology",
    subtitle: "Faculty of Aerospace & Mechanical Systems",
    icon: Cpu,
    iconBg: "bg-[#EAF8F1]",
    iconColor: "text-[#16A66A]",
    departments: 2,
    programs: ["Flight Dynamics", "Robotics & Autonomous Systems"],
  },
];

export function FacultiesSection() {
  return (
    <section id="faculties" className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-[12px] font-semibold tracking-wide uppercase mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Academic Faculties</span>
        </div>
        <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[30px] sm:text-[38px] lg:text-[42px] tracking-tight leading-[1.1]">
          Centers of Academic Excellence
        </h2>
        <p className="font-['Inter',sans-serif] text-[#64748B] text-[15px] sm:text-[16px] mt-3 leading-relaxed">
          Preparing world-class engineers, scientists, and leaders in aviation and aerospace through accredited degree curricula.
        </p>
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {faculties.map((f) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-[#D9E2EC] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_36px_rgba(22,119,255,0.09)] hover:border-[#1677FF]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${f.iconBg} ${f.iconColor} flex items-center justify-center shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#64748B] bg-[#F4F8FC] px-2.5 py-1 rounded-full border border-black/[0.04]">
                    {f.departments} Depts
                  </span>
                </div>

                <h3 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[17px] leading-tight mb-2">
                  {f.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[#64748B] text-[12.5px] leading-relaxed mb-4">
                  {f.subtitle}
                </p>

                <div className="pt-3 border-t border-black/[0.04] space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1633] block">
                    Undergraduate Programs
                  </span>
                  {f.programs.map((prog, idx) => (
                    <div key={idx} className="text-[12px] text-[#475467] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-black/[0.04]">
                <button
                  onClick={() => window.open("https://aaub.edu.bd", "_blank")}
                  className="w-full flex items-center justify-between text-[12.5px] font-semibold text-[#1677FF] hover:text-[#0958d9] transition-colors cursor-pointer group"
                >
                  <span>Explore Faculty</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
