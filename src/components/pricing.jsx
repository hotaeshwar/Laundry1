import React, { useState, useEffect, useRef } from 'react';
import { Truck, Sparkles, Check, ArrowLeft, X, Zap, Shield } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// CURRENCY CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const CURRENCIES = {
  CAD: { symbol: '$', code: 'CAD', label: 'Canadian $', flag: '🇨🇦' },
  INR: { symbol: '₹', code: 'INR', label: 'Indian ₹',   flag: '🇮🇳' },
};

const STEAM_IRON_CAD = [
  { name: 'Belt', price: 0.49 }, { name: 'Blazer / Coat - Long', price: 3.39 },
  { name: 'Blazer / Coat - Short', price: 2.19 }, { name: 'Boots leather', price: 4.99 },
  { name: 'Cap ( Casual / Woolen )', price: 0.99 }, { name: 'Combo - Shirt and Pant', price: 1.79 },
  { name: 'Dhoti / Lungi ( Silk )', price: 0.99 }, { name: 'Dhoti Heavy', price: 1.59 },
  { name: 'Dhoti Normal', price: 0.99 }, { name: 'Formal and Casual Trousers / Pants', price: 0.49 },
  { name: 'Gloves ( Leather )', price: 2.59 }, { name: 'Gloves ( Woolen )', price: 0.59 },
  { name: 'Handkerchief', price: 0.29 }, { name: 'Hats', price: 0.99 },
  { name: 'Indo Western', price: 5.99 }, { name: 'Jacket - Faux fur Long', price: 7.59 },
  { name: 'Shirt', price: 0.89 }, { name: 'T - Shirt', price: 0.89 },
  { name: 'Suit 2 Pc', price: 2.99 }, { name: 'Suit 3 Pc', price: 3.39 },
];

const STEAM_IRON_INR = [
  { name: 'Belt', price: 25 }, { name: 'Blazer / Coat - Long', price: 169 },
  { name: 'Blazer / Coat - Short', price: 109 }, { name: 'Boots leather', price: 249 },
  { name: 'Cap ( Casual / Woolen )', price: 49 }, { name: 'Combo - Shirt and Pant', price: 89 },
  { name: 'Shirt', price: 45 }, { name: 'T - Shirt', price: 45 },
  { name: 'Suit 2 Pc', price: 149 }, { name: 'Suit 3 Pc', price: 169 },
];

const DRY_CLEAN_CAD = [
  { name: 'Belt', price: 0.99 }, { name: 'Blazer / Coat - Long', price: 6.79 },
  { name: 'Shirt', price: 1.79 }, { name: 'T - Shirt', price: 1.89 },
  { name: 'Suit 2 Pc', price: 5.99 }, { name: 'Suit 3 Pc', price: 7.59 },
];

const DRY_CLEAN_INR = [
  { name: 'Belt', price: 50 }, { name: 'Blazer / Coat - Long', price: 339 },
  { name: 'Shirt', price: 89 }, { name: 'T - Shirt', price: 93 },
  { name: 'Suit 2 Pc', price: 299 }, { name: 'Suit 3 Pc', price: 379 },
];

const RATES = {
  CAD: { kg: 27.50, single: 26, double: 39, minOrder: 60,
    ironClothes: [5, 6.50, 9, 4], ironLinen: [5, 7.50, 9.50, 2.50] },
  INR: { kg: 100, single: 200, double: 350, minOrder: 480,
    ironClothes: [20, 25, 35, 15], ironLinen: [20, 30, 40, 10] },
};

const IRON_CLOTHES_LABELS = [
  'T-Shirts, Shorts, Skirts, Jeans, Trousers',
  'Business Shirts, Blouses, Dresses',
  'Complex Dresses — maxi, puff sleeves, pleating, tiered, frills',
  'Kids T-Shirts, Shorts, Jeans, Trousers (under 10)',
];
const IRON_LINEN_LABELS = [
  'Single bedding, Tablecloths (up to 1.5m × 1.5m)',
  'Double & Queen bedding, Tablecloths (up to 1.8m × 1.8m)',
  'King bedding, Tablecloths (up to 2.2m × 2.2m)',
  'Pillowcases, Tea Towels',
];

