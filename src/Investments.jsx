import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Investments = ({ setView }) => {
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
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Corporate Intelligence</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#3e2723] tracking-tighter leading-tight mb-12">
            Invest in the <br />Bitee Ecosystem.
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-12 text-lg text-stone-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Strategic Backing</h2>
            <p>
              Bitee operates as a premier digital logistics platform, completely engineered and capitalized by <strong>Cognisys Soft Services & IT Solutions</strong>. Our initial seed funding and infrastructure development were handled entirely in-house, resulting in a zero-debt, highly scalable enterprise asset.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Growth & Expansion Matrix</h2>
            <p className="mb-4">
              We are actively transitioning from our build-verification phase (v2.1.0-MVP) into active market deployment. Our financial model relies on high-volume micro-transactions, merchant terminal leasing, and optimized fleet routing to guarantee strong profit margins per delivery block.
            </p>
            <p>
              We are currently establishing dialogue with Tier-1 venture capital firms and strategic angel investors who understand the intersection of food tech and deep-logistics. 
            </p>
          </section>

          <section className="bg-[#3e2723] text-white p-8 md:p-12 rounded-[2rem] shadow-xl mt-12 text-center">
            <h2 className="text-3xl font-black mb-4 tracking-tight text-[#f5deb3]">Request a Pitch Deck</h2>
            <p className="text-stone-300 text-base mb-8 max-w-lg mx-auto">
              Qualified investors can request access to our financial models, spatial routing algorithms, and Q3 expansion metrics.
            </p>
            <button 
              onClick={() => window.location.href = "mailto:investors@bitee.in"}
              className="bg-[#f5deb3] text-[#3e2723] px-8 py-3.5 rounded-full font-black text-sm shadow-lg hover:bg-white transition-all hover:-translate-y-1 tracking-wide uppercase"
            >
              Contact Investor Relations
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

export default Investments;