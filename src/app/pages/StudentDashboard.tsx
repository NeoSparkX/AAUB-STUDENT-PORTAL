import { useNavigate, Routes, Route, Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import { LearningVaultView } from "./LearningVaultView";
import {
   AcademicCoreDemo, CommHubDemo, CampusLifeDemo,
   HallMgmtDemo, ClubsDemo, JobsDemo, AlumniDemo, SettingsDemo
} from "./StudentDemoViews";
import {
   LayoutDashboard, BookOpen, GraduationCap, Calendar, MessageSquare, Settings, LogOut,
   Bell, Search, Users, FileText, XCircle, FolderGit2, MapPin, Building, Briefcase,
   QrCode, PhoneCall, Check, UploadCloud, Star, Bus, Utensils
} from "lucide-react";

// Modal for QR code
function QrModal({ isOpen, onClose, user }: any) {
   if (!isOpen) return null;
   return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={onClose}>
         <div className="bg-white p-8 rounded-3xl max-w-sm w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><XCircle size={24} /></button>
            <div className="text-center">
               <h3 className="text-xl font-bold text-[#101828] mb-2">Digital E-ID</h3>
               <p className="text-sm text-[#475467] mb-6">{user?.user_metadata?.first_name} {user?.user_metadata?.last_name}</p>
               <div className="bg-gray-100 w-48 h-48 mx-auto rounded-xl flex items-center justify-center mb-6 border-2 border-gray-200">
                  <QrCode size={120} className="text-[#101828]" />
               </div>
               <p className="text-xs text-[#667085]">Scan to verify student identity</p>
            </div>
         </div>
      </div>
   );
}

