import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <header className="sticky top-0 z-30 s bg-white/60 border-white/60 border-b backdrop-blur">
        <div className="mx-auto max-w-8xl px-10">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link to="/" className="inline-flex items-center space-x-2">
              <span className="text-2xl tracking-tight font-semibold">
                <span className="text-slate-900">Easy</span><span className="bg-clip-text text-transparent bg-violet-600">Resume</span>
              </span>
            </Link>
            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link className="transition hover:text-slate-900 font-medium text-slate-900/80" to="#">Resume</Link>
              <Link className="transition hover:text-slate-900 font-medium text-slate-900/60" to="#">ATS Score</Link>
              <Link className="transition hover:text-slate-900 font-medium text-slate-900/60" to="#">Features</Link>
              <Link className="transition hover:text-slate-900 font-medium text-slate-900/60" to="#">Testimonials</Link>
            </nav>
            {/* Actions */}
            <div className="flex items-center gap-6">
              <Link to="/login" className="hidden sm:inline-flex hover:text-slate-900 font-medium font-rubik text-slate-900/70">Sign in</Link>
              {/* <Link to="/signup" className="inline-flex items-center gap-2 hover:bg-violet-500 transition font-rubik font-medium text-white bg-violet-600 rounded-sm pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm">Get Started</Link>

              <Link to= "/login" className='secondary-btn'>Sign in</Link> */}
              <Link to= "/signup" className='primary-btn'>Get Started</Link>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar