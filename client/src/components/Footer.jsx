import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer({ onEnquiryOpen }) {
  return (
    <footer id="contact" className="border-t border-white/[0.06] bg-surface-muted px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 text-[14px] leading-relaxed text-text-secondary font-sans pr-4">
              ITQHUB serves the best IT Training that is crafted based on the extensive research made on learning, course curriculum, learning outcomes, job search, and placement rates in MNCs.
            </p>
            <div className="mt-6 flex gap-4">
              {/* Facebook */}
              <a href="#" className="text-text-muted transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/itqhub/" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/it_q_hub" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-text-muted transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Our Courses */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-[16px] font-bold tracking-tight text-white mb-5">
              Our Courses
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/programs" className="text-[13px] text-text-secondary transition-colors duration-200 hover:text-white">UI / UX Design</Link>
              </li>
              <li>
                <Link to="/programs" className="text-[13px] text-text-secondary transition-colors duration-200 hover:text-white">Web Development</Link>
              </li>
              <li>
                <Link to="/programs" className="text-[13px] text-text-secondary transition-colors duration-200 hover:text-white">Java Full Stack</Link>
              </li>
              <li>
                <Link to="/programs" className="text-[13px] text-text-secondary transition-colors duration-200 hover:text-white">Python Full Stack</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-[16px] font-bold tracking-tight text-white mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4 text-[13px] text-text-secondary font-mono tracking-tight">
              <li className="flex items-start gap-3">
                <svg className="h-4 w-4 mt-0.5 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="leading-relaxed">
                  1st Floor, HIG 129, Pramani Plaza, Phase 3, KPHB,<br />Kukatpally, Hyderabad - 500072 Telangana.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+91 9281433641 , +91 9281433642</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-4 w-4 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25" />
                </svg>
                <span>info@itqhub.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-[16px] font-bold tracking-tight text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[13px] text-text-secondary transition-colors duration-200 hover:text-white">About Us</Link>
              </li>
              <li>
                <button onClick={onEnquiryOpen} className="text-[13px] text-text-secondary transition-colors duration-200 hover:text-white">Contact Us</button>
              </li>
              <li>
                <Link to="/itq-admin-portal" className="text-[13px] text-text-secondary transition-colors duration-200 hover:text-white">Admin Portal</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-center gap-2 border-t border-white/[0.05] pt-8 text-center sm:gap-1">
          <p className="text-[13px] text-text-secondary">
            Copyright © <span className="font-bold text-accent">ITqHUB</span>, All Rights Reserved.
          </p>
          <p className="text-[13px] text-text-secondary">
            Designed & Developed By <span className="font-semibold text-accent">Harsh Rajrani ❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
