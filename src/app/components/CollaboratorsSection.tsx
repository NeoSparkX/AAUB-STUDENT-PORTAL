import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import imgNovoair from "@/assets/ed9400871ffe0b2a14d75f22955b71cf00c72338.png";
import imgEdge from "@/assets/7d6d8b242e18236d84b1073568f96654a6be12b7.png";
import imgSkyair from "@/assets/23017413dc7d0083db60f75dafa3cbe638477baf.png";
import imgIitm from "@/assets/14659dc754d9fdb865345dd7a53018ab58ed7ae6.png";
import imgNorthsouth from "@/assets/442511a92a7355035002d4921c3aec099fa924c3.png";
import imgSapienza from "@/assets/07e46f605f2b227580a0436e0c0e09bfbe57f65b.png";

const partners = [
  { name: "Novoair", logo: imgNovoair },
  { name: "Sky Capital Airlines", logo: imgSkyair },
  { name: "IIT Madras Aerospace", logo: imgIitm },
  { name: "Sapienza University Rome", logo: imgSapienza },
  { name: "EDGE", logo: imgEdge },
  { name: "North South University", logo: imgNorthsouth },
];

export function CollaboratorsSection() {
  return (
    <section id="collaborators" className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-14">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D9E2EC] shadow-[0_4px_20px_rgba(15,23,42,0.03)]">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1677FF]/10 text-[#1677FF] text-[12px] font-semibold tracking-wide uppercase mb-2">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Global Connectivity</span>
          </div>
          <h3 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[24px] sm:text-[28px] tracking-tight">
            AAUB is connected beyond the campus.
          </h3>
          <p className="font-['Inter',sans-serif] text-[#64748B] text-[14px] mt-2">
            Partnering with global aeronautical institutions, national airlines, and regulatory agencies.
          </p>
        </div>

        {/* Clean Partner Logo Cloud */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="h-20 rounded-2xl bg-[#F4F8FC] border border-black/[0.04] p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100 shadow-xs cursor-default"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}