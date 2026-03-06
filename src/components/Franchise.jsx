import React, { useState, useEffect, useRef } from 'react';
import { 
  User, Mail, Phone, MapPin, Building2, DollarSign, MessageSquare, 
  CheckCircle, X, Star, Award, TrendingUp, Users, Target, 
  Briefcase, GraduationCap, BarChart3, Copy, Sparkles, Clock, Play,
  CheckCircle2, XCircle, Zap, Shield, BarChart2, Globe
} from 'lucide-react';

const CURRENCIES = {
  INR: {
    code: 'INR', symbol: '₹', label: 'Indian Rupee', flag: '🇮🇳',
    investmentRange: '₹25,00,000 – ₹85,00,000', roi: '25-35% Annually', payback: '2-3 Years',
    franchiseFee: '₹2-5 Lakhs',
    investmentOptions: ['₹5-10 Lakhs', '₹10-20 Lakhs', '₹20-50 Lakhs', '₹50 Lakhs+'],
    faqFee: '₹6 lakhs (+Taxes)',
    setupCost: '≈ ₹20 Lakhs', storeArea: '250-300 sq. ft.', franchiseFeeDisplay: '₹6 Lakhs (+Taxes)',
    royalty: '7% of gross sales', avgRevenue: '₹3,00,000 – ₹4,00,000/month',
    avgProfit: '₹1.5 to ₹2 Lakhs/month', grossProfit: '70%',
  },
  CAD: {
    code: 'CAD', symbol: 'CA$', label: 'Canadian Dollar', flag: '🇨🇦',
    investmentRange: 'CA$29,999 – CA$99,999', roi: '25-35% Annually', payback: '2-3 Years',
    franchiseFee: 'CA$3,300 - CA$8,250',
    investmentOptions: ['CA$8,250 - CA$16,500', 'CA$16,500 - CA$33,000', 'CA$33,000 - CA$82,500', 'CA$82,500+'],
    faqFee: 'CA$3,300 - CA$8,250 based on location',
    setupCost: '≈ CA$33,000', storeArea: '250-300 sq. ft.', franchiseFeeDisplay: 'CA$9,900 (+Taxes)',
    royalty: '7% of gross sales', avgRevenue: '₹3,00,000 – ₹4,00,000/month',
    avgProfit: 'CA$2,475 - CA$3,300/month', grossProfit: '70%',
  }
};

