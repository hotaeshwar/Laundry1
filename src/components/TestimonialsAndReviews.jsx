import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, Play, X, MapPin, Users, ThumbsUp, 
  Award, TrendingUp
} from 'lucide-react';

const TestimonialsAndReviews = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [counters, setCounters] = useState({ customers: 0, rating: 0, orders: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const videosRef = useRef(null);
  const ctaRef = useRef(null);

  const targetValues = { customers: 5000, rating: 4.9, orders: 10000, satisfaction: 98 };

  const animateCounter = (key, target, duration = 2000) => {
    const startTime = Date.now();
    const isDecimal = key === 'rating';
    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * target;
      setCounters(prev => ({ ...prev, [key]: isDecimal ? Number(currentValue.toFixed(1)) : Math.floor(currentValue) }));
      if (progress < 1) requestAnimationFrame(updateCounter);
    };
    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const handleStatsAnimation = () => {
      if (!statsRef.current || hasAnimated) return;
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setHasAnimated(true);
        animateCounter('customers', targetValues.customers, 2000);
        animateCounter('rating', targetValues.rating, 2000);
        animateCounter('orders', targetValues.orders, 2000);
        animateCounter('satisfaction', targetValues.satisfaction, 2000);
      }
    };
    handleStatsAnimation();
    window.addEventListener('scroll', handleStatsAnimation);
    return () => window.removeEventListener('scroll', handleStatsAnimation);
  }, [hasAnimated]);

  useEffect(() => {
    const handleScrollAnimations = () => {
      [heroRef, statsRef, videosRef, ctaRef].forEach((ref) => {
        if (ref.current && !ref.current.classList.contains('animate-in')) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9) {
            ref.current.classList.add('animate-in');
            ref.current.querySelectorAll('.stagger-item').forEach((child, index) => {
              setTimeout(() => child.classList.add('stagger-in'), index * 60);
            });
          }
        }
      });
    };
    setTimeout(handleScrollAnimations, 50);
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { handleScrollAnimations(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', handleScrollAnimations);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', handleScrollAnimations); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedVideo]);

  const videoTestimonials = [
    { id: "1", thumbnail: "/images/testimonial1.png", embedUrl: "https://drive.google.com/file/d/1xRFJ_B-pTKeM8ps0_Yip953qLuIPjB8o/preview", rating: 5, location: "India" },  // ← changed
    { id: "2", thumbnail: "/images/testimonial2.png", embedUrl: "https://drive.google.com/file/d/1nz5n-_0f5Oqb-vUgoRct2rzOGAsTfyP-/preview", rating: 5, location: "Canada" },
    { id: "3", thumbnail: "/images/Smiling woman in laundry section.png", embedUrl: "https://drive.google.com/file/d/1P1zpwKPIQYSWYqU6xB5A2g7iInGCInls/preview", rating: 5, location: "Canada" },
    { id: "4", thumbnail: "/images/Smiling man with puppy in laundry aisle.png", embedUrl: "https://drive.google.com/file/d/1dwgzcicLCRMcu0ke3ApiqzW5glRfVcc8/preview", rating: 5, location: "Canada" }
  ];

  const stats = [
    { icon: Users, key: 'customers', suffix: '+', label: "Happy Customers", color: "from-[#1aa6b3] to-[#158993]" },
    { icon: Star, key: 'rating', suffix: '/5', label: "Average Rating", color: "from-[#158993] to-[#1aa6b3]" },
    { icon: Award, key: 'orders', suffix: '+', label: "Orders Completed", color: "from-[#1aa6b3] to-[#158993]" },
    { icon: TrendingUp, key: 'satisfaction', suffix: '%', label: "Customer Satisfaction", color: "from-[#158993] to-[#1aa6b3]" }
  ];

  const formatCounterValue = (key, value) => (key === 'customers' || key === 'orders') ? value.toLocaleString() : value;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero */}
      <section ref={heroRef} className="fade-in-up relative overflow-hidden bg-gradient-to-br from-white via-[#1aa6b3]/5 to-white text-[#1aa6b3] py-12 md:py-16 px-4">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="stagger-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight bg-gradient-to-r from-[#1aa6b3] to-[#158993] bg-clip-text text-transparent">
            Customer Testimonials & Reviews
          </h1>
          <p className="stagger-item text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto px-4 text-[#1aa6b3]/80">
            Hear what our satisfied customers from Pushkar, Jaipur and Canada have to say about LaundryForAll
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[{ icon: Star, label: '5-Star Reviews' }, { icon: ThumbsUp, label: 'Verified Customers' }, { icon: Award, label: 'Premium Service' }].map(({ icon: Icon, label }) => (
              <span key={label} className="stagger-item flex items-center gap-2 bg-white text-[#1aa6b3] px-4 py-2 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
                <Icon className="w-4 h-4 fill-current" />
                <span className="font-semibold">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stagger-item group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-5 sm:p-6 text-center transform hover:-translate-y-2 border-2 border-[#1aa6b3]/30 hover:border-[#1aa6b3] overflow-hidden">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1aa6b3]/20 via-[#158993]/10 to-transparent blur-xl"></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#1aa6b3] mb-1">
                    {formatCounterValue(stat.key, counters[stat.key])}{stat.suffix}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1aa6b3]/70">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Testimonials */}
      <section ref={videosRef} className="fade-in-up bg-white py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-[#1aa6b3]">Video Testimonials</h2>
            <p className="stagger-item text-sm text-[#1aa6b3]/70">Hear directly from our happy customers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="stagger-item group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-2 border-[#1aa6b3]/20 hover:border-[#1aa6b3] bg-white" onClick={() => setSelectedVideo(video)}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img src={video.thumbnail} alt="Customer testimonial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 text-[#1aa6b3] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(video.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-xs text-[#1aa6b3]/60 flex items-center gap-1"><MapPin className="w-3 h-3" />{video.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://drive.google.com/drive/folders/11c2V3QBLKV6072XDxebuU0jg9G8_1dfU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-white border-2 border-[#1aa6b3] text-[#1aa6b3] font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-[#1aa6b3] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 87.3 78" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA"/>
                <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.2 48.5c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00AC47"/>
                <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.5z" fill="#EA4335"/>
                <path d="M43.65 25L57.4 1.2C56.05.45 54.5 0 52.85 0H34.45c-1.65 0-3.2.45-4.55 1.2z" fill="#00832D"/>
                <path d="M59.8 53H27.5L13.75 76.8c1.35.75 2.9 1.2 4.55 1.2h50.7c1.65 0 3.2-.45 4.55-1.2z" fill="#2684FC"/>
                <path d="M73.4 26.5l-12.6-21.8c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.15 28H87.3c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00"/>
              </svg>
              View All Customer Videos on Google Drive
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in" style={{ background: 'rgba(0,0,0,0.88)' }} onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-3xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-10 right-0 text-white/80 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-all">
              <X className="w-4 h-4" /> Close
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#0f2744' }}>
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe src={selectedVideo.embedUrl} className="absolute inset-0 w-full h-full" allow="autoplay; fullscreen" allowFullScreen title="Customer Testimonial" />
              </div>
              <div className="px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {[...Array(selectedVideo.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                  <span className="text-white/60 text-sm flex items-center gap-1 ml-1"><MapPin className="w-3.5 h-3.5" />{selectedVideo.location}</span>
                </div>
                <button onClick={() => setSelectedVideo(null)} className="text-xs text-[#1aa6b3] border border-[#1aa6b3]/50 px-3 py-1.5 rounded-lg hover:bg-[#1aa6b3]/20 transition-all font-semibold flex items-center gap-1">
                  <X className="w-3.5 h-3.5" /> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section ref={ctaRef} className="fade-in-up bg-gradient-to-r from-[#1aa6b3] to-[#158993] py-12 sm:py-16 relative z-10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="stagger-item text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Join Thousands of Happy Customers</h2>
          <p className="stagger-item text-base sm:text-lg text-white/90">Experience the best laundry service in Pushkar, Jaipur and Canada</p>
        </div>
      </section>

      <style>{`
        .fade-in-up { opacity:0; transform:translateY(30px); transition:opacity .4s cubic-bezier(.4,0,.2,1),transform .4s cubic-bezier(.4,0,.2,1); }
        .fade-in-up.animate-in { opacity:1; transform:translateY(0); }
        .stagger-item { opacity:0; transform:translateY(20px) scale(0.97); transition:opacity .3s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.4,0,.2,1); }
        .stagger-item.stagger-in { opacity:1; transform:translateY(0) scale(1); }
        @keyframes scale-in { 0%{opacity:0;transform:scale(.95);}100%{opacity:1;transform:scale(1);} }
        .animate-scale-in { animation:scale-in .3s cubic-bezier(.4,0,.2,1); }
        @keyframes fade-in { 0%{opacity:0;}100%{opacity:1;} }
        .animate-fade-in { animation:fade-in .2s ease-out; }
        @media (prefers-reduced-motion:reduce) {
          .fade-in-up,.stagger-item{opacity:1;transform:none;transition:none;}
          .animate-scale-in,.animate-fade-in{animation:none;}
        }
      `}</style>
    </div>
  );
};

export default TestimonialsAndReviews;