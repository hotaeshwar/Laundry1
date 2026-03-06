import React, { useEffect, useRef } from 'react';

const ProcessSection = () => {
  const services = [
    {
      id: 1,
      icon: '/images/services-icon1.png',
      title: 'Free Pickup & Collection',
      description: 'Schedule a convenient pickup time and our team collects your laundry from your doorstep with contactless service.',
      alt: 'Free laundry pickup and collection service'
    },
    {
      id: 2,
      icon: '/images/services-icon2.png',
      title: 'Professional Cleaning',
      description: 'Expert washing with premium detergents and state-of-the-art machines ensuring spotless, fresh-smelling garments.',
      alt: 'Professional washing and dry cleaning service'
    },
    {
      id: 3,
      icon: '/images/services-icon3.png',
      title: 'Same-Day Delivery',
      description: 'Your clean, folded clothes are delivered back to you the same day, neatly packaged and ready to wear.',
      alt: 'Fast same-day laundry delivery service'
    }
  ];

  // Create refs for each service card
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    const handleScrollAnimations = () => {
      // Check header
      if (headerRef.current && !headerRef.current.classList.contains('animated')) {
        const rect = headerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          headerRef.current.classList.add('animated');
        }
      }

      // Check each service card
      serviceRefs.current.forEach((serviceCard, index) => {
        if (serviceCard && !serviceCard.classList.contains('animated')) {
          const rect = serviceCard.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            serviceCard.classList.add('animated');
          }
        }
      });
    };

    // Initial check
    handleScrollAnimations();

    // Optimized scroll listener with requestAnimationFrame
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

  // Helper to add service ref
  const addServiceRef = (el, index) => {
    serviceRefs.current[index] = el;
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-[#e6f7f9] text-[#1aa6b3] rounded-full text-sm font-medium mb-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#1aa6b3]/20 opacity-0 translate-y-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1aa6b3] transition-all duration-300 opacity-0 translate-y-4">
            HOW OUR LAUNDRY SERVICE WORKS
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <article
              key={service.id}
              ref={(el) => addServiceRef(el, index)}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div className="relative mb-6 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center opacity-0 scale-95 transition-all duration-700">
                  <img
                    src={service.icon}
                    alt={service.alt}
                    className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${service.icon}`);
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1aa6b3] to-teal-500 rounded-lg">
                        <span class="text-white font-bold text-2xl">${service.title.charAt(0)}</span>
                      </div>`;
                    }}
                    onLoad={(e) => {
                      // Only trigger animation if element is already in view
                      const parentCard = e.target.closest('article');
                      if (parentCard && parentCard.classList.contains('animated')) {
                        setTimeout(() => {
                          e.target.parentElement.style.opacity = '1';
                          e.target.parentElement.style.transform = 'scale(1)';
                        }, 100 + (index * 100));
                      }
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 max-w-xs">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1aa6b3] transition-all duration-300 group-hover:scale-105 opacity-0 translate-y-4 transition-all duration-700">
                  <span className="inline-block transition-all duration-300">
                    {service.title}
                  </span>
                </h3>
                
                <p className="text-[#1aa6b3] text-base sm:text-lg leading-relaxed transition-all duration-300 group-hover:opacity-100 opacity-90 opacity-0 translate-y-4 transition-all duration-700">
                  <span className="inline-block">
                    {service.description}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Header animations */
        .text-center.animated span {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .text-center.animated h2 {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }

        /* Service card animations - with staggered delays */
        article.animated > div:first-child > div {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        article.animated h3 {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        article.animated p {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Staggered animation delays */
        article.animated:nth-child(1) > div:first-child > div {
          transition-delay: 0.1s !important;
        }
        
        article.animated:nth-child(2) > div:first-child > div {
          transition-delay: 0.2s !important;
        }
        
        article.animated:nth-child(3) > div:first-child > div {
          transition-delay: 0.3s !important;
        }

        article.animated:nth-child(1) h3 {
          transition-delay: 0.4s !important;
        }
        
        article.animated:nth-child(2) h3 {
          transition-delay: 0.5s !important;
        }
        
        article.animated:nth-child(3) h3 {
          transition-delay: 0.6s !important;
        }

        article.animated:nth-child(1) p {
          transition-delay: 0.7s !important;
        }
        
        article.animated:nth-child(2) p {
          transition-delay: 0.8s !important;
        }
        
        article.animated:nth-child(3) p {
          transition-delay: 0.9s !important;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .text-center span,
          .text-center h2,
          article > div:first-child > div,
          article h3,
          article p {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;