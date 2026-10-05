import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquare,
  Bus,
  Home,
  Users,
  Briefcase,
  Network,
  ArrowRight,
  User,
  Users2,
  Building2,
  Sparkles,
} from "lucide-react";

interface CampusXFeatureDockProps {
  onSelectFeature?: (featureId: string) => void;
  onExploreAll?: () => void;
}

export function CampusXFeatureDock({
  onSelectFeature,
  onExploreAll,
}: CampusXFeatureDockProps) {
  const modules = [
    {
      id: "academics",
      title: "Academics",
      subtitle: "Courses, Marks,\nAttendance",
      icon: BookOpen,
      iconColor: "text-[#1677FF]",
      iconBg: "bg-[#EBF3FF]",
      active: true,
    },
    {
      id: "communication",
      title: "Communication",
      subtitle: "Notices, Messages,\nAnnouncements",
      icon: MessageSquare,
      iconColor: "text-[#8B5CF6]",
      iconBg: "bg-[#F3EEFF]",
    },
    {
      id: "services",
      title: "Campus Services",
      subtitle: "Transport, ID,\nFacilities",
      icon: Bus,
      iconColor: "text-[#16A66A]",
      iconBg: "bg-[#EAF8F1]",
    },
    {
      id: "hall",
      title: "Hall Management",
      subtitle: "Meals, Fees,\nRooms",
      icon: Home,
      iconColor: "text-[#EA580C]",
      iconBg: "bg-[#FFF2EA]",
    },
    {
      id: "clubs",
      title: "Clubs & Events",
      subtitle: "Activities, Societies,\nRegistrations",
      icon: Users,
      iconColor: "text-[#E94B8A]",
      iconBg: "bg-[#FDF0F5]",
      glow: "shadow-[0_0_16px_rgba(233,75,138,0.25)]",
    },
    {
      id: "careers",
      title: "Careers",
      subtitle: "Jobs, Internships,\nOpportunities",
      icon: Briefcase,
      iconColor: "text-[#9A5B28]",
      iconBg: "bg-[#FAF1E8]",
    },
    {
      id: "alumni",
      title: "Alumni Network",
      subtitle: "Connect, Mentor,\nGive Back",
      icon: Network,
      iconColor: "text-[#665CFF]",
      iconBg: "bg-[#EEEDFC]",
    },
  ];

  const stats = [
    {
      value: "3K+",
      label: "Students",
      icon: User,
      iconColor: "text-[#1677FF]",
      iconBg: "bg-[#1677FF]/10",
      glow: "",
    },
    {
      value: "200+",
      label: "Faculty",
      icon: Users2,
      iconColor: "text-[#8B5CF6]",
      iconBg: "bg-[#8B5CF6]/10",
      glow: "",
    },
    {
      value: "20+",
      label: "Clubs & Societies",
      icon: Building2,
      iconColor: "text-[#16A66A]",
      iconBg: "bg-[#16A66A]/10",
      glow: "",
    },
    {
      value: "∞",
      label: "Opportunities",
      icon: Sparkles,
      iconColor: "text-[#E94B8A]",
      iconBg: "bg-[#E94B8A]/10",
      glow: "shadow-[0_0_14px_rgba(233,75,138,0.35)]",
    },
  ];

  return (
    <div className="w-full bg-white/70 hover:bg-white/80 backdrop-blur-3xl -webkit-backdrop-blur-3xl border border-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.1)] rounded-[28px] sm:rounded-[36px] p-5 sm:p-6 transition-all duration-300">
      {/* Top Dock Header Row */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-black/[0.05] gap-4 mb-3 sm:mb-4">
        <div>
          <h2 className="font-['Inter',sans-serif] font-bold text-[#0F172A] text-[15px] sm:text-[17px] tracking-tight">
            Everything You Need. In One Place.
          </h2>
          <p className="font-['Inter',sans-serif] text-[#64748B] text-[12px] sm:text-[13px] mt-0.5">
            Access all aspects of university life from a single platform.
          </p>
        </div>

        <button
          onClick={onExploreAll}
          className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13px] font-semibold text-[#0F172A] hover:text-[#1677FF] transition-colors cursor-pointer group shrink-0"
        >
          <span>Explore All Features</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Main Row: 7 Modules + Divider + 4 Stats */}
      <div className="flex flex-col xl:flex-row items-stretch gap-4 xl:gap-5">
        {/* 7 Feature Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 flex-1">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <motion.button
                key={m.id}
                whileHover={{ y: -3 }}
                onClick={() => onSelectFeature?.(m.id)}
                className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                  m.active
                    ? "bg-[#DCEEFF]/60 backdrop-blur-md shadow-[0_4px_16px_rgba(22,119,255,0.15)] border-[1.5px] border-[#1677FF] ring-2 ring-[#1677FF]/15"
                    : "bg-white/60 hover:bg-white/90 border border-white/80 hover:shadow-[0_4px_14px_rgba(15,23,42,0.06)]"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl ${m.iconBg} ${m.iconColor} ${m.glow || ""} flex items-center justify-center mb-2 shadow-xs`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-['Inter',sans-serif] font-bold text-[#0F172A] text-[12.5px] leading-tight">
                  {m.title}
                </span>
                <span className="font-['Inter',sans-serif] text-[#64748B] text-[10px] leading-tight mt-1 whitespace-pre-line text-center">
                  {m.subtitle}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Vertical Divider */}
        <div className="hidden xl:block w-[1px] bg-black/[0.08] self-stretch mx-1" />

        {/* 4 Stats Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 xl:flex xl:items-center gap-3 sm:gap-4 shrink-0 pt-3 xl:pt-0 border-t xl:border-t-0 border-black/[0.06]">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-2.5 rounded-2xl text-center min-w-[76px]"
              >
                <div
                  className={`w-9 h-9 rounded-full ${s.iconBg} ${s.iconColor} ${s.glow} flex items-center justify-center mb-1.5 shadow-xs`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-['Inter',sans-serif] font-black text-[#0F172A] text-[17px] leading-none">
                  {s.value}
                </span>
                <span className="font-['Inter',sans-serif] font-medium text-[#64748B] text-[10.5px] mt-1 whitespace-nowrap">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
