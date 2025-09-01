import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className="py-8 bg-[#F1EAFE]">
        <div className="mx-auto max-w-8xl px-10">
          <div className="flex flex-col md:flex-row gap-4 text-slate-600 items-center justify-between">
            <p className="text-sm font-medium">© <span id="y">{new Date().getFullYear()}</span> EasyResume. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link to="#" className="hover:text-slate-900">Privacy</Link>
              <Link to="#" className="hover:text-slate-900">Terms</Link>
              <Link to="#" className="hover:text-slate-900">Support</Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer