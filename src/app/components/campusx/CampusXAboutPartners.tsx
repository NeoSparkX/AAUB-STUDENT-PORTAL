import { CheckCircle2, Rocket } from "lucide-react";
import imgNovoair from "@/assets/ed9400871ffe0b2a14d75f22955b71cf00c72338.png";
import imgEdge from "@/assets/7d6d8b242e18236d84b1073568f96654a6be12b7.png";
import imgSkyair from "@/assets/23017413dc7d0083db60f75dafa3cbe638477baf.png";
import imgIitm from "@/assets/14659dc754d9fdb865345dd7a53018ab58ed7ae6.png";
import imgNorthsouth from "@/assets/442511a92a7355035002d4921c3aec099fa924c3.png";
import imgSapienza from "@/assets/07e46f605f2b227580a0436e0c0e09bfbe57f65b.png";
import imgAaubBuilding from "@/assets/aaub-campus-building.jpg";

export function CampusXAboutPartners() {
  const pillars = [
    {
      title: "Learn",
      subtitle: "Academic Rigor",
      desc: "Curricula vetted against global aeronautical standards, emphasizing avionics, orbital mechanics, and aircraft propulsion systems.",
    },
    {
      title: "Discover",
      subtitle: "Research Frontier",
      desc: "Subsonic wind tunnel facilities, small satellite ground tracking stations, and composite materials labs located right in Lalmonirhat.",
    },
    {
      title: "Build",
      subtitle: "Sovereign Engineering",
      desc: "Empowering Bangladeshi engineers to design indigenous unmanned aerial systems, avionics flight software, and aerospace payloads.",
    },
  ];

  const partners = [
    { name: "Novoair", logo: imgNovoair },
    { name: "Sky Capital Airlines", logo: imgSkyair },
    { name: "IIT Madras Aerospace", logo: imgIitm },
    { name: "Sapienza University Rome", logo: imgSapienza },
    { name: "EDGE", logo: imgEdge },
    { name: "North South University", logo: imgNorthsouth },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* =========================================================================
            SECTION 39: About AAUB (Editorial Swiss-inspired Composition)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Headline */}
          <div className="lg:col-span-6">
            <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[34px] sm:text-[46px] lg:text-[50px] leading-[1.04] tracking-tight">
              A campus built for aviation, aerospace and tomorrow.
            </h2>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-6">
            <p className="font-['Inter',sans-serif] text-[#475467] text-[16px] sm:text-[17px] leading-relaxed">
              Established as the nation’s specialized public aerospace institution, Aviation and Aerospace University Bangladesh (AAUB) unites theoretical engineering with practical industry application in Lalmonirhat.
            </p>
            <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] sm:text-[16px] leading-relaxed mt-4">
              CampusX serves as the digital pulse of this physical campus—connecting students, laboratories, transport fleets, and international aeronautical bodies into one unified platform.
            </p>
          </div>
        </div>

        {/* Campus Architectural Image & 3 Core Values (Section 39) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-16 sm:mb-24">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-lg border border-black/10 min-h-[300px]">
            <img
              src={imgAaubBuilding}
              alt="AAUB Campus Architecture"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-[#F4F8FC] rounded-2xl p-6 border border-black/[0.05] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[12px] font-bold text-[#1677FF] uppercase tracking-wider block mb-1">
                    {p.subtitle}
                  </span>
                  <h4 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[26px] mb-3">
                    {p.title}
                  </h4>
                  <p className="text-[13px] text-[#475467] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/[0.05] flex items-center gap-1.5 text-[11px] font-semibold text-[#0B1633]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF]" />
                  <span>AAUB Strategic Pillar</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION 40: Global Connectivity & Industry Alliances
            ========================================================================= */}
        <div className="pt-10 border-t border-black/[0.06]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#667085] block">
              Strategic Collaborations
            </span>
            <h3 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[22px] sm:text-[24px] mt-1">
              AAUB is connected beyond the campus.
            </h3>
            <p className="text-[13.5px] text-[#475467] mt-1">
              Collaborating with commercial airlines, national defense, and international aerospace institutes.
            </p>
          </div>

          {/* Clean Partner Logo Cloud */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="h-20 rounded-2xl bg-[#F4F8FC] border border-black/[0.04] p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-75 hover:opacity-100 shadow-xs"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
