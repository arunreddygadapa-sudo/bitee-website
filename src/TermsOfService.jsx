import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsOfService = ({ setView }) => {
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
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="border-b border-stone-200 pb-12 mb-12">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Legal Ledger</span>
          <h1 className="text-5xl md:text-6xl font-black text-[#3e2723] tracking-tighter leading-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-stone-500 font-bold text-sm tracking-widest uppercase">Effective Date: June 2026</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="space-y-10 text-base text-stone-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">1. Ecosystem Usage Agreement</h2>
            <p>
              By accessing the Bitee application, Merchant Terminal, or Administrative Dashboard, you agree to be bound by these operational protocols. Bitee serves strictly as a logistical routing and payment facilitation engine connecting independent culinary merchants with end-consumers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">2. Intellectual Property</h2>
            <p>
              The entire Bitee architecture, including but not limited to its custom spatial routing algorithms, visual identity, user interfaces, and database models, are the exclusive intellectual property of <strong>Cognisys Soft Services & IT Solutions</strong>. Reverse engineering or unauthorized replication of platform assets is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">3. Merchant & Driver Liability</h2>
            <p>
              Bitee assumes responsibility for the digital transit of ticket data and secure payment processing. However, culinary quality control remains the sole responsibility of the merchant. Physical transit liabilities lie with independent fleet contractors utilizing our standardized Bitee identification protocols.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">4. System Integrity</h2>
            <p>
              Users are prohibited from attempting to bypass our Secure Web Core or manipulating cart caching for fraudulent pricing. Any detected anomalies by our security algorithms will result in an immediate, permanent ban of the associated user token.
            </p>
          </section>
        </motion.div>
      </main>

      <footer className="w-full py-8 text-center border-t border-stone-200 mt-auto">
        <p className="text-xs font-bold text-stone-400 tracking-widest uppercase">© 2026 Bitee™ / Cognisys IT</p>
      </footer>
    </div>
  );
};

export default TermsOfService;