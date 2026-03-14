import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, Smartphone, Truck, Shield, IndianRupee, Gift,
  User, Mail, Phone, MapPin, Building2, DollarSign, MessageSquare, 
  CheckCircle, X, Star, Award, TrendingUp, Users, Target, 
  Briefcase, GraduationCap, BarChart3, Copy, Sparkles
} from 'lucide-react';
import FAQ from './FAQ';
import LFAProcess from './LFAProcess';
import TestimonialsAndReviews from './TestimonialsAndReviews';
import Franchise from './Franchise';

export default function HeroSection({ onBookingClick }) {
  const [visibleItems, setVisibleItems] = useState({
    image: false,
    heading: false,
    description: false,
    offer: false,
    feature1: false,
    feature2: false,
    feature3: false,
    feature4: false,
    feature5: false,
    cta: false
  });

  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setVisibleItems({
        image: scrollY >= 0,
        heading: scrollY >= 50 || windowHeight > 600,
        description: scrollY >= 100 || windowHeight > 600,
        offer: scrollY >= 150 || windowHeight > 700,
        feature1: scrollY >= 200 || windowHeight > 800,
        feature2: scrollY >= 250 || windowHeight > 800,
        feature3: scrollY >= 300 || windowHeight > 900,
        feature4: scrollY >= 350 || windowHeight > 900,
        feature5: scrollY >= 400 || windowHeight > 1000,
        cta: scrollY >= 450 || windowHeight > 1000
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    const timeouts = [
      setTimeout(() => setVisibleItems(prev => ({ ...prev, image: true })), 100),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, heading: true })), 300),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, description: true })), 500),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, offer: true })), 700),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature1: true })), 900),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature2: true })), 1100),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature3: true })), 1300),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature4: true })), 1500),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature5: true })), 1700),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, cta: true })), 1900),
    ];

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = "auto";
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    };

    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().then(() => setIsPlaying(true));
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const getVideoHeight = () => {
    if (typeof window === 'undefined') return '80vh';
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width < 768) return `${Math.min(height * 0.6, 500)}px`;
    else if (width < 1024) return `${Math.min(height * 0.7, 600)}px`;
    else return `${Math.min(height * 0.8, 700)}px`;
  };

  const getVideoObjectPosition = () => {
    const width = window.innerWidth;
    if (width < 768) return 'center 30%';
    else return 'center 25%';
  };

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white relative overflow-hidden mt-0">
      {/* Hero Video Background */}
      <div 
        className="relative w-full overflow-hidden bg-black"
        style={{ 
          height: getVideoHeight(),
          minHeight: '350px',
          maxHeight: '700px'
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full absolute top-0 left-0"
          style={{
            objectFit: 'cover',
            objectPosition: getVideoObjectPosition(),
          }}
          onClick={handleVideoClick}
          loop
          muted
          playsInline
          autoPlay
          preload="auto"
          aria-label="Modern laundry facility with multiple washing machines"
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>

        {isVideoLoaded && (
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 transition-opacity duration-300 hover:bg-black/5"
            onClick={handleVideoClick}
          >
            <div className={`bg-white/80 rounded-full p-4 sm:p-5 shadow-lg ${
              !isPlaying ? 'animate-pulse' : 'opacity-0 hover:opacity-100'
            }`}>
              {!isPlaying ? (
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#1aa6b3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#1aa6b3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-transparent pointer-events-none" />
      </div>

      {/* Heading Section */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 transition-all duration-1000 ${
              visibleItems.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#1aa6b3' }}
          >
            Modern Laundry Experience
          </h1>
          
          {/* ✅ ONLY CHANGE: removed "self-service" from description */}
          <p 
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-center max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 transition-all duration-1000 ${
              visibleItems.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#1aa6b3' }}
          >
            State-of-the-art laundry facility with premium washing machines
          </p>

          <div 
            className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
              visibleItems.offer ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-md">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#1aa6b3' }} />
              <p className="text-sm sm:text-base md:text-lg font-semibold" style={{ color: '#1aa6b3' }}>
                Special Offer: Get 50% off on your first online order!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            
            <article 
              className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
                visibleItems.feature1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                   style={{ background: 'radial-gradient(circle at center, rgba(26, 166, 179, 0.15), transparent 70%)', filter: 'blur(20px)' }}>
              </div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                       style={{ backgroundColor: '#1aa6b3' }}>
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1aa6b3' }}>Rapid Service</h2>
                <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1aa6b3' }}>
                  Wash, dry & fold your laundry in just <span className="font-semibold">3 hours</span>
                </p>
              </div>
            </article>

            <article 
              className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
                visibleItems.feature2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                   style={{ background: 'radial-gradient(circle at center, rgba(26, 166, 179, 0.15), transparent 70%)', filter: 'blur(20px)' }}>
              </div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                       style={{ backgroundColor: '#1aa6b3' }}>
                    <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1aa6b3' }}>Easy Booking</h2>
                <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1aa6b3' }}>
                  Schedule pickups and track orders online or via our app
                </p>
              </div>
            </article>

            <article 
              className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
                visibleItems.feature3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                   style={{ background: 'radial-gradient(circle at center, rgba(26, 166, 179, 0.15), transparent 70%)', filter: 'blur(20px)' }}>
              </div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                       style={{ backgroundColor: '#1aa6b3' }}>
                    <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1aa6b3' }}>Free Pickup & Delivery</h2>
                <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1aa6b3' }}>
                  At your convenience, right to your home or hotel—no extra charge
                </p>
              </div>
            </article>

            <article 
              className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
                visibleItems.feature4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                   style={{ background: 'radial-gradient(circle at center, rgba(26, 166, 179, 0.15), transparent 70%)', filter: 'blur(20px)' }}>
              </div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                       style={{ backgroundColor: '#1aa6b3' }}>
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1aa6b3' }}>Hygienic Cleaning</h2>
                <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1aa6b3' }}>
                  Separate wash cycles for each order ensure{' '}
                  <span className="font-semibold">100% hygienic</span>{' '}
                  garment care
                </p>
              </div>
            </article>

            <article 
              className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden sm:col-span-2 lg:col-span-1 ${
                visibleItems.feature5 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                   style={{ background: 'radial-gradient(circle at center, rgba(26, 166, 179, 0.15), transparent 70%)', filter: 'blur(20px)' }}>
              </div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                       style={{ backgroundColor: '#1aa6b3' }}>
                    <IndianRupee className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1aa6b3' }}>Transparent Pricing</h2>
                <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1aa6b3' }}>
                  Clear rate cards and instant price calculator on our site—no hidden fees
                </p>
              </div>
            </article>

          </div>

          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <button 
              onClick={() => {
                if (onBookingClick) {
                  onBookingClick();
                } else {
                  window.location.hash = '#booking';
                }
              }}
              className={`text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                visibleItems.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ backgroundColor: '#1aa6b3' }}
              aria-label="Schedule a pickup for your laundry service"
            >
              Order Pick Up
            </button>
          </div>

          {/* Process Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <LFAProcess />
          </div>

          {/* FAQ Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <FAQ />
          </div>

          {/* Testimonials Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <TestimonialsAndReviews />
          </div>
        </div>
      </div>
    </section>
  );
}
