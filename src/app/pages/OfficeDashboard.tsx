import { useNavigate, Routes, Route, Link, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Megaphone,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Search,
  Clock,
  Users,
  Inbox,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

function OfficeHome({ firstName, stats, recentApplications, recentNotices }: any) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#101828] mb-1">
          Welcome back, {firstName}
        </h2>
        <p className="text-[#475467] text-sm">Here's your administrative overview for today.</p>
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
        {/* Recent Applications */}
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#101828]">Recent Applications</h3>
            <button className="text-sm text-[#4B68E6] hover:underline cursor-pointer">View All</button>
          </div>
          <div className="space-y-4">
            {recentApplications.map((app: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-200 transition-all cursor-pointer group">
                <div>
                  <p className="text-sm font-medium text-[#101828] group-hover:text-[#4B68E6] transition-colors">{app.name}</p>
                  <p className="text-xs text-[#475467] flex items-center gap-1.5">
                    <FileText size={12} />
                    {app.type}
                    <span className="mx-1">·</span>
                    <Clock size={12} />
                    {app.time}
                  </p>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#4B68E6]/10 text-[#4B68E6]">
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Notices */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#101828]">Published Notices</h3>
            <button className="text-sm text-[#4B68E6] hover:underline cursor-pointer">View All</button>
          </div>
          <div className="space-y-4">
            {recentNotices.map((notice: any, idx: number) => (
              <div key={idx} className="p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-gray-200 transition-all cursor-pointer">
                <p className="text-sm font-medium text-[#101828] mb-1">{notice.title}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#475467] flex items-center gap-1.5">
                    <Clock size={12} />
                    {notice.date}
                  </p>
                  <p className="text-xs text-[#475467]">{notice.views} views</p>
                </div>
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

export function OfficeDashboard() {
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
    { icon: Inbox, label: "Applications", path: "/dashboard/applications" },
    { icon: FolderOpen, label: "Records", path: "/dashboard/records" },
    { icon: Megaphone, label: "Notices", path: "/dashboard/notices" },
    { icon: BarChart3, label: "Reports", path: "/dashboard/reports" },
    { icon: HelpCircle, label: "Support", path: "/dashboard/support" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  const stats = [
    { label: "Pending Applications", value: "24", change: "8 new today", icon: Inbox },
    { label: "Total Students", value: "1,247", change: "+58 this semester", icon: Users },
    { label: "Notices Published", value: "12", change: "3 this week", icon: Megaphone },
    { label: "Support Tickets", value: "7", change: "2 unresolved", icon: HelpCircle },
  ];

  const recentApplications = [
    { name: "Rahim Chowdhury", type: "Admission", status: "Pending", time: "1 hour ago" },
    { name: "Sadia Akter", type: "Transcript", status: "Processing", time: "3 hours ago" },
    { name: "Tanvir Hasan", type: "Certificate", status: "Pending", time: "5 hours ago" },
    { name: "Nusrat Jahan", type: "Transfer", status: "Review", time: "Yesterday" },
  ];

  const recentNotices = [
    { title: "Spring 2026 Registration Open", date: "Feb 22, 2026", views: 342 },
    { title: "Library Hours Extended for Exams", date: "Feb 20, 2026", views: 218 },
    { title: "Campus Maintenance Schedule", date: "Feb 18, 2026", views: 156 },
  ];

  const firstName = user?.user_metadata?.first_name || "Staff";
  const initial = firstName.charAt(0) || "S";

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
              placeholder="Search applications, records..."
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
            <Route path="/" element={<OfficeHome firstName={firstName} stats={stats} recentApplications={recentApplications} recentNotices={recentNotices} />} />
            <Route path="applications" element={<PlaceholderView title="Applications" />} />
            <Route path="records" element={<PlaceholderView title="Records" />} />
            <Route path="notices" element={<PlaceholderView title="Notices" />} />
            <Route path="reports" element={<PlaceholderView title="Reports" />} />
            <Route path="support" element={<PlaceholderView title="Support" />} />
            <Route path="settings" element={<PlaceholderView title="Settings" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
