import {
  BookOpen, Calendar, MapPin, Building, Users, Briefcase, GraduationCap,
  MessageSquare, FileText, CheckCircle2, AlertCircle, TrendingUp, Bus, Utensils,
  Search, PhoneCall, Mail, Star, Settings, Shield, Bell
} from "lucide-react";

export function AcademicCoreDemo() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-[#101828] mb-4">Current Semester Grades</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 text-sm text-[#475467]">
                <th className="pb-3 font-medium">Course Code</th>
                <th className="pb-3 font-medium">Course Title</th>
                <th className="pb-3 font-medium">Credits</th>
                <th className="pb-3 font-medium">Midterm</th>
                <th className="pb-3 font-medium">Class Test</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-4 text-sm font-bold text-[#101828]">AE-301</td>
                <td className="py-4 text-sm text-[#475467]">Aerodynamics II</td>
                <td className="py-4 text-sm text-[#475467]">3.0</td>
                <td className="py-4 text-sm font-semibold text-green-600">24/30</td>
                <td className="py-4 text-sm font-semibold text-green-600">18/20</td>
                <td className="py-4 text-sm text-green-600 flex items-center gap-1"><TrendingUp size={14}/> Excellent</td>
              </tr>
              <tr>
                <td className="py-4 text-sm font-bold text-[#101828]">ME-205</td>
                <td className="py-4 text-sm text-[#475467]">Thermodynamics</td>
                <td className="py-4 text-sm text-[#475467]">3.0</td>
                <td className="py-4 text-sm font-semibold text-orange-600">18/30</td>
                <td className="py-4 text-sm font-semibold text-green-600">15/20</td>
                <td className="py-4 text-sm text-orange-600 flex items-center gap-1"><AlertCircle size={14}/> Needs Work</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function CommHubDemo() {
  return (
    <div className="flex gap-6 h-[600px]">
      <div className="w-1/3 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <input type="text" placeholder="Search messages..." className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#4B68E6]" />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer bg-blue-50/50">
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm font-bold text-[#101828]">B.Sc Aero Batch 4</p>
              <span className="text-[10px] text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded font-bold">2 NEW</span>
            </div>
            <p className="text-xs text-[#475467] truncate">CR: Don't forget the lab manuals!</p>
          </div>
          <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <p className="text-sm font-bold text-[#101828] mb-1">Prof. Islam</p>
            <p className="text-xs text-[#475467] truncate">I have uploaded the revised Chapter 4 slides.</p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white rounded-2xl border border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">B4</div>
           <div>
             <p className="text-sm font-bold text-[#101828]">B.Sc Aero Batch 4</p>
             <p className="text-xs text-[#475467]">64 Members</p>
           </div>
        </div>
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-4">
           <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">CR</div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm max-w-md">
                 <p className="text-sm text-[#101828]">Hey everyone, don't forget to bring the printed lab manuals for today's Fluid Mechanics session!</p>
                 <p className="text-[10px] text-gray-400 mt-1">10:42 AM</p>
              </div>
           </div>
           <div className="flex gap-3 flex-row-reverse">
              <div className="bg-[#4B68E6] text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-md">
                 <p className="text-sm">Got it, thanks! Are we doing Experiment 3 or 4?</p>
                 <p className="text-[10px] text-blue-200 mt-1">10:45 AM</p>
              </div>
           </div>
        </div>
        <div className="p-4 border-t border-gray-200">
           <input type="text" placeholder="Type a message..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4B68E6]" />
        </div>
      </div>
    </div>
  );
}

export function CampusLifeDemo() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
       <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm min-h-[400px] flex flex-col items-center justify-center bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
          <MapPin size={48} className="text-[#4B68E6] mb-4 relative z-10" />
          <h3 className="text-xl font-bold text-[#101828] relative z-10">Live Campus Map</h3>
          <p className="text-sm text-[#475467] mt-2 relative z-10">Interactive GPS tracking loading...</p>
          <div className="absolute top-6 left-6 right-6 flex gap-4 z-10">
             <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2">
                <Bus size={16} className="text-blue-500"/>
                <span className="text-sm font-bold text-[#101828]">University Bus (Coaster) <span className="text-green-500 ml-2">Live • ETA 2 mins</span></span>
             </div>
          </div>
       </div>
       <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#101828] mb-4">Service Directory</h3>
          <div className="space-y-4">
             <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:border-gray-300">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center"><PhoneCall size={18} className="text-red-500"/></div>
                   <div>
                      <p className="text-sm font-bold text-[#101828]">Campus Medical Center</p>
                      <p className="text-xs text-[#475467]">Available 24/7 for emergencies</p>
                   </div>
                </div>
                <button className="text-red-500 font-bold text-sm">Call Now</button>
             </div>
             <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:border-gray-300">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center"><BookOpen size={18} className="text-blue-500"/></div>
                   <div>
                      <p className="text-sm font-bold text-[#101828]">Central Library</p>
                      <p className="text-xs text-[#475467]">Open until 10:00 PM today</p>
                   </div>
                </div>
                <button className="text-[#4B68E6] font-bold text-sm">View Hours</button>
             </div>
          </div>
       </div>
    </div>
  );
}

export function HallMgmtDemo() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
       <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#101828] mb-6">Daily Meal Tracker</h3>
          <div className="grid grid-cols-3 gap-4">
             <div className="border-2 border-green-500 bg-green-50 rounded-xl p-4 text-center cursor-pointer">
                <Utensils size={24} className="text-green-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-[#101828]">Breakfast</p>
                <p className="text-xs text-green-700 font-bold mt-1">Consumed</p>
             </div>
             <div className="border-2 border-[#4B68E6] bg-blue-50 rounded-xl p-4 text-center cursor-pointer shadow-md transform scale-105">
                <Utensils size={24} className="text-[#4B68E6] mx-auto mb-2" />
                <p className="text-sm font-bold text-[#101828]">Lunch</p>
                <p className="text-xs text-blue-700 font-bold mt-1">QR Ready</p>
                <p className="text-[10px] text-gray-500 mt-1">Chicken Biryani</p>
             </div>
             <div className="border border-gray-200 bg-gray-50 rounded-xl p-4 text-center cursor-pointer opacity-70">
                <Utensils size={24} className="text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-bold text-gray-500">Dinner</p>
                <p className="text-xs text-gray-400 font-bold mt-1">Canceled</p>
             </div>
          </div>
       </div>
       <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col justify-center">
          <h3 className="text-lg font-bold text-[#101828] mb-2">Current Mess Bill</h3>
          <p className="text-4xl font-black text-[#101828]">৳ 2,450</p>
          <p className="text-sm text-[#475467] mb-6">Due by Nov 30</p>
          <button className="w-full py-3 bg-[#101828] text-white rounded-xl font-bold hover:bg-black transition">Pay Now via bKash</button>
       </div>
    </div>
  );
}

