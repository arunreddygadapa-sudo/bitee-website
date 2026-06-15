import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const CognisysCore = ({ setView }) => {
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
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Architectural Origins</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#3e2723] tracking-tighter leading-tight mb-12">
            Engineered by <br />Cognisys IT Solutions.
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-12 text-lg text-stone-600 font-medium leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">The Powerhouse Behind Bitee</h2>
            <p>
              Headquartered in Hyderabad, <strong>Cognisys IT Solutions</strong> is the elite architectural powerhouse responsible for bringing the Bitee ecosystem to life. Operating at the intersection of enterprise software systems and full-stack development, our engineering team provides the structural integrity required for high-speed, hyper-local food logistics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Enterprise-Grade Infrastructure</h2>
            <p className="mb-4">
              We do not rely on off-the-shelf templates. The Bitee platform was built from the ground up utilizing advanced Java microservices, responsive React frontends, and deeply optimized Tailwind CSS rendering engines. 
            </p>
            <p>
              Our internal expertise spans across massive relational databases and complex Workday HCM data modeling, ensuring that Bitee’s human capital—our fleet and restaurant partners—and logistical routing algorithms operate in perfect, synchronized harmony.
            </p>
          </section>

          <section className="bg-white p-8 md:p-12 rounded-[2rem] border border-stone-200 shadow-sm mt-12 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#3e2723] text-[#f5deb3] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
              💻
            </div>
            <h2 className="text-3xl font-black mb-4 tracking-tight text-[#3e2723]">Looking for Enterprise IT Consulting?</h2>
            <p className="text-stone-500 text-base mb-8 max-w-lg mx-auto">
              Cognisys IT Solutions also provides premium technical curriculum design, corporate training, and structural IT consulting for external enterprises.
            </p>
            <button 
              onClick={() => window.location.href = "mailto:contact@cognisysitsolutions.in"}
              className="bg-[#8b5a2b] text-white px-8 py-3.5 rounded-full font-black text-sm shadow-lg hover:bg-[#3e2723] transition-all hover:-translate-y-1 tracking-wide uppercase"
            >
              Contact Cognisys Consulting
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

export default CognisysCore;