import { ShieldAlert, PhoneCall, HeartPulse, Bus, UserCheck, AlertCircle } from "lucide-react";

export function CampusXEmergencySafety() {
  const hotlines = [
    {
      title: "24/7 Campus Security Control",
      subtitle: "Main Gate & Perimeter Response",
      phone: "+880 1713-000001",
      icon: ShieldAlert,
      badge: "Security",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
    },
    {
      title: "Campus Medical & First Aid Unit",
      subtitle: "Emergency Doctor & On-Call Ambulance",
      phone: "+880 1713-000002",
      icon: HeartPulse,
      badge: "Medical",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    },
    {
      title: "Transport Breakdown Assistance",
      subtitle: "Bus Telemetry & Highway Highway Support",
      phone: "+880 1713-000003",
      icon: Bus,
      badge: "Transit",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      title: "Proctorial Body & Hall Grievance",
      subtitle: "Student Welfare & Immediate Redressal",
      phone: "+880 1713-000004",
      icon: UserCheck,
      badge: "Welfare",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F4F8FC] border-t border-b border-[#D9E2EC]/70 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-white/80 shadow-[0_8px_30px_rgba(11,22,51,0.04)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-black/[0.06] gap-4 mb-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#E5484D] flex items-center justify-center shrink-0 border border-red-100">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5484D]">
                  Campus Safety & Emergency Hotlines
                </span>
                <h3 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[20px] sm:text-[22px]">
                  Need immediate support on campus?
                </h3>
              </div>
            </div>

            <span className="text-[13px] text-[#667085] flex items-center gap-1.5 bg-[#F4F8FC] px-3.5 py-1.5 rounded-full border border-black/[0.04]">
              <AlertCircle className="w-4 h-4 text-emerald-600" />
              <span>Security Desks Active across all AAUB Campuses</span>
            </span>
          </div>

          {/* 4 Emergency Hotline Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hotlines.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#F4F8FC] border border-black/[0.04] hover:bg-white hover:border-[#1677FF]/30 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${h.badgeColor}`}>
                        {h.badge}
                      </span>
                      <Icon className="w-4 h-4 text-[#667085]" />
                    </div>
                    <h4 className="font-bold text-[#0B1633] text-[13.5px] leading-tight">
                      {h.title}
                    </h4>
                    <p className="text-[11.5px] text-[#667085] mt-1 leading-snug">
                      {h.subtitle}
                    </p>
                  </div>

                  <a
                    href={`tel:${h.phone}`}
                    className="inline-flex items-center gap-2 mt-4 pt-3 border-t border-black/[0.05] text-[13px] font-bold text-[#0B1633] hover:text-[#1677FF] transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span>{h.phone}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
