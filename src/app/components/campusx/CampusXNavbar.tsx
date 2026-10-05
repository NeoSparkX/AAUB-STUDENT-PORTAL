import { useState, useEffect } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { ArrowUpRight, Menu, X, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CampusXLogo } from "./CampusXLogo";

interface CampusXNavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function CampusXNavbar({ activeSection, onNavigate }: CampusXNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setIsScrolled((prev) => {
            // Hysteresis threshold prevents jitter around scroll boundaries
            if (!prev && y > 75) return true;
            if (prev && y < 35) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Modules", id: "modules" },
    { label: "Why CampusX", id: "problem" },
    { label: "User Roles", id: "roles" },
    { label: "About", id: "about" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full px-5 sm:px-10 lg:px-14 transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
        isScrolled ? "pt-3 sm:pt-4" : "pt-5 sm:pt-7"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* =========================================================================
            LEFT: Free-floating Brand Logo
            ========================================================================= */}
        <div className="pointer-events-auto shrink-0 min-w-[130px]">
          <button
            onClick={() => handleNavClick("home")}
            className="cursor-pointer transition-opacity hover:opacity-90 flex items-center"
            aria-label="AAUB CampusX Home"
          >
            <CampusXLogo />
          </button>
        </div>

        {/* =========================================================================
            CENTER: Isolated Floating Frosted Glass Navigation Pill
            Smoothly morphs with layout animation to include the Sign In button on scroll.
            ========================================================================= */}
        <motion.nav
          layout
          transition={{
            layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          className="hidden md:flex items-center gap-1 bg-white/85 backdrop-blur-2xl -webkit-backdrop-blur-2xl border border-white/90 shadow-[0_8px_32px_rgba(15,23,42,0.08)] rounded-full px-2 py-1.5 pointer-events-auto"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer rounded-full text-[13.5px] transition-all duration-200 whitespace-nowrap relative ${
                  isActive
                    ? "text-[#0B1633] font-bold px-4 py-1.5"
                    : "text-[#475467] font-medium hover:text-[#0B1633] px-3.5 py-1.5 hover:bg-white/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill-highlight"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.08)] -z-10"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}

          {/* Framer Motion: In-Pill Sign In / Auth Button (Animates smoothly in when viewer scrolls down) */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                key="pill-auth-button"
                initial={{ opacity: 0, width: 0, scale: 0.9 }}
                animate={{ opacity: 1, width: "auto", scale: 1 }}
                exit={{ opacity: 0, width: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden flex items-center"
              >
                <div className="flex items-center pl-1 shrink-0">
                  <div className="h-4 w-px bg-black/10 mr-1.5 shrink-0" />

                  <SignedOut>
                    <button
                      onClick={() => onNavigate("login")}
                      className="bg-[#111827] hover:bg-[#0B1633] text-white font-['Inter',sans-serif] font-medium text-[12.5px] px-3.5 py-1.5 rounded-full cursor-pointer transition-all duration-200 shadow-xs flex items-center gap-1.5 whitespace-nowrap group"
                    >
                      <span>Sign In</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </SignedOut>

                  <SignedIn>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onNavigate("dashboard")}
                        className="bg-[#1677FF] hover:bg-[#0958d9] text-white font-['Inter',sans-serif] font-medium text-[12px] px-3 py-1 rounded-full cursor-pointer transition-all shadow-xs flex items-center gap-1 whitespace-nowrap"
                      >
                        <LayoutDashboard className="w-3 h-3" />
                        <span>Dashboard</span>
                      </button>
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-7 h-7 rounded-full border border-black/10 shadow-xs",
                          },
                        }}
                      />
                    </div>
                  </SignedIn>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* =========================================================================
            RIGHT: Outer Sign In Pill Button (Visible only at top of page, dissolves on scroll)
            Fixed width container keeps center pill locked in position without nudging.
            ========================================================================= */}
        <div className="hidden md:flex items-center justify-end shrink-0 pointer-events-auto min-w-[130px]">
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                key="outer-auth-button"
                initial={{ opacity: 0, scale: 0.9, x: 8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center"
              >
                <SignedOut>
                  <button
                    onClick={() => onNavigate("login")}
                    className="bg-[#111827] hover:bg-[#0B1633] text-white font-['Inter',sans-serif] font-medium text-[13.5px] px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(17,24,39,0.15)] flex items-center gap-2 group whitespace-nowrap"
                  >
                    <span>Sign In</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </SignedOut>

                <SignedIn>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onNavigate("dashboard")}
                      className="bg-[#1677FF] hover:bg-[#0958d9] text-white font-['Inter',sans-serif] font-medium text-[13px] px-4 py-2 rounded-full cursor-pointer transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5" />
                      <span>Dashboard</span>
                    </button>
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8 rounded-full border border-black/10 shadow-xs",
                        },
                      }}
                    />
                  </div>
                </SignedIn>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden pointer-events-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-white/80 border border-white shadow-xs flex items-center justify-center text-[#0B1633] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white/95 backdrop-blur-[24px] border border-white/80 shadow-[0_16px_40px_rgba(16,24,40,0.12)] rounded-3xl p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto max-w-[1400px] mx-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left px-4 py-2.5 rounded-2xl text-[15px] font-medium transition-colors ${
                activeSection === item.id
                  ? "bg-[#1677FF]/10 text-[#1677FF] font-semibold"
                  : "text-[#101828] hover:bg-black/5"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-black/5 mt-1 flex flex-col gap-2">
            <SignedOut>
              <button
                onClick={() => handleNavClick("login")}
                className="w-full bg-[#111827] text-white py-2.5 rounded-2xl font-medium text-[14px] flex items-center justify-center gap-1.5"
              >
                <span>Sign In</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </SignedOut>
            <SignedIn>
              <button
                onClick={() => handleNavClick("dashboard")}
                className="w-full bg-[#1677FF] text-white py-2.5 rounded-2xl font-medium text-[14px] flex items-center justify-center gap-1.5"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Go to Dashboard</span>
              </button>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
