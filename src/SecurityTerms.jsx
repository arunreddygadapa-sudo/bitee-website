import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SecurityTerms = ({ setView }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#faf8f5] font-sans text-[#3e2723] flex flex-col selection:bg-[#8b5a2b] selection:text-white">
      <nav className="flex justify-between items-center w-full px-6 md:px-16 py-5 bg-[#faf8f5]/90 border-b border-stone-200/50 sticky top-0 z-50 backdrop-blur-xl transition-all">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
          <img src="/logo.png" alt="Bitee Logo" width="40" height="40" className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
          <h1 className="text-3xl font-black tracking-tighter lowercase text-[#3e2723] mt-1">bitee</h1>
        </div>
        <button onClick={() => setView('home')} className="text-sm font-black tracking-widest uppercase text-stone-500 hover:text-[#8b5a2b] transition-colors flex items-center gap-2">
          <span className="text-lg mb-0.5">←</span> Return Home
        </button>
      </nav>

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="border-b border-stone-200 pb-12 mb-12">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Legal Ledger</span>
          <h1 className="text-5xl md:text-6xl font-black text-[#3e2723] tracking-tighter leading-tight mb-6">
            Security Protocols
          </h1>
          <p className="text-stone-500 font-bold text-sm tracking-widest uppercase">Encryption & Data Safety</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="space-y-10 text-base text-stone-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">1. Payment Tokenization</h2>
            <p>
              Bitee does not store raw credit card numbers or banking credentials on our servers. All financial micro-transactions are processed using industry-standard tokenization protocols, ensuring your financial data remains mathematically unreadable to unauthorized entities.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">2. End-to-End Handshake Encryption</h2>
            <p>
              All communications between the Customer Interface, the Merchant Terminal, and the Secure Web Core are encrypted via strict TLS (Transport Layer Security) handshakes. Data packet interception is mitigated by our proprietary cloud firewall.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-[#3e2723] mb-3 tracking-tight">3. Location Obfuscation</h2>
            <p>
              Live spatial tracking of our transit fleet is obfuscated post-delivery. Once a meal is flagged as "Arrived" by the driver protocol, the live tracking socket is immediately severed to protect the privacy of the customer's domain.
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

export default SecurityTerms;