export function ClubsDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
             <span className="text-4xl">✈️</span>
          </div>
          <div className="p-5 relative">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center absolute -top-6">
                <span className="font-black text-[#101828]">AD</span>
             </div>
             <h3 className="text-lg font-bold text-[#101828] mt-4 mb-1">AeroDesign Club</h3>
             <p className="text-sm text-[#475467] mb-4">Learn to build, fly, and optimize fixed-wing RC aircraft.</p>
             <button className="w-full py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-[#101828] hover:bg-gray-100 transition">Joined</button>
          </div>
       </div>
       <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
             <span className="text-4xl">💻</span>
          </div>
          <div className="p-5 relative">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center absolute -top-6">
                <span className="font-black text-[#101828]">CC</span>
             </div>
             <h3 className="text-lg font-bold text-[#101828] mt-4 mb-1">Computer Club</h3>
             <p className="text-sm text-[#475467] mb-4">Competitive programming and software development.</p>
             <button className="w-full py-2 bg-[#4B68E6] text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition">Join Club</button>
          </div>
       </div>
       <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="h-32 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
             <span className="text-4xl">⚽</span>
          </div>
          <div className="p-5 relative">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center absolute -top-6">
                <span className="font-black text-[#101828]">SC</span>
             </div>
             <h3 className="text-lg font-bold text-[#101828] mt-4 mb-1">Sports Club</h3>
             <p className="text-sm text-[#475467] mb-4">Inter-department tournaments and athletic events.</p>
             <button className="w-full py-2 bg-[#4B68E6] text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition">Join Club</button>
          </div>
       </div>
    </div>
  );
}

