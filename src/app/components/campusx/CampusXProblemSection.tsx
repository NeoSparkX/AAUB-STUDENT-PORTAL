import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building, Globe } from "lucide-react";
import imgNovoair from "@/assets/ed9400871ffe0b2a14d75f22955b71cf00c72338.png";
import imgEdge from "@/assets/7d6d8b242e18236d84b1073568f96654a6be12b7.png";
import imgSkyair from "@/assets/23017413dc7d0083db60f75dafa3cbe638477baf.png";
import imgIitm from "@/assets/14659dc754d9fdb865345dd7a53018ab58ed7ae6.png";
import imgNorthsouth from "@/assets/442511a92a7355035002d4921c3aec099fa924c3.png";
import imgSapienza from "@/assets/07e46f605f2b227580a0436e0c0e09bfbe57f65b.png";

const comparisons = [
  {
    problem: "WhatsApp Groups & Social Feeds",
    problemDetail: "Unofficial group chats, lost PDF announcements, and zero administrative moderation.",
    solution: "Official Verified Broadcast Channels",
    solutionDetail: "Archived searchable circulars, auto-generated batch groups, and verified faculty notices.",
  },
  {
    problem: "Physical Paper Marksheets",
    problemDetail: "Manual GPA calculations, delayed grade releases, and fragmented semester records.",
    solution: "Live Academic Core Dashboard",
    solutionDetail: "Instant CT, Mid, and Final score entry with automated running GPA calculations.",
  },
  {
    problem: "Blind Transit Waiting",
    problemDetail: "Zero schedule visibility for campus buses traveling the Rangpur–Lalmonirhat routes.",
    solution: "Crowdsourced Live Bus GPS",
    solutionDetail: "Real-time location telemetry with instant arrival estimates and route tracking.",
  },
  {
    problem: "Paper Hall Registers & Mess Bills",
    problemDetail: "Physical meal registers prone to discrepancies and opaque end-of-month calculations.",
    solution: "Digital Hall & Meal Tracking",
    solutionDetail: "One-tap QR meal confirmation and automated monthly mess bill breakdowns.",
  },
  {
    problem: "Zero Post-Graduation Connection",
    problemDetail: "Alumni disconnect completely once they graduate, leaving juniors without guidance.",
    solution: "Integrated Alumni Hub",
    solutionDetail: "1-on-1 mentorship bookings, verified job referrals, and searchable batch directories.",
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

export function CampusXProblemSection() {
  return (
    <section id="problem" className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 scroll-mt-24">
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-[0_4px_24px_rgba(15,23,42,0.03)]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-14"
        >
          <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[30px] sm:text-[38px] lg:text-[42px] tracking-tight leading-[1.1]">
            From Fragmented Tools to Unified Intelligence
          </h2>
          <p className="font-['Inter',sans-serif] text-[#64748B] text-[15px] sm:text-[17px] mt-3 leading-relaxed">
            Eliminating the daily friction of disconnected groups and paper records with one verified institutional layer.
          </p>
        </motion.div>

        {/* Side-by-Side Comparison Table/Cards */}
        <div className="space-y-3.5 mb-14">
          {comparisons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.008, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-black/[0.05] overflow-hidden transition-shadow hover:shadow-md"
            >
              {/* Problem Column */}
              <div className="p-4 sm:p-5 bg-[#FBFBFC] flex items-start gap-3 border-b md:border-b-0 md:border-r border-black/[0.05]">
                <div className="w-7 h-7 rounded-lg bg-red-100/70 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-['Inter',sans-serif] font-bold text-[#1E293B] text-[14.5px]">
                    {item.problem}
                  </h4>
                  <p className="text-[13px] text-[#64748B] mt-0.5 leading-relaxed">
                    {item.problemDetail}
                  </p>
                </div>
              </div>

              {/* CampusX Solution Column */}
              <div className="p-4 sm:p-5 bg-white flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#EBF3FF] text-[#1677FF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[14.5px]">
                    {item.solution}
                  </h4>
                  <p className="text-[13px] text-[#475467] mt-0.5 leading-relaxed">
                    {item.solutionDetail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional Backing & Alliances Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-black/[0.06]"
        >
          <div className="text-center mb-6">
            <h3 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[18px]">
              Institutional Alliances & Industry Network
            </h3>
            <p className="text-[13px] text-[#64748B] mt-1">
              Partnering with national airlines, premier aeronautical academies, and state initiatives.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.05, opacity: 1 }}
                className="h-20 rounded-2xl bg-[#F8FAFC] border border-black/[0.04] p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100 shadow-xs cursor-default"
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
        </motion.div>
      </div>
    </section>
  );
}
