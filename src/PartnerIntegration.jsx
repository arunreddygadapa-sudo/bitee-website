import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PartnerIntegration = ({ setView }) => {
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
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Merchant Operations</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#3e2723] tracking-tighter leading-tight mb-12">
            Scale your kitchen <br />with Bitee.
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-12 text-lg text-stone-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Decoupled Terminal Software</h2>
            <p>
              Integrating with Bitee requires zero hardware overhauls. We provide a lightweight, decoupled terminal application that runs on your existing tablets or POS systems. The interface is engineered to eliminate kitchen friction, allowing your chefs to focus on culinary presentation rather than screen management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Real-Time Persistent Sockets</h2>
            <p>
              When a customer places an order on the Bitee app, our cloud repository uses persistent web sockets to push the ticket instantly to your kitchen monitor. There are no refresh delays or missed notifications. The data routing is instantaneous, ensuring maximum prep time for your staff.
            </p>
          </section>

          <section className="bg-white p-8 md:p-10 rounded-[2rem] border border-stone-200 shadow-sm mt-8">
            <h2 className="text-2xl font-black text-[#3e2723] mb-6 tracking-tight">The Integration Pipeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-[#faf8f5] border border-stone-200 rounded-xl flex items-center justify-center text-xl mb-4">📄</div>
                <h3 className="font-black text-[#3e2723] mb-2">1. Registry</h3>
                <p className="text-sm text-stone-500">Submit your menu, pricing models, and kitchen operational hours to our system.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#faf8f5] border border-stone-200 rounded-xl flex items-center justify-center text-xl mb-4">⚙️</div>
                <h3 className="font-black text-[#3e2723] mb-2">2. Configuration</h3>
                <p className="text-sm text-stone-500">Our engineering team maps your menu data to our cloud relational database.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#faf8f5] border border-stone-200 rounded-xl flex items-center justify-center text-xl mb-4">🚀</div>
                <h3 className="font-black text-[#3e2723] mb-2">3. Deployment</h3>
                <p className="text-sm text-stone-500">Download the Merchant Terminal app, sign in, and instantly receive live orders.</p>
              </div>
            </div>
            <button 
              onClick={() => window.location.href = "mailto:partners@bitee.in"}
              className="mt-10 w-full bg-[#3e2723] text-white py-4 rounded-xl font-black text-sm shadow-md hover:bg-[#271816] transition-all transform hover:-translate-y-0.5 tracking-widest uppercase"
            >
              Begin Partner Registration
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

export default PartnerIntegration;