export function JobsDemo() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
       <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-[#101828]">Job & Internship Board</h3>
          <div className="flex gap-2">
             <button className="px-3 py-1.5 bg-[#4B68E6] text-white text-sm font-bold rounded-lg">Internships</button>
             <button className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-[#475467] text-sm font-bold rounded-lg">Full-Time</button>
          </div>
       </div>
       <div className="space-y-4">
          <div className="p-5 border border-gray-200 rounded-xl hover:border-[#4B68E6] transition cursor-pointer flex gap-4 items-start">
             <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <Building size={24} className="text-gray-500" />
             </div>
             <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                   <h4 className="text-base font-bold text-[#101828]">Junior Maintenance Intern</h4>
                   <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Open</span>
                </div>
                <p className="text-sm text-[#475467] mb-3">Biman Bangladesh Airlines • Dhaka, BD</p>
                <div className="flex gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">Aerospace</span>
                   <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">Avionics</span>
                </div>
             </div>
          </div>
          <div className="p-5 border border-gray-200 rounded-xl hover:border-[#4B68E6] transition cursor-pointer flex gap-4 items-start">
             <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <Building size={24} className="text-gray-500" />
             </div>
             <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                   <h4 className="text-base font-bold text-[#101828]">Software Engineering Intern</h4>
                   <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Open</span>
                </div>
                <p className="text-sm text-[#475467] mb-3">Pathao • Dhaka, BD</p>
                <div className="flex gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">Computer Science</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}

export function AlumniDemo() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
       <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-[#101828]">Alumni Mentors</h3>
          <input type="text" placeholder="Search by company or role..." className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#4B68E6]" />
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-5 flex items-start gap-4">
             <div className="w-14 h-14 bg-gradient-to-br from-[#4B68E6] to-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                SR
             </div>
             <div>
                <h4 className="text-base font-bold text-[#101828]">Shafiqur Rahman</h4>
                <p className="text-sm text-[#475467] mb-1">Aerospace Engineer at Boeing</p>
                <p className="text-xs text-gray-400 mb-3">Graduated 2022</p>
                <button className="text-sm font-bold text-[#4B68E6] hover:underline flex items-center gap-1"><Calendar size={14}/> Book 1-on-1 Session</button>
             </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-5 flex items-start gap-4">
             <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                FA
             </div>
             <div>
                <h4 className="text-base font-bold text-[#101828]">Fariha Ahmed</h4>
                <p className="text-sm text-[#475467] mb-1">Data Scientist at Google</p>
                <p className="text-xs text-gray-400 mb-3">Graduated 2020</p>
                <button className="text-sm font-bold text-[#4B68E6] hover:underline flex items-center gap-1"><Calendar size={14}/> Book 1-on-1 Session</button>
             </div>
          </div>
       </div>
    </div>
  );
}

export function SettingsDemo() {
  return (
    <div className="max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
       <div className="border-b border-gray-200 p-6">
          <h3 className="text-lg font-bold text-[#101828]">Profile Settings</h3>
          <p className="text-sm text-[#475467]">Manage your personal information and preferences.</p>
       </div>
       <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
             <div>
                <p className="text-sm font-bold text-[#101828]">Email Notifications</p>
                <p className="text-xs text-[#475467]">Receive updates about your academic progress.</p>
             </div>
             <div className="w-11 h-6 bg-[#4B68E6] rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
             </div>
          </div>
          <div className="flex items-center justify-between">
             <div>
                <p className="text-sm font-bold text-[#101828]">SMS Alerts</p>
                <p className="text-xs text-[#475467]">Emergency campus notifications.</p>
             </div>
             <div className="w-11 h-6 bg-[#4B68E6] rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
             </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
             <button className="text-sm font-bold text-red-600 hover:underline flex items-center gap-2">
                <Shield size={16}/> Delete Account Data
             </button>
          </div>
       </div>
    </div>
  );
}
