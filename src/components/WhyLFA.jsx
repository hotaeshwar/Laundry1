import React, { useEffect, useState } from 'react';

export default function WhyLFAV2() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elements = document.querySelectorAll('[data-section]');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const sectionName = element.getAttribute('data-section');
        
        if (elementTop < windowHeight - 100 && elementTop > -rect.height) {
          if (!visibleSections[sectionName]) {
            setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    setTimeout(handleScroll, 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 data-section="whyLfaTitle" className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#1aa6b3] uppercase tracking-wide transition-all duration-700 ease-out ${visibleSections.whyLfaTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          WHY CHOOSE LFA?
        </h2>

        {/* Desktop Layout */}
        <div data-section="whyLfaContentV2" className={`hidden md:block transition-all duration-700 ease-out ${visibleSections.whyLfaContentV2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative max-w-4xl mx-auto h-[600px] lg:h-[700px]">
            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative transition-all duration-1000 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)'}}>
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-white shadow-2xl flex items-center justify-center">
                  <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-yellow-300 shadow-inner flex items-center justify-center overflow-hidden">
                      <img src="/images/LFA-03.png" alt="LFA Logo" className="w-2/3 h-2/3 object-contain z-10 bg-white rounded-lg p-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Center */}
            <div className="absolute top-[12%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'translateY(0)' : 'translateY(-30px)', transitionDelay: '200ms'}}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center shadow-md">
                <img src="/images/QUICK_SERVICE_11zon.webp" alt="Quick Service" className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#1aa6b3] uppercase whitespace-nowrap tracking-tight text-center">QUICK SERVICE</p>
            </div>

            {/* Top Right */}
            <div className="absolute top-[18%] right-[15%] flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'translate(0, 0)' : 'translate(30px, -30px)', transitionDelay: '300ms'}}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center shadow-md">
                <img src="/images/DOORSTEP_PICK_UP_AND_DROP_11zon.webp" alt="Doorstep Pick Up" className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#1aa6b3] uppercase text-center whitespace-nowrap tracking-tight max-w-[120px]">DOORSTEP PICK UP</p>
            </div>

            {/* Top Left */}
            <div className="absolute top-[18%] left-[15%] flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'translate(0, 0)' : 'translate(-30px, -30px)', transitionDelay: '400ms'}}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center shadow-md">
                <img src="/images/PROFESSIONAL_CLEANING_11zon.webp" alt="Professional Cleaning" className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#1aa6b3] uppercase text-center whitespace-nowrap tracking-tight">PROFESSIONAL CLEANING</p>
            </div>

            {/* Middle Right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[5%] flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'translateX(0)' : 'translateX(30px)', transitionDelay: '500ms'}}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center shadow-md">
                <img src="/images/affordable_per_kilo_pricing_11zon.webp" alt="Affordable Pricing" className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#1aa6b3] uppercase text-center whitespace-nowrap tracking-tight max-w-[100px]">AFFORDABLE PRICING</p>
            </div>

            {/* Middle Left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[5%] flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'translateX(0)' : 'translateX(-30px)', transitionDelay: '600ms'}}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center shadow-md">
                <img src="/images/GREEN_CERTIFIED_DETERGENTS_11zon.webp" alt="Green Certified" className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#1aa6b3] uppercase text-center whitespace-nowrap tracking-tight max-w-[100px]">GREEN DETERGENTS</p>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[25%] right-[15%] flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'translate(0, 0)' : 'translate(30px, 30px)', transitionDelay: '700ms'}}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center shadow-md">
                <img src="/images/STATE_OF_THE_ART_TECHNOLOGY_11zon.webp" alt="State of the Art" className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#1aa6b3] uppercase text-center whitespace-nowrap tracking-tight max-w-[100px]">MODERN TECHNOLOGY</p>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[25%] left-[15%] flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'translate(0, 0)' : 'translate(-30px, 30px)', transitionDelay: '800ms'}}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center shadow-md">
                <img src="/images/ONDEMAND_EXPRESS_SERVICE_AVAILABLE_.webp" alt="On-Demand Service" className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#1aa6b3] uppercase text-center whitespace-nowrap tracking-tight max-w-[100px]">EXPRESS SERVICE</p>
            </div>

            {/* Bottom Center */}
            <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaContentV2 ? 1 : 0, transform: visibleSections.whyLfaContentV2 ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '900ms'}}>
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center shadow-md">
                <img src="/images/100_SANITIZED_and_MACHINE_DRY_11zon.webp" alt="100% Sanitized" className="w-6 h-6 lg:w-7 lg:h-7 object-contain" />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-[#1aa6b3] uppercase text-center whitespace-nowrap tracking-tight">SANITIZED CLOTHES</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div data-section="whyLfaMobileV2" className={`md:hidden transition-all duration-700 ease-out ${visibleSections.whyLfaMobileV2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <div className="relative transition-all duration-1000 ease-out" style={{opacity: visibleSections.whyLfaMobileV2 ? 1 : 0, transform: visibleSections.whyLfaMobileV2 ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)'}}>
              <div className="w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-yellow-300 shadow-inner flex items-center justify-center overflow-hidden">
                    <img src="/images/LFA-03.png" alt="LFA Logo" className="w-2/3 h-2/3 object-contain bg-white rounded-lg p-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-6 transition-all duration-700 ease-out" style={{opacity: visibleSections.whyLfaMobileV2 ? 1 : 0, transform: visibleSections.whyLfaMobileV2 ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '200ms'}}>
            <p className="text-lg font-bold text-[#1aa6b3] uppercase tracking-wide">Laundry For All</p>
            <p className="text-sm font-semibold text-gray-600">Premium Laundry Service</p>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {[
              { title: "QUICK SERVICE", image: "/images/QUICK_SERVICE_11zon.webp" },
              { title: "DOORSTEP PICK UP", image: "/images/DOORSTEP_PICK_UP_AND_DROP_11zon.webp" },
              { title: "PROFESSIONAL CLEANING", image: "/images/PROFESSIONAL_CLEANING_11zon.webp" },
              { title: "AFFORDABLE PRICING", image: "/images/affordable_per_kilo_pricing_11zon.webp" },
              { title: "GREEN DETERGENTS", image: "/images/GREEN_CERTIFIED_DETERGENTS_11zon.webp" },
              { title: "MODERN TECHNOLOGY", image: "/images/STATE_OF_THE_ART_TECHNOLOGY_11zon.webp" },
              { title: "EXPRESS SERVICE", image: "/images/ONDEMAND_EXPRESS_SERVICE_AVAILABLE_.webp" },
              { title: "SANITIZED CLOTHES", image: "/images/100_SANITIZED_and_MACHINE_DRY_11zon.webp" }
            ].map((feature, index) => (
              <div key={index} data-section={`feature-mobile-v2-${index}`} className={`transition-all duration-700 ease-out ${visibleSections[`feature-mobile-v2-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="flex flex-col items-center gap-1 bg-white rounded-lg p-2 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#1aa6b3] flex items-center justify-center">
                    <img src={feature.image} alt={feature.title} className="w-5 h-5 object-contain" />
                  </div>
                  <p className="text-[8px] font-semibold text-center text-[#1aa6b3] uppercase leading-tight tracking-tight">{feature.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}