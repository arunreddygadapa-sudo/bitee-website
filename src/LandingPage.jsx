import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = ({ setView }) => {
  // Slideshow 1 State: Food Pickup Slideshow
  const [pickupIndex, setPickupIndex] = useState(0);
  const pickupSlides = [
    { title: "Culinary Presentation", desc: "A curated spread of artisanal dishes prepared meticulously, sitting fresh on a clean rustic dining table." },
    { title: "The Hand-Off", desc: "A customer reaches down to lift a hot, beautifully packed meal directly from the presentation arrangement." },
    { title: "Pure Satisfaction", desc: "Unboxing premium flavors, steam gently escaping as the culinary journey transitions from kitchen to table." }
  ];

  // Slideshow 2 State: Driver Delivery Slideshow
  const [deliveryIndex, setDeliveryIndex] = useState(0);
  const deliverySlides = [
    { title: "The Bitee Uniform", desc: "Our transit specialists gear up in custom deep-brown t-shirts proudly bearing the minimalist 'C' Bitee insignia." },
    { title: "Optimized Transit", desc: "Navigating urban routes with insulated thermal backpacks to guarantee your orders maintain baseline temperature." },
    { title: "Safe Arrival", desc: "A smiling delivery specialist hands over the sealed meal box directly to the customer's doorstep." }
  ];

  // Auto-advance slideshows every 4 seconds
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
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white border-b border-stone-200/60 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/90">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black tracking-tight lowercase text-[#3e2723]">bitee</h1>
          <span className="text-[10px] bg-[#8b5a2b]/10 text-[#8b5a2b] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase">Ecosystem</span>
        </div>
        <button 
          onClick={() => window.location.href = "mailto:support@bitee.in"}
          className="bg-[#3e2723] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#271816] transition-all transform hover:-translate-y-0.5"
        >
          Contact Support
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-black uppercase tracking-widest text-[#8b5a2b] bg-[#8b5a2b]/5 px-4 py-2 rounded-full inline-block mb-6">
            Hyper-Local Food Logistics Platform
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-8 text-[#3e2723] leading-[1.1]"
        >
          Delicious food, <br/><span className="text-[#8b5a2b]">delivered instantly.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-stone-600 max-w-2xl mb-12 font-medium leading-relaxed"
        >
          Experience complex logistical coordination simplified down to a single click. From local culinary crafters directly to your domain.
        </motion.p>

        {/* Hero Quick Animations */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-md">
          <motion.div 
            whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200/80 flex items-center gap-4 text-left"
          >
            <div className="p-3 bg-[#faf8f5] rounded-xl text-[#8b5a2b] font-black">⚡</div>
            <div>
              <p className="font-bold text-sm">Lightning Delivery</p>
              <p className="text-xs text-stone-500">Intelligent transit routing</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200/80 flex items-center gap-4 text-left"
          >
            <div className="p-3 bg-[#faf8f5] rounded-xl text-[#8b5a2b] font-black">🍳</div>
            <div>
              <p className="font-bold text-sm">Fresh & Secure</p>
              <p className="text-xs text-stone-500">Thermal-sealed handling</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 3. SCROLL SLIDESHOW 1: HUMAN PICKING FOOD FROM TABLE */}
      <section className="bg-white py-24 border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-[#8b5a2b] uppercase tracking-widest block mb-2">Phase One: Culinary Craft</span>
            <h3 className="text-3xl md:text-4xl font-black text-[#3e2723] mb-6">Sourced From Elegant Tables</h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              The journey begins at the table. Our culinary partners focus entirely on the art of taste, curating recipes that stand out. When a meal is completed, it is staged perfectly for safe transfer—capturing baseline freshness before transit starts.
            </p>
            <div className="flex gap-2">
              {pickupSlides.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setPickupIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === pickupIndex ? 'w-8 bg-[#8b5a2b]' : 'w-2 bg-stone-200'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Interactive Slideshow Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#faf8f5] p-8 md:p-12 rounded-3xl border border-stone-200 flex flex-col justify-between min-h-[320px] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-stone-200/40 select-none">01</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={pickupIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 relative z-10"
              >
                <div className="w-12 h-12 bg-[#3e2723] rounded-xl flex items-center justify-center text-white font-bold text-xl">🍽️</div>
                <h4 className="text-xl font-bold text-[#3e2723]">{pickupSlides[pickupIndex].title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{pickupSlides[pickupIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
            <div className="text-xs font-bold text-stone-400 mt-6">Automated Visual Pipeline Feed</div>
          </motion.div>
        </div>
      </section>

      {/* 4. SCROLL SLIDESHOW 2: DRIVER DELIVERING FOOD WITH LOGO */}
      <section className="py-24 bg-[#faf8f5] border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Interactive Slideshow Box First on Desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 flex flex-col justify-between min-h-[320px] shadow-sm relative overflow-hidden order-last md:order-first"
          >
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-stone-200/40 select-none">02</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={deliveryIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 relative z-10"
              >
                <div className="w-12 h-12 bg-[#8b5a2b] rounded-xl flex items-center justify-center text-white font-bold text-xl">🛵</div>
                <h4 className="text-xl font-bold text-[#3e2723]">{deliverySlides[deliveryIndex].title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{deliverySlides[deliveryIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
            <div className="text-xs font-bold text-stone-400 mt-6">Transit Fleet Interface Update</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-[#8b5a2b] uppercase tracking-widest block mb-2">Phase Two: Secure Logistics</span>
            <h3 className="text-3xl md:text-4xl font-black text-[#3e2723] mb-6">The Bitee Fleet Identity</h3>
            <p className="text-stone-600 leading-relaxed mb-6">
              Our transit architecture relies on real-world clarity. Every single delivery partner operates under a standardized fleet identity, wearing our signature deep-brown t-shirt featuring the custom Bitee emblem. This guarantees security, instant recognition at commercial checkpoints, and accountability.
            </p>
            <div className="flex gap-2">
              {deliverySlides.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setDeliveryIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === deliveryIndex ? 'w-8 bg-[#8b5a2b]' : 'w-2 bg-stone-200'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. COGNISYS CORPORATION STORY SECTION */}
      <section className="bg-white py-24 border-t border-stone-200/60">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#3e2723]/5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-[#3e2723]">
              Engineering Origins
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-[#3e2723]">Implemented by Cognisys Soft Services</h3>
            <div className="w-16 h-1 bg-[#8b5a2b] mx-auto my-4 rounded-full"></div>
            <p className="text-stone-600 text-lg leading-relaxed text-justify md:text-center">
              The Bitee ecosystem was engineered and implemented from the ground up by <strong>Cognisys Soft Services</strong>. Designed as a highly scalable enterprise solution, Cognisys deployed advanced database modeling, automated fulfillment matching algorithms, and streamlined edge interfaces to build a seamless infrastructure. What began as an optimization study for cloud logistics evolved into a fully robust food delivery engine capable of processing micro-transactions and automated spatial assignments in real-time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. ECOSYSTEM ARCHITECTURE & APP FUNCTIONALITY */}
      <section className="bg-[#1a100c] text-white py-24 border-t border-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f5deb3]">System Topology</span>
            <h3 className="text-3xl md:text-4xl font-black mt-2">How the Bitee Ecosystem Connects</h3>
            <p className="text-stone-400 text-sm mt-4 max-w-xl mx-auto">Three decoupled applications communicating with a singular cloud relational database repository.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[#271816] p-8 rounded-2xl border border-stone-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl">📱</span>
                <h4 className="text-xl font-bold mt-4 mb-2 text-[#f5deb3]">Customer Interface</h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  A fluid application interface engineered for instantaneous item discovery, real-time status fetching, cart caching, and spatial tracking coordinates.
                </p>
              </div>
              <div className="text-xs font-black tracking-widest uppercase text-[#8b5a2b] mt-6">Play Store Delivery</div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#271816] p-8 rounded-2xl border border-stone-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl">🏪</span>
                <h4 className="text-xl font-bold mt-4 mb-2 text-[#f5deb3]">Restaurant Operations</h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Decoupled terminal software for merchants. Real-time persistent sockets instantly push incoming customer tickets directly into kitchen tracking monitors.
                </p>
              </div>
              <div className="text-xs font-black tracking-widest uppercase text-[#8b5a2b] mt-6">Merchant Terminal</div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[#271816] p-8 rounded-2xl border border-stone-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl">💼</span>
                <h4 className="text-xl font-bold mt-4 mb-2 text-[#f5deb3]">Administrative Dashboard</h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Our private internal command center (this web terminal). Allows complete visibility over total transactions, gross platform volumes, and active merchant registries.
                </p>
              </div>
              <div className="text-xs font-black tracking-widest uppercase text-[#8b5a2b] mt-6">Secure Web Core</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. DETAILED ZOMATO-INSPIRED FOOTER STRUCTURE */}
      <footer className="bg-[#110a08] text-white pt-16 pb-8 px-6 md:px-16 border-t border-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 className="text-4xl font-black tracking-tight lowercase">bitee</h2>
            <div className="text-xs text-stone-500 font-mono">Build Verification Version: 2.1.0-MVP</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-[#f5deb3] mb-4">Corporate</h3>
              <ul className="space-y-3 text-stone-400 text-xs">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Investments</a></li>
                <li><a href="#" className="hover:text-white transition">Team Core</a></li>
                <li><a href="#" className="hover:text-white transition">Cognisys Core</a></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-[#f5deb3] mb-4">For Restaurants</h3>
              <ul className="space-y-3 text-stone-400 text-xs">
                <li><a href="#" className="hover:text-white transition">Partner Integration</a></li>
                <li><a href="#" className="hover:text-white transition">Merchant Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition">Operations App</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-[#f5deb3] mb-4">For Drivers</h3>
              <ul className="space-y-3 text-stone-400 text-xs">
                <li><a href="#" className="hover:text-white transition">Fleet Registration</a></li>
                <li><a href="#" className="hover:text-white transition">Transit Protocols</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-[#f5deb3] mb-4">Legal Ledger</h3>
              <ul className="space-y-3 text-stone-400 text-xs">
                <li><button onClick={() => setView('privacy')} className="hover:text-white transition text-left">Privacy Policy</button></li>
                <li><a href="#" className="hover:text-white transition">Security Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h3 className="font-bold text-xs uppercase tracking-widest text-[#f5deb3] mb-4">Social Ecosystem</h3>
              <div className="flex gap-3 mb-6">
                <div className="w-7 h-7 bg-stone-800 rounded-lg flex items-center justify-center text-xs text-stone-300 font-bold hover:bg-white hover:text-black transition cursor-pointer">in</div>
                <div className="w-7 h-7 bg-stone-800 rounded-lg flex items-center justify-center text-xs text-stone-300 font-bold hover:bg-white hover:text-black transition cursor-pointer">ig</div>
                <div className="w-7 h-7 bg-stone-800 rounded-lg flex items-center justify-center text-xs text-stone-300 font-bold hover:bg-white hover:text-black transition cursor-pointer">x</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="bg-stone-900 border border-stone-800 text-stone-300 rounded-lg py-2 px-3 text-center font-bold select-none cursor-not-allowed">App Store App</div>
                <div className="bg-stone-900 border border-stone-800 text-stone-300 rounded-lg py-2 px-3 text-center font-bold select-none cursor-not-allowed">Google Play App</div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-stone-600 gap-4">
            <p className="text-center md:text-left">
              By continuous interaction with this interface, you confirm compliance with system data routing protocols. All code assets are properties of their respective architectural entities.
            </p>
            <p className="whitespace-nowrap">© 2008-2026 Bitee™ Ltd.</p>
          </div>
          
          {/* Small Protected Entry Link for Admin Dashboard Access */}
          <div className="flex justify-end mt-8 pt-4 border-t border-stone-900/40">
             <button 
               onClick={() => setView('admin')} 
               className="text-[10px] text-stone-700 hover:text-[#8b5a2b] transition tracking-widest uppercase font-black bg-stone-950 px-3 py-1.5 rounded-md border border-stone-900"
             >
               Internal Admin Portal Login
             </button>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default LandingPage;