function fmt(sym, val, decimals = 2) {
  return `${sym}${Number(val).toFixed(decimals)}`;
}

function useVisible() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedSection({ children, delay = 0, className = '' }) {
  const [ref, visible] = useVisible();
  return (
    <div ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function CurrencyToggle({ currency, onChange }) {
  const isCAD = currency === 'CAD';
  return (
    <div className="flex items-center gap-2 select-none">
      <span className="text-xs font-bold" style={{ color: !isCAD ? '#1aa6b3' : 'rgba(26,166,179,0.45)' }}>🇮🇳 INR</span>
      <button
        onClick={() => onChange(isCAD ? 'INR' : 'CAD')}
        className="relative rounded-full flex-shrink-0"
        style={{ width: 48, height: 26, background: '#1aa6b3', border: '2px solid rgba(26,166,179,0.5)', transition: 'all .3s' }}
        aria-label="Toggle currency">
        <span
          className="absolute top-0.5 rounded-full bg-white shadow-md"
          style={{ width: 18, height: 18, left: isCAD ? 23 : 3, transition: 'all .3s' }}
        />
      </button>
      <span className="text-xs font-bold" style={{ color: isCAD ? '#1aa6b3' : 'rgba(26,166,179,0.45)' }}>🇨🇦 CAD</span>
    </div>
  );
}

function PriceModal({ title, items, sym, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-white"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" style={{ background: '#0f2744' }}>
          <h3 className="font-bold text-lg" style={{ color: '#1aa6b3' }}>{title}</h3>
          <button onClick={onClose} className="p-1.5 rounded-xl text-white/70 hover:text-white hover:bg-white/15 transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-2 px-5 py-2.5 flex-shrink-0 border-b" style={{ background: '#e6f9fb', borderColor: '#b2e8ec' }}>
          <span className="font-bold text-sm" style={{ color: '#0d7c87' }}>Item</span>
          <span className="font-bold text-sm text-right" style={{ color: '#0d7c87' }}>Price / Pc</span>
        </div>
        <div className="overflow-y-auto flex-1">
          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-2 px-5 py-2.5 border-b"
              style={{ borderColor: '#e6f9fb', background: i % 2 === 0 ? '#f0fbfc' : '#fff' }}>
              <span className="text-sm text-gray-700">{item.name}</span>
              <span className="text-sm font-bold text-right" style={{ color: '#1aa6b3' }}>{fmt(sym, item.price)}</span>
            </div>
          ))}
        </div>
        <div className="px-6 py-3 flex-shrink-0 text-center border-t" style={{ background: '#e6f9fb', borderColor: '#b2e8ec' }}>
          <p className="text-xs font-medium" style={{ color: '#0d7c87' }}>Prices are per piece · Tap outside to close</p>
        </div>
      </div>
    </div>
  );
}

