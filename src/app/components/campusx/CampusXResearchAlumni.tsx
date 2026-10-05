import {
  Compass,
  Briefcase,
  Network,
  ArrowUpRight,
  ExternalLink,
  Users,
  Award,
  Radio,
  Plane,
  Building,
} from "lucide-react";

export function CampusXResearchAlumni() {
  const researchProjects = [
    {
      title: "Autonomous UAV Flight Control Telemetry",
      lab: "Aero-Avionics Robotics Lab",
      supervisor: "Dr. K. M. Rahman",
      tags: ["Flight Dynamics", "Embedded Linux", "Real-time Telemetry"],
      desc: "Developing fault-tolerant guidance algorithms for fixed-wing UAVs performing autonomous environmental monitoring over northern river basins.",
      status: "Active Testing Phase",
    },
    {
      title: "CubeSat VHF/UHF Ground Station Network",
      lab: "Space Systems Lab",
      supervisor: "Prof. S. Ahmed",
      tags: ["Orbital Mechanics", "SDR", "Doppler Shift"],
      desc: "Establishing a low-earth orbit ground receiver on AAUB campus for automated telemetry downlink from open educational satellites.",
      status: "Telemetry Live",
    },
    {
      title: "Subsonic Wind Tunnel Airfoil Optimization",
      lab: "Aerodynamics & Propulsion Facility",
      supervisor: "Dr. T. Mahmud",
      tags: ["CFD Analysis", "Boundary Layer", "Wind Tunnel"],
      desc: "Experimental measurement of drag polar curves on blended wing body geometries manufactured in the campus composite fabrication shop.",
      status: "Paper Under Review",
    },
  ];

  const alumniMentors = [
    {
      name: "Engr. Farhan Tanvir",
      batch: "AAUB '23",
      role: "Avionics Systems Engineer",
      company: "Civil Aviation Authority Bangladesh (CAAB)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      focus: "Radar Systems & CNS/ATM Guidance",
    },
    {
      name: "Nusrat Jahan",
      batch: "AAUB '24",
      role: "Flight Operations Engineer",
      company: "Biman Bangladesh Airlines",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces",
      focus: "Fleet Reliability & Maintenance Scheduling",
    },
    {
      name: "Tanmoy Roy",
      batch: "AAUB '23",
      role: "Graduate Satellite Researcher",
      company: "Aerospace Institute (International)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      focus: "Thermal Control for Micro-satellites",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-[12px] font-semibold tracking-wide uppercase mb-3">
            <Plane className="w-3.5 h-3.5" />
            <span>Innovation & Future Careers</span>
          </div>
          <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[32px] sm:text-[44px] lg:text-[48px] tracking-tight leading-[1.05]">
            From classroom to aerospace research.
          </h2>
          <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] sm:text-[17px] mt-3 leading-relaxed">
            Bridging theoretical aerodynamics with hands-on rocketry, satellite receivers, and direct industry mentorship from graduates across Bangladesh.
          </p>
        </div>

        {/* 2-Part Grid: Aerospace Research (Left) + Alumni Mentorship & Careers (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Research Project Workspaces (Section 37) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 mb-2">
              <h3 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[19px]">
                Active Campus Labs & Projects
              </h3>
              <span className="text-[12px] font-semibold text-[#1677FF] cursor-pointer hover:underline">
                View All Research →
              </span>
            </div>

            {researchProjects.map((p, i) => (
              <div
                key={i}
                className="bg-[#F4F8FC] rounded-2xl p-5 border border-black/[0.05] hover:shadow-[0_8px_24px_rgba(11,22,51,0.06)] transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                      {p.lab}
                    </span>
                    <h4 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[16px]">
                      {p.title}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10.5px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    {p.status}
                  </span>
                </div>

                <p className="text-[13px] text-[#475467] leading-relaxed my-2">
                  {p.desc}
                </p>

                <div className="flex flex-wrap items-center justify-between pt-3 border-t border-black/[0.04] gap-2 mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-white border border-black/[0.06] text-[#475467]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11.5px] text-[#667085]">
                    Lead: <strong className="text-[#0B1633]">{p.supervisor}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Alumni Mentorship & Industry Network (Section 36) */}
          <div className="lg:col-span-5 bg-[#F4F8FC] rounded-3xl p-6 sm:p-7 border border-[#D9E2EC] shadow-xs">
            <div className="pb-4 border-b border-black/[0.06] mb-5">
              <div className="flex items-center gap-2 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-1">
                <Network className="w-4 h-4" />
                <span>Alumni Connect Network</span>
              </div>
              <h3 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[20px]">
                Connect with Alumni in Industry
              </h3>
              <p className="text-[13px] text-[#475467] mt-1">
                Book 1-on-1 mentorship chats, ask about airline interview processes, or seek internship referrals.
              </p>
            </div>

            <div className="space-y-3.5 mb-6">
              {alumniMentors.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-black/[0.04] shadow-xs flex items-center gap-3.5"
                >
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-12 h-12 rounded-full object-cover border border-black/10 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#0B1633] text-[14px] truncate">
                        {m.name}
                      </h4>
                      <span className="text-[10px] font-semibold text-[#1677FF] bg-[#EBF3FF] px-1.5 py-0.5 rounded">
                        {m.batch}
                      </span>
                    </div>
                    <div className="text-[12px] font-medium text-[#101828] truncate">
                      {m.role}
                    </div>
                    <div className="text-[11px] text-[#667085] truncate">
                      {m.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-white hover:bg-black/[0.02] border border-[#D9E2EC] text-[#0B1633] font-semibold text-[13.5px] py-3 rounded-full shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <span>Enter Alumni Mentorship Directory</span>
              <ArrowUpRight className="w-4 h-4 text-[#1677FF]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
