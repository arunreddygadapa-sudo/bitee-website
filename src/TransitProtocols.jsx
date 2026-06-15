import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TransitProtocols = ({ setView }) => {
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

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 md:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">For Drivers</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#3e2723] tracking-tighter leading-tight mb-12">
            Standard Transit <br />Protocols.
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-12 text-lg text-stone-600 font-medium leading-relaxed">
          <section className="bg-white p-8 md:p-12 rounded-[2rem] border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-black text-[#3e2723] mb-6 tracking-tight">Active Delivery Rules of Engagement</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-[#8b5a2b] font-black text-xl">01.</span>
                <div>
                  <strong className="block text-[#3e2723] font-black">Thermal Backpack Usage</strong>
                  <span className="text-sm">Under no circumstances should a package be transported outside of the issued Bitee thermal backpack. Baseline temperature must be maintained.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#8b5a2b] font-black text-xl">02.</span>
                <div>
                  <strong className="block text-[#3e2723] font-black">Uniform Compliance</strong>
                  <span className="text-sm">The deep-brown Bitee fleet uniform must be visible at all times during an active shift to ensure security clearance at premium restaurants.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#8b5a2b] font-black text-xl">03.</span>
                <div>
                  <strong className="block text-[#3e2723] font-black">Final-Mile Handoff</strong>
                  <span className="text-sm">Verify the ticket number on your app with the package seal before leaving the restaurant. Upon arrival at the customer domain, mark the order as "Delivered" only after physical handoff is complete.</span>
                </div>
              </li>
            </ul>
          </section>
        </motion.div>
      </main>

      <footer className="w-full py-8 text-center border-t border-stone-200 mt-auto">
        <p className="text-xs font-bold text-stone-400 tracking-widest uppercase">© 2026 Bitee™ / Cognisys IT</p>
      </footer>
    </div>
  );
};

export default TransitProtocols;