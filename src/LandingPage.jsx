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
    { title: "The Bitee Uniform", desc: "Our transit specialists gear up in custom deep-brown t-shirts proudly bearing the Bitee insignia." },
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
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white/90 border-b border-stone-200/60 sticky top-0 z-50 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Bitee Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-3xl font-black tracking-tight lowercase text-[#3e2723] mt-1">bitee</h1>
          <span className="text-[10px] bg-[#8b5a2b]/10 text-[#8b5a2b] px-2 py-0.5 rounded-full font-bold tracking-wider uppercase ml-2 hidden sm:inline-block">Ecosystem</span>
        </div>
        <button 
          onClick={() => window.location.href = "mailto:support@bitee.in"}
          className="bg-[#3e2723] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md hover:bg-[#271816] transition-all transform hover:-translate-y-0.5"
        >
          Contact Support
        </button>
      </nav>

      {/* 2. HERO SECTION WITH CINEMATIC VIDEO BACKGROUND */}
      <header className="relative flex flex-col items-center justify-center text-center px-4 py-32 md:py-48 max-w-full mx-auto min-h-[85vh] overflow-hidden">
        {/* Full Visibility Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/food-pickup.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-widest text-[#f5deb3] bg-black/40 backdrop-blur-md px-4 py-2 rounded-full inline-block mb-6 border border-white/20">
              Hyper-Local Food Logistics Platform
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-8 text-white leading-[1.1]"
          >
            Delicious food, <br/><span className="text-[#f5deb3]">delivered instantly.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Experience complex logistical coordination simplified down to a single click. From local culinary crafters directly to your domain.
          </motion.p>

          {/* Hero Quick Animations (Updated for dark background) */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-md mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }} className="bg-black/40 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4 text-left"
            >
              <div className="p-3 bg-[#f5deb3] rounded-xl text-[#3e2723] font-black">⚡</div>
              <div>
                <p className="font-bold text-sm text-white">Lightning Delivery</p>
                <p className="text-xs text-stone-300">Intelligent transit routing</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }} className="bg-black/40 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4 text-left"
            >
              <div className="p-3 bg-[#f5deb3] rounded-xl text-[#3e2723] font-black">🍳</div>
              <div>
                <p className="font-bold text-sm text-white">Fresh & Secure</p>
                <p className="text-xs text-stone-300">Thermal-sealed handling</p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* 3. SCROLL SLIDESHOW 1: HUMAN PICKING FOOD (Clean Solid Background) */}
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
            <p className="text-stone-600 leading-relaxed mb-6 font-medium">
              The journey begins at the table. Our culinary partners focus entirely on the art of taste, curating recipes that stand out. When a meal is completed, it is staged perfectly for safe transfer—capturing baseline freshness before transit starts.
            </p>
            <div className="flex gap-2">
              {pickupSlides.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setPickupIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === pickupIndex ? 'w-8 bg-[#8b5a2b]' : 'w-2 bg-stone-300'}`}
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
                <img src="/logo.png" alt="Bitee Logo" className="w-12 h-12 object-contain mb-2" />
                <h4 className="text-xl font-bold text-[#3e2723]">{pickupSlides[pickupIndex].title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{pickupSlides[pickupIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
            <div className="text-xs font-bold text-[#8b5a2b] mt-6">Automated Visual Pipeline Feed</div>
          </motion.div>
        </div>
      </section>

      {/* 4. SCROLL SLIDESHOW 2: DRIVER DELIVERING (WITH DARK CINEMATIC VIDEO BACKGROUND) */}
      <section className="relative py-24 border-t border-stone-200/60 overflow-hidden">
        {/* Full Visibility Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/delivery.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so the video pops without washing out the text */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
          
          {/* Interactive Slideshow Box First on Desktop (Glassmorphic dark design) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-stone-700 flex flex-col justify-between min-h-[320px] shadow-2xl relative overflow-hidden order-last md:order-first"
          >
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/10 select-none">02</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={deliveryIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 relative z-10"
              >
                <img src="/logo.png" alt="Bitee Logo" className="w-12 h-12 object-contain mb-2 drop-shadow-md brightness-110" />
                <h4 className="text-xl font-bold text-white">{deliverySlides[deliveryIndex].title}</h4>
                <p className="text-stone-300 text-sm leading-relaxed">{deliverySlides[deliveryIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
            <div className="text-xs font-bold text-[#f5deb3] mt-6">Transit Fleet Interface Update</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-[#f5deb3] uppercase tracking-widest block mb-2">Phase Two: Secure Logistics</span>
            <h3 className="text-3xl md:text-4xl font-black mb-6">The Bitee Fleet Identity</h3>
            <p className="text-stone-300 leading-relaxed mb-6 font-medium">
              Our transit architecture relies on real-world clarity. Every single delivery partner operates under a standardized fleet identity, wearing our signature deep-brown t-shirt featuring the custom Bitee emblem. This guarantees security, instant recognition at commercial checkpoints, and accountability.
            </p>
            <div className="flex gap-2">
              {deliverySlides.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setDeliveryIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === deliveryIndex ? 'w-8 bg-[#f5deb3]' : 'w-2 bg-stone-500'}`}
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
            <h3 className="text-3xl md:text-5xl font-black text-[#3e2723]">Implemented by Cognisys Soft Services & IT Solutions</h3>
            <div className="w-16 h-1 bg-[#8b5a2b] mx-auto my-4 rounded-full"></div>
            <p className="text-stone-600 text-lg leading-relaxed text-justify md:text-center">
              The Bitee ecosystem was engineered and implemented from the ground up by <strong>Cognisys Soft Services & IT Solutions</strong>. Designed as a highly scalable enterprise solution, Cognisys deployed advanced database modeling, automated fulfillment matching algorithms, and streamlined edge interfaces to build a seamless infrastructure. What began as an optimization study for cloud logistics evolved into a fully robust food delivery engine capable of processing micro-transactions and automated spatial assignments in real-time.
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
              className="bg-[#271816] p-8 rounded-2xl border border-stone-800 flex flex-col justify-between hover:border-[#8b5a2b] transition"
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
              className="bg-[#271816] p-8 rounded-2xl border border-stone-800 flex flex-col justify-between hover:border-[#8b5a2b] transition"
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
              className="bg-[#271816] p-8 rounded-2xl border border-stone-800 flex flex-col justify-between hover:border-[#8b5a2b] transition"
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

      {/* 7. APP DOWNLOADS (ZOMATO STYLE WITH OFFICIAL ICONS) */}
      <section className="bg-white py-20 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-4xl font-black text-[#3e2723] mb-4">Download the app now!</h3>
            <p className="text-stone-600 text-lg mb-8 font-medium">Experience seamless online ordering and live tracking only on the Bitee app.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Apple Store SVG Button */}
              <a href="#" className="bg-black text-white flex items-center justify-center gap-3 px-6 py-3 rounded-xl hover:bg-stone-800 transition shadow-md">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.44-3.05 2.44-1.35 0-1.78-.81-3.32-.81-1.54 0-2.02.81-3.32.81-1.34 0-2.31-1.3-3.41-2.98-1.85-2.82-3.23-7.98-1.37-11.39 1.15-2.09 3.23-3.41 5.48-3.41 1.35 0 2.64.92 3.51.92.87 0 2.37-1.12 4.04-1.12.69 0 2.62.07 3.86 1.86-.06.03-2.18 1.28-2.18 3.84 0 3.23 2.87 4.38 3.01 4.43-.03.09-.45 1.57-1.48 3.08zM14.54 4.54c.71-.85 1.19-2.03 1.06-3.22-1.02.04-2.26.68-2.99 1.54-.66.75-1.19 1.94-1.04 3.12 1.15.09 2.26-.59 2.97-1.44z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-stone-300">Download on the</div>
                  <div className="font-bold text-lg leading-tight">App Store</div>
                </div>
              </a>
              {/* Google Play SVG Button */}
              <a href="#" className="bg-black text-white flex items-center justify-center gap-3 px-6 py-3 rounded-xl hover:bg-stone-800 transition shadow-md">
                <svg className="w-8 h-8" viewBox="0 0 512 512"><path fill="#34A853" d="M325.3 234.3L104.6 13l278.3 278.3-278.3 278.3L325.3 234.3z"/><path fill="#4285F4" d="M104.6 13L325.3 234.3 434.7 124.9 104.6 13z"/><path fill="#FBBC05" d="M434.7 387.1L325.3 277.7 104.6 499 434.7 387.1z"/><path fill="#EA4335" d="M104.6 499L325.3 277.7 434.7 387.1 104.6 499z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-stone-300">Get it on</div>
                  <div className="font-bold text-lg leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          
          {/* QR Code Placeholder Box */}
          <div className="w-48 h-48 bg-[#faf8f5] border-2 border-dashed border-[#8b5a2b]/30 rounded-2xl flex flex-col items-center justify-center shadow-sm">
            <span className="text-4xl mb-2">📱</span>
            <p className="text-xs font-bold text-stone-500 text-center px-4">Scan QR to<br/>download app</p>
          </div>
        </div>
      </section>

      {/* 8. DETAILED ZOMATO-INSPIRED FOOTER STRUCTURE */}
      <footer className="bg-[#110a08] text-white pt-16 pb-8 px-6 md:px-16 border-t border-stone-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Bitee Logo" className="w-8 h-8 object-contain" />
              <h2 className="text-4xl font-black tracking-tight lowercase">bitee</h2>
            </div>
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