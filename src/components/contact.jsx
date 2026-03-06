import { useState } from 'react';
import { Phone, MapPin, Mail, Send, Clock, CheckCircle, Sparkles, MessageCircle, User, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const form = e.target;
      const formDataObj = new FormData(form);
      
      await fetch('https://formsubmit.co/laundryforalllfa@gmail.com', {
        method: 'POST',
        body: formDataObj
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Form Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1aa6b3]/10 to-[#1aa6b3]/5 px-6 py-2 rounded-full border border-[#1aa6b3]/20">
              <MessageCircle className="w-5 h-5 text-[#1aa6b3]" />
              <span className="text-sm font-semibold text-[#1aa6b3]">Get in Touch</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1aa6b3] to-[#158993] bg-clip-text text-transparent mb-4">
            CONTACT US
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1aa6b3] to-[#158993] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#1aa6b3] max-w-2xl mx-auto leading-relaxed">
            Have questions? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 rounded-3xl shadow-2xl p-8 border border-[#1aa6b3]/10 relative overflow-hidden animate-slide-in-left">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1aa6b3]/10 to-transparent rounded-bl-full"></div>
            
            <h3 className="text-2xl font-bold text-[#1aa6b3] mb-8 text-center flex items-center justify-center gap-2 relative z-10">
              <Sparkles className="w-6 h-6" />
              Contact Information
            </h3>
            
            {/* Call Us */}
            <div className="flex flex-col items-center text-center mb-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#1aa6b3]/10 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1aa6b3] to-[#158993] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#1aa6b3] mb-2">Call Us</h4>
              <a 
                href="tel:+917014638562" 
                className="text-2xl font-bold text-[#1aa6b3] hover:text-[#158993] transition-colors"
              >
                +91-7014638562
              </a>
              <div className="flex items-center gap-2 mt-3 text-[#1aa6b3] bg-[#1aa6b3]/5 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <p className="text-sm">Available 8AM - 8PM, 7 days a week</p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col items-center text-center mb-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#1aa6b3]/10 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1aa6b3] to-[#158993] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#1aa6b3] mb-3">Visit Us</h4>
              <div className="text-[#1aa6b3]">
                <p className="font-semibold mb-1">Under Hotel Masterinn</p>
                <p>Jamni Kund Road, Pushkar</p>
                <p>Rajasthan - 305022</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Under+Hotel+Masterinn,+Jamni+Kund+Road,+Pushkar,+Rajasthan+305022"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[#1aa6b3] hover:text-[#158993] font-medium bg-[#1aa6b3]/5 px-4 py-2 rounded-full transition-all hover:bg-[#1aa6b3]/10"
              >
                <MapPin className="w-4 h-4" />
                View on Map
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#1aa6b3]/10 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1aa6b3] to-[#158993] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#1aa6b3] mb-2">Email Us</h4>
              <a 
                href="mailto:laundryforalllfa@gmail.com" 
                className="text-lg font-medium text-[#1aa6b3] hover:text-[#158993] transition-colors break-all"
              >
                laundryforalllfa@gmail.com
              </a>
              <div className="flex items-center gap-2 mt-3 text-[#1aa6b3] bg-[#1aa6b3]/5 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <p className="text-sm">We respond within 24 hours</p>
              </div>
            </div>

            {/* Logo */}
            <div className="mt-10 text-center relative z-10">
              <div className="inline-block p-4 bg-white rounded-2xl shadow-lg">
                <img 
                  src="/images/LFA-03.png" 
                  alt="Laundry For All Logo" 
                  className="h-20 w-auto object-contain mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-[#1aa6b3] relative overflow-hidden animate-slide-in-right">
            {/* Decorative corner accent */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#1aa6b3]/10 to-transparent rounded-tr-full"></div>
            
            <h3 className="text-2xl font-bold text-[#1aa6b3] mb-8 text-center flex items-center justify-center gap-2 relative z-10">
              <Send className="w-6 h-6" />
              Send us a Message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-green-50/50 border-2 border-green-200 rounded-2xl shadow-lg animate-fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1 animate-bounce" />
                  <div className="flex-1">
                    <p className="text-green-800 font-bold text-lg mb-2 flex items-center gap-2">
                      Message Sent Successfully! ✅
                      <Sparkles className="w-5 h-5" />
                    </p>
                    <p className="text-green-700">
                      Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-2xl shadow-lg animate-fade-in">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <p className="text-red-800 font-bold text-lg mb-2">Failed to Send Message ❌</p>
                    <p className="text-red-700">
                      Something went wrong. Please try again or contact us directly at +91-7014638562.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl transition-all outline-none focus:border-[#1aa6b3] focus:ring-2 focus:ring-[#1aa6b3]/20 text-[#1aa6b3] placeholder:text-[#1aa6b3]/50 hover:border-gray-300"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl transition-all outline-none focus:border-[#1aa6b3] focus:ring-2 focus:ring-[#1aa6b3]/20 text-[#1aa6b3] placeholder:text-[#1aa6b3]/50 hover:border-gray-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl transition-all outline-none focus:border-[#1aa6b3] focus:ring-2 focus:ring-[#1aa6b3]/20 text-[#1aa6b3] placeholder:text-[#1aa6b3]/50 hover:border-gray-300"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-[#1aa6b3]/60" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl transition-all outline-none resize-none focus:border-[#1aa6b3] focus:ring-2 focus:ring-[#1aa6b3]/20 text-[#1aa6b3] placeholder:text-[#1aa6b3]/50 hover:border-gray-300"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-white font-bold rounded-xl transition-all disabled:cursor-not-allowed hover:shadow-2xl transform hover:scale-[1.02] transition-transform duration-200 text-lg bg-gradient-to-r from-[#1aa6b3] to-[#158993] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                {isSubmitting ? (
                  <span className="flex items-center justify-center relative z-10">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2 relative z-10">
                    Send Message
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </button>

              {/* Privacy Note */}
              <div className="text-center text-sm text-[#1aa6b3] pt-4 border-t border-gray-200 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <p>We respect your privacy and will not share your information with third parties.</p>
              </div>
            </form>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#1aa6b3]/10 animate-fade-in-up">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#1aa6b3]/5 to-transparent">
            <h3 className="text-xl font-bold text-[#1aa6b3] flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Find Us on Map
            </h3>
          </div>
          <div className="h-96 bg-gray-200 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1aa6b3]/5 to-transparent pointer-events-none z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.648544666204!2d74.5552583!3d26.4875833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6d8fcfe7c81%3A0xcb5f5e5a5a5a5a5a!2sHotel%20Masterinn%2C%20Jamni%20Kund%20Road%2C%20Pushkar%2C%20Rajasthan%20305022!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Laundry For All Location"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-up,
          .animate-slide-in-left,
          .animate-slide-in-right {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
