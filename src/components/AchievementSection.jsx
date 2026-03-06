import React, { useState, useEffect, useRef } from 'react';

const AchievementSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const achievements = [
    {
      id: 1,
      target: 30000,
      suffix: '+',
      description: 'Happy customers trust our professional laundry and dry cleaning services.',
      color: '#1aa6b3'
    },
    {
      id: 2,
      target: 500,
      suffix: '+',
      description: 'Garments cleaned daily with eco-friendly detergents and modern equipment.',
      color: '#1aa6b3'
    },
    {
      id: 3,
      target: 99,
      suffix: '%',
      description: 'Customer satisfaction rate with same-day pickup and delivery service.',
      color: '#1aa6b3'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !hasAnimated.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (isInView) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      }
    };

    // Trigger on mount for refresh
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      achievements.forEach((achievement, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = achievement.target / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.min(
              Math.round(increment * currentStep),
              achievement.target
            );
            return newCounters;
          });

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Decorative Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#e0f7fa"
            opacity="0.5"
          />
          <path
            d="M0,80 C240,48 480,48 720,80 C960,112 1200,112 1440,80 L1440,120 L0,120 Z"
            fill="#b2ebf2"
            opacity="0.6"
          />
          <path
            d="M0,96 C240,80 480,80 720,96 C960,112 1200,112 1440,96 L1440,120 L0,120 Z"
            fill="#80deea"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <span className="inline-block px-6 py-2 bg-[#e6f7f9] text-[#1aa6b3] rounded-full text-sm font-medium mb-4 shadow-md">
            Our Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1aa6b3]">
            Trusted Laundry Service Excellence
          </h2>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {achievements.map((achievement, index) => (
            <article
              key={achievement.id}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${index * 200 + 300}ms`
              }}
            >
              {/* Counter Number */}
              <div className="mb-6 group">
                <h3 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold transition-all duration-500 hover:scale-110"
                  style={{ color: achievement.color }}
                >
                  <span className="inline-block tabular-nums">
                    {counters[index]}
                  </span>
                  <span className="inline-block">{achievement.suffix}</span>
                </h3>
                
                {/* Hover Glow Effect */}
                <div 
                  className="h-1 w-0 mx-auto mt-4 rounded-full transition-all duration-500 group-hover:w-24 group-hover:shadow-lg"
                  style={{ 
                    backgroundColor: achievement.color,
                    boxShadow: `0 0 20px ${achievement.color}`
                  }}
                ></div>
              </div>

              {/* Description */}
              <p className="text-[#1aa6b3] text-sm sm:text-base leading-relaxed max-w-xs transition-all duration-300 hover:opacity-100 opacity-90">
                <span className="inline-block">
                  {achievement.description}
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;