function Stepper({ value, onChange }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl overflow-hidden flex-shrink-0"
      style={{ width: 58, minWidth: 58, border: '2px solid rgba(255,255,255,0.8)' }}>
      <button onClick={() => onChange(value + 1)}
        className="w-full flex items-center justify-center transition-all"
        style={{ padding: '5px 0', borderBottom: '1px solid rgba(26,166,179,0.2)' }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(26,166,179,0.08)'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <span className="font-bold text-sm py-1.5 text-center w-full select-none" style={{ color: '#0d7c87' }}>{value}</span>
      <button onClick={() => onChange(Math.max(0, value - 1))}
        className="w-full flex items-center justify-center transition-all"
        style={{ padding: '5px 0', borderTop: '1px solid rgba(26,166,179,0.2)' }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(26,166,179,0.08)'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#e91e8c" strokeWidth="3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PRICING COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const Pricing = ({ onClose, onBookingClick }) => {
  const [currency, setCurrency] = useState('CAD');
  const [modal, setModal] = useState(null);
  const [qtyKg, setQtyKg] = useState(0);
  const [qtySingle, setQtySingle] = useState(0);
  const [qtyDouble, setQtyDouble] = useState(0);
  const [ironClothes, setIronClothes] = useState([0, 0, 0, 0]);
  const [ironLinen, setIronLinen] = useState([0, 0, 0, 0]);

  const cur = CURRENCIES[currency];
  const sym = cur.symbol;
  const rates = RATES[currency];

  const steamIronItems = currency === 'CAD' ? STEAM_IRON_CAD : STEAM_IRON_INR;
  const dryCleanItems = currency === 'CAD' ? DRY_CLEAN_CAD : DRY_CLEAN_INR;

  const washTotal = qtyKg * rates.kg + qtySingle * rates.single + qtyDouble * rates.double;
  const ironClothesTotal = ironClothes.reduce((s, q, i) => s + q * rates.ironClothes[i], 0);
  const ironLinenTotal = ironLinen.reduce((s, q, i) => s + q * rates.ironLinen[i], 0);
  const grandTotal = washTotal + ironClothesTotal + ironLinenTotal;

  // ── FIX: loads now correctly counts kg wash loads (Col 1 top stepper) ──
  const totalLoads = qtyKg;
  const totalBlankets = qtySingle + qtyDouble;
  const totalItems = ironClothes.reduce((s, v) => s + v, 0) + ironLinen.reduce((s, v) => s + v, 0);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <style>{`
        @keyframes shimmer { 0% { background-position: -400px 0; } 100% { background-position: 400px 0; } }
        .shimmer-text { background: linear-gradient(90deg,#1aa6b3 0%,#5eead4 50%,#1aa6b3 100%); background-size: 400px 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 3s linear infinite; }
        @keyframes currencyFlip { 0%{opacity:0;transform:scale(0.85);}100%{opacity:1;transform:scale(1);} }
        .currency-flip { animation: currencyFlip 0.3s ease-out; }
        .view-btn { transition: all .2s ease; }
        .view-btn:hover { background: rgba(255,255,255,0.25) !important; }
        .split-btn { transition: box-shadow .25s ease; }
        .split-btn:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.2); }
        .split-btn .split-left { border-radius: 1rem 0 0 1rem; }
        .split-btn .split-right { border-radius: 0 1rem 1rem 0; }
        .split-btn:hover .split-left { transform: translateX(-6px); background: rgba(26,166,179,0.08); }
        .split-btn:hover .split-right { transform: translateX(6px); background: rgba(26,166,179,0.08); }
      `}</style>

      {/* Modals */}
      {modal === 'iron' && <PriceModal title="Steam Iron — Full Price List" items={steamIronItems} sym={sym} onClose={() => setModal(null)} />}
      {modal === 'dry' && <PriceModal title="Dry Cleaning — Full Price List" items={dryCleanItems} sym={sym} onClose={() => setModal(null)} />}

      {/* ── HERO ── */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 380 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/franchaise.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(10, 30, 50, 0.72)' }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(26,166,179,0.18)', borderColor: 'rgba(26,166,179,0.5)' }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#1aa6b3' }} />
            <span className="text-sm font-semibold" style={{ color: '#1aa6b3' }}>Transparent Pricing · No Hidden Fees</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight" style={{ color: '#1aa6b3', textShadow: '0 0 30px rgba(26,166,179,0.5)' }}>
            Our Pricing
          </h1>
          <p className="text-base sm:text-lg font-medium mb-6" style={{ color: 'rgba(26,166,179,0.9)', textShadow: '0 0 12px rgba(26,166,179,0.4)' }}>
            Professional laundry care at honest prices.
          </p>
          <div className="inline-flex items-center gap-2 border px-5 py-2.5 rounded-full mb-5"
            style={{ background: 'rgba(26,166,179,0.15)', borderColor: 'rgba(26,166,179,0.5)' }}>
            <Truck className="w-4 h-4" style={{ color: '#1aa6b3' }} />
            <span className="font-semibold text-sm" style={{ color: '#1aa6b3' }}>
              FREE Pick up &amp; Drop on orders above {fmt(sym, rates.minOrder, 0)}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {[
              { icon: Sparkles, label: '50% OFF 1st Order' },
              { icon: Zap, label: 'Express 3-Hour Service Free' },
              { icon: Shield, label: 'No Hidden Charges' },
            ].map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full"
                style={{ background: 'rgba(26,166,179,0.18)', border: '1px solid rgba(26,166,179,0.4)', color: '#1aa6b3', backdropFilter: 'blur(8px)' }}>
                <b.icon className="w-4 h-4" /> {b.label}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-3 mt-5 px-5 py-2.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)' }}>
            <span className="text-white/80 text-xs font-semibold">Viewing prices in:</span>
            <CurrencyToggle currency={currency} onChange={setCurrency} />
            <span className="font-bold text-sm currency-flip" key={`hero-cur-${currency}`} style={{ color: '#1aa6b3' }}>
              {cur.flag} {cur.label}
            </span>
          </div>
        </div>
      </div>

      {/* ── REST OF PAGE ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* ── Minimum Service Charge ── */}
        <AnimatedSection delay={50}>
          <div className="rounded-2xl py-7 px-6 sm:px-12 text-center border-2"
            style={{ background: 'linear-gradient(135deg,#e0f8fa 0%,#c8f2f5 100%)', borderColor: '#1aa6b3' }}>
            <p className="font-bold text-xl sm:text-2xl currency-flip" key={currency} style={{ color: '#0d7c87' }}>
              Minimum Service charge of {fmt(sym, rates.minOrder, 0)} (ex applicable taxes) applies to all bookings.
            </p>
            <p className="font-bold text-lg sm:text-xl mt-1" style={{ color: '#1aa6b3' }}>
              Includes FREE pickup and delivery.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Express ── */}
        <AnimatedSection delay={70}>
          <div className="bg-white rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md border-l-4"
            style={{ borderColor: '#1aa6b3' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(26,166,179,0.1)' }}>
                <Zap className="w-5 h-5" style={{ color: '#1aa6b3' }} />
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg" style={{ color: '#1aa6b3' }}>Express 3-Hour Service</p>
                <p className="text-gray-500 text-sm">Need it urgently? We've got you covered!</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold" style={{ color: '#1aa6b3' }}>Free</p>
              <p className="text-gray-500 text-sm">No Extra Charge</p>
            </div>
          </div>
        </AnimatedSection>

        {/* ── How We Calculate ── */}
        <AnimatedSection delay={80}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2" style={{ borderColor: 'rgba(26,166,179,0.2)' }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2" style={{ color: '#1aa6b3' }}>
              How We Calculate 1x 5Kg Load
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center max-w-3xl mx-auto mb-2">
              One load of washing (clothing or linen) is approximately 5kgs (weighed when dry) or a standard size laundry basket.
              If you have darks and whites, these will be separated into two loads, even if less than 5kgs.
            </p>
            <p className="text-gray-600 text-sm sm:text-base text-center max-w-3xl mx-auto mb-8">
              Blankets and comforters are thicker items and will be charged on the <strong>volume</strong> rather than weight.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-0 max-w-3xl mx-auto">
              <div className="flex-1 flex flex-col items-center rounded-2xl p-8 gap-4"
                style={{ background: 'rgba(26,166,179,0.08)', border: '2px solid rgba(26,166,179,0.25)' }}>
                <h4 className="font-bold text-2xl" style={{ color: '#1aa6b3' }}>Weight</h4>
                <div className="w-full flex-1 flex items-center justify-center py-4">
                  <img src="/images/weight-kg-1.png" alt="Weight" className="w-36 h-36 object-contain" />
                </div>
                <p className="text-gray-500 text-sm text-center">Regular clothes — up to 5kg</p>
                <div className="px-5 py-2 rounded-full font-bold text-white text-sm currency-flip" key={`w-${currency}`}
                  style={{ background: '#1aa6b3' }}>
                  {fmt(sym, rates.kg)} / kg
                </div>
              </div>
              <div className="flex sm:flex-col items-center justify-center px-5 py-4">
                <span className="font-bold text-base text-gray-400">OR</span>
              </div>
              <div className="flex-1 flex flex-col items-center rounded-2xl p-8 gap-4"
                style={{ background: 'rgba(26,166,179,0.08)', border: '2px solid rgba(26,166,179,0.25)' }}>
                <h4 className="font-bold text-2xl" style={{ color: '#1aa6b3' }}>Volume</h4>
                <div className="w-full flex-1 flex items-center justify-center py-4">
                  <img src="/images/price.png" alt="Volume" className="w-36 h-36 object-contain" />
                </div>
                <p className="text-gray-500 text-sm text-center">Blankets &amp; heavy items — per piece</p>
                <div className="px-5 py-2 rounded-full font-bold text-white text-sm currency-flip" key={`v-${currency}`}
                  style={{ background: '#1aa6b3' }}>
                  {fmt(sym, rates.single)} / piece
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Price Calculator Card ── */}
        <AnimatedSection delay={90}>
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: '#1aa6b3' }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/20">

              {/* COL 1 — Wash, Dry and Fold */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-7">
                  <img src="/images/laundry-service.png" alt="" className="w-9 h-9 object-contain filter brightness-0 invert" />
                  <h4 className="text-white font-bold text-xl">Wash, Dry and Fold</h4>
                </div>
                <div className="space-y-5">
                  {/* ── FIX: onChange now calls setQtyKg so totalLoads updates ── */}
                  <div className="flex items-start gap-3">
                    <Stepper value={qtyKg} onChange={(v) => setQtyKg(v)} />
                    <p className="text-white text-sm leading-snug pt-1">
                      <span className="font-bold currency-flip" key={`r1-${currency}`}>{fmt(sym, rates.kg)}</span> per kg load of washing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Stepper value={qtySingle} onChange={(v) => setQtySingle(v)} />
                    <p className="text-white text-sm leading-snug pt-1">
                      <span className="font-bold currency-flip" key={`r2-${currency}`}>{fmt(sym, rates.single)}</span> per comforter / blanket (single)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Stepper value={qtyDouble} onChange={(v) => setQtyDouble(v)} />
                    <p className="text-white text-sm leading-snug pt-1">
                      <span className="font-bold currency-flip" key={`r3-${currency}`}>{fmt(sym, rates.double)}</span> per comforter / blanket (double / queen / king)
                    </p>
                  </div>
                </div>
              </div>

              {/* COL 2 — Ironing Clothes */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-7">
                  <img src="/images/steam-iron.png" alt="" className="w-9 h-9 object-contain filter brightness-0 invert" />
                  <h4 className="text-white font-bold text-xl">Ironing — Clothes</h4>
                </div>
                <div className="space-y-5">
                  {IRON_CLOTHES_LABELS.map((label, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Stepper value={ironClothes[i]}
                        onChange={v => setIronClothes(prev => { const n = [...prev]; n[i] = v; return n; })} />
                      <p className="text-white text-sm font-semibold leading-snug pt-1">{label}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => setModal('iron')}
                  className="view-btn mt-6 w-full text-sm font-bold border-2 border-white rounded-xl py-2.5 flex items-center justify-center gap-1 text-white"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  View Full Steam Iron Price List →
                </button>
              </div>

              {/* COL 3 — Ironing Linen */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-7">
                  <img src="/images/pillow.png" alt="" className="w-9 h-9 object-contain filter brightness-0 invert" />
                  <h4 className="text-white font-bold text-xl">Ironing — Bedding &amp; Linen</h4>
                </div>
                <div className="space-y-5">
                  {IRON_LINEN_LABELS.map((label, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Stepper value={ironLinen[i]}
                        onChange={v => setIronLinen(prev => { const n = [...prev]; n[i] = v; return n; })} />
                      <p className="text-white text-sm font-semibold leading-snug pt-1">{label}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => setModal('dry')}
                  className="view-btn mt-6 w-full text-sm font-bold border-2 border-white rounded-xl py-2.5 flex items-center justify-center gap-1 text-white"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  View Dry Cleaning Price List →
                </button>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* ── Estimate Calculator Bar ── */}
        <AnimatedSection delay={100}>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden"
            style={{ border: '1px solid rgba(26,166,179,0.25)', borderTop: '4px solid #1aa6b3' }}>
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="flex items-center justify-center px-6 py-5 lg:w-44 flex-shrink-0"
                style={{ background: 'rgba(26,166,179,0.05)', borderRight: '1px solid rgba(26,166,179,0.15)' }}>
                <h3 className="font-bold text-xl leading-tight text-center" style={{ color: '#1aa6b3' }}>
                  Estimate<br />Calculator
                </h3>
              </div>

              <div className="flex-1 flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 py-5"
                style={{ borderRight: '1px solid rgba(26,166,179,0.15)' }}>

                {/* ── LOADS — now reactive to qtyKg stepper ── */}
                <div className="flex flex-col items-center gap-1.5">
                  <img src="/images/laundry-service.png" alt="loads" className="w-10 h-10 object-contain" />
                  <span className="font-bold text-2xl leading-none" style={{ color: '#1aa6b3' }}>{totalLoads}</span>
                  <span className="text-gray-500 text-xs font-medium">loads</span>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <img src="/images/pillow.png" alt="blankets" className="w-10 h-10 object-contain" />
                  <span className="font-bold text-2xl leading-none" style={{ color: '#1aa6b3' }}>{totalBlankets}</span>
                  <span className="text-gray-500 text-xs font-medium">blankets</span>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <img src="/images/steam-iron.png" alt="items" className="w-10 h-10 object-contain" />
                  <span className="font-bold text-2xl leading-none" style={{ color: '#1aa6b3' }}>{totalItems}</span>
                  <span className="text-gray-500 text-xs font-medium">items</span>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <Truck className="w-10 h-10" style={{ color: '#1aa6b3' }} />
                  <span className="font-bold text-sm text-center leading-tight" style={{ color: '#1aa6b3' }}>Pick up<br />and delivery</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-5 px-6 py-5 flex-shrink-0">
                <p className="text-4xl sm:text-5xl font-bold whitespace-nowrap currency-flip" key={`total-${currency}`}
                  style={{ color: '#1aa6b3' }}>
                  {fmt(sym, grandTotal)}
                </p>
                <div className="text-xs text-gray-500 leading-relaxed">
                  <p className="font-medium" style={{ color: '#0d7c87' }}>Minimum {fmt(sym, rates.minOrder, 0)} per service.</p>
                  <p>FREE pick up &amp; delivery</p>
                  <p>on orders above {fmt(sym, rates.minOrder, 0)}.</p>
                  <p className="mt-1">Prices are estimates;</p>
                  <p>final bill on actual weight.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Free Inclusions ── */}
        <AnimatedSection delay={100}>
          <div className="rounded-3xl p-6 sm:p-8 border-2" style={{ background: 'rgba(26,166,179,0.06)', borderColor: 'rgba(26,166,179,0.2)' }}>
            <h3 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: '#1aa6b3' }}>
              <Sparkles className="w-5 h-5" /> All Included — No Extra Charge
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Free Softener Treatment','Free Stain Pretreatment','Free Cuff & Collar Cleaning',
                'Free Disinfectant','Quality Detergent Included','Express 3-Hour Service Free'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border shadow-sm"
                  style={{ borderColor: 'rgba(26,166,179,0.2)' }}>
                  <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#1aa6b3' }} />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── CTA ── */}
        <AnimatedSection delay={100}>
          <div className="rounded-3xl p-6 sm:p-10 text-center shadow-2xl"
            style={{ background: 'linear-gradient(135deg,#1aa6b3 0%,#0d7c87 100%)' }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Ready to Experience Premium Laundry Care?</h3>
            <p className="text-white/80 mb-6 text-sm sm:text-base">Book your first order and get <strong>50% OFF!</strong></p>
            <button
              onClick={onBookingClick}
              className="split-btn relative overflow-hidden bg-white font-bold rounded-2xl shadow-lg text-base inline-flex items-center"
              style={{ color: '#1aa6b3', padding: 0 }}>
              <span className="split-left relative z-10 px-6 py-3.5 transition-all duration-300 flex items-center"><Truck className="w-4 h-4" /></span>
              <span className="split-right relative z-10 px-6 py-3.5 transition-all duration-300 border-l"
                style={{ borderColor: 'rgba(26,166,179,0.2)' }}>Schedule Pickup</span>
            </button>
          </div>
        </AnimatedSection>

      </main>
    </div>
  );
};

export default Pricing;