import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

import { CampusXNavbar } from "../components/campusx/CampusXNavbar";
import { CampusXHero } from "../components/campusx/CampusXHero";
import { CampusXModulesSection } from "../components/campusx/CampusXModulesSection";
import { CampusXProblemSection } from "../components/campusx/CampusXProblemSection";
import { AboutSection } from "../components/AboutSection";
import { CampusXFooter } from "../components/campusx/CampusXFooter";

export function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const { user } = useAuth();
  const isSignedIn = !!user;

  // Scrollspy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "modules", "problem", "roles", "about"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = useCallback(
    (section: string) => {
      if (section === "login") {
        navigate("/login");
        return;
      }
      if (section === "signup") {
        navigate("/signup");
        return;
      }
      if (section === "dashboard") {
        navigate("/dashboard");
        return;
      }
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
        return;
      }
      if (section === "ecosystem" || section === "faculties" || section === "features") {
        section = "modules";
      }
      if (section === "students" || section === "faculty") {
        section = "roles";
      }
      setActiveSection(section);
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [navigate]
  );

  const handleGetStarted = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const handleGoToDashboard = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const handleFeatureSelect = useCallback((featureId: string) => {
    const el = document.getElementById("modules");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#F4F8FC] min-h-screen w-full overflow-x-hidden font-['Inter',sans-serif] text-[#101828] selection:bg-[#1677FF]/20 selection:text-[#0B1633]">
      {/* 1. Floating Pill Top Navbar matching Image 2 */}
      <CampusXNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 2. Hero Section matching Image 2 exactly with Panoramic Campus & Feature Dock */}
      <CampusXHero
        isSignedIn={isSignedIn}
        onGetStarted={handleGetStarted}
        onGoToDashboard={handleGoToDashboard}
        onSelectFeature={handleFeatureSelect}
      />

      {/* 3. Core University Intelligence Modules (M1-M8 & R&D) */}
      <CampusXModulesSection />

      {/* 4. Problem Solved & Institutional Network */}
      <CampusXProblemSection />

      {/* 5. User Roles & Institutional Mission */}
      <AboutSection
        onViewDetails={() => window.open("https://aaub.edu.bd/content/about-us", "_blank")}
      />

      {/* Clean Institutional Footer */}
      <CampusXFooter />
    </div>
  );
}
