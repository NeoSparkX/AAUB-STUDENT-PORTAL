import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import loginBg from "@/assets/blue-bg.png";
import loginFore from "@/assets/login-fore.png";

export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Magic link state
  const [useMagicLink, setUseMagicLink] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      if (useMagicLink) {
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
          }
        });
        
        if (error) throw error;
        setSuccessMessage("Check your email for the magic link!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        navigate("/dashboard");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-12 bg-white relative">
        {/* Back button */}
        <Link
          to="/"
          className="absolute top-6 left-6 sm:left-12 lg:left-20 flex items-center gap-2 text-[#717182] hover:text-[#030213] transition-colors font-['Inter',sans-serif] text-sm"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="w-full max-w-[420px]">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-['Inter',sans-serif] font-bold text-[32px] text-[#030213] leading-tight mb-2">
              Sign in to CampusX
            </h1>
            <p className="font-['Inter',sans-serif] text-[#717182] text-[15px] leading-relaxed">
              Access your live academic core, campus transport, and university services
            </p>
          </div>

          {/* Error & Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-['Inter',sans-serif]">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm font-['Inter',sans-serif]">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-['Inter',sans-serif] font-medium text-[14px] text-[#030213] mb-1.5"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full h-[48px] px-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-[10px] font-['Inter',sans-serif] text-[15px] text-[#030213] placeholder:text-[#a0a0b0] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30 focus:border-[#4B68E6] transition-all"
              />
            </div>

            {/* Password (only if not using magic link) */}
            {!useMagicLink && (
              <div>
                <label
                  htmlFor="password"
                  className="block font-['Inter',sans-serif] font-medium text-[14px] text-[#030213] mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required={!useMagicLink}
                    className="w-full h-[48px] px-4 pr-12 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-[10px] font-['Inter',sans-serif] text-[15px] text-[#030213] placeholder:text-[#a0a0b0] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30 focus:border-[#4B68E6] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0a0b0] hover:text-[#717182] transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading || !email || (!useMagicLink && !password)}
              className="w-full h-[48px] bg-[#4B68E6] hover:bg-[#3a57d5] text-white font-['Inter',sans-serif] font-semibold text-[15px] rounded-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              {useMagicLink ? "Send Magic Link" : "Sign In"}
            </button>
            
            {/* Toggle Magic Link */}
            <button
              type="button"
              onClick={() => {
                setUseMagicLink(!useMagicLink);
                setError("");
                setSuccessMessage("");
              }}
              className="w-full text-center font-['Inter',sans-serif] text-[14px] text-[#4B68E6] hover:underline cursor-pointer"
            >
              {useMagicLink ? "Sign in with password instead" : "Sign in with Magic Link"}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center font-['Inter',sans-serif] text-[14px] text-[#717182] mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#4B68E6] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden flex-col items-center justify-start py-20 px-12">
        <img
          src={loginBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#4B68E6]/20 to-[#2a1f6e]/40" />

        {/* Text Content */}
        <div className="relative z-10 text-center max-w-md animate-in fade-in slide-in-from-top-6 duration-1000">
          <h2 className="font-['Inter',sans-serif] font-bold text-white text-[42px] leading-tight mb-3 drop-shadow-2xl">
            AAUB CampusX
          </h2>
          <p className="font-['Inter',sans-serif] text-blue-50 text-[16px] font-medium leading-relaxed drop-shadow-md">
            Unified University Intelligence. One platform connecting academics, logistics, and student life.
          </p>
        </div>

        {/* Illustration at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[110%] max-w-[1000px]">
          <img
            src={loginFore}
            alt="Student Portal Illustration"
            className="w-full h-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
