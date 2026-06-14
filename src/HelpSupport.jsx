import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HelpSupport = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { question: "How do I track my delivery?", answer: "Once your order is confirmed, you can track the delivery partner's location in real-time through the 'Active Orders' tab on the Bitee app." },
    { question: "What is Bitee Premium?", answer: "Bitee Premium is our subscription program offering free delivery within 7km and up to 30% extra off at partnered restaurants." },
    { question: "How do I partner my restaurant with Bitee?", answer: "Navigate to the 'For Restaurants' section on our app or contact our B2B Supplies team directly to set up a consultation and integrate your menu." },
    { question: "My payment failed, but money was deducted. What now?", answer: "Failed transactions are automatically reversed within 3-5 business days. If the issue persists, use the 'Report a Fraud' tool in your profile settings." }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-stone-800 py-20 px-4">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/" className="text-[#8b5a2b] font-bold text-sm mb-8 inline-block hover:text-[#3e2723] transition">&larr; Back to Home</a>
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[#3e2723] mb-4 tracking-tight">How can we help?</h1>
          <p className="text-xl text-stone-500">Search our knowledge base or browse frequently asked questions.</p>
          
          <div className="mt-8 max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full px-6 py-4 rounded-2xl border border-stone-200 shadow-sm focus:outline-none focus:border-[#8b5a2b] focus:ring-2 focus:ring-[#8b5a2b]/20 transition-all text-lg"
            />
            <button className="absolute right-3 top-3 bg-[#3e2723] text-white p-2 rounded-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-stone-100 last:border-0">
              <button 
                className="w-full text-left px-8 py-6 font-bold text-lg text-[#3e2723] flex justify-between items-center hover:bg-stone-50 transition"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                {faq.question}
                <span className="text-[#8b5a2b] text-2xl font-light">
                  {activeFaq === index ? '−' : '+'}
                </span>
              </button>
              {activeFaq === index && (
                <div className="px-8 pb-6 text-stone-600 leading-relaxed bg-stone-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-[#3e2723] text-[#f5deb3] p-10 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Still need help?</h3>
          <p className="mb-6 text-stone-300">Our support team is available 24/7 to assist with active orders and technical issues.</p>
          <button className="bg-white text-[#3e2723] font-bold px-8 py-3 rounded-xl hover:bg-stone-200 transition shadow-md">
            Contact Support Team
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default HelpSupport;