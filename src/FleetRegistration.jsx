import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const FleetRegistration = ({ setView }) => {
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
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 md:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Transit Logistics</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#3e2723] tracking-tighter leading-tight mb-12">
            Join the <br />Bitee Fleet.
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-12 text-lg text-stone-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">The Bitee Fleet Identity</h2>
            <p>
              We do not hire gig workers; we partner with transit specialists. Every driver in our ecosystem operates under a strict, standardized fleet identity. Upon successful registration, you will be issued our signature deep-brown Bitee uniform and a custom thermal-sealed backpack to ensure maximum security and brand recognition at merchant checkpoints.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Intelligent Transit Routing</h2>
            <p>
              Our automated spatial algorithms do the heavy lifting for you. The Bitee transit app calculates the most efficient urban routes in real-time, matching you with local culinary partners and optimizing your delivery blocks to maximize your earning potential per hour.
            </p>
          </section>

          <section className="bg-[#1a100c] text-white p-8 md:p-12 rounded-[2rem] shadow-xl mt-12">
            <h2 className="text-3xl font-black mb-8 tracking-tight text-[#f5deb3]">Registration Requirements</h2>
            <ul className="space-y-6 mb-10">
              <li className="flex items-center gap-4 border-b border-stone-800 pb-4">
                <span className="text-2xl">🪪</span>
                <span className="text-stone-300">Valid government-issued identification and background check.</span>
              </li>
              <li className="flex items-center gap-4 border-b border-stone-800 pb-4">
                <span className="text-2xl">🛵</span>
                <span className="text-stone-300">Registered two-wheeler with valid transit insurance.</span>
              </li>
              <li className="flex items-center gap-4 border-b border-stone-800 pb-4">
                <span className="text-2xl">📱</span>
                <span className="text-stone-300">Smartphone capable of running the Bitee Transit tracking app.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-2xl">👕</span>
                <span className="text-stone-300">Commitment to wearing the mandatory Bitee deep-brown uniform.</span>
              </li>
            </ul>
            <button 
              onClick={() => window.location.href = "mailto:fleet@bitee.in"}
              className="w-full bg-[#f5deb3] text-[#3e2723] py-4 rounded-xl font-black text-sm shadow-md hover:bg-white transition-all transform hover:-translate-y-0.5 tracking-widest uppercase"
            >
              Start Fleet Application
            </button>
          </section>
        </motion.div>
      </main>

      <footer className="w-full py-8 text-center border-t border-stone-200 mt-auto">
        <p className="text-xs font-bold text-stone-400 tracking-widest uppercase">© 2026 Bitee™ / Cognisys IT</p>
      </footer>
    </div>
  );
};

export default FleetRegistration;