import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bus,
  MapPin,
  QrCode,
  Shield,
  RotateCw,
  Navigation,
  Compass,
  AlertTriangle,
  Building,
  CheckCircle2,
} from "lucide-react";
import imgAaubSeal from "@/assets/41f88c4974abfcca8d71231b0413ad2fc852764c.png";

export function CampusXLiveTracker() {
  const [selectedRoute, setSelectedRoute] = useState<"route2" | "route3">("route2");
  const [idFlipped, setIdFlipped] = useState(false);

  const routes = {
    route2: {
      name: "Route 02 • Rangpur Express",
      status: "Live & Moving",
      eta: "03 mins",
      currentStop: "Kamarpara Intersection",
      nextStop: "AAUB Main Campus Gate",
      busNumber: "AAUB Bus #04",
      driver: "Md. Rafiqul Islam",
    },
    route3: {
      name: "Route 03 • Lalmonirhat Shuttle",
      status: "Approaching Hall",
      eta: "08 mins",
      currentStop: "Lalmonirhat Town Hub",
      nextStop: "Hall of Residence 01",
      busNumber: "AAUB Bus #02",
      driver: "Anwar Hossain",
    },
  };

  const currentRoute = routes[selectedRoute];

  return (
    <section id="campus" className="py-16 sm:py-24 bg-[#F4F8FC] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16A66A]/10 text-[#16A66A] text-[12px] font-semibold tracking-wide uppercase mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>Real-Time Geospatial Layer</span>
            </div>
            <h2 className="font-['Inter',sans-serif] font-black text-[#0B1633] text-[32px] sm:text-[44px] lg:text-[48px] tracking-tight leading-[1.05]">
              Know what's happening on campus.
            </h2>
            <p className="font-['Inter',sans-serif] text-[#475467] text-[15px] sm:text-[17px] mt-3 leading-relaxed">
              Track university shuttles in real-time, navigate aerospace testing facilities, and present your contactless digital credentials anywhere on campus.
            </p>
          </div>

          {/* Route Switcher Buttons */}
          <div className="flex items-center gap-2 bg-white/80 p-1.5 rounded-full border border-black/[0.08] shadow-xs">
            <button
              onClick={() => setSelectedRoute("route2")}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
                selectedRoute === "route2"
                  ? "bg-[#0B1633] text-white shadow-xs"
                  : "text-[#475467] hover:text-[#0B1633]"
              }`}
            >
              Route 02 (Rangpur)
            </button>
            <button
              onClick={() => setSelectedRoute("route3")}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
                selectedRoute === "route3"
                  ? "bg-[#0B1633] text-white shadow-xs"
                  : "text-[#475467] hover:text-[#0B1633]"
              }`}
            >
              Route 03 (Lalmonirhat)
            </button>
          </div>
        </div>

        {/* 2-Column Composition: Vector Map Tracker (Left) + Digital Student ID (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* =========================================================================
              LEFT (8 Cols): Stylized Vector Campus Map & Live Transport Overlay
              ========================================================================= */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-black/[0.08] bg-[#E9F0F8] shadow-[0_16px_48px_rgba(11,22,51,0.08)] min-h-[460px] flex flex-col justify-between p-4 sm:p-6">
            {/* Vector Map Graphic Canvas */}
            <svg
              className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-85"
              viewBox="0 0 900 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Campus Terrain */}
              <rect width="900" height="600" fill="#E6EEF8" />
              {/* Green Lawns & Courtyards */}
              <path
                d="M50 80 Q180 50 320 120 T600 90 L640 240 Q400 300 200 220 Z"
                fill="#DCF0E2"
                opacity="0.8"
              />
              <path
                d="M450 320 Q700 280 850 360 L870 540 Q620 580 400 500 Z"
                fill="#DCF0E2"
                opacity="0.8"
              />

              {/* Campus Road Network */}
              <path
                d="M-50 480 Q200 450 450 380 T950 260"
                stroke="#CBD5E1"
                strokeWidth="24"
                strokeLinecap="round"
              />
              <path
                d="M-50 480 Q200 450 450 380 T950 260"
                stroke="#FFFFFF"
                strokeWidth="16"
                strokeLinecap="round"
              />

              {/* Transit Route Track with Pulsing Flow */}
              <path
                d="M-50 480 Q200 450 450 380 T950 260"
                stroke="#1677FF"
                strokeWidth="4"
                strokeDasharray="8 8"
                className="animate-pulse"
              />

              {/* Campus Buildings Outlines */}
              {/* Main Academic Complex */}
              <rect x="360" y="160" width="180" height="90" rx="8" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
              <text x="450" y="210" textAnchor="middle" fill="#0B1633" fontSize="12" fontWeight="bold" fontFamily="Inter">
                Main Academic Complex
              </text>

              {/* Avionics & Wind Tunnel Lab */}
              <rect x="580" y="100" width="140" height="70" rx="8" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
              <text x="650" y="140" textAnchor="middle" fill="#0B1633" fontSize="11" fontWeight="600" fontFamily="Inter">
                Wind Tunnel Lab
              </text>

              {/* Student Residential Hall */}
              <rect x="180" y="290" width="150" height="75" rx="8" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
              <text x="255" y="333" textAnchor="middle" fill="#0B1633" fontSize="11" fontWeight="600" fontFamily="Inter">
                Residential Hall 01
              </text>

              {/* Central Runway / Aerospace Testing Field */}
              <rect x="120" y="520" width="480" height="40" rx="4" fill="#94A3B8" fillOpacity="0.3" stroke="#64748B" strokeWidth="1" strokeDasharray="6 6" />
              <text x="360" y="545" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold" letterSpacing="2">
                RUNWAY 09-27 / UAV FLIGHT CORRIDOR
              </text>
            </svg>

            {/* Top Overlay: Map Controls & Status Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white shadow-xs flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[12px] font-bold text-[#0B1633]">
                  GPS Telemetry: Active
                </span>
              </div>

              <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-semibold text-[#475467] border border-white">
                Coordinates: 25.9234° N, 89.2847° E
              </div>
            </div>

            {/* Bottom Overlay: Live Floating Transit Card (Section 32) */}
            <div className="relative z-10 bg-white/90 backdrop-blur-md border border-white shadow-[0_12px_36px_rgba(11,22,51,0.12)] rounded-2xl p-4 sm:p-5 max-w-md">
              <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1677FF] text-white flex items-center justify-center">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[14px]">
                      {currentRoute.name}
                    </h4>
                    <span className="text-[11px] text-[#667085]">{currentRoute.busNumber}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#667085] block">Arriving in</span>
                  <span className="font-black text-[#1677FF] text-[18px] leading-tight">
                    {currentRoute.eta}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-[12.5px]">
                <div className="flex justify-between">
                  <span className="text-[#667085]">Current Stop:</span>
                  <span className="font-semibold text-[#0B1633]">{currentRoute.currentStop}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667085]">Next Station:</span>
                  <span className="font-semibold text-emerald-600">{currentRoute.nextStop}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-black/[0.04]">
                  <span className="text-[#667085]">Assigned Captain:</span>
                  <span className="font-medium text-[#101828]">{currentRoute.driver}</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT (4 Cols): Digital Student ID Card (Section 33)
              ========================================================================= */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full text-center mb-4">
              <span className="text-[12px] font-bold text-[#1677FF] uppercase tracking-wider block">
                Instant Verification
              </span>
              <h3 className="font-['Inter',sans-serif] font-bold text-[#0B1633] text-[20px]">
                Digital CampusX Pass
              </h3>
            </div>

            {/* Flippable 3D ID Card Container */}
            <div
              onClick={() => setIdFlipped(!idFlipped)}
              className="relative w-full max-w-[340px] h-[460px] cursor-pointer perspective-[1000px] group select-none"
            >
              <motion.div
                animate={{ rotateY: idFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full relative preserve-3d"
              >
                {/* ----------------- FRONT OF CARD ----------------- */}
                <div className="absolute inset-0 backface-hidden rounded-3xl bg-gradient-to-br from-[#0B1633] via-[#112352] to-[#0B1633] text-white p-6 shadow-[0_20px_50px_rgba(11,22,51,0.25)] border border-white/20 flex flex-col justify-between overflow-hidden">
                  {/* Holographic reflective sheen */}
                  <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-tr from-sky-400/20 via-transparent to-pink-500/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <img
                        src={imgAaubSeal}
                        alt="AAUB"
                        className="w-7 h-7 object-contain rounded-full"
                      />
                      <div>
                        <span className="font-['Inter',sans-serif] font-bold text-xs tracking-wider block">
                          AAUB
                        </span>
                        <span className="text-[9px] text-sky-300 font-semibold tracking-widest uppercase">
                          CampusX Smart ID
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/10 border border-white/20 text-sky-200">
                      SESSION 2026
                    </span>
                  </div>

                  {/* Student Photo & Security Micro-chip */}
                  <div className="flex items-center gap-4 my-2">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces"
                        alt="Student"
                        className="w-20 h-20 rounded-2xl object-cover border-2 border-white/40 shadow-md"
                      />
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0B1633] flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="w-8 h-6 rounded-md bg-gradient-to-tr from-amber-200 to-amber-400 border border-amber-300 shadow-xs mb-2 opacity-90" />
                      <span className="text-[10px] text-white/60 uppercase tracking-wider block">
                        Full Name
                      </span>
                      <h4 className="font-['Inter',sans-serif] font-bold text-[16px] leading-tight">
                        Abrar Khan
                      </h4>
                    </div>
                  </div>

                  {/* Department & ID details */}
                  <div className="space-y-2 py-2 border-t border-b border-white/10 text-xs">
                    <div className="flex justify-between">
                      <span className="text-white/60">Student ID:</span>
                      <span className="font-mono font-bold text-sky-300">AAUB-2204018</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Faculty:</span>
                      <span className="font-semibold text-white">Avionics & Space</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Department:</span>
                      <span className="font-semibold text-white">Avionics Engineering</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Hall Resident:</span>
                      <span className="font-semibold text-white">Hall 01 (Room 312)</span>
                    </div>
                  </div>

                  {/* Card Footer with Flip Prompt */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] text-white/50">Tap card to scan QR</span>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-sky-300 group-hover:text-white transition-colors">
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Flip Card</span>
                    </div>
                  </div>
                </div>

                {/* ----------------- BACK OF CARD ----------------- */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-white text-[#0B1633] p-6 shadow-[0_20px_50px_rgba(11,22,51,0.25)] border border-[#D9E2EC] flex flex-col justify-between">
                  <div className="text-center pb-2 border-b border-black/[0.06]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#667085]">
                      Contactless Turnstile Barcode
                    </span>
                    <h5 className="font-bold text-[14px] text-[#0B1633]">
                      Entry Pass & Library Auth
                    </h5>
                  </div>

                  {/* QR Code and Barcode */}
                  <div className="flex flex-col items-center justify-center p-4 bg-[#F4F8FC] rounded-2xl border border-black/[0.04]">
                    <QrCode className="w-28 h-28 text-[#0B1633]" />
                    <span className="font-mono font-bold text-[13px] text-[#1677FF] mt-2">
                      *AAUB2204018*
                    </span>
                  </div>

                  <div className="text-center text-[10.5px] text-[#667085] leading-relaxed">
                    This digital credentials pass is valid for turnstiles at AAUB Main Campus, Lalmonirhat. Property of Aviation and Aerospace University Bangladesh.
                  </div>

                  <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-[#1677FF] pt-2 border-t border-black/[0.05]">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Flip to front</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
