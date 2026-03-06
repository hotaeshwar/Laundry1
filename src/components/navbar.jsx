import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ 
  onBookingClick, 
  onServicesClick,
  onHomeClick,
  onAboutClick,
  onServiceClick,
  onContactClick,
  onPricingClick,
  onFranchiseClick
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    const setActiveLinkFromHash = () => {
      const hash = window.location.hash;
      switch(hash) {
        case '#home':
        case '':
          setActiveLink('Home');
          break;
        case '#about':
          setActiveLink('About');
          break;
        case '#services':
          setActiveLink('Services');
          break;
        case '#pricing':
          setActiveLink('Pricing');
          break;
        case '#contact':
          setActiveLink('Contact');
          break;
        case '#franchise':
          setActiveLink('Franchise');
          break;
        default:
          setActiveLink('Home');
      }
    };

    setActiveLinkFromHash();

    const handleHashChange = () => {
      setActiveLinkFromHash();
    };

    window.addEventListener('hashchange', handleHashChange);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 50;
      
      setIsScrolled(prev => {
        if (prev !== shouldBeScrolled) {
          return shouldBeScrolled;
        }
        return prev;
      });
    };

    const checkIfTablet = () => {
      // Check for iPad Mini and similar tablet sizes (between 768px and 1024px)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };

    handleScroll();
    checkIfTablet();
    
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener, { passive: true });
    window.addEventListener('resize', checkIfTablet);
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('resize', checkIfTablet);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookingClickInternal = (e) => {
    e.preventDefault();
    if (onBookingClick) {
      onBookingClick();
    }
    setIsMenuOpen(false);
  };

  const handleServicesClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Services');
    if (onServicesClick) {
      onServicesClick();
    }
    setIsMenuOpen(false);
  };

  const handleHomeClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Home');
    if (onHomeClick) {
      onHomeClick();
    }
    setIsMenuOpen(false);
  };

  const handleAboutClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('About');
    if (onAboutClick) {
      onAboutClick();
    }
    setIsMenuOpen(false);
  };

  const handleServiceClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Services');
    if (onServiceClick) {
      onServiceClick();
    }
    setIsMenuOpen(false);
  };

  const handleContactClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Contact');
    if (onContactClick) {
      onContactClick();
    }
    setIsMenuOpen(false);
  };

  const handlePricingClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Pricing');
    if (onPricingClick) {
      onPricingClick();
    }
    setIsMenuOpen(false);
  };

  const handleFranchiseClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Franchise');
    if (onFranchiseClick) {
      onFranchiseClick();
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home', handler: handleHomeClickInternal, title: 'LaundryForAll - Professional Laundry Services', rel: 'home' },
    { name: 'About', href: '#about', handler: handleAboutClickInternal, title: 'About LaundryForAll - Your Trusted Laundry Partner', rel: 'about' },
    { name: 'Services', href: '#services', handler: handleServicesClickInternal, title: 'Our Laundry Services - Wash, Dry, Fold & More', rel: 'services' },
    { name: 'Pricing', href: '#pricing', handler: handlePricingClickInternal, title: 'Affordable Laundry Pricing - Transparent Rates', rel: 'pricing' },
    { name: 'Franchise', href: '#franchise', handler: handleFranchiseClickInternal, title: 'LaundryForAll Franchise - Partner With Us', rel: 'franchise' },
    { name: 'Contact', href: '#contact', handler: handleContactClickInternal, title: 'Contact LaundryForAll - Get in Touch Today', rel: 'contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-[#1aa6b3]/10' 
          : 'bg-gradient-to-b from-black/20 to-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-[#1aa6b3] rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
            <a 
              href="#home" 
              className="flex items-center h-full relative"
              onClick={handleHomeClickInternal}
              title="LaundryForAll - Home"
              aria-label="LaundryForAll Home"
              itemProp="url"
            >
              <img 
                src="/images/LFA-03.png"
                alt="LaundryForAll Logo - Professional Laundry Services" 
                className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto transition-all duration-500 hover:scale-110 object-contain drop-shadow-lg"
                style={{
                  marginTop: '-0.5rem',
                  marginBottom: '-0.5rem'
                }}
                itemProp="logo"
              />
            </a>
          </div>

          {/* Desktop Menu - Modified specifically for iPad Mini */}
          <div className={`${isTablet ? 'hidden' : 'hidden md:flex'} md:items-center md:space-x-1 lg:space-x-2 xl:space-x-4`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.handler}
                title={link.title}
                rel={link.rel}
                aria-label={link.title}
                aria-current={activeLink === link.name ? 'page' : undefined}
                itemProp="url"
                className="relative px-2 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm xl:text-base font-black transition-all duration-300 group whitespace-nowrap"
              >
                <span 
                  className={`relative z-10 tracking-wide transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-900 group-hover:text-[#1aa6b3]' 
                      : 'text-white group-hover:text-[#1aa6b3]'
                  }`}
                  itemProp="name"
                >
                  {link.name}
                </span>
                
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 lg:h-1 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-full transition-all duration-500 ${
                    activeLink === link.name 
                      ? 'w-full shadow-lg shadow-[#1aa6b3]/50' 
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
                
                <span className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-br from-[#1aa6b3]/10 to-teal-400/10'
                    : 'bg-white/10'
                }`}></span>
              </a>
            ))}
            
            {/* Schedule Pickup Button - Always in navbar, optimized for iPad */}
            <div className="relative group ml-1 lg:ml-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-lg lg:rounded-xl opacity-70 group-hover:opacity-100 blur transition-all duration-300"></div>
              <a
                href="#booking"
                onClick={handleBookingClickInternal}
                title="Schedule Pickup - Quick & Easy"
                rel="booking"
                aria-label="Schedule Pickup - Schedule Your Laundry Service"
                itemProp="potentialAction"
                itemScope
                itemType="https://schema.org/ReserveAction"
                className="relative bg-gradient-to-r from-[#1aa6b3] to-teal-400 hover:from-[#147c86] hover:to-teal-500 text-white px-3 lg:px-4 xl:px-6 py-1.5 lg:py-2 xl:py-2.5 text-xs lg:text-sm xl:text-base font-black rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-1 lg:gap-2 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <Calendar className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 relative z-10 animate-pulse" aria-hidden="true" />
                <span className="whitespace-nowrap relative z-10 tracking-wider">SCHEDULE PICKUP</span>
              </a>
            </div>
          </div>

          {/* Tablet/Mobile Menu Button - Now visible on iPad Mini */}
          <div className={`${isTablet ? 'flex' : 'md:hidden'} items-center`}>
            <button
              onClick={toggleMenu}
              className={`relative p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-[#1aa6b3]/10 border border-[#1aa6b3]/20' 
                  : 'text-white hover:bg-white/20 border border-white/20'
              }`}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-[#1aa6b3]/5 to-teal-400/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              {isMenuOpen ? <X className="h-5 w-5 relative z-10" aria-hidden="true" /> : <Menu className="h-5 w-5 relative z-10" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu - Schedule Pickup button included */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className={`shadow-2xl backdrop-blur-xl border-t transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 border-[#1aa6b3]/10' 
              : 'bg-[#1aa6b3]/95 border-white/10'
          }`}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.handler}
                title={link.title}
                rel={link.rel}
                aria-label={link.title}
                aria-current={activeLink === link.name ? 'page' : undefined}
                itemProp="url"
                role="menuitem"
                style={{ animationDelay: `${idx * 50}ms` }}
                className={`relative block px-4 py-3 text-base font-black rounded-xl transition-all duration-300 hover:translate-x-2 group overflow-hidden ${
                  isScrolled
                    ? 'text-gray-800'
                    : 'text-white'
                }`}
              >
                <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeLink === link.name
                    ? isScrolled
                      ? 'bg-gradient-to-r from-[#1aa6b3]/20 to-teal-400/20'
                      : 'bg-white/20'
                    : 'opacity-0 group-hover:opacity-100'
                } ${
                  isScrolled 
                    ? 'group-hover:bg-gradient-to-r group-hover:from-[#1aa6b3]/10 group-hover:to-teal-400/10'
                    : 'group-hover:bg-white/10'
                }`}></span>
                
                <span 
                  className={`relative z-10 tracking-wide transition-colors duration-300 ${
                    isScrolled ? 'group-hover:text-[#1aa6b3]' : ''
                  }`}
                  itemProp="name"
                >
                  {link.name}
                </span>
                
                {activeLink === link.name && (
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-r-full transition-all duration-300 ${
                    isScrolled ? 'bg-gradient-to-b from-[#1aa6b3] to-teal-400' : 'bg-white'
                  }`}></span>
                )}
              </a>
            ))}
            
            {/* Schedule Pickup Button in Mobile/Tablet Menu */}
            <div className="relative group mt-4">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-xl opacity-70 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
              <a
                href="#booking"
                onClick={handleBookingClickInternal}
                title="Schedule Pickup - Quick & Easy"
                rel="booking"
                aria-label="Schedule Pickup - Schedule Your Laundry Service"
                itemProp="potentialAction"
                itemScope
                itemType="https://schema.org/ReserveAction"
                role="menuitem"
                className={`relative flex items-center justify-center gap-2 px-4 py-3.5 text-base font-black rounded-xl transition-all duration-300 overflow-hidden ${
                  isScrolled
                    ? 'bg-gradient-to-r from-[#1aa6b3] to-teal-400 hover:from-[#147c86] hover:to-teal-500 text-white'
                    : 'bg-white/90 hover:bg-white text-[#1aa6b3]'
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <Calendar className="h-5 w-5 relative z-10 animate-pulse" aria-hidden="true" />
                <span className="relative z-10 tracking-wider">SCHEDULE PICKUP</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}