const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const [ref, visible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const Franchise = () => {
  const [currency, setCurrency] = useState('CAD');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [generatedApplicationNumber, setGeneratedApplicationNumber] = useState('');

  const curr = CURRENCIES[currency];
  const companyPhone = '+91-7014638562';
  const companyWhatsApp = '917014638562';
  const companyEmail = 'laundryforalllfa@gmail.com';

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '',
    investment: '', experience: '', message: ''
  });

  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const videosRef = useRef(null);
  const investmentRef = useRef(null);
  const faqRef = useRef(null);

  const generateApplicationNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    return `LFA-FR-${year}-${month}${day}-${randomNum}`;
  };

  useEffect(() => {
    const handleScrollAnimations = () => {
      const sections = [heroRef, benefitsRef, videosRef, investmentRef, faqRef];
      sections.forEach((ref) => {
        if (ref.current && !ref.current.classList.contains('animate-in')) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9) {
            ref.current.classList.add('animate-in');
            const children = ref.current.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
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

  useEffect(() => { if (showCopySuccess) { const t = setTimeout(() => setShowCopySuccess(false), 2000); return () => clearTimeout(t); } }, [showCopySuccess]);
  useEffect(() => { setFormData(prev => ({ ...prev, investment: '' })); }, [currency]);
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedVideo]);

  const benefits = [
    { icon: Briefcase, title: "Proven Business Model", description: "Track record of growth and profitability" },
    { icon: GraduationCap, title: "Training & Support", description: "Complete guidance to ensure success" },
    { icon: BarChart3, title: "Marketing Support", description: "National campaigns & local assistance" },
    { icon: Users, title: "Strong Network", description: "Community of successful franchisees" }
  ];

  const videos = [
    { id: "1", title: "7-Day Digital Launch Playbook", thumbnail: "/images/7-day digital launch playbook thumbnail.png", embedUrl: "https://drive.google.com/file/d/153oijS9qkyp4_vk5qJ6M-T7N3EMyELgZ/preview" },
    { id: "2", title: "Franchise Launch & Growth Process", thumbnail: "/images/Franchise launch and growth process.png", embedUrl: "https://drive.google.com/file/d/1ALMQ6u0e7NrBUS--t-Xn3XBAZvNnUg86/preview" },
    { id: "3", title: "Laundry Business Plan Concept", thumbnail: "/images/Laundry business plan concept design.png", embedUrl: "https://drive.google.com/file/d/1nySCK-p4AT5bAmhwMJ-OQvAPclzCOXgf/preview" },
    { id: "4", title: "Operations Guide", thumbnail: "/images/last.png", embedUrl: "https://drive.google.com/file/d/1S16XSKkPaumkojHYNb8jiaDqLDq7Yr9f/preview" }
  ];

  const roImages = ['/images/ro.jpg','/images/ro1.jpg','/images/ro2.jpg','/images/ro3.jpg','/images/ro4.jpg','/images/ro5.jpg','/images/ro6.jpg'];

  const supportItems = [
    { title: "Operations Support", desc: "Our operations training ensures franchisees become experts at high-quality cleaning techniques with 4.4/5 ratings." },
    { title: "Hiring & Training Support", desc: "We'll help you hire & train the right team with all required operational skills to run a successful business." },
    { title: "Supply Chain Management", desc: "Well-oiled supply chain machinery so you never have to run pillar to post to buy operational items." },
    { title: "Tech & IT Support", desc: "In-house invoicing and lead generation software for data security and confidentiality — unique to LaundryForAll." },
    { title: "Marketing Support", desc: "Unparalleled branding and marketing support with a strong digital presence to drive consistent footfall." },
    { title: "Project Support", desc: "We help identify high-performing micro-markets within your budget for the right location at the right price." },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copyApplicationNumber = () => {
    navigator.clipboard.writeText(generatedApplicationNumber);
    setShowCopySuccess(true);
  };

  const sendWhatsAppMessage = (applicationNumber, applicationData) => {
    const message = `🎉 *New Franchise Application*\n\n📋 *Application ID:* ${applicationNumber}\n\n👤 *Applicant Details:*\nName: ${applicationData.name}\nEmail: ${applicationData.email}\nPhone: ${applicationData.phone}\nCity: ${applicationData.city}\n\n💰 *Investment Capacity:* ${applicationData.investment} (${currency})\n\n💼 *Business Experience:* ${applicationData.experience || 'Not specified'}\n\n${applicationData.message ? `💬 *Additional Information:*\n${applicationData.message}` : ''}\n\nPlease review this franchise application. Thank you!`;
    window.open(`https://wa.me/${companyWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.investment) {
      alert('Please fill in all required fields');
      return;
    }
    const newApplicationNumber = generateApplicationNumber();
    setGeneratedApplicationNumber(newApplicationNumber);
    setIsSubmitting(true);
    setSubmitStatus('');
    const capturedFormData = { ...formData };
    try {
      const currentDate = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      const currentTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const formElement = document.createElement('form');
      formElement.action = 'https://formsubmit.co/ajax/laundryforalllfa@gmail.com';
      formElement.method = 'POST';
      formElement.style.display = 'none';
      const fields = {
        '_subject': `🏢 New Franchise Application - ${newApplicationNumber}`, '_template': 'table',
        '_replyto': formData.email, '_cc': formData.email, '_captcha': 'false', '_next': window.location.href,
        'Application Number': newApplicationNumber, 'Application Date': currentDate, 'Application Time': currentTime,
        'Currency': currency, 'Applicant Name': formData.name, 'Applicant Email': formData.email,
        'Applicant Phone': formData.phone, 'City': formData.city,
        'Investment Capacity': `${formData.investment} (${currency})`,
        'Business Experience': formData.experience || 'Not specified',
        'Additional Message': formData.message || 'No additional information',
      };
      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden'; input.name = name; input.value = value;
        formElement.appendChild(input);
      });
      document.body.appendChild(formElement);
      formElement.submit();
      setTimeout(() => { if (document.body.contains(formElement)) document.body.removeChild(formElement); }, 1000);
      sendWhatsAppMessage(newApplicationNumber, capturedFormData);
      setSubmitStatus('success');
      setTimeout(() => setFormData({ name: '', email: '', phone: '', city: '', investment: '', experience: '', message: '' }), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
      </div>

      {/* ── Hero ── */}
      <section ref={heroRef} className="fade-in-up relative overflow-hidden text-white pt-10 pb-12 md:pt-14 md:pb-16 px-4">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/franchaise.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {generatedApplicationNumber && submitStatus === 'success' && (
            <div className="stagger-item inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4 animate-bounce-slow border border-white/30 shadow-lg mx-auto block w-fit">
              <p className="text-base font-semibold text-white flex items-center gap-2 justify-center">
                <Star className="w-4 h-4 fill-current" />Application ID: {generatedApplicationNumber}<Star className="w-4 h-4 fill-current" />
              </p>
            </div>
          )}
          <div className="text-center">
            <h1 className="stagger-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-[#1aa6b3]" style={{ textShadow: '0 0 20px rgba(26,166,179,0.8), 0 0 40px rgba(26,166,179,0.5), 0 2px 4px rgba(0,0,0,0.5)' }}>
              Join Our Franchise Family
            </h1>
            <p className="stagger-item text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto px-4 text-[#1aa6b3]" style={{ textShadow: '0 0 15px rgba(26,166,179,0.7), 0 2px 4px rgba(0,0,0,0.5)' }}>
              Build your future with a proven business model and comprehensive support
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[{ icon: Award, label: 'Proven Model' }, { icon: TrendingUp, label: 'High Returns' }, { icon: Users, label: 'Full Support' }].map(({ icon: Icon, label }) => (
                <span key={label} className="stagger-item flex items-center gap-2 bg-[#1aa6b3]/30 backdrop-blur-sm text-[#1aa6b3] px-4 py-2 rounded-full hover:bg-[#1aa6b3]/40 transition-all border border-[#1aa6b3]/60 hover:scale-105 cursor-default" style={{ textShadow: '0 0 10px rgba(26,166,179,0.8)' }}>
                  <Icon className="w-4 h-4" /><span className="font-semibold">{label}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section ref={benefitsRef} className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1aa6b3]">Why Choose Our Franchise?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="stagger-item group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-5 sm:p-6 transform hover:-translate-y-2 border-2 border-[#1aa6b3]/30 hover:border-[#1aa6b3] overflow-hidden">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1aa6b3]/20 via-[#158993]/10 to-transparent blur-xl"></div>
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-[#1aa6b3]/10 to-[#158993]/5 rounded-xl w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-[#1aa6b3]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-[#1aa6b3]">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-[#1aa6b3]/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── NEW: WHY INVEST — Section 1 (India's 7th Largest Industry) ── */}
      <AnimatedSection className="w-full py-10 sm:py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#1aa6b3]/10 text-[#1aa6b3] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Why Invest With Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1aa6b3]">A Once-in-a-Generation Opportunity</h2>
          </div>

          {/* Point 1 */}
          <AnimatedSection delay={100} className="mb-10 sm:mb-14">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 bg-gradient-to-br from-[#f0fafb] to-white rounded-3xl p-6 sm:p-10 border border-[#1aa6b3]/15 shadow-md">
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#1aa6b3] text-[#1aa6b3] font-bold text-lg shrink-0">1</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1aa6b3]">It Is INDIA'S 7th Largest Industry!</h3>
                </div>
                <p className="text-sm sm:text-base text-[#1aa6b3]/80 leading-relaxed mb-3">Not many people know that the size of the Laundry industry is bigger than beauty & wellness, fast food (including major chains like Dominos), and diagnostic labs combined.</p>
                <p className="text-sm sm:text-base text-[#1aa6b3] font-semibold mb-3 bg-[#1aa6b3]/10 inline-block px-3 py-1.5 rounded-lg">96% of the laundry industry is unorganised.</p>
                <p className="text-sm sm:text-base text-[#1aa6b3]/80 leading-relaxed">With huge investments flowing in, it is now expected to explode just like food delivery (Swiggy, Zomato), UPI payments (PayTM, PhonePe), and online cabs (Ola, Uber).</p>
              </div>
              <div className="flex-1 order-1 lg:order-2 w-full max-w-md lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#1aa6b3]/20">
                  <img src="/images/largest-industry.jpg" alt="India's 7th Largest Industry" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Point 2 */}
          <AnimatedSection delay={150} className="mb-10 sm:mb-14">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 bg-gradient-to-br from-[#f0fafb] to-white rounded-3xl p-6 sm:p-10 border border-[#1aa6b3]/15 shadow-md">
              <div className="flex-1 w-full max-w-md lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#1aa6b3]/20">
                  <img src="/images/business-img.jpg" alt="Most Profitable Franchise" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#1aa6b3] text-[#1aa6b3] font-bold text-lg shrink-0">2</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1aa6b3]">Laundry Is INDIA'S Most Profitable Franchise Business</h3>
                </div>
                <p className="text-sm sm:text-base text-[#1aa6b3]/80 leading-relaxed mb-5">The Laundry & Dry cleaning franchise offers high scope of growth with <span className="text-[#1aa6b3] font-bold">High ROI, Low Risk and Zero Hassles</span> — making Laundry the best investment.</p>
                {/* Comparison table */}
                <div className="overflow-x-auto rounded-xl border border-[#1aa6b3]/20 shadow-sm">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#1aa6b3] text-white">
                        <th className="text-left py-2.5 px-3 font-semibold">Feature</th>
                        {['Laundry','Food','Gym','Salon'].map(h => (
                          <th key={h} className="py-2.5 px-3 font-semibold text-center">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'Recession-Proof Business', sub: 'Never ending demand', vals: [true,true,false,false] },
                        { label: 'High Margin, Low Risk', sub: 'Service business, no legal risk', vals: [true,false,true,false] },
                        { label: 'Automation', sub: 'Manageable remotely', vals: [true,false,false,false] },
                        { label: 'Inventory', sub: 'Low-inventory, no wastage', vals: [true,false,true,false] },
                        { label: 'Omnichannel Business', sub: 'Online-to-offline model', vals: [true,true,false,false] },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f0fafb]'}>
                          <td className="py-2.5 px-3">
                            <p className="font-semibold text-[#1aa6b3]">{row.label}</p>
                            <p className="text-[#1aa6b3]/60 text-xs">{row.sub}</p>
                          </td>
                          {row.vals.map((v, j) => (
                            <td key={j} className="py-2.5 px-3 text-center">
                              {v ? <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Point 3 — Low Investment Model — LADDER DESIGN */}
          <AnimatedSection delay={200} className="mb-10 sm:mb-14">
            <div className="bg-gradient-to-br from-[#f0fafb] to-white rounded-3xl p-6 sm:p-10 border border-[#1aa6b3]/15 shadow-md">
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#1aa6b3] text-[#1aa6b3] font-bold text-lg shrink-0">3</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1aa6b3]">Low-Investment & Small Format Model</h3>
              </div>

              {/* Ladder — alternating left/right */}
              <div className="relative">
                {/* Centre spine line — hidden on mobile, visible md+ */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1aa6b3]/40 via-[#1aa6b3] to-[#158993]/40 -translate-x-1/2"></div>

                {[
                  { label: 'Typical Store Area',          value: curr.storeArea,          img: '/images/ro.jpg',  step: 1 },
                  { label: 'Setup Cost (incl. franchise fee)', value: curr.setupCost,      img: '/images/ro1.jpg', step: 2 },
                  { label: 'Franchise Fee',                value: curr.franchiseFeeDisplay, img: '/images/ro2.jpg', step: 3 },
                  { label: 'Royalty',                      value: curr.royalty,            img: '/images/ro3.jpg', step: 4 },
                  { label: 'Average Revenue / Month',      value: curr.avgRevenue,         img: '/images/ro4.jpg', step: 5 },
                  { label: 'Average Profitability / Month',value: curr.avgProfit,          img: '/images/ro5.jpg', step: 6 },
                ].map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div key={i} className={`relative flex flex-col md:flex-row items-center mb-8 sm:mb-10 gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                      {/* Content side */}
                      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                        <div
                          className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-[#1aa6b3]/20 hover:border-[#1aa6b3] transition-all duration-300 overflow-hidden flex flex-row md:flex-col sm:flex-row"
                          style={{ minHeight: '110px' }}
                        >
                          {/* Image strip */}
                          <div className="relative w-36 sm:w-44 md:w-full md:h-44 shrink-0 overflow-hidden bg-gray-50 flex items-center justify-center">
                            <img
                              src={item.img}
                              alt={item.label}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                              style={{ minHeight: '120px' }}
                            />
                          </div>
                          {/* Text */}
                          <div className="flex-1 p-4 flex flex-col justify-center">
                            <p className="text-xs text-[#1aa6b3]/60 mb-1 uppercase tracking-wide font-medium">{item.label}</p>
                            <p className="text-base sm:text-lg font-bold text-[#1aa6b3] leading-tight">{item.value}</p>
                          </div>
                        </div>
                      </div>

                      {/* Centre node — spine dot + step number */}
                      <div className="hidden md:flex w-2/12 flex-col items-center justify-center shrink-0 z-10">
                        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-[#1aa6b3] to-[#158993] text-white font-bold text-base shadow-lg border-4 border-white">
                          {item.step}
                        </div>
                      </div>

                      {/* Spacer — opposite side */}
                      <div className="hidden md:block w-5/12"></div>

                      {/* Mobile step badge */}
                      <div className="md:hidden absolute -left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-[#1aa6b3] text-white font-bold text-xs shadow-md border-2 border-white">
                        {item.step}
                      </div>
                    </div>
                  );
                })}

                {/* Gross Profit — full-width terminal rung */}
                <div className="relative flex flex-col md:flex-row items-center gap-4">
                  {/* Left spacer */}
                  <div className="hidden md:block w-5/12"></div>
                  {/* Centre node — final */}
                  <div className="hidden md:flex w-2/12 flex-col items-center justify-center shrink-0 z-10">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#158993] to-[#0d6b76] text-white shadow-xl border-4 border-white">
                      <span className="text-lg font-black">7</span>
                    </div>
                  </div>
                  {/* Right — gross profit banner */}
                  <div className="w-full md:w-5/12 md:pl-10">
                    <div className="flex flex-row items-center gap-4 bg-gradient-to-r from-[#1aa6b3] to-[#158993] rounded-2xl p-4 sm:p-5 text-white shadow-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_white_0%,_transparent_70%)]"></div>
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden shadow-lg bg-white/20 flex items-center justify-center">
                        <img src="/images/ro6.jpg" alt="Gross Profit" className="w-full h-full object-contain" />
                      </div>
                      <div className="relative z-10">
                        <p className="text-white/80 text-xs uppercase tracking-widest mb-0.5 font-medium">Gross Profit (%)</p>
                        <p className="text-4xl sm:text-5xl font-black leading-none mb-1">{curr.grossProfit}</p>
                        <p className="text-white/80 text-xs leading-relaxed">Industry-leading margins, low overheads, scalable model.</p>
                      </div>
                    </div>
                  </div>
                  {/* Mobile step badge */}
                  <div className="md:hidden absolute -left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-[#158993] text-white font-bold text-xs shadow-md border-2 border-white">7</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Point 4 — 24x7 Support System */}
          <AnimatedSection delay={250}>
            <div className="bg-gradient-to-br from-[#f0fafb] to-white rounded-3xl p-6 sm:p-10 border border-[#1aa6b3]/15 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#1aa6b3] text-[#1aa6b3] font-bold text-lg shrink-0">4</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1aa6b3]">Our 24×7 Support System</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {supportItems.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border-l-4 border-[#1aa6b3] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h4 className="font-bold text-[#1aa6b3] text-sm sm:text-base mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#1aa6b3]/70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* ── Videos ── */}
      <section ref={videosRef} className="fade-in-up bg-white py-8 sm:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1aa6b3]">Learn More About Our Franchise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {videos.map((video) => (
              <div key={video.id} className="stagger-item group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-[#1aa6b3]/20 bg-white" onClick={() => setSelectedVideo(video)}>
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/45 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#1aa6b3] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2.5">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1aa6b3] line-clamp-2 leading-snug">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Modal ── */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-fade-in" style={{ background: 'rgba(0,0,0,0.88)' }} onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-10 right-0 text-white/80 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-all">
              <X className="w-4 h-4" /> Close
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: '#0f2744' }}>
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe src={selectedVideo.embedUrl} className="absolute inset-0 w-full h-full" allow="autoplay; fullscreen" allowFullScreen title={selectedVideo.title} />
              </div>
              <div className="px-5 py-3 flex items-center justify-between">
                <h3 className="text-white font-semibold text-sm sm:text-base">{selectedVideo.title}</h3>
                <button onClick={() => setSelectedVideo(null)} className="text-xs text-[#1aa6b3] border border-[#1aa6b3]/50 px-3 py-1.5 rounded-lg hover:bg-[#1aa6b3]/20 transition-all font-semibold flex items-center gap-1">
                  <X className="w-3.5 h-3.5" /> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Application Form & Investment ── */}
      <section ref={investmentRef} className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Currency Switcher */}
        <div className="stagger-item flex items-center justify-between mb-4 bg-white rounded-2xl shadow-md px-5 py-3 border border-[#1aa6b3]/20 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[#1aa6b3]" />
            <span className="text-sm font-semibold text-[#1aa6b3]">Select Currency</span>
          </div>
          <div className="flex items-center bg-gray-100 rounded-full p-1 gap-1">
            {Object.values(CURRENCIES).map((c) => (
              <button key={c.code} onClick={() => setCurrency(c.code)} className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${currency === c.code ? 'bg-gradient-to-r from-[#1aa6b3] to-[#158993] text-white shadow-md scale-105' : 'text-gray-500 hover:text-[#1aa6b3] hover:bg-white'}`}>
                <span className="text-base">{c.flag}</span><span>{c.symbol}</span><span>{c.code}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#1aa6b3]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — Investment Details */}
            <div className="stagger-item p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#1aa6b3] to-[#158993] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-2 mb-5 relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Investment Details</h2>
                <span className="ml-auto bg-white/20 border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">{curr.flag} {curr.code}</span>
              </div>
              <div className="space-y-3 sm:space-y-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 flex items-center gap-2"><span className="text-sm font-bold">{curr.symbol}</span>Initial Investment</p>
                  <p className="text-xl sm:text-2xl font-bold">{curr.investmentRange}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 flex items-center gap-2"><TrendingUp className="w-4 h-4" />Expected ROI</p>
                  <p className="text-xl sm:text-2xl font-bold">{curr.roi}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 flex items-center gap-2"><Clock className="w-4 h-4" />Payback Period</p>
                  <p className="text-xl sm:text-2xl font-bold">{curr.payback}</p>
                </div>
                {currency === 'CAD' && (
                  <p className="text-xs text-white/60 italic pt-1">* Approximate conversion at 1 INR ≈ CA$0.0165</p>
                )}
              </div>
            </div>
            {/* Right — Form */}
            <div className="stagger-item bg-white p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl font-bold mb-5 text-[#1aa6b3] flex items-center gap-2"><Briefcase className="w-5 h-5" />Apply for Franchise</h3>
              {submitStatus === 'success' && (
                <div className="mb-5 p-5 bg-gradient-to-r from-green-50 to-green-50/50 border-2 border-green-200 rounded-xl shadow-lg animate-scale-in">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-green-800 font-bold text-base mb-3">Application Submitted! ✅</p>
                      <div className="mb-3 p-3 bg-white border-2 border-green-300 rounded-lg relative shadow-sm">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-green-700 text-xs mb-1">Application number:</p>
                            <p className="text-green-800 font-bold text-base">{generatedApplicationNumber}</p>
                          </div>
                          <button type="button" onClick={copyApplicationNumber} className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1.5 rounded-lg transition-all hover:scale-105 shadow-sm">
                            <Copy className="w-3 h-3" /><span className="text-xs font-medium">Copy</span>
                          </button>
                        </div>
                        {showCopySuccess && <div className="absolute -top-2 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-fade-in-out shadow-lg">Copied!</div>}
                      </div>
                      <p className="text-green-700 text-sm mb-2">✅ Confirmation sent to your email</p>
                      <p className="text-green-700 text-sm">📞 We'll contact you within 2-3 business days</p>
                    </div>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-5 p-5 bg-red-50 border-2 border-red-200 rounded-xl shadow-lg">
                  <p className="text-red-800 font-bold text-base mb-2">Submission Failed! ❌</p>
                  <p className="text-red-700 text-sm mb-3">Please try again or contact us at {companyPhone}</p>
                  <button type="button" onClick={() => setSubmitStatus('')} className="text-red-700 hover:text-red-900 font-medium underline text-sm">Try Again</button>
                </div>
              )}
              {(!submitStatus || submitStatus === 'error') && (
                <div className="space-y-3">
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', icon: User, placeholder: 'Your Full Name', required: true },
                    { label: 'Email Address', name: 'email', type: 'email', icon: Mail, placeholder: 'your@email.com', required: true },
                    { label: 'Phone Number', name: 'phone', type: 'tel', icon: Phone, placeholder: '+1 (555) 000-0000', required: true },
                    { label: 'City', name: 'city', type: 'text', icon: MapPin, placeholder: 'Your City', required: true },
                  ].map(({ label, name, type, icon: Icon, placeholder, required }) => (
                    <div key={name}>
                      <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">{label} {required && <span className="text-red-500">*</span>}</label>
                      <div className="relative">
                        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1aa6b3]/60" />
                        <input type={type} name={name} value={formData[name]} onChange={handleInputChange} placeholder={placeholder} className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3] text-sm" />
                      </div>
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">Investment Capacity ({curr.code}) <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs font-bold text-[#1aa6b3]/60">{curr.symbol}</span>
                      <select name="investment" value={formData.investment} onChange={handleInputChange} className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all appearance-none bg-white hover:border-gray-300 text-[#1aa6b3] text-sm">
                        <option value="">Select investment range</option>
                        {curr.investmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">Business Experience (Optional)</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1aa6b3]/60" />
                      <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="e.g., 5 years in retail" className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3] text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">Additional Information (Optional)</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[#1aa6b3]/60" />
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows="3" placeholder="Tell us about your goals..." className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all resize-none hover:border-gray-300 text-[#1aa6b3] text-sm"></textarea>
                    </div>
                  </div>
                  <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#1aa6b3] to-[#158993] hover:shadow-xl text-white font-bold py-3 px-5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base hover:scale-[1.02] relative overflow-hidden group mt-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center relative z-10">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : <span className="relative z-10">Submit Application</span>}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section ref={faqRef} className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1aa6b3]">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {[
            { q: "What support do you provide?", a: "Comprehensive training, marketing support, operational guidance, and ongoing business consulting." },
            { q: "How long does it take to open?", a: "Typically 3-6 months from signing the agreement to opening day." },
            { q: "What are the territory rights?", a: "Exclusive territory rights within a defined geographic area." },
            { q: "What is the franchise fee?", a: `Initial franchise fee is ${curr.faqFee}.` },
          ].map((faq, index) => (
            <div key={index} className="stagger-item bg-white rounded-2xl shadow-md p-4 sm:p-6 border-l-4 border-[#1aa6b3] hover:shadow-lg transition-all hover:scale-[1.01]">
              <h3 className="text-sm sm:text-base font-semibold mb-2 text-[#1aa6b3]">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#1aa6b3]/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .fade-in-up { opacity: 0; transform: translateY(30px); transition: opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1); }
        .fade-in-up.animate-in { opacity: 1; transform: translateY(0); }
        .stagger-item { opacity: 0; transform: translateY(20px) scale(0.97); transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1); }
        .stagger-item.stagger-in { opacity: 1; transform: translateY(0) scale(1); }
        @keyframes glow-pulse { 0%,100%{opacity:.5;filter:blur(8px);}50%{opacity:.8;filter:blur(12px);} }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        @keyframes scale-in { 0%{opacity:0;transform:scale(.95);}100%{opacity:1;transform:scale(1);} }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.4,0,0.2,1); }
        @keyframes fade-in { 0%{opacity:0;}100%{opacity:1;} }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        @keyframes fade-in-out { 0%{opacity:0;transform:translateY(-10px);}20%{opacity:1;transform:translateY(0);}80%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(-10px);} }
        .animate-fade-in-out { animation: fade-in-out 2s ease-in-out; }
        @keyframes bounce-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);} }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .fade-in-up,.stagger-item{opacity:1;transform:none;transition:none;}
          .animate-scale-in,.animate-fade-in,.animate-fade-in-out,.animate-bounce-slow,.animate-glow-pulse{animation:none;}
        }
      `}</style>
    </div>
  );
};

export default Franchise;