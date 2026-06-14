import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = ({ setView }) => {
  const [pickupIndex, setPickupIndex] = useState(0);
  const pickupSlides = [
    { title: "Culinary Presentation", desc: "A curated spread of artisanal dishes prepared meticulously, sitting fresh on a clean rustic dining table." },
    { title: "The Hand-Off", desc: "A customer reaches down to lift a hot, beautifully packed meal directly from the presentation arrangement." },
    { title: "Pure Satisfaction", desc: "Unboxing premium flavors, steam gently escaping as the culinary journey transitions from kitchen to table." }
  ];

  const [deliveryIndex, setDeliveryIndex] = useState(0);
  const deliverySlides = [
    { title: "The Bitee Uniform", desc: "Our transit specialists gear up in custom deep-brown t-shirts proudly bearing the Bitee insignia." },
    { title: "Optimized Transit", desc: "Navigating urban routes with insulated thermal backpacks to guarantee your orders maintain baseline temperature." },
    { title: "Safe Arrival", desc: "A smiling delivery specialist hands over the sealed meal box directly to the customer's doorstep." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPickupIndex((prev) => (prev + 1) % pickupSlides.length);
      setDeliveryIndex((prev) => (prev + 1) % deliverySlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-[#3e2723] flex flex-col overflow-x-hidden selection:bg-[#8b5a2b] selection:text-white">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white/90 border-b border-stone-200/60 sticky top-0 z-50 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Bitee Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-3xl font-black tracking-tight lowercase text-[#3e2723] mt-1">bitee</h1>
        </div>
        <button 
          onClick={() => window.location.href = "mailto:support@bitee.in"}
          className="bg-[#3e2723] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#271816] transition-all"
        >
          Contact Support
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 max-w-5xl mx-auto">
        <span className="text-xs font-black uppercase tracking-widest text-[#8b5a2b] bg-[#8b5a2b]/5 px-4 py-2 rounded-full inline-block mb-6">
          Hyper-Local Food Logistics Platform
        </span>
        <h2 className="text-5xl md:text-7xl font-black mb-8 text-[#3e2723] leading-[1.1]">
          Delicious food, <br/><span className="text-[#8b5a2b]">delivered instantly.</span>
        </h2>
      </header>

      {/* 3. BACKGROUND VIDEO: PICKUP */}
      <section className="relative py-24 border-t border-stone-200/60 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-30">
          <source src="/videos/food-pickup.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/80 z-0 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div>
            <h3 className="text-3xl md:text-4xl font-black text-[#3e2723] mb-6">Sourced From Elegant Tables</h3>
            <p className="text-stone-700 font-medium leading-relaxed mb-6">
              The journey begins at the table. Our culinary partners focus entirely on the art of taste, curating recipes that stand out.
            </p>
          </motion.div>
          <motion.div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-[#8b5a2b]/20 shadow-xl min-h-[300px]">
             <img src="/logo.png" alt="Bitee Logo" className="w-12 h-12 object-contain mb-4" />
             <h4 className="text-xl font-bold text-[#3e2723]">{pickupSlides[pickupIndex].title}</h4>
             <p className="text-stone-600 text-sm mt-2">{pickupSlides[pickupIndex].desc}</p>
          </motion.div>
        </div>
      </section>

      {/* 4. BACKGROUND VIDEO: DELIVERY */}
      <section className="relative py-24 border-t border-stone-200/60 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40">
          <source src="/videos/delivery.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#3e2723]/90 z-0 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="bg-[#faf8f5]/95 backdrop-blur-md p-8 rounded-3xl border border-stone-200 shadow-xl min-h-[300px] order-last md:order-first">
             <img src="/logo.png" alt="Bitee Logo" className="w-12 h-12 object-contain mb-4" />
             <h4 className="text-xl font-bold text-[#3e2723]">{deliverySlides[deliveryIndex].title}</h4>
             <p className="text-stone-600 text-sm mt-2">{deliverySlides[deliveryIndex].desc}</p>
          </motion.div>
          <div className="text-white">
            <h3 className="text-3xl md:text-4xl font-black mb-6">The Bitee Fleet Identity</h3>
            <p className="text-stone-300 font-medium">Standardized fleet identity featuring the Bitee emblem ensures security and professionalism.</p>
          </div>
        </div>
      </section>

      {/* 5. COGNISYS STORY */}
      <section className="bg-white py-24 text-center px-6">
        <h3 className="text-3xl font-black text-[#3e2723]">Implemented by Cognisys IT Solutions</h3>
        <p className="max-w-3xl mx-auto mt-6 text-stone-600 font-medium">Engineered from the ground up by Cognisys IT Solutions as a scalable enterprise logistics solution.</p>
      </section>

      {/* 6. APP DOWNLOADS (Official Icons) */}
      <section className="bg-stone-900 py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl font-black mb-12">Download the app now!</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg hover:bg-stone-200 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.44-3.05 2.44-1.35 0-1.78-.81-3.32-.81-1.54 0-2.02.81-3.32.81-1.34 0-2.31-1.3-3.41-2.98-1.85-2.82-3.23-7.98-1.37-11.39 1.15-2.09 3.23-3.41 5.48-3.41 1.35 0 2.64.92 3.51.92.87 0 2.37-1.12 4.04-1.12.69 0 2.62.07 3.86 1.86-.06.03-2.18 1.28-2.18 3.84 0 3.23 2.87 4.38 3.01 4.43-.03.09-.45 1.57-1.48 3.08zM14.54 4.54c.71-.85 1.19-2.03 1.06-3.22-1.02.04-2.26.68-2.99 1.54-.66.75-1.19 1.94-1.04 3.12 1.15.09 2.26-.59 2.97-1.44z"/></svg>
              <div className="text-left"><p className="text-[10px]">Download on the</p><p className="font-bold">App Store</p></div>
            </a>
            <a href="#" className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg hover:bg-stone-200 transition">
              <svg className="w-8 h-8" viewBox="0 0 512 512"><path fill="#34A853" d="M325.3 234.3L104.6 13l278.3 278.3-278.3 278.3L325.3 234.3z"/><path fill="#4285F4" d="M104.6 13L325.3 234.3 434.7 124.9 104.6 13z"/><path fill="#FBBC05" d="M434.7 387.1L325.3 277.7 104.6 499 434.7 387.1z"/><path fill="#EA4335" d="M104.6 499L325.3 277.7 434.7 387.1 104.6 499z"/></svg>
              <div className="text-left"><p className="text-[10px]">Get it on</p><p className="font-bold">Google Play</p></div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#110a08] text-white pt-16 pb-8 px-8 border-t border-stone-900">
        <div className="flex justify-end pt-4 border-t border-stone-900/40">
           <button onClick={() => setView('admin')} className="text-[10px] text-stone-600 hover:text-[#8b5a2b] uppercase font-black bg-stone-950 px-3 py-1.5 rounded-md border border-stone-900">
             Admin Login
           </button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;