import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import signupBg from "@/assets/signup-bg.png";

export function SignUpPage() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreeTerms) {
      setError("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }

    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) throw error;
      
      // If auto-confirm is enabled in Supabase, user may be created directly.
      // Usually, it sends a confirmation email.
      if (data?.user?.identities?.length === 0) {
        setError("This email is already registered.");
      } else {
        setSuccessMessage("Check your email for the confirmation link!");
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
              Join AAUB CampusX
            </h1>
            <p className="font-['Inter',sans-serif] text-[#717182] text-[15px] leading-relaxed">
              Create your institutional account to synchronize your courses, hall mess, and campus services.
            </p>
          </div>

          {/* Messages */}
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

          {/* Sign-Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Row */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block font-['Inter',sans-serif] font-medium text-[14px] text-[#030213] mb-1.5"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  required
                  className="w-full h-[48px] px-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-[10px] font-['Inter',sans-serif] text-[15px] text-[#030213] placeholder:text-[#a0a0b0] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30 focus:border-[#4B68E6] transition-all"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block font-['Inter',sans-serif] font-medium text-[14px] text-[#030213] mb-1.5"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  required
                  className="w-full h-[48px] px-4 bg-[#f3f3f5] border border-[rgba(0,0,0,0.1)] rounded-[10px] font-['Inter',sans-serif] text-[15px] text-[#030213] placeholder:text-[#a0a0b0] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30 focus:border-[#4B68E6] transition-all"
                />
              </div>
            </div>

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

            {/* Password */}
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
                  placeholder="Create a password"
                  required
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

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-[rgba(0,0,0,0.2)] accent-[#4B68E6] cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="font-['Inter',sans-serif] text-[13px] text-[#717182] cursor-pointer leading-relaxed"
              >
                I agree to the{" "}
                <span className="text-[#4B68E6] font-medium">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-[#4B68E6] font-medium">
                  Terms of Service
                </span>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading || !email || !password || !firstName || !lastName}
              className="w-full h-[48px] bg-[#4B68E6] hover:bg-[#3a57d5] text-white font-['Inter',sans-serif] font-semibold text-[15px] rounded-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center font-['Inter',sans-serif] text-[14px] text-[#717182] mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#4B68E6] font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden flex-col items-center justify-start py-20 px-12">
        <img
          src={signupBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[100%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#4B68E6]/20 to-[#2a1f6e]/40" />

        {/* Text Content */}
        <div className="relative z-10 text-center max-w-md animate-in fade-in slide-in-from-top-6 duration-1000">
          <h2 className="font-['Inter',sans-serif] font-bold text-white text-[42px] leading-tight mb-3 drop-shadow-2xl">
            Join CampusX
          </h2>
          <p className="font-['Inter',sans-serif] text-blue-50 text-[16px] font-medium leading-relaxed drop-shadow-md">
            Connect to AAUB's unified intelligence network with live academics, learning vault, and career pipelines.
          </p>
        </div>
      </div>
    </div>
  );
}
