import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = ({ onFranchiseClick }) => {
  return (
    <footer className="relative overflow-hidden border-t-4 border-white/30" style={{ backgroundColor: '#1aa6b3' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/30 rounded-full filter blur-3xl"></div>
      </div>

      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* ── Logo & Social ── */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            {/* Logo — bigger */}
            <div className="bg-white p-3 rounded-2xl shadow-2xl shadow-white/30 border border-white/40 hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-white to-gray-50 p-2 rounded-xl border border-gray-100">
                <img
                  src="/images/LFA-03.png"
                  alt="LaundryForAll Logo"
                  className="h-20 sm:h-24 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

            <p className="text-white text-sm text-center md:text-left max-w-xs leading-relaxed font-medium">
              Professional laundry services delivered to your doorstep
            </p>

            {/* Social Media — no Twitter */}
            <div className="flex space-x-3 pt-1">
              <a
                href="https://www.facebook.com/marketplace/profile/100002700101998/?ref=permalink&mibextid=6ojiHh"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#1aa6b3] transition-all duration-300 hover:scale-110 border border-white/30"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/laundryforall?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 border border-white/30"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/112411874/admin/dashboard/"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#0077b5] transition-all duration-300 hover:scale-110 border border-white/30"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── India Contact ── */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wide relative inline-block">
              India — Pushkar
              <span className="absolute -bottom-1 left-0 w-14 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></span>
            </h3>

            <div className="space-y-2 w-full">
              <a href="tel:+917014638562"
                className="flex items-center space-x-3 text-white group p-2 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <span className="text-sm font-semibold">+91 70146 38562</span>
              </a>

              <div className="flex items-start space-x-3 text-white p-2 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md mt-0.5">
                  <MapPin className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <span className="text-sm leading-snug">
                  Jamni Kund Road,<br />Pushkar, Rajasthan
                </span>
              </div>

              <a href="mailto:laundryforalllfa@gmail.com"
                className="flex items-center space-x-3 text-white group p-2 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <span className="text-sm font-semibold break-all">laundryforalllfa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* ── Canada Contact ── */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wide relative inline-block">
              Canada — Mississauga
              <span className="absolute -bottom-1 left-0 w-14 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></span>
            </h3>

            <div className="space-y-2 w-full">
              <a href="tel:+15197746608"
                className="flex items-center space-x-3 text-white group p-2 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <span className="text-sm font-semibold">+1 519 774 6608</span>
              </a>

              <div className="flex items-start space-x-3 text-white p-2 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md mt-0.5">
                  <MapPin className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <span className="text-sm leading-snug">
                  2585 Skymark Ave,<br />Mississauga, Ontario
                </span>
              </div>

              <a href="mailto:laundryforalllfa@gmail.com"
                className="flex items-center space-x-3 text-white group p-2 rounded-xl hover:bg-white/10 transition-all">
                <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <span className="text-sm font-semibold break-all">laundryforalllfa@gmail.com</span>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-base font-bold text-white uppercase tracking-wide relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-14 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></span>
            </h3>

            <nav className="flex flex-col space-y-1 w-full">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Franchise', href: '#franchise', onClick: onFranchiseClick },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href, onClick }) => (
                <a
                  key={label}
                  href={href}
                  onClick={onClick}
                  className="text-sm text-white transition-all duration-300 px-2 py-1.5 rounded-xl hover:bg-white/10 font-semibold flex items-center justify-between group"
                >
                  <span>{label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-white font-medium text-center sm:text-left">
              © {new Date().getFullYear()} LaundryForAll. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#privacy"
                className="text-sm text-white hover:text-white/80 transition-all duration-300 relative group font-medium">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a href="#terms"
                className="text-sm text-white hover:text-white/80 transition-all duration-300 relative group font-medium">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;