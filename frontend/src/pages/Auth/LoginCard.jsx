import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Linkedin,
  Chrome,
} from "lucide-react";

import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Loading from "../../components/Loading";
export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative mx-auto max-w-xl w-full p-6 sm:p-8">
      <div className="rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur">
        <div className="p-6 sm:p-8">
          {/* Headline */}
          <p className="mb-5 font-rubik text-violet-700 text-2xl font-semibold text-center">
            Welcome back to EasyResume
          </p>
          {/* Social login */}
          <div className="grid grid-cols-1 gap-3 mb-6">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2.5 ring-1 ring-slate-200 hover:bg-slate-50 transition font-medium">
              {/* <FaLinkedin className="w-8 h-8 text-[#0A66C2]" /> */}
              <img src="linkedin.png" className="w-12 h-12"></img>
              Continue with LinkedIn
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2.5 ring-1 ring-slate-200 hover:bg-slate-50 transition font-medium">
              {/* <FaGoogle className="w-8 h-8 text-violet-700 " />
               */}
              <img src="google.png" className="w-12 h-12"></img>
              Continue with Google
            </button>
          </div>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-sm text-slate-500 font-medium">
                or
              </span>
            </div>
          </div>
          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin} noValidate>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <div className="mt-2 relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-slate-200 bg-white px-10 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60 transition font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-violet-700 hover:text-violet-800"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="mt-2 relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-slate-200 bg-white px-10 pr-10 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60 transition font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-700"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 stroke-[1.5]" />
                  ) : (
                    <Eye className="w-4 h-4 stroke-[1.5]" />
                  )}
                </button>
              </div>
            </div>

            {/* Error MESSAGE*/}
            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 text-white px-5 py-3.5 shadow-sm hover:bg-violet-500 transition font-medium"
            >
              Sign in
              <ArrowRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </form>

          {/* Sign up */}
          <p className="mt-6 text-center text-sm text-slate-600 font-medium">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-violet-700 hover:text-violet-800 font-medium"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
