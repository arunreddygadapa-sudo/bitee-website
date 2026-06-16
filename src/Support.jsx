import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Support = ({ setView }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#faf8f5] font-sans text-[#3e2723] flex flex-col selection:bg-[#8b5a2b] selection:text-white">
      
      {/* MINIMAL NAVIGATION */}
      <nav className="flex justify-between items-center w-full px-6 md:px-16 py-5 bg-[#faf8f5]/90 border-b border-stone-200/50 sticky top-0 z-50 backdrop-blur-xl transition-all">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
          <img src="/logo.png" alt="Bitee Logo" width="40" height="40" className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
          <h1 className="text-3xl font-black tracking-tighter lowercase text-[#3e2723] mt-1">bitee</h1>
        </div>
        <button onClick={() => setView('home')} className="text-sm font-black tracking-widest uppercase text-stone-500 hover:text-[#8b5a2b] transition-colors flex items-center gap-2">
          <span className="text-lg mb-0.5">←</span> Return Home
        </button>
      </nav>

      {/* CONTENT SECTION */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#3e2723] tracking-tighter leading-tight">
            Contact Support
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: CONTACT FORM */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="lg:col-span-2 space-y-6">
            
            <div>
              <select className="w-full bg-white border border-stone-200 text-stone-500 px-4 py-3.5 rounded-xl outline-none focus:border-[#8b5a2b] transition-colors font-medium appearance-none shadow-sm">
                <option value="" disabled selected>How can we help you? *</option>
                <option value="order">Issue with a past order</option>
                <option value="account">Account & Profile assistance</option>
                <option value="merchant">Merchant / Restaurant inquiry</option>
                <option value="fleet">Fleet / Driver application</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <input type="text" placeholder="Full Name *" className="w-full bg-white border border-stone-200 text-[#3e2723] px-4 py-3.5 rounded-xl outline-none focus:border-[#8b5a2b] transition-colors placeholder-stone-400 font-medium shadow-sm" />
            </div>

            <div>
              <input type="email" placeholder="Email Address *" className="w-full bg-white border border-stone-200 text-[#3e2723] px-4 py-3.5 rounded-xl outline-none focus:border-[#8b5a2b] transition-colors placeholder-stone-400 font-medium shadow-sm" />
            </div>

            <div>
              <input type="tel" placeholder="Mobile Number (optional)" className="w-full bg-white border border-stone-200 text-[#3e2723] px-4 py-3.5 rounded-xl outline-none focus:border-[#8b5a2b] transition-colors placeholder-stone-400 font-medium shadow-sm" />
            </div>

            <div>
              <textarea rows="5" placeholder="Type text *" className="w-full bg-white border border-stone-200 text-[#3e2723] px-4 py-3.5 rounded-xl outline-none focus:border-[#8b5a2b] transition-colors placeholder-stone-400 font-medium shadow-sm resize-y"></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-[#3e2723] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#271816] transition-all transform hover:-translate-y-0.5">
                Submit feedback
              </button>
              
              {/* WRITE EMAIL ROUTING BUTTON */}
              <button 
                onClick={() => window.location.href = "mailto:support@bitee.in"}
                className="bg-white border-2 border-stone-200 text-stone-600 px-8 py-3.5 rounded-xl font-bold text-sm shadow-sm hover:border-[#8b5a2b] hover:text-[#8b5a2b] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>✉️</span> Write an Email directly
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: INFO CARDS */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="space-y-6">
            
            {/* Safety Card */}
            <div className="bg-white p-8 rounded-[1.5rem] border border-stone-200 shadow-sm">
              <h3 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">Report a Safety Emergency</h3>
              <p className="text-stone-500 font-medium text-sm leading-relaxed mb-6">
                We are committed to the safety of everyone using the Bitee platform.
              </p>
              <button className="text-[#8b5a2b] font-bold text-sm hover:text-[#3e2723] hover:underline transition-all">
                Report here
              </button>
            </div>

            {/* Live Order Card */}
            <div className="bg-white p-8 rounded-[1.5rem] border border-stone-200 shadow-sm">
              <h3 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">Issue with your live order?</h3>
              <p className="text-stone-500 font-medium text-sm leading-relaxed">
                Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team immediately.
              </p>
            </div>

          </motion.div>
        </div>
      </main>

      <footer className="w-full py-8 text-center border-t border-stone-200 mt-auto">
        <p className="text-xs font-bold text-stone-400 tracking-widest uppercase">© 2026 Bitee™ / Cognisys IT</p>
      </footer>
    </div>
  );
};

export default Support;