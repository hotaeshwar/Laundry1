import React, { useEffect, useState } from 'react';
import { 
  Calendar, 
  CheckCircle,
  Clock,
  Shield,
  Star,
  Award,
  Home,
  Package,
  Tag,
  Filter,
  X,
  Sparkles,
  ArrowRight,
  Info,
  Zap
} from 'lucide-react';
import WhyLFA from './WhyLFA';

export default function Services() {
  const [visibleSections, setVisibleSections] = useState({});
  const [selectedPromise, setSelectedPromise] = useState(null);

  const services = [
    {
      id: 1,
      title: "Wash & Dry & Fold",
      subtitle: "3-Hour Express Service",
      description: "Our core laundry service delivers exceptional results in record time. Customers drop off clothes, and we wash, dry, and neatly fold them within just 3 hours. We use high-end professional machines for washing and drying, then steam iron each garment to perfection.",
      features: [
        "Express 3-hour turnaround time",
        "Professional imported washing machines",
        "Each customer's laundry washed separately",
        "High-quality detergents for optimal cleanliness",
        "Neatly folded and packaged"
      ],
      image: "/images/laundry-service.png",
      alt: "Wash and fold laundry service with neatly folded clothes",
      icon: Package
    },
    {
      id: 2,
      title: "Steam Ironing",
      subtitle: "Professional Garment Pressing",
      description: "A dedicated ironing service for customers who only need garment pressing. Using premium steam equipment and Italian-grade ironers, we ensure every garment receives a crisp, professional finish. Available as a standalone service or as an add-on to our wash and fold package.",
      features: [
        "Premium steam pressing technology",
        "Italian-grade professional ironers",
        "Perfect creases and wrinkle-free finish",
        "Suitable for all fabric types",
        "Quick turnaround available"
      ],
      image: "/images/steam-iron.png",
      alt: "Professional steam ironing service for crisp garments",
      icon: Filter
    },
    {
      id: 3,
      title: "Dry Cleaning",
      subtitle: "Delicate Garments Specialist",
      description: "Specialized cleaning for delicate fabrics that require extra care. Our dry cleaning service handles suits, dresses, designer wear, ethnic wear, woollens, and other premium garments with the utmost attention to detail and fabric care.",
      features: [
        "Specialized treatment for delicate fabrics",
        "Expert handling of designer and ethnic wear",
        "Professional wool and silk cleaning",
        "Stain removal expertise",
        "Garment inspection and quality control"
      ],
      image: "/images/dry-cleaning.png",
      alt: "Dry cleaning service for delicate and designer garments",
      icon: Star
    }
  ];

  const additionalServices = [
    {
      title: "Shoe Cleaning",
      description: "Professional cleaning and care for all types of footwear",
      icon: Tag,
      image: "/images/shoes.png"
    },
    {
      title: "Blanket & Comforter Cleaning",
      description: "Deep cleaning for heavy bedding items",
      icon: Package,
      image: "/images/pillow.png"
    }
  ];

  const qualityPromises = [
    {
      title: "Separate Washing",
      description: "Each customer's laundry is washed separately to ensure maximum hygiene and prevent cross-contamination",
      icon: Shield,
      image: "/images/laundry-machine.png"
    },
    {
      title: "Premium Equipment",
      description: "We use imported American washing machines and Italian-grade ironers for superior cleaning and finishing",
      icon: Award,
      image: "/images/steam-iron.png"
    },
    {
      title: "Express Service",
      description: "Our efficient processes ensure your laundry is cleaned, dried, and ready within 3 hours",
      icon: Clock,
      image: "/images/delivery-service.png"
    }
  ];

  useEffect(() => {
    // Initial animations on mount
    const timer1 = setTimeout(() => setVisibleSections(prev => ({ ...prev, header: true })), 100);
    
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
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
    };

    handleHashScroll();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const elements = document.querySelectorAll('[data-section]');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const sectionName = element.getAttribute('data-section');
        
        // Element is visible when it's in the viewport
        if (elementTop < windowHeight - 100 && elementTop > -rect.height) {
          if (!visibleSections[sectionName]) {
            setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    // Initial check
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer1);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSections]);

  const handleBookNowClick = () => {
    window.location.hash = '#booking';
  };

  const openModal = (promise) => {
    setSelectedPromise(promise);
  };

  const closeModal = () => {
    setSelectedPromise(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div 
        data-section="header"
        className={`relative pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 transition-all duration-700 ease-out z-10 overflow-hidden ${
          visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/best-laundry-services-in-india.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1aa6b3]/30 to-[#1aa6b3]/20 px-6 py-3 rounded-full border border-[#1aa6b3]/50 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#1aa6b3]" />
              <span className="text-sm font-semibold text-[#1aa6b3]">Premium Quality Services</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#1aa6b3] to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            OUR SERVICES
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-[#1aa6b3] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-medium drop-shadow">
            Professional laundry and dry cleaning services designed to meet all your garment care needs with speed, quality, and hygiene guaranteed.
          </p>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="bg-transparent py-8 sm:py-12 md:py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isVisible = visibleSections[`detail${index}`];
              return (
                <div 
                  key={service.id}
                  data-section={`detail${index}`}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-[#1aa6b3]/10 hover:border-[#1aa6b3]/30 transition-all duration-300 hover:shadow-[#1aa6b3]/20 relative overflow-hidden group">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1aa6b3]/10 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>

                    <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6 relative z-10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden p-3">
                        <img 
                          src={service.image} 
                          alt={service.alt}
                          className="w-full h-full object-contain p-1 filter brightness-0 invert"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1aa6b3] mb-1 sm:mb-2">
                          {service.title}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mb-2 rounded-full"></div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#1aa6b3]" />
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1aa6b3] font-medium">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base md:text-lg text-[#1aa6b3] mb-4 sm:mb-6 leading-relaxed relative z-10">
                      {service.description}
                    </p>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <CheckCircle className="w-5 h-5 text-[#1aa6b3]" />
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#1aa6b3]">Key Features:</h4>
                      </div>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3 bg-[#1aa6b3]/5 p-3 rounded-xl hover:bg-[#1aa6b3]/10 transition-all duration-300">
                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#1aa6b3] flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base md:text-lg text-[#1aa6b3] font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="bg-gradient-to-r from-teal-50/50 to-teal-100/50 py-8 sm:py-12 md:py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-section="qualityTitle"
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-[#1aa6b3] transition-all duration-700 ease-out ${
              visibleSections.qualityTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Quality Promise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-4 rounded-full"></div>
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10 md:mb-12">
            <Award className="w-5 h-5 text-[#1aa6b3]" />
            <p className="text-[#1aa6b3] text-sm sm:text-base md:text-lg font-medium">Excellence in Every Detail</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {qualityPromises.map((promise, index) => {
              const Icon = promise.icon;
              const isVisible = visibleSections[`quality${index}`];
              return (
                <div 
                  key={index}
                  data-section={`quality${index}`}
                  onClick={() => openModal(promise)}
                  className={`group h-64 sm:h-72 md:h-80 perspective transition-all duration-700 ease-out cursor-pointer lg:cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative w-full h-full transition-all duration-700 lg:group-hover:[transform:rotateY(180deg)]"
                       style={{ transformStyle: 'preserve-3d' }}>
                    
                    {/* Front of card */}
                    <div className="absolute inset-0 bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 border-2 border-[#1aa6b3]/10 overflow-hidden"
                         style={{ 
                           backfaceVisibility: 'hidden',
                           boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                         }}>
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1aa6b3]/10 to-transparent rounded-bl-full"></div>
                      
                      <div className="absolute inset-0 rounded-3xl opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
                           style={{ boxShadow: '0 0 50px 10px rgba(26, 166, 179, 0.5)' }}></div>
                      <div className="text-center h-full flex flex-col justify-center relative z-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden p-3">
                          <img 
                            src={promise.image} 
                            alt={promise.title}
                            className="w-full h-full object-contain filter brightness-0 invert"
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#1aa6b3]">
                          {promise.title}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-[#1aa6b3]/70 text-sm lg:hidden">
                          <Info className="w-4 h-4" />
                          <span>Tap for details</span>
                        </div>
                        <div className="hidden lg:flex items-center justify-center gap-2 text-[#1aa6b3]/70 text-sm">
                          <Info className="w-4 h-4" />
                          <span>Hover for details</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of card - only visible on desktop hover */}
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-[#1aa6b3] to-[#158993] rounded-3xl shadow-2xl p-6 sm:p-8 [transform:rotateY(180deg)] overflow-hidden"
                         style={{ backfaceVisibility: 'hidden' }}>
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                      
                      <div className="text-center h-full flex flex-col justify-center relative z-10">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
                          {promise.title}
                        </h3>
                        <div className="w-16 h-1 bg-white/50 mx-auto mb-4"></div>
                        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                          {promise.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal for mobile */}
      {selectedPromise && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-gradient-to-br from-[#1aa6b3] to-[#158993] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="flex justify-end mb-3 sm:mb-4 relative z-10">
              <button 
                onClick={closeModal}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="text-center relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden p-3">
                <img 
                  src={selectedPromise.image} 
                  alt={selectedPromise.title}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-white">
                {selectedPromise.title}
              </h3>
              <div className="w-16 h-1 bg-white/50 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-white text-base sm:text-lg leading-relaxed">
                {selectedPromise.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Additional Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        <h2 
          data-section="additionalTitle"
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-[#1aa6b3] transition-all duration-700 ease-out ${
            visibleSections.additionalTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Additional Services
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-4 rounded-full"></div>
        <p 
          data-section="additionalDesc"
          className={`text-center text-[#1aa6b3] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto transition-all duration-700 ease-out flex items-center justify-center gap-2 ${
            visibleSections.additionalDesc ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span>Expanding our offerings to meet all your cleaning needs. Coming soon to better serve you:</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-3xl mx-auto">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleSections[`additional${index}`];
            return (
              <div 
                key={index}
                data-section={`additional${index}`}
                className={`group relative bg-white p-8 rounded-3xl transition-all duration-700 ease-out hover:scale-[1.03] border-2 border-[#1aa6b3]/10 hover:border-[#1aa6b3]/30 overflow-hidden flex-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Coming soon badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Coming Soon
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#1aa6b3]/10 to-transparent rounded-br-full transition-all duration-500 group-hover:scale-150"></div>

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: '0 0 40px 8px rgba(26, 166, 179, 0.4)' }}></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden p-3">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#1aa6b3]">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-4 rounded-full"></div>
                  <p className="text-[#1aa6b3] text-base md:text-lg opacity-80">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why LFA Section */}
      <WhyLFA />

      {/* CTA Section */}
      <div 
        data-section="cta"
        className={`py-12 md:py-16 px-4 bg-gradient-to-r from-white via-[#1aa6b3]/5 to-white transition-all duration-700 ease-out relative z-10 ${
          visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1aa6b3]/5 to-transparent rounded-3xl blur-2xl"></div>
          <div className="relative z-10 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#1aa6b3]/20">
            <Sparkles className="w-8 h-8 text-[#1aa6b3] mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1aa6b3]">
              Ready to Experience Premium Laundry Care?
            </h2>
            <div className="w-24 h-1.5 bg-[#1aa6b3] mx-auto mb-4 rounded-full"></div>
            <p className="text-[#1aa6b3] text-base sm:text-lg md:text-xl mb-8 opacity-95">
              Drop off your laundry today and experience the LFA difference with our 3-hour express service
            </p>
            <button 
              onClick={handleBookNowClick}
              className="bg-gradient-to-r from-[#1aa6b3] to-[#158993] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group"
            >
              <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Order PickUp</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .animate-slideUp {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}