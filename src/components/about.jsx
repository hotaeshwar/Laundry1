import { useEffect, useRef } from 'react';

export default function AboutUs() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = [
        { ref: imageRef, className: 'animate-on-scroll-left' },
        { ref: contentRef, className: 'animate-on-scroll-right' }
      ];

      elements.forEach(({ ref, className }) => {
        if (ref.current && !ref.current.classList.contains('animated')) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.85;
          
          if (isVisible) {
            ref.current.classList.add('animated');
          }
        }
      });
    };

    handleScrollAnimations();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollAnimations();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', handleScrollAnimations);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScrollAnimations);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-teal-50/20 to-slate-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-[#1aa6b3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div ref={imageRef} className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1aa6b3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/images/about_img_11zon.webp" 
                alt="LaundryForAll professional laundry services in Rajasthan"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-3xl opacity-20 blur-xl"></div>
          </div>

          <div ref={contentRef} className="w-full lg:w-1/2 space-y-6">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#1aa6b3]/20 to-teal-400/20 rounded-2xl blur-xl"></div>
              <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-black mb-2" style={{ color: '#1aa6b3' }}>
                About <span className="bg-gradient-to-r from-[#1aa6b3] to-teal-400 bg-clip-text text-transparent">LaundryForAll</span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-full mt-2"></div>
            </div>
            
            <div className="space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: '#1aa6b3' }}>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-[#1aa6b3]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="opacity-90">
                  <span className="font-bold text-xl" style={{ color: '#1aa6b3' }}>LaundryForAll</span> was founded to revolutionize laundry for tourists and locals in Rajasthan. Our mission is to provide <span className="font-bold">hotel-quality cleaning</span> with personal service and convenience.
                </p>
              </div>
              
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-[#1aa6b3]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="opacity-90">
                  We start in <span className="font-bold">Jaipur</span>, then expand to all of Rajasthan and eventually nationwide, following the success of India's largest laundry chains. Our leadership team combines <span className="font-bold">hospitality and logistics expertise</span> to ensure reliability and trust.
                </p>
              </div>
              
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-[#1aa6b3]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="opacity-90">
                  We value <span className="font-bold" style={{ color: '#1aa6b3' }}>sustainability and customer satisfaction</span>: all cleaning agents are gentle and eco-friendly, and we never use harsh chemicals that could affect sensitive skin.
                </p>
              </div>

              <div className="pt-4">
                <div className="relative inline-block mb-4">
                  <h2 className="text-2xl sm:text-3xl font-black" style={{ color: '#1aa6b3' }}>
                    Why <span className="bg-gradient-to-r from-[#1aa6b3] to-teal-400 bg-clip-text text-transparent">LaundryForAll?</span>
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-full mt-1"></div>
                </div>

                <div className="space-y-3">
                  {[
                    "Founded by experienced laundry entrepreneurs to serve Rajasthan's travelers and residents.",
                    "Focus on highest standards of hygiene and eco-friendly practices.",
                    "Expanding rapidly with plans to cover every major city after proving our model in Jaipur.",
                    "Transparent business model: we follow proven industry best-practices with no hidden fees and open pricing."
                  ].map((text, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                      <div className="relative flex items-start bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#1aa6b3]/20 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-lg flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-white text-sm font-black">✓</span>
                        </div>
                        <span className="opacity-90 text-sm sm:text-base">
                          {text.includes('hygiene and eco-friendly practices') ? (
                            <>
                              Focus on highest standards of <span className="font-bold">hygiene and eco-friendly practices</span>.
                            </>
                          ) : text.includes('Transparent business model') ? (
                            <>
                              <span className="font-bold">Transparent business model</span>: we follow proven industry best-practices with no hidden fees and open pricing.
                            </>
                          ) : (
                            text
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .w-full.lg\\:w-1\\/2:first-child,
        .w-full.lg\\:w-1\\/2:last-child {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .w-full.lg\\:w-1\\/2:first-child {
          transform: translateX(-40px);
        }

        .w-full.lg\\:w-1\\/2:last-child {
          transform: translateX(40px);
        }

        .w-full.lg\\:w-1\\/2:first-child.animated {
          opacity: 1;
          transform: translateX(0);
        }

        .w-full.lg\\:w-1\\/2:last-child.animated {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.2s;
        }

        @media (prefers-reduced-motion: reduce) {
          .w-full.lg\\:w-1\\/2:first-child,
          .w-full.lg\\:w-1\\/2:last-child {
            opacity: 1;
            transform: none;
            transition: opacity 0.3s ease;
          }
        }
      `}</style>
    </section>
  );
}
