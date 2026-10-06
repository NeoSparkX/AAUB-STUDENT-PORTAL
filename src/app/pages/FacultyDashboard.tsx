import { useNavigate, Routes, Route, Link, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  ClipboardCheck,
  Award,
  Calendar,
  Settings,
  LogOut,
  Bell,
  Search,
  Clock,
  FileText,
  ChevronRight,
} from "lucide-react";

// The Home view for the faculty dashboard
function FacultyHome({ firstName, stats, myCourses, recentSubmissions }: any) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#101828] mb-1">
          Welcome back, {firstName}
        </h2>
        <p className="text-[#475467] text-sm">Here's your teaching overview for today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map((stat: any) => (
          <div key={stat.label} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-200 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100">
                <stat.icon size={20} className="text-[#667085]" />
              </div>
              <ChevronRight size={16} className="text-[#475467] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-3xl font-bold text-[#101828] mb-1">{stat.value}</p>
            <p className="text-sm text-[#475467]">{stat.label}</p>
            <p className="text-xs mt-2 text-[#475467]">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* My Courses */}
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#101828]">My Courses</h3>
            <button className="text-sm text-[#4B68E6] hover:underline cursor-pointer">View All</button>
          </div>
          <div className="space-y-4">
            {myCourses.map((course: any) => (
              <div key={course.code} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-200 transition-all cursor-pointer group">
                <div>
                  <p className="text-sm font-medium text-[#101828] group-hover:text-[#4B68E6] transition-colors">{course.name}</p>
                  <p className="text-xs text-[#475467]">{course.code} · Section {course.section}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#475467]" />
                  <span className="text-sm text-[#667085]">{course.students}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#101828]">Recent Submissions</h3>
            <button className="text-sm text-[#4B68E6] hover:underline cursor-pointer">View All</button>
          </div>
          <div className="space-y-4">
            {recentSubmissions.map((sub: any, idx: number) => (
              <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-200 transition-all cursor-pointer">
                <p className="text-sm font-medium text-[#101828] mb-1">{sub.student}</p>
                <p className="text-xs text-[#475467] mb-1">{sub.assignment}</p>
                <p className="text-xs text-[#475467] flex items-center gap-1.5">
                  <Clock size={12} />
                  {sub.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Placeholder for unbuilt pages
function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-xl font-bold text-[#101828] mb-2">{title}</h2>
      <p className="text-[#475467] text-sm">This module is under development.</p>
    </div>
  );
}

export function FacultyDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    localStorage.removeItem("userRole");
    await supabase.auth.signOut();
    navigate("/");
  };

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", exact: true },
    { icon: BookOpen, label: "My Courses", path: "/dashboard/courses" },
    { icon: Users, label: "Students", path: "/dashboard/students" },
    { icon: ClipboardCheck, label: "Attendance", path: "/dashboard/attendance" },
    { icon: Award, label: "Grading", path: "/dashboard/grading" },
    { icon: Calendar, label: "Schedule", path: "/dashboard/schedule" },
    { icon: FileText, label: "Resources", path: "/dashboard/resources" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  const stats = [
    { label: "Classes Today", value: "4", change: "Next at 10:00 AM", icon: BookOpen },
    { label: "Total Students", value: "127", change: "Across 4 courses", icon: Users },
    { label: "Pending Grades", value: "18", change: "Due by Mar 5", icon: Award },
    { label: "Office Hours", value: "2h", change: "Today 3-5 PM", icon: Clock },
  ];

  const myCourses = [
    { name: "Aerodynamics I", code: "AERO 201", students: 32, section: "A" },
    { name: "Flight Mechanics", code: "AERO 305", students: 28, section: "B" },
    { name: "Aircraft Structures", code: "AERO 401", students: 35, section: "A" },
    { name: "Propulsion Systems", code: "AERO 310", students: 32, section: "C" },
  ];

  const recentSubmissions = [
    { student: "Ahmed Rahman", assignment: "Aerodynamics Lab Report", time: "2 hours ago" },
    { student: "Fatima Hassan", assignment: "Flight Mechanics HW #5", time: "4 hours ago" },
    { student: "Karim Uddin", assignment: "Structures Mid-term", time: "Yesterday" },
  ];

  const firstName = user?.user_metadata?.first_name || "Faculty";
  const initial = firstName.charAt(0) || "F";

  return (
    <div className="flex h-screen bg-[#F4F8FC] text-[#101828] font-['Inter',sans-serif]">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col shrink-0">
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
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[14px] font-medium transition-all cursor-pointer ${
                  isActive
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
          <div className="flex items-center gap-3 px-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4B68E6] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-semibold">
              {initial}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#101828] truncate">{firstName}</p>
              <p className="text-xs text-[#475467] truncate">{user?.email || ""}</p>
            </div>
          </div>
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
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-xl flex items-center justify-between px-8 shrink-0">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#475467]" />
            <input
              type="text"
              placeholder="Search students, courses..."
              className="w-[320px] h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#101828] placeholder:text-[#475467] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30 focus:border-[#4B68E6]/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
              <Bell size={18} className="text-[#475467]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EF4444] rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4B68E6] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-semibold">
              {initial}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <Routes>
            <Route path="/" element={<FacultyHome firstName={firstName} stats={stats} myCourses={myCourses} recentSubmissions={recentSubmissions} />} />
            <Route path="courses" element={<PlaceholderView title="My Courses" />} />
            <Route path="students" element={<PlaceholderView title="Students" />} />
            <Route path="attendance" element={<PlaceholderView title="Attendance" />} />
            <Route path="grading" element={<PlaceholderView title="Grading" />} />
            <Route path="schedule" element={<PlaceholderView title="Schedule" />} />
            <Route path="resources" element={<PlaceholderView title="Resources" />} />
            <Route path="settings" element={<PlaceholderView title="Settings" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
