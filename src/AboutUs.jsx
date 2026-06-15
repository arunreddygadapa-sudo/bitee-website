import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUs = ({ setView }) => {
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
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8b5a2b] block mb-4">Corporate Intelligence</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#3e2723] tracking-tighter leading-tight mb-12">
            Engineering the <br />Future of Logistics.
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-12 text-lg text-stone-600 font-medium leading-relaxed"
        >
          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Our Origin</h2>
            <p>
              Bitee was conceived from a fundamental operational gap in modern urban food delivery: the disconnect between culinary intent and transit execution. We recognized that the moment a meal leaves the kitchen, it enters a logistical void. Our mission was to eliminate that void by building an ecosystem that treats transit as an extension of the kitchen itself.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">The Cognisys Infrastructure</h2>
            <p className="mb-4">
              Designed, deployed, and maintained by <strong>Cognisys Soft Services & IT Solutions</strong>, the Bitee platform is built on enterprise-grade architecture. Our cloud relational databases and automated matching algorithms ensure that every spatial assignment is calculated in milliseconds.
            </p>
            <p>
              We do not just deliver food; we process high-volume, hyper-local micro-transactions with mathematical precision.
            </p>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm mt-8">
            <h2 className="text-2xl font-black text-[#3e2723] mb-4 tracking-tight">Our Core Values</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="text-[#8b5a2b] font-black text-xl">01</span>
                <div>
                  <strong className="block text-[#3e2723] font-black">Absolute Accountability</strong>
                  <span className="text-sm">From the merchant terminal to the doorstep, every data point is tracked.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#8b5a2b] font-black text-xl">02</span>
                <div>
                  <strong className="block text-[#3e2723] font-black">Transit Standardization</strong>
                  <span className="text-sm">Our fleet identity guarantees security and instant recognition.</span>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#8b5a2b] font-black text-xl">03</span>
                <div>
                  <strong className="block text-[#3e2723] font-black">Architectural Elegance</strong>
                  <span className="text-sm">A frictionless UI powered by a deeply complex routing backend.</span>
                </div>
              </li>
            </ul>
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

export default AboutUs;