function StudentHome() {
   return (
      <div className="space-y-6 pb-20 relative">
         {/* Top Row: Urgent & Now */}
         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Widget A: Academic Progress (M1) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h3 className="text-lg font-bold text-[#101828] mb-4">Academic Progress</h3>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition">
                     <div className="relative w-14 h-14 shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                           <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                           <path className="text-green-500" strokeWidth="3" strokeDasharray="88, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#101828]">88%</div>
                     </div>
                     <div>
                        <p className="font-semibold text-[#101828] text-sm">AE-301 (Aerodynamics II)</p>
                        <p className="text-xs text-[#475467]">Current Grade: <span className="font-bold text-green-600">A-</span></p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition">
                     <div className="relative w-14 h-14 shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                           <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                           <path className="text-red-500" strokeWidth="3" strokeDasharray="71, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#101828]">71%</div>
                     </div>
                     <div>
                        <p className="font-semibold text-[#101828] text-sm">ME-205 (Thermodynamics)</p>
                        <p className="text-xs text-[#475467]">Current Grade: <span className="font-bold text-orange-600">B</span></p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Widget B: Exam & Submission Countdown */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h3 className="text-lg font-bold text-[#101828] mb-4">Upcoming Deadlines</h3>
               <div className="relative border-l-2 border-gray-100 ml-3 space-y-6">
                  <div className="relative pl-6">
                     <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-red-100 border-2 border-red-500"></span>
                     <p className="text-sm font-bold text-red-600 mb-0.5">In 2 Days</p>
                     <p className="text-sm font-semibold text-[#101828]">Fluid Mechanics Lab Report</p>
                     <p className="text-xs text-[#475467]">Nov 15, 11:59 PM</p>
                  </div>
                  <div className="relative pl-6">
                     <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-orange-100 border-2 border-orange-500"></span>
                     <p className="text-sm font-bold text-orange-600 mb-0.5">In 5 Days</p>
                     <p className="text-sm font-semibold text-[#101828]">Avionics Midterm Exam</p>
                     <p className="text-xs text-[#475467]">Nov 18, 10:00 AM • Room 402</p>
                  </div>
               </div>
            </div>

            {/* Widget C: Live Campus Logistics */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
               <h3 className="text-lg font-bold text-[#101828] mb-2">Campus Logistics</h3>
               <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                     <Bus size={20} className="text-[#4B68E6]" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-[#101828]">University Bus (Coaster) <span className="font-normal text-[#475467]">(to Lalmonirhat)</span></p>
                     <p className="text-xs font-semibold text-green-600 mt-0.5">GPS: Live • ETA: 4 mins</p>
                  </div>
               </div>
               <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                     <Utensils size={20} className="text-orange-600" />
                  </div>
                  <div className="flex-1">
                     <p className="text-sm font-bold text-[#101828]">Lunch <span className="font-normal text-[#475467]">(Chicken Biryani)</span></p>
                     <p className="text-xs font-semibold text-[#4B68E6] mt-0.5 flex items-center gap-1"><Check size={12} /> Status: Confirmed (QR Ready)</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Middle Row: Actionable */}
         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Widget D: Communication Hub & Notices */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#101828]">Comm Hub & Notices</h3>
                  <div className="flex gap-2">
                     <button className="px-3 py-1 bg-[#4B68E6] text-white text-xs font-bold rounded-full">Official</button>
                     <button className="px-3 py-1 bg-gray-100 text-[#475467] hover:bg-gray-200 text-xs font-bold rounded-full transition">Faculty</button>
                     <button className="px-3 py-1 bg-gray-100 text-[#475467] hover:bg-gray-200 text-xs font-bold rounded-full transition">Batch</button>
                  </div>
               </div>
               <div className="space-y-3 mt-2 flex-1">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                     <div className="flex justify-between items-start mb-1">
                        <p className="text-sm font-bold text-[#101828]">Admin (Official)</p>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#4B68E6] text-white flex items-center gap-1"><MapPin size={10} /> Pinned</span>
                     </div>
                     <p className="text-sm text-[#475467]">Semester Fee Deadline Extended to Nov 20.</p>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl">
                     <p className="text-sm font-bold text-[#101828] mb-1">Prof. Islam (Faculty)</p>
                     <p className="text-sm text-[#475467]">I have uploaded the revised Chapter 4 slides.</p>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl">
                     <p className="text-sm font-bold text-[#101828] mb-1">CR (B.Sc. Aero Batch 4)</p>
                     <p className="text-sm text-[#475467]">Don't forget to bring the lab manuals today!</p>
                  </div>
               </div>
            </div>

            {/* Widget E: The Learning Vault */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#101828]">The Learning Vault</h3>
                  <button className="text-sm text-[#4B68E6] hover:underline font-medium">Browse All</button>
               </div>
               <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="border border-gray-200 p-3 rounded-xl flex items-start gap-3 hover:border-[#4B68E6] transition cursor-pointer group">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                           <FileText size={20} className="text-red-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                           <p className="text-sm font-semibold text-[#101828] truncate">Fluid_Dynamics_Ch4_Slides.pdf</p>
                           <p className="text-[11px] text-[#475467] mt-0.5">Uploaded 2 hours ago</p>
                        </div>
                     </div>
                     <div className="border border-gray-200 p-3 rounded-xl flex items-start gap-3 hover:border-[#4B68E6] transition cursor-pointer group">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                           <FileText size={20} className="text-[#4B68E6]" />
                        </div>
                        <div className="flex-1 min-w-0">
                           <div className="flex items-center gap-1">
                              <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
                              <p className="text-[10px] font-bold text-[#D4AF37] uppercase">Suggested PYQ</p>
                           </div>
                           <p className="text-sm font-semibold text-[#101828] truncate">Fall 2025 ME-205 Midterm</p>
                           <p className="text-[11px] text-[#475467] mt-0.5">45 Upvotes</p>
                        </div>
                     </div>
                  </div>
                  <div className="mt-4 border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                     <UploadCloud size={24} className="text-[#4B68E6] mb-2" />
                     <p className="text-sm font-bold text-[#101828]">Upload your notes here</p>
                     <p className="text-xs text-[#475467] mt-1">Drag & drop or click to browse</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Row: Community & Future */}
         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Widget F: Community & Events */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h3 className="text-lg font-bold text-[#101828] mb-4">Community & Events</h3>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition">
                     <div className="w-14 h-14 bg-purple-100 rounded-xl flex flex-col items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-purple-600 uppercase">Nov</span>
                        <span className="text-lg font-black text-purple-700 leading-none">16</span>
                     </div>
                     <div className="flex-1">
                        <p className="text-[11px] font-bold text-purple-600 uppercase tracking-wider mb-0.5">AeroDesign Club</p>
                        <p className="text-sm font-bold text-[#101828]">Wind Tunnel Testing Workshop</p>
                        <p className="text-xs text-[#475467] mt-1">4:00 PM • 30 attending</p>
                     </div>
                     <button className="px-4 py-2 bg-gray-100 text-[#101828] font-semibold text-sm rounded-lg hover:bg-gray-200 transition">RSVP</button>
                  </div>
                  <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition">
                     <div className="w-14 h-14 bg-emerald-100 rounded-xl flex flex-col items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-emerald-600 uppercase">Nov</span>
                        <span className="text-lg font-black text-emerald-700 leading-none">20</span>
                     </div>
                     <div className="flex-1">
                        <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-0.5">Sports</p>
                        <p className="text-sm font-bold text-[#101828]">Inter-Dept Football: Avionics vs. Aerospace</p>
                        <p className="text-xs text-[#475467] mt-1">5:00 PM</p>
                     </div>
                     <button className="px-4 py-2 bg-[#4B68E6] text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition">RSVP</button>
                  </div>
               </div>
            </div>

            {/* Widget G: Career & Mentorship */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <h3 className="text-lg font-bold text-[#101828] mb-4">Career & Mentorship</h3>
               <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition group cursor-pointer">
                     <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">Internship Match</p>
                        <p className="text-[11px] text-[#475467]">Apply by Nov 30</p>
                     </div>
                     <p className="text-sm font-bold text-[#101828] mb-1">Junior Maintenance Intern</p>
                     <p className="text-sm text-[#475467] flex items-center gap-1.5">
                        <Building size={14} /> Biman Bangladesh Airlines
                     </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition group cursor-pointer bg-gradient-to-br from-indigo-50 to-white">
                     <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-100 px-2 py-0.5 rounded flex items-center gap-1"><Star size={10} className="fill-indigo-600" /> Alumni Match</p>
                     </div>
                     <p className="text-sm font-bold text-[#101828] mb-1">Book a 1-on-1 session with Shafiqur Rahman</p>
                     <p className="text-sm text-[#475467] flex items-center gap-1.5">
                        <Users size={14} /> Aerospace Eng. '22, now at Boeing
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

function PlaceholderView({ title }: { title: string }) {
   return (
      <div className="flex flex-col items-center justify-center h-full text-center">
         <h2 className="text-xl font-bold text-[#101828] mb-2">{title}</h2>
         <p className="text-[#475467] text-sm">This module is under development.</p>
      </div>
   );
}

export function StudentDashboard() {
   const { user } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const [isQrModalOpen, setQrModalOpen] = useState(false);

   const handleSignOut = async () => {
      localStorage.removeItem("userRole");
      await supabase.auth.signOut();
      navigate("/");
   };

   const sidebarItems = [
      { icon: LayoutDashboard, label: "Home", path: "/dashboard", exact: true },
      { icon: BookOpen, label: "Academic Core", path: "/dashboard/core" },
      { icon: FolderGit2, label: "Learning Vault", path: "/dashboard/vault" },
      { icon: MessageSquare, label: "Communication Hub", path: "/dashboard/messages" },
      { icon: MapPin, label: "Campus Life", path: "/dashboard/campus" },
      { icon: Building, label: "Hall Management", path: "/dashboard/hall" },
      { icon: Users, label: "Clubs & Events", path: "/dashboard/clubs" },
      { icon: Briefcase, label: "Career & Jobs", path: "/dashboard/jobs" },
      { icon: GraduationCap, label: "Alumni Network", path: "/dashboard/alumni" },
   ];

   const firstName = user?.user_metadata?.first_name || "Student";
   const initial = firstName.charAt(0) || "S";

   return (
      <div className="flex h-screen bg-[#F4F8FC] text-[#101828] font-['Inter',sans-serif] relative overflow-hidden">
         <QrModal isOpen={isQrModalOpen} onClose={() => setQrModalOpen(false)} user={user} />

         {/* Sidebar */}
         <aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col shrink-0 hidden md:flex">
            <div className="px-6 py-6 border-b border-gray-200">
               <h1 className="text-2xl font-black tracking-tight">
                  <span className="text-[#101828]">Campus</span><span className="text-[#4B68E6]">X</span>
               </h1>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
               {sidebarItems.map((item) => {
                  const isActive = item.exact
                     ? location.pathname === item.path || location.pathname === item.path + "/"
                     : location.pathname.startsWith(item.path);

                  return (
                     <Link
                        key={item.label}
                        to={item.path}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all cursor-pointer ${isActive
                              ? "bg-[#4B68E6]/10 text-[#4B68E6]"
                              : "text-[#475467] hover:text-[#101828] hover:bg-gray-50"
                           }`}
                     >
                        <item.icon size={18} />
                        {item.label}
                     </Link>
                  );
               })}
            </nav>

            <div className="p-4 border-t border-gray-200">
               <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[14px] font-medium text-[#475467] hover:text-red-600 hover:bg-red-500/10 transition-all cursor-pointer"
               >
                  <LogOut size={18} />
                  Sign Out
               </button>
            </div>
         </aside>

         {/* Main Content */}
         <main className="flex-1 flex flex-col overflow-hidden relative">
            <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 shrink-0 z-10">
               <div className="flex items-center gap-8">
                  <div className="relative hidden md:block">
                     <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#475467]" />
                     <input
                        type="text"
                        placeholder="Search PYQs, Faculty, or Notices..."
                        className="w-[320px] h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#101828] placeholder:text-[#475467] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30 focus:border-[#4B68E6]/50 transition-all"
                     />
                  </div>
               </div>

               <div className="flex items-center gap-4">
                  <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                     <Bell size={18} className="text-[#475467]" />
                     <span className="absolute top-1 right-1 w-4 h-4 bg-[#EF4444] rounded-full text-[10px] text-white flex items-center justify-center font-bold border border-white">3</span>
                  </button>
                  <button
                     onClick={() => setQrModalOpen(true)}
                     className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4B68E6] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-semibold cursor-pointer border-2 border-transparent hover:border-[#D4AF37] transition-all shadow-sm"
                     title="Show Digital E-ID"
                  >
                     {initial}
                  </button>
               </div>
            </header>

            <div className="flex-1 overflow-y-auto p-4 md:p-8">
               <Routes>
                  <Route path="/" element={<StudentHome />} />
                  <Route path="vault" element={<LearningVaultView />} />
                  <Route path="core" element={<AcademicCoreDemo />} />
                  <Route path="messages" element={<CommHubDemo />} />
                  <Route path="campus" element={<CampusLifeDemo />} />
                  <Route path="hall" element={<HallMgmtDemo />} />
                  <Route path="clubs" element={<ClubsDemo />} />
                  <Route path="jobs" element={<JobsDemo />} />
                  <Route path="alumni" element={<AlumniDemo />} />
                  <Route path="settings" element={<SettingsDemo />} />
               </Routes>
            </div>

            {/* Persistent Floating Elements - Emergency SOS Button */}
            <div className="absolute bottom-8 right-8 z-40 group">
               <div className="absolute bottom-16 right-0 bg-white border border-red-200 shadow-xl rounded-xl p-2 flex flex-col gap-1 w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all translate-y-2 group-hover:translate-y-0">
                  <button className="text-left px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg">Call Campus Medical</button>
                  <button className="text-left px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg">Alert Security</button>
               </div>
               <button className="w-14 h-14 bg-red-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-red-700 hover:scale-105 transition-all focus:outline-none">
                  <PhoneCall size={24} />
               </button>
            </div>
         </main>
      </div>
   );
}
