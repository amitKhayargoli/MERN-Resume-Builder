import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Linkedin,
  Chrome,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUpCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative mx-auto max-w-xl w-full p-6 sm:p-8">
      <div className="rounded-2xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur">
        <div className="p-6 sm:p-8">
          {/* Headline */}
          <p className="mb-5 text-violet-700 text-lg font-semibold text-center">
            Create your EasyResume account
          </p>
          {/* Social login */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2.5 ring-1 ring-slate-200 hover:bg-slate-50 transition font-medium">
              <Linkedin className="w-4 h-4 stroke-[1.5]" />
              Sign up with LinkedIn
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2.5 ring-1 ring-slate-200 hover:bg-slate-50 transition font-medium">
              <Chrome className="w-4 h-4 stroke-[1.5]" />
              Sign up with Google
            </button>
          </div>

          {/* Divider */}
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
          <form className="space-y-5" action="#" method="post" noValidate>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-slate-700"
              >
                Full Name
              </label>
              <div className="mt-2 relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="John Doe"
                  className="block w-full rounded-lg border border-slate-200 bg-white px-10 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60 transition font-medium"
                />
              </div>
            </div>

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
                  className="block w-full rounded-lg border border-slate-200 bg-white px-10 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60 transition font-medium"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="••••••••"
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-slate-700"
              >
                Confirm Password
              </label>
              <div className="mt-2 relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-slate-200 bg-white px-10 pr-10 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60 transition font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-700"
                  aria-label="Toggle password visibility"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4 stroke-[1.5]" />
                  ) : (
                    <Eye className="w-4 h-4 stroke-[1.5]" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 text-white px-5 py-3.5 shadow-sm hover:bg-violet-500 transition font-medium">
              Create Account
              <ArrowRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </form>

          {/* Sign in */}
          <p className="mt-6 text-center text-sm text-slate-600 font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-700 hover:text-violet-800 font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
