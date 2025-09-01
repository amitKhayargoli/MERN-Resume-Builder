import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone, Mail, Link as LinkIcon, Twitter, Linkedin, Instagram } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
  useEffect(() => {
    const y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();
  }, []);

  return (
      <section className="relative overflow-hidden bg-[#F1EAFE]">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] bg-fuchsia-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] bg-violet-400/20 rounded-full blur-3xl"></div>
          </div>
          {/* Subtle contour lines */}
          <svg className="absolute inset-0 opacity-40 w-[24px] h-[24px]" aria-hidden="true" strokeWidth="2">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#e9e0ff" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl pt-20 md:pt-12 lg:pt-12 mr-auto ml-auto pr-6 pl-6">
          {/* Eyebrow */}
          <p className="md:text-base uppercase text-sm font-medium text-violet-700/80 tracking-[0.18em] text-center">
            Best online resume builder
          </p>

          {/* Headline */}
          <div className="md:mt-6 text-center mt-5">
            <h1 className="max-w-3xl md:max-w-4xl md:text-5xl lg:text-6xl text-4xl font-semibold text-slate-900 tracking-tight mr-auto ml-auto">
              Your Success
                <span className="ml-3">Story Begins</span>
              <span className="inline-block align-middle relative">
                <Send className="md:w-7 md:h-7 absolute -right-7 -top-6 md:-top-10  rotate-12 w-[24px] h-[24px] text-violet-600" />
              </span>
              <span className="block mt-2">with a
                <span className="ml-4 relative inline-block">
                  <span className="text-violet-700">resume</span>
                  <svg className="absolute left-0 right-0 -bottom-2 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M2 10 C40 2, 80 14, 120 6 S 180 8, 198 6" fill="none" stroke="rgb(124,58,237)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* CTA */}
            <div className="mt-8">
              <Link to="/templates" className="inline-flex items-center gap-2 hover:bg-violet-500 transition font-medium text-white bg-violet-600 rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm">
                Start now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Resume preview card */}
          <div className="hidden md:block sm:relative md:mt-16 mt-12">
            <div className="max-w-5xl mr-auto ml-auto">
              <div className="rounded-2xl shadow-xl ring-1 overflow-hidden bg-white/90 ring-black/5">
                <div className="grid md:grid-cols-2">
                  {/* Left: Photo with name overlay */}
                  <div className="relative bg-gradient-to-br from-slate-200 to-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                      alt="Female person portrait"
                      className="h-72 md:h-full w-full object-center object-cover md:object-cover"
                    />
                    <div className="absolute left-0 top-0 p-5 sm:p-6">
                      <div className="inline-flex flex-col rounded-lg backdrop-blur px-4 py-3 shadow-sm bg-white/70">
                        <span className="text-xl tracking-tight font-semibold text-slate-900">Amara Rivera</span>
                        <span className="text-sm font-medium text-slate-600">Product Designer</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Contact + About/Experience */}
                  <div className="sm:p-8 pt-6 lg:pr-8 pb-6 pl-6">
                    {/* Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Contact</h3>
                        <ul className="text-slate-700 mt-3 space-y-2">
                          <li className="flex gap-2 items-center">
                            <Phone className="w-4 h-4 text-violet-600" />
                            <span className="font-medium">+1 (555) 123-4567</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-violet-600" />
                            <span className="font-medium">amara.r@example.com</span>
                          </li>
                          <li className="flex gap-2 items-center">
                            <LinkIcon className="w-4 h-4 text-violet-600" />
                            <span>amararivera.dev</span>
                          </li>
                          <li className="flex gap-3 pt-1 items-center">
                            <a href="#" className="inline-flex p-1.5 rounded-md transition bg-slate-100 hover:bg-slate-200">
                              <Twitter className="w-4 h-4 text-slate-700" />
                            </a>
                            <a href="#" className="inline-flex p-1.5 rounded-md transition bg-slate-100 hover:bg-slate-200">
                              <Linkedin className="w-4 h-4 text-slate-700" />
                            </a>
                            <a href="#" className="inline-flex p-1.5 rounded-md transition bg-slate-100 hover:bg-slate-200">
                              <Instagram className="w-4 h-4 text-slate-700" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* About */}
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 tracking-tight">About me</h3>
                        <p className="leading-relaxed text-slate-700 text-left mt-3" style={{
                          // textAlign: 'justify',
                          // textJustify: 'inter-word',
                          // hyphens: 'auto',
                          WebkitHyphens: 'auto',
                          MozHyphens: 'auto',
                          msHyphens: 'auto',
                          overflowWrap: 'break-word'
                        }}>
                          Human-centered designer with a passion for accessible, elegant interfaces. I turn research into scalable systems.
                        </p>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Experience</h3>
                      <div className="mt-3 space-y-3">
                        <div className="flex border-slate-200/70 border-b pb-3 items-start justify-between">
                          <div>
                            <p className="font-medium text-slate-800">Senior Product Designer — Nova</p>
                            <p className="text-sm text-slate-600">Led design for growth platform across web & mobile.</p>
                          </div>
                          <span className="text-sm text-slate-600">2022–Present</span>
                        </div>
                        <div className="flex items-start justify-between border-b pb-3 border-slate-200/70">
                          <div>
                            <p className="font-medium text-slate-800">UX Designer — Orbit</p>
                            <p className="text-sm text-slate-600">Built component libraries and design tokens.</p>
                          </div>
                          <span className="text-sm text-slate-600">2019–2022</span>
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Education</h3>
                      <div className="mt-3 space-y-3">
                        <div className="flex border-slate-200/70 border-b pb-3 items-start justify-between">
                          <div>
                            <p className="font-medium text-slate-800">Bachelors in Marketing</p>
                            <p className="text-sm text-slate-600">Led design for growth platform across web & mobile.</p>
                          </div>
                          <span className="text-sm text-slate-600">2021–Present</span>
                        </div>
                        <div className="flex items-start justify-between border-b pb-3 border-slate-200/70">
                          <div>
                            <p className="font-medium text-slate-800">High School</p>
                            <p className="text-sm text-slate-600">Built component libraries and design tokens.</p>
                          </div>
                          <span className="text-sm text-slate-600">2019–2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logos */}

            </div>
          </div>
                <div className="md:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center mt-10">
                <span className="text-slate-500 font-medium tracking-tight">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google logo" className="h-6 md:h-7 w-auto" loading="lazy" style={{ filter: 'grayscale(100%)', opacity: 0.7 }} />
                </span>
                <span className="text-slate-500 font-medium tracking-tight">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Facebook_logo_%282023%29.svg/2560px-Facebook_logo_%282023%29.svg.png?w=800&q=80" alt="Facebook logo" className="h-6 md:h-7 w-auto object-cover" loading="lazy" style={{ filter: 'grayscale(100%)', opacity: 0.7 }} />
                </span>
                <span className="text-slate-500 font-medium tracking-tight">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png?w=800&q=80" alt="Microsoft logo" className="h-6 md:h-7 w-auto object-cover" loading="lazy" style={{ filter: 'grayscale(100%)', opacity: 0.7 }} />
                </span>
                <span className="text-slate-500 font-medium tracking-tight">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon logo" className="h-6 md:h-7 w-auto" loading="lazy" style={{ filter: 'grayscale(100%)', opacity: 0.7 }} />
                </span>
                <span className="text-slate-500 font-medium tracking-tight">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb logo" className="h-6 md:h-7 w-auto" loading="lazy" style={{ filter: 'grayscale(100%)', opacity: 0.7 }} />
                </span>
              </div>
        </div>
      </section>
  );
};

export default LandingPage;