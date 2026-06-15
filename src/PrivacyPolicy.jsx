import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = ({ setView }) => {
  // Always scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#faf8f5] font-sans text-[#3e2723] flex flex-col selection:bg-[#8b5a2b] selection:text-white">
      
      {/* MINIMAL NAVIGATION */}
      <nav className="flex justify-between items-center w-full px-6 md:px-16 py-5 bg-[#faf8f5]/90 border-b border-stone-200/50 sticky top-0 z-50 backdrop-blur-xl transition-all">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => setView('home')}
        >
          <img src="/logo.png" alt="Bitee Logo" width="40" height="40" className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
          <h1 className="text-3xl font-black tracking-tighter lowercase text-[#3e2723] mt-1">bitee</h1>
        </div>
        <button 
          onClick={() => setView('home')}
          className="text-sm font-black tracking-widest uppercase text-stone-500 hover:text-[#8b5a2b] transition-colors flex items-center gap-2"
        >
          <span className="text-lg mb-0.5">←</span> Return Home
        </button>
      </nav>

      {/* CONTENT SECTION */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-stone-200 pb-12 mb-12"
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Legal Ledger</span>
          <h1 className="text-5xl md:text-6xl font-black text-[#3e2723] tracking-tighter leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-stone-500 font-bold text-sm tracking-widest uppercase">Last Updated: June 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-10 text-base text-stone-600 font-medium leading-relaxed"
        >
          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">1. Data Collection Protocols</h2>
            <p>
              By interacting with the Bitee ecosystem, your data is processed through our secure routing protocols. We collect specific spatial tracking coordinates, real-time status fetching data, and caching information necessary to guarantee optimal transit routes. 
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">2. Information Utilization</h2>
            <p>
              The information curated by the Customer Interface and Merchant Terminal is strictly utilized to process incoming tickets and assign spatial routing to our transit specialists. Bitee and Cognisys Soft Services & IT Solutions do not monetize your data through third-party advertising brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">3. Administrative Dashboard Visibility</h2>
            <p>
              Select platform metrics are accessible via our private internal command center. This allows complete visibility over total transactions and gross platform volumes to ensure ecosystem stability. Personal identifiers are encrypted at the database level.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">4. Account Deletion & Data Purging</h2>
            <p>
              Users retain the right to sever their connection with the Bitee architecture. Upon request, all relational database entries tied to your unique user token will be permanently purged from the Cognisys Core.
            </p>
          </section>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-8 text-center border-t border-stone-200 mt-auto">
        <p className="text-xs font-bold text-stone-400 tracking-widest uppercase">© 2026 Bitee™ / Cognisys IT</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;