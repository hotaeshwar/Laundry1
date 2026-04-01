import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, Clock, Package, Shield, DollarSign, MessageCircle, Loader2, CheckCircle, X } from 'lucide-react';

const WA_NUMBER = '917014638562';
const PREDESIGNED_MESSAGE =
  `Hi LFA Laundry! 👋\n\nI visited your FAQ page and still have a question.\n\nCould you please help me? 😊`;

const C = '#1aa6b3'; // single brand color

// ── WhatsApp Loader Modal ─────────────────────────────────────────
const WhatsAppLoader = ({ onDone, onCancel }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1600);
    const t2 = setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(PREDESIGNED_MESSAGE)}`, '_blank');
      onDone();
    }, 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className="relative bg-white rounded-3xl shadow-2xl p-8 mx-4 max-w-sm w-full flex flex-col items-center gap-5"
        style={{ animation: 'pop 0.35s cubic-bezier(.175,.885,.32,1.275) both' }}
      >
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>

        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full" style={{ background: '#25D36618', animation: 'pulse-ring 1.2s ease-out infinite' }} />
          <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 8px 32px #25D36640' }}>
            {step === 0
              ? <Loader2 className="w-10 h-10 text-white animate-spin" />
              : <CheckCircle className="w-10 h-10 text-white" style={{ animation: 'tick 0.4s cubic-bezier(.175,.885,.32,1.275) both' }} />
            }
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-black text-gray-800 mb-1">{step === 0 ? 'Opening WhatsApp…' : 'Ready! 🎉'}</p>
          <p className="text-sm text-gray-500 leading-relaxed">{step === 0 ? 'Preparing your message for our team.' : 'Redirecting you to WhatsApp now!'}</p>
        </div>

        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg,#25D366,#128C7E)', animation: 'bar 2.6s linear forwards' }} />
        </div>

        <div className="w-full bg-gray-50 rounded-2xl p-4 border border-gray-200">
          <p className="text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wider">Message Preview</p>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{PREDESIGNED_MESSAGE}</p>
        </div>
      </div>

      <style>{`
        @keyframes pop { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }
        @keyframes tick { from{opacity:0;transform:scale(.4)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse-ring { 0%{transform:scale(.85);opacity:.5} 100%{transform:scale(1.6);opacity:0} }
        @keyframes bar { from{width:0%} to{width:100%} }
      `}</style>
    </div>
  );
};

// ── FAQ data ──────────────────────────────────────────────────────
const faqCategories = [
  {
    category: 'General Questions', icon: HelpCircle,
    questions: [
      { question: 'What services does LFA Laundry provide?', answer: 'We offer three main services: Wash & Dry & Fold (3-hour express service), Professional Steam Ironing, and Dry Cleaning for delicate garments. We also provide additional services including shoe cleaning, curtain washing, and blanket & comforter cleaning.' },
      { question: 'What are your operating hours?', answer: 'We are open Monday to Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM. We accept drop-offs and pickups during these hours.' },
      { question: 'Do you offer pickup and delivery services?', answer: "Currently, we operate as a drop-off and pickup service at our location. However, we're working on introducing home pickup and delivery services soon. Stay tuned for updates!" },
    ],
  },
  {
    category: 'Service & Timing', icon: Clock,
    questions: [
      { question: 'How long does the wash and fold service take?', answer: 'Our express wash and fold service is completed within 3 hours. Simply drop off your laundry, and it will be washed, dried, and neatly folded, ready for pickup in just 3 hours.' },
      { question: 'What is the turnaround time for dry cleaning?', answer: 'Standard dry cleaning typically takes 24-48 hours depending on the garment type and any special treatments required. For urgent requests, we offer same-day dry cleaning for an additional express fee.' },
      { question: 'Can I get same-day service?', answer: 'Yes! Our wash and fold service offers 3-hour turnaround, making same-day service possible. For dry cleaning, same-day service is available for an additional express charge if you drop off before 10 AM.' },
      { question: 'Do you provide ironing as a separate service?', answer: "Absolutely! We offer professional steam ironing as a standalone service. You can drop off clothes that only need pressing, and we'll use our premium Italian-grade ironers to deliver perfectly pressed garments." },
    ],
  },
  {
    category: 'Quality & Care', icon: Shield,
    questions: [
      { question: "Do you wash each customer's laundry separately?", answer: "Yes, absolutely! We wash each customer's laundry separately to ensure maximum hygiene and prevent any cross-contamination. This is one of our core quality promises." },
      { question: 'What kind of detergents do you use?', answer: 'We use high-quality, premium detergents that are effective yet gentle on fabrics. Our detergents are suitable for all fabric types and provide optimal cleanliness while maintaining fabric integrity.' },
      { question: 'How do you handle delicate fabrics?', answer: 'Delicate fabrics receive special care through our dry cleaning service. We have expertise in handling designer wear, ethnic wear, silk, wool, and other delicate materials. Each garment is inspected and treated according to its specific care requirements.' },
      { question: 'What equipment do you use?', answer: 'We use imported American washing machines for superior cleaning, professional dryers, and Italian-grade ironers for perfect finishing. All our equipment is commercial-grade and maintained to the highest standards.' },
    ],
  },
  {
    category: 'Pricing & Payment', icon: DollarSign,
    questions: [
      { question: 'How do you charge for wash and fold service?', answer: 'Our wash and fold service is charged by weight (per kg). We weigh your laundry when you drop it off and provide you with an exact quote. Minimum order requirements may apply.' },
      { question: 'How is dry cleaning priced?', answer: 'Dry cleaning is priced per garment based on the type of item (shirt, suit, dress, etc.). We provide a detailed price list at our location, and our staff will inform you of the exact cost before processing.' },
      { question: 'What payment methods do you accept?', answer: 'We accept cash, all major credit and debit cards, and digital payment methods including UPI, Google Pay, PhonePe, and Paytm for your convenience.' },
      { question: 'Do you offer any discounts or loyalty programs?', answer: 'Yes! We offer special discounts for bulk orders and regular customers. Ask our staff about our loyalty program where you can earn points with each service and redeem them for discounts.' },
    ],
  },
  {
    category: 'Special Services', icon: Package,
    questions: [
      { question: 'Can you remove tough stains?', answer: 'Yes, we have expertise in stain removal. While we can handle most common stains effectively, we always inform customers if a stain may be permanent or requires special treatment before proceeding.' },
      { question: 'Do you clean wedding dresses and formal wear?', answer: 'Absolutely! We specialize in cleaning wedding dresses, formal gowns, suits, and ethnic wear. These items receive extra care through our premium dry cleaning service with specialized handling for delicate fabrics and intricate designs.' },
      { question: 'Can you clean large items like curtains and comforters?', answer: "Yes, we offer specialized cleaning for curtains, blankets, and comforters. These items require special equipment and processes, which we're fully equipped to handle with our commercial-grade machines designed for large fabric items." },
      { question: 'What if something gets damaged?', answer: 'While we take utmost care with every garment using premium equipment and trained professionals, in the rare event of damage, we have a fair compensation policy. Please check your items upon pickup and report any issues immediately.' },
    ],
  },
];

// ── Main Component ────────────────────────────────────────────────
export default function FAQ() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible((p) => ({ ...p, [e.target.dataset.key]: true }));
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-key]').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [openCategory]);

  const toggleCategory = (i) => { setOpenCategory(openCategory === i ? null : i); setOpenIndex(null); };
  const toggleQuestion = (ci, qi) => { const k = `${ci}-${qi}`; setOpenIndex(openIndex === k ? null : k); };

  return (
    <div className="min-h-screen" style={{ background: `${C}08` }}>

      {showLoader && <WhatsAppLoader onDone={() => setShowLoader(false)} onCancel={() => setShowLoader(false)} />}

      {/* ── Hero ── */}
      <div className="relative overflow-hidden py-16 px-4" style={{ background: `linear-gradient(135deg,${C} 0%,${C}cc 100%)` }}>
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20" style={{ background: '#fff' }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10" style={{ background: '#fff' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-sm font-semibold"
            style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <HelpCircle className="w-4 h-4" /> Got a question? We've got answers.
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-white" style={{ letterSpacing: '-0.02em', textShadow: '0 4px 24px rgba(0,0,0,0.15)' }}>
            Frequently Asked<br /><span style={{ color: '#d1faf8' }}>Questions</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Everything you need to know about our laundry &amp; dry cleaning services
          </p>
        </div>
      </div>

      {/* ── Categories ── */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-5">
        {faqCategories.map((cat, ci) => {
          const Icon = cat.icon;
          const isOpen = openCategory === ci;
          return (
            <div
              key={ci}
              data-key={`cat-${ci}`}
              className="rounded-3xl overflow-hidden"
              style={{
                background: '#fff',
                boxShadow: isOpen ? `0 20px 60px ${C}28, 0 4px 16px ${C}15` : `0 2px 16px ${C}12`,
                border: `2px solid ${isOpen ? C + '60' : C + '20'}`,
                opacity: visible[`cat-${ci}`] ? 1 : 0,
                transform: visible[`cat-${ci}`] ? 'translateY(0)' : 'translateY(28px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border 0.3s ease',
                transitionDelay: `${ci * 60}ms`,
              }}
            >
              {/* Category header */}
              <button onClick={() => toggleCategory(ci)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg,${C},${C}aa)`, boxShadow: `0 6px 18px ${C}40` }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-black" style={{ color: C }}>{cat.category}</h2>
                    <p className="text-sm" style={{ color: `${C}80` }}>{cat.questions.length} questions</p>
                  </div>
                </div>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{ background: isOpen ? C : `${C}18`, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <ChevronDown className="w-5 h-5" style={{ color: isOpen ? '#fff' : C }} />
                </div>
              </button>

              {/* Questions panel */}
              <div style={{ maxHeight: isOpen ? '9999px' : '0', overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)' }}>
                <div className="px-5 pb-5 space-y-3">
                  {cat.questions.map((item, qi) => {
                    const qKey = `${ci}-${qi}`;
                    const isQOpen = openIndex === qKey;
                    return (
                      <div
                        key={qi}
                        data-key={`q-${ci}-${qi}`}
                        className="rounded-2xl overflow-hidden"
                        style={{
                          border: `1.5px solid ${isQOpen ? C + '55' : C + '20'}`,
                          background: isQOpen ? `${C}08` : `${C}04`,
                          opacity: visible[`q-${ci}-${qi}`] ? 1 : 0,
                          transform: visible[`q-${ci}-${qi}`] ? 'none' : 'translateX(-12px)',
                          transition: 'opacity 0.4s ease, transform 0.4s ease, border 0.25s, background 0.25s',
                          transitionDelay: `${qi * 40}ms`,
                        }}
                      >
                        <button onClick={() => toggleQuestion(ci, qi)} className="w-full px-4 py-4 text-left flex items-center justify-between gap-3">
                          <span className="text-sm sm:text-base font-bold leading-snug" style={{ color: C }}>
                            {item.question}
                          </span>
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                            style={{ background: isQOpen ? C : `${C}18`, transform: isQOpen ? 'rotate(180deg)' : 'none' }}
                          >
                            <ChevronDown className="w-4 h-4" style={{ color: isQOpen ? '#fff' : C }} />
                          </div>
                        </button>

                        <div style={{ maxHeight: isQOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}>
                          <div className="px-4 pb-4">
                            <div className="rounded-xl p-4" style={{ background: `${C}10`, borderLeft: `4px solid ${C}` }}>
                              <p className="text-sm leading-relaxed" style={{ color: C }}>{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* ── Still have questions? ── */}
        <div
          data-key="footer-cta"
          className="rounded-3xl p-8 sm:p-10 text-center"
          style={{
            background: '#fff',
            boxShadow: `0 4px 24px ${C}20`,
            border: `2px solid ${C}25`,
            opacity: visible['footer-cta'] ? 1 : 0,
            transform: visible['footer-cta'] ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: `linear-gradient(135deg,${C},${C}bb)`, boxShadow: `0 8px 24px ${C}35` }}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <p className="text-2xl font-black mb-2" style={{ color: C }}>Still have questions?</p>
          <p className="text-base mb-6" style={{ color: C, opacity: 0.72 }}>
            Feel free to reach out to us anytime. We're here to help!
          </p>

          <button
            onClick={() => setShowLoader(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: '#fff', boxShadow: '0 8px 30px rgba(37,211,102,0.4)' }}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.528 5.855L0 24l6.335-1.527A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.373l-.36-.214-3.727.978.995-3.636-.234-.374A9.818 9.818 0 1121.818 12 9.83 9.83 0 0112 21.818z"/>
            </svg>
            Chat with Us on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}