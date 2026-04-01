import React, { useEffect, useState, useRef } from 'react';
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import AboutUs from './components/about';
import Process from './components/process';
import AchievementSection from './components/AchievementSection';
import BookingPage from './components/booking';
import Services from './components/service';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Footer from './components/footer';
import WhatsAppChatbot from './components/WhatsAppChatbot';
// Make sure to import your Franchise component
import Franchise from './components/Franchise'; // Adjust the import path as needed

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFranchise, setShowFranchise] = useState(false); // Add franchise state
  const [currentSection, setCurrentSection] = useState('home');
  const [showOnlyHome, setShowOnlyHome] = useState(true);
  const servicesPageRef = useRef(null);
  const bookingPageRef = useRef(null);
  const pricingPageRef = useRef(null);
  const contactPageRef = useRef(null);
  const franchisePageRef = useRef(null); // Add franchise ref

  // Splash screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Handle hash routing on page load
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;
      
      console.log('Hash changed to:', hash);
      
      if (hash === '#booking') {
        setShowBooking(true);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false); // Reset franchise
        setCurrentSection('booking');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#services') {
        setShowServices(true);
        setShowBooking(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false); // Reset franchise
        setCurrentSection('services');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#pricing') {
        setShowPricing(true);
        setShowBooking(false);
        setShowServices(false);
        setShowContact(false);
        setShowFranchise(false); // Reset franchise
        setCurrentSection('pricing');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#contact') {
        setShowContact(true);
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowFranchise(false); // Reset franchise
        setCurrentSection('contact');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#franchise') { // Add franchise case
        setShowFranchise(true);
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setCurrentSection('franchise');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash) {
        const sectionId = hash.substring(1);
        setCurrentSection(sectionId);
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false); // Reset franchise
        
        // Don't show other sections on homepage
        if (hash === '#home') {
          setShowOnlyHome(true);
        } else {
          setShowOnlyHome(false);
        }
        
        if (!showServices && !showBooking && !showPricing && !showContact && !showFranchise && !showOnlyHome) {
          const section = document.getElementById(sectionId);
          if (section) {
            setTimeout(() => {
              section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }, 100);
          }
        }
      } else {
        setCurrentSection('home');
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false); // Reset franchise
        setShowOnlyHome(true);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashRouting();

    window.addEventListener('popstate', handleHashRouting);
    window.addEventListener('hashchange', handleHashRouting);

    return () => {
      window.removeEventListener('popstate', handleHashRouting);
      window.removeEventListener('hashchange', handleHashRouting);
    };
  }, [showServices, showBooking, showPricing, showContact, showFranchise, showOnlyHome]);

  const handleBookingClick = () => {
    window.location.hash = '#booking';
  };

  const handleServicesClick = () => {
    window.location.hash = '#services';
  };

  const handlePricingClick = () => {
    window.location.hash = '#pricing';
  };

  const handleHomeClick = () => {
    window.location.hash = '#home';
  };

  const handleAboutClick = () => {
    window.location.hash = '#about';
  };

  const handleServiceClick = () => {
    window.location.hash = '#service';
  };

  const handleContactClick = () => {
    window.location.hash = '#contact';
  };

  const handleFranchiseClick = () => { // Add franchise click handler
    window.location.hash = '#franchise';
  };

  const handleCloseBooking = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowBooking(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  const handleCloseServices = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowServices(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  const handleClosePricing = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowPricing(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  const handleCloseContact = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowContact(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  const handleCloseFranchise = () => { // Add franchise close handler
    window.history.pushState("", document.title, window.location.pathname);
    setShowFranchise(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  // Reset to home when closing other pages
  const handleCloseSection = () => {
    window.location.hash = '#home';
  };

  useEffect(() => {
    if (showServices && servicesPageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showServices]);

  useEffect(() => {
    if (showBooking && bookingPageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showBooking]);

  useEffect(() => {
    if (showPricing && pricingPageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showPricing]);

  useEffect(() => {
    if (showContact && contactPageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showContact]);

  useEffect(() => { // Add franchise scroll effect
    if (showFranchise && franchisePageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showFranchise]);

  // Enhanced Splash Screen Component
  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#1aa6b3] via-[#158993] to-[#1aa6b3] flex items-center justify-center z-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-300 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="text-center relative z-10">
          {/* Logo container with enhanced effects */}
          <div className="relative mb-8 animate-scale-in">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl animate-pulse"></div>
            
            {/* Logo card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <div className="relative">
                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#1aa6b3] rounded-tl-2xl"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-[#1aa6b3] rounded-tr-2xl"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-[#1aa6b3] rounded-bl-2xl"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#1aa6b3] rounded-br-2xl"></div>
                
                <img 
                  src="/images/LFA-03.png" 
                  alt="LaundryForAll Logo" 
                  className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Brand name */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up tracking-wide">
            LaundryForAll
          </h1>
          
          {/* Tagline */}
          <p className="text-white/90 text-lg md:text-xl mb-8 animate-fade-in-up-delayed font-medium">
            Premium Laundry Services
          </p>

          {/* Loading dots */}
          <div className="flex gap-3 justify-center">
            <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg"></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes float-delayed {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-30px);
            }
          }

          @keyframes scale-in {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }

          .animate-scale-in {
            animation: scale-in 0.6s ease-out;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out 0.3s both;
          }

          .animate-fade-in-up-delayed {
            animation: fade-in-up 0.8s ease-out 0.5s both;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-float,
            .animate-float-delayed,
            .animate-scale-in,
            .animate-fade-in-up,
            .animate-fade-in-up-delayed {
              animation: none;
            }
          }
        `}</style>
      </div>
    );
  }

  // Add franchise page condition
  if (showFranchise) {
    return (
      <div className="App" ref={franchisePageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick} // Pass franchise click handler
        />
        <div className="min-h-screen">
          <Franchise onClose={handleCloseFranchise} /> {/* Render Franchise component */}
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  if (showContact) {
    return (
      <div className="App" ref={contactPageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick} // Pass franchise click handler
        />
        <div className="min-h-screen">
          <Contact onClose={handleCloseContact} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  if (showPricing) {
    return (
      <div className="App" ref={pricingPageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick} // Pass franchise click handler
        />
        <div className="min-h-screen">
          <Pricing 
            onClose={handleClosePricing} 
            onBookingClick={handleBookingClick} 
          />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  if (showServices) {
    return (
      <div className="App" ref={servicesPageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick} // Pass franchise click handler
        />
        <div className="min-h-screen">
          <Services onClose={handleCloseServices} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  if (showBooking) {
    return (
      <div className="App" ref={bookingPageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick} // Pass franchise click handler
        />
        <div className="min-h-screen">
          <BookingPage onClose={handleCloseBooking} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  // Main homepage with conditional rendering
  return (
    <div className="App">
      <Navbar 
        onBookingClick={handleBookingClick}
        onServicesClick={handleServicesClick}
        onPricingClick={handlePricingClick}
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onServiceClick={handleServiceClick}
        onContactClick={handleContactClick}
        onFranchiseClick={handleFranchiseClick} // Pass franchise click handler
      />
      
      {/* FIXED: Removed top padding to ensure HeroSection starts immediately under navbar */}
      <section id="home" className="relative">
        <HeroSection />
      </section>
      
      {/* Conditionally show other sections only when their hash is active */}
      {currentSection === 'about' && !showOnlyHome && (
        <section id="about" className="pt-8 md:pt-12 lg:pt-16">
          <AboutUs />
        </section>
      )}
      
      {currentSection === 'service' && !showOnlyHome && (
        <section id="service" className="pt-8 md:pt-10 lg:pt-12">
          <Process />
        </section>
      )}
      
      {/* Always show footer on homepage */}
      <Footer />

      <WhatsAppChatbot />
    </div>
  );
}

export default App;