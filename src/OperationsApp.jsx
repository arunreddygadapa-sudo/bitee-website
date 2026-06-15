import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const OperationsApp = ({ setView }) => {
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
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Merchant Tools</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#3e2723] tracking-tighter leading-tight mb-12">
            Command your <br />kitchen digitally.
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-12 text-lg text-stone-600 font-medium leading-relaxed">
          <p>
            The Bitee Operations App is a dedicated decoupled software terminal designed exclusively for restaurant owners and kitchen managers. It transforms any standard tablet into a high-powered logistics and order-processing hub.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#3e2723] p-8 rounded-[2rem] text-white shadow-xl">
              <span className="text-3xl block mb-4">📈</span>
              <h3 className="font-black text-xl mb-2 text-[#f5deb3]">Live Metric Tracking</h3>
              <p className="text-sm text-stone-300">Monitor your daily transaction volume, average ticket size, and driver arrival times directly from the dashboard.</p>
            </div>
            <div className="bg-[#3e2723] p-8 rounded-[2rem] text-white shadow-xl">
              <span className="text-3xl block mb-4">🎛️</span>
              <h3 className="font-black text-xl mb-2 text-[#f5deb3]">Menu Synchronization</h3>
              <p className="text-sm text-stone-300">Temporarily disable out-of-stock items with a single tap. The system instantly synchronizes changes to the customer app.</p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="w-full py-8 text-center border-t border-stone-200 mt-auto">
        <p className="text-xs font-bold text-stone-400 tracking-widest uppercase">© 2026 Bitee™ / Cognisys IT</p>
      </footer>
    </div>
  );
};

export default OperationsApp;