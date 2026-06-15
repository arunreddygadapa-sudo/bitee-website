import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TeamCore = ({ setView }) => {
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
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Corporate Intelligence</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#3e2723] tracking-tighter leading-tight mb-12">
            The Architects <br />Behind Bitee.
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-12 text-lg text-stone-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Engineering Leadership</h2>
            <p>
              Bitee is not run by marketing teams; it is governed by systems engineers. Our core team consists of elite technical consultants, database architects, and UI/UX specialists from <strong>Cognisys IT Solutions</strong>. We treat food delivery as a rigorous mathematical routing problem, and our leadership reflects that analytical approach.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm">
              <div className="w-12 h-12 bg-[#faf8f5] text-[#3e2723] border border-stone-200 rounded-xl flex items-center justify-center text-xl mb-4">⚙️</div>
              <h3 className="font-black text-[#3e2723] text-xl mb-2">Systems Engineering</h3>
              <p className="text-sm text-stone-500">Responsible for cloud server stability, relational database health, and zero-latency persistent sockets.</p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm">
              <div className="w-12 h-12 bg-[#faf8f5] text-[#3e2723] border border-stone-200 rounded-xl flex items-center justify-center text-xl mb-4">🧭</div>
              <h3 className="font-black text-[#3e2723] text-xl mb-2">Spatial Algorithms</h3>
              <p className="text-sm text-stone-500">The mathematicians designing our hyper-local transit maps and automated driver assignment logic.</p>
            </div>
          </section>
        </motion.div>
      </main>

      <footer className="w-full py-8 text-center border-t border-stone-200 mt-auto">
        <p className="text-xs font-bold text-stone-400 tracking-widest uppercase">© 2026 Bitee™ / Cognisys IT</p>
      </footer>
    </div>
  );
};

export default TeamCore;