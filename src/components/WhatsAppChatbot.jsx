import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Clock, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = ' 917014638562';

  const quickMessages = [
    { text: 'Schedule a Pickup', emoji: '📦' },
    { text: 'View Pricing', emoji: '💰' },
    { text: 'Track My Order', emoji: '📍' },
    { text: 'Service Areas', emoji: '🗺️' }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const handleQuickMessage = (text) => {
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  const handleCallNow = () => {
    window.open(`tel:+${phoneNumber}`, '_self');
  };

  return (
    <>
      {/* WhatsApp Chat Button - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            aria-label="Open WhatsApp Chat"
          >
            {/* Pulse ring animation */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-75"></span>
            
            {/* WhatsApp Icon */}
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8 fill-current relative z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.828.744 5.48 2.038 7.787L0 32l8.464-2.012A15.917 15.917 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.5c-2.444 0-4.75-.656-6.725-1.8l-.481-.288-5.019 1.194 1.219-4.869-.313-.5A13.399 13.399 0 0 1 2.5 16C2.5 8.544 8.544 2.5 16 2.5S29.5 8.544 29.5 16 23.456 29.5 16 29.5z"/>
              <path d="M22.906 19.406c-.369-.188-2.181-1.075-2.519-1.2-.337-.119-.581-.175-.825.188-.244.369-.95 1.2-1.163 1.444-.219.244-.438.275-.806.094-.369-.188-1.556-.575-2.963-1.831-1.094-.975-1.831-2.181-2.044-2.55-.219-.369-.025-.569.162-.75.169-.169.369-.438.55-.656.188-.219.25-.369.375-.619.125-.244.063-.463-.031-.65-.094-.188-.825-1.987-1.131-2.719-.3-.712-.606-.613-.825-.625-.219-.006-.469-.006-.719-.006s-.656.094-.994.463c-.344.369-1.3 1.269-1.3 3.094s1.331 3.594 1.519 3.838c.188.244 2.638 4.025 6.387 5.644.894.387 1.594.619 2.138.794.9.287 1.719.244 2.363.15.719-.106 2.181-.894 2.488-1.756.306-.863.306-1.6.219-1.756-.094-.15-.344-.244-.719-.425z"/>
            </svg>
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] max-w-[400px] sm:w-[400px] shadow-2xl rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 border-2 border-green-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white p-5 flex items-center justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="flex items-center space-x-3 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
                <svg
                  viewBox="0 0 32 32"
                  className="w-12 h-12 fill-current bg-white rounded-full p-2 relative shadow-lg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="fill-green-500" d="M16 0C7.163 0 0 7.163 0 16c0 2.828.744 5.48 2.038 7.787L0 32l8.464-2.012A15.917 15.917 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.5c-2.444 0-4.75-.656-6.725-1.8l-.481-.288-5.019 1.194 1.219-4.869-.313-.5A13.399 13.399 0 0 1 2.5 16C2.5 8.544 8.544 2.5 16 2.5S29.5 8.544 29.5 16 23.456 29.5 16 29.5z"/>
                  <path className="fill-green-500" d="M22.906 19.406c-.369-.188-2.181-1.075-2.519-1.2-.337-.119-.581-.175-.825.188-.244.369-.95 1.2-1.163 1.444-.219.244-.438.275-.806.094-.369-.188-1.556-.575-2.963-1.831-1.094-.975-1.831-2.181-2.044-2.55-.219-.369-.025-.569.162-.75.169-.169.369-.438.55-.656.188-.219.25-.369.375-.619.125-.244.063-.463-.031-.65-.094-.188-.825-1.987-1.131-2.719-.3-.712-.606-.613-.825-.625-.219-.006-.469-.006-.719-.006s-.656.094-.994.463c-.344.369-1.3 1.269-1.3 3.094s1.331 3.594 1.519 3.838c.188.244 2.638 4.025 6.387 5.644.894.387 1.594.619 2.138.794.9.287 1.719.244 2.363.15.719-.106 2.181-.894 2.488-1.756.306-.863.306-1.6.219-1.756-.094-.15-.344-.244-.719-.425z"/>
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg animate-pulse"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  LFA Laundry
                  <CheckCircle className="w-4 h-4" />
                </h3>
                <p className="text-xs text-green-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  Online now • Replies quickly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-2 transition-all relative z-10 hover:rotate-90 duration-300"
              aria-label="Close chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-gradient-to-br from-gray-50 to-green-50/30 p-4 h-[450px] sm:h-[420px] overflow-y-auto">
            {/* Welcome Message */}
            <div className="mb-4">
              <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-lg max-w-[90%] animate-in slide-in-from-left duration-300 border border-gray-100">
                <div className="flex items-start gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-800 font-semibold">
                    👋 Hello! Welcome to <strong className="text-green-600">LFA Laundry</strong>
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  How can we help you today? Choose a quick option below or type your message.
                </p>
              </div>
              <div className="flex items-center gap-1 mt-2 ml-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <p className="text-xs text-gray-400">Just now</p>
              </div>
            </div>

            {/* Quick Reply Buttons */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
                <p className="text-xs text-gray-500 font-semibold px-2">Quick Options</p>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1"></div>
              </div>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(msg.text)}
                  className="w-full bg-white hover:bg-green-50 border-2 border-gray-200 hover:border-green-400 rounded-xl p-3 text-left transition-all duration-200 shadow-sm hover:shadow-md group flex items-center gap-3 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl bg-green-50 group-hover:bg-green-100 rounded-lg w-10 h-10 flex items-center justify-center transition-colors">
                    {msg.emoji}
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-green-700 font-semibold flex-1">
                    {msg.text}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              ))}
            </div>

            {/* Call Now Button */}
            <button
              onClick={handleCallNow}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-3 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] mb-4 group"
            >
              <div className="bg-white/20 rounded-full p-1.5">
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </div>
              <span className="font-semibold">Call Now: +91-7054828682</span>
            </button>

            {/* Service Info */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-4 border-2 border-green-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-green-500 rounded-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs font-bold text-green-700">
                  Service Areas:
                </p>
              </div>
              <p className="text-xs text-gray-700 mb-3 font-medium">
                Jaipur • Udaipur • Jodhpur & All of Rajasthan
              </p>
              <div className="pt-3 border-t-2 border-green-200">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-500 rounded-lg">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-gray-700">
                    <strong className="font-bold">Operating Hours:</strong> 7 AM - 10 PM (Daily)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-white border-t-2 border-gray-200 p-4">
            <div className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border-2 border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white rounded-full p-3 transition-all shadow-md disabled:shadow-none hover:scale-110 disabled:hover:scale-100 group"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <p className="text-xs text-gray-500 text-center">
                We typically reply within minutes
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            transform: translateY(1rem);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-1rem);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .slide-in-from-bottom-4 {
          animation: slideInFromBottom 0.3s ease-out;
        }
        
        .slide-in-from-left {
          animation: slideInFromLeft 0.3s ease-out;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-pulse,
          .animate-bounce,
          .animate-in,
          .fade-in,
          .slide-in-from-bottom-4,
          .slide-in-from-left {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
