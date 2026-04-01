import React, { useState } from 'react';

const LFAProcess = () => {
  const [selected, setSelected] = useState(null);

  const processes = [
    { id: 1, title: 'Tagging', image: '/images/Tagging_11zon.webp', desc: 'Clothes are tagged to avoid potential mix up', info: 'Each garment receives a unique identification tag with barcode tracking to ensure your clothes are monitored throughout the entire process.' },
    { id: 2, title: 'Sorting', image: '/images/sorting_11zon.webp', desc: 'Carefully sorted by colour, material, texture, soiling level', info: 'Garments are sorted by color families, fabric types, texture, and degree of soiling for optimal cleaning results.' },
    { id: 3, title: 'Treatment', image: '/images/cuff_collar_11zon.webp', desc: 'Cuff & collar treated with special detergents', info: 'Problem areas receive targeted pre-treatment with specialized enzyme-based detergents for tough stains.' },
    { id: 4, title: 'Pre-Wash', image: '/images/pre_wash_11zon.webp', desc: 'Extra soiling gets special enzyme soak', info: 'Heavily soiled items undergo intensive enzyme treatment to break down stubborn stains before washing.' },
    { id: 5, title: 'Washing', image: '/images/washing_11zon.webp', desc: 'Washed as per the load type', info: 'Commercial washing machines with precise controls and customized cycles ensure thorough, eco-friendly cleaning.' },
    { id: 6, title: 'Softener', image: '/images/softener_11zon.webp', desc: 'Softener added as per finishing required', info: 'Premium fabric softeners provide luxurious softness, reduce static, and add fresh fragrance.' },
    { id: 7, title: 'Drying', image: '/images/drying_11zon.webp', desc: 'Air-dried in anti-bacterial stainless dryers', info: 'Industrial dryers with anti-bacterial coating provide gentle, controlled drying without damage.' },
    { id: 8, title: 'Ironing', image: '/images/ironing.png', desc: 'High pressure vacuum steam iron finishing', info: 'Professional steam pressing ensures crisp, wrinkle-free results with attention to every detail.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-80 h-80 bg-[#1aa6b3] rounded-full blur-3xl"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#1aa6b3] relative tracking-tight">THE LFA PROCESS</h1>
          <p className="text-[#1aa6b3] text-lg md:text-xl mt-3 font-semibold relative">Our 8-Step Professional Cleaning Methodology</p>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#1aa6b3] to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {processes.map((p, idx) => (
            <div 
              key={p.id} 
              onClick={() => setSelected(p)} 
              className="group cursor-pointer relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#1aa6b3] opacity-5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="flex flex-col items-center relative">
                  <div className="relative mb-3">
                    <div className="absolute inset-0 bg-[#1aa6b3] rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full border-3 border-[#1aa6b3] w-20 h-20 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                      <img src={p.image} alt={p.title} className="w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  
                  <h3 className="text-base font-bold text-[#1aa6b3] text-center mb-2 transition-all">{p.title}</h3>
                  <p className="text-xs text-[#1aa6b3]/80 text-center leading-snug">{p.desc}</p>
                  
                  <div className="mt-2 text-[#1aa6b3] font-semibold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Click to explore →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn" 
            onClick={() => setSelected(null)}
          >
            <div 
              className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-8 relative transform animate-slideUp border-2 border-[#1aa6b3]/30" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1aa6b3] hover:text-white text-[#1aa6b3] text-2xl transition-all hover:rotate-90 duration-300 shadow-md"
              >
                ×
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="absolute inset-0 bg-[#1aa6b3] rounded-full blur-2xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 rounded-full border-4 border-[#1aa6b3] w-32 h-32 flex items-center justify-center shadow-xl">
                    <img src={selected.image} alt={selected.title} className="w-20 h-20 object-contain" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-black text-[#1aa6b3] mb-3">{selected.title}</h2>
                <p className="text-lg text-[#1aa6b3] font-semibold mb-4">{selected.desc}</p>
                
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#1aa6b3] to-transparent mb-5"></div>
                
                <div className="bg-gradient-to-br from-teal-50/60 to-cyan-50/60 rounded-2xl p-5 mb-6 border border-[#1aa6b3]/20">
                  <p className="text-[#1aa6b3]/90 text-base leading-relaxed">{selected.info}</p>
                </div>
                
                <button 
                  onClick={() => setSelected(null)}
                  className="px-7 py-2.5 bg-gradient-to-r from-[#1aa6b3] to-teal-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center mt-12 relative">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#1aa6b3]/20 relative">
            <p className="text-[#1aa6b3] text-lg font-bold mb-1">Each step is carefully executed by trained professionals</p>
            <p className="text-[#1aa6b3]/80 text-base">Quality assurance at every stage of the process</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LFAProcess;
