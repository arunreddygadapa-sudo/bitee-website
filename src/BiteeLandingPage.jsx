import React from 'react';
import { motion } from 'framer-motion';

const BiteeLandingPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex h-[80vh] flex-col items-center justify-center bg-[#3e2723] text-white text-center">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <motion.div 
          className="relative z-10 space-y-6 px-4 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-7xl font-black tracking-tight lowercase">bitee</motion.h1>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold md:text-5xl tracking-tight">
            India's #1 food delivery ecosystem
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-stone-200 max-w-xl mx-auto font-light">
            Experience fast & easy online ordering on the Bitee mobile app.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-black transition hover:bg-stone-100 shadow-md transform hover:-translate-y-0.5">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.981 1.981 0 0 1-.502-1.31V3.124c0-.505.178-.973.501-1.31zM14.806 11l5.06-2.923c1.512-.873 1.512-2.28 0-3.153L16.27 2.85 5.093 9.314l9.713 1.686zm.002 2l-9.715 1.685 11.176 6.463 3.596-2.074c1.512-.873 1.512-2.28 0-3.153l-5.057-2.921z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 leading-none">Get it on</div>
                <div className="text-base font-extrabold leading-tight">Google Play</div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-black transition hover:bg-stone-100 shadow-md transform hover:-translate-y-0.5">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 21.434c-1.393.99-2.825.99-4.227.022-1.152-.796-2.286-1.57-3.468-2.327-1.16-.745-2.29-1.46-3.69-1.954-2.83-1.002-4.502-3.116-4.908-6.108-.415-3.064.914-5.69 3.32-7.42 2.046-1.47 4.316-1.74 6.74-.752 1.096.447 2.144.978 3.25 1.39 1.63.606 3.25.59 4.85-.05 1.58-.633 2.928-1.58 4.095-2.85.126 1.48-.168 2.85-.925 4.1-.734 1.21-1.74 2.13-2.99 2.76.77-.18 1.53-.45 2.27-.78-1.22 1.62-2.65 2.87-4.32 3.79zM15.42 6.8c-.035-1.54.49-2.88 1.39-4.04 1.01-1.3 2.34-2.02 3.96-2.14.07 1.6-.43 3.03-1.4 4.25-1.05 1.31-2.4 2.04-4.05 2.13-.01-.06-.02-.13-.02-.2z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 leading-none">Download on the</div>
                <div className="text-base font-extrabold leading-tight">App Store</div>
              </div>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Bitee Premium Section */}
      <motion.section 
        className="bg-[#2d1b15] py-20 text-center text-[#f5deb3]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3 variants={fadeInUp} className="text-4xl font-black tracking-widest uppercase mb-2">bitee PREMIUM</motion.h3>
          <motion.p variants={fadeInUp} className="text-lg mb-12 text-stone-300 font-medium tracking-wide">India's Top Savings Program for Food Lovers</motion.p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <motion.div variants={fadeInUp} className="flex items-center gap-5 bg-[#3e2723] p-6 rounded-2xl w-full md:w-1/2 border border-[#4e342e] shadow-lg">
              <div className="h-14 w-14 bg-[#8b5a2b] text-[#f5deb3] rounded-xl flex-shrink-0 flex items-center justify-center shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-xl text-white">Free Delivery</h4>
                <p className="text-sm text-stone-300 mt-0.5">At all restaurants within 7 km</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-5 bg-[#3e2723] p-6 rounded-2xl w-full md:w-1/2 border border-[#4e342e] shadow-lg">
              <div className="h-14 w-14 bg-[#8b5a2b] text-[#f5deb3] rounded-xl flex-shrink-0 flex items-center justify-center shadow-inner">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-xl text-white">Up to 30% extra off</h4>
                <p className="text-sm text-stone-300 mt-0.5">At 20,000+ partner restaurants</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ecosystem Section */}
      <motion.section 
        className="py-24 px-4 bg-[#faf8f5]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="text-center mb-16">
          <motion.h3 variants={fadeInUp} className="text-4xl font-black text-[#3e2723] tracking-tight">bitee ecosystem</motion.h3>
          <motion.p variants={fadeInUp} className="text-stone-500 font-medium mt-2 text-lg">Powering India's Changing Lifestyles</motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'Delivery', desc: 'Get your favorite meals brought straight to your doorstep instantly.', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
            { name: 'Grocery', desc: 'Fresh ingredients and daily essentials delivered in under ten minutes.', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
            { name: 'Dine-Out', desc: 'Discover premier local fine-dining setups and enjoy cashless payments.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
            { name: 'B2B Supplies', desc: 'High-quality restaurant wholesale inventory and supply chains solved.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' }
          ].map((service, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200/60 text-center hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-16 w-16 bg-[#3e2723]/5 text-[#3e2723] rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#3e2723] group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#3e2723] mb-3">{service.name}</h4>
                <p className="text-sm text-stone-500 leading-relaxed mb-6">{service.desc}</p>
              </div>
              <a href="/restaurant/mana-vividha-ruchulu" className="text-[#8b5a2b] font-bold tracking-wide hover:text-[#3e2723] inline-flex items-center justify-center gap-1 transition-colors">
                Check it out <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Download App Section */}
      <motion.section 
        className="py-24 px-4 bg-white flex flex-col md:flex-row items-center justify-center gap-16 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center md:text-left space-y-6 max-w-md">
          <h3 className="text-4xl font-black text-[#3e2723] tracking-tight">Download the app now!</h3>
          <p className="text-lg text-stone-600 leading-relaxed">
            Experience seamless corporate supply updates, lightning-fast food tracking, and exclusive discounts right inside the Bitee app.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="flex items-center gap-3 rounded-xl bg-black px-5 py-2.5 text-white transition hover:bg-stone-900 shadow-md">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.981 1.981 0 0 1-.502-1.31V3.124c0-.505.178-.973.501-1.31zM14.806 11l5.06-2.923c1.512-.873 1.512-2.28 0-3.153L16.27 2.85 5.093 9.314l9.713 1.686zm.002 2l-9.715 1.685 11.176 6.463 3.596-2.074c1.512-.873 1.512-2.28 0-3.153l-5.057-2.921z"/>
              </svg>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold text-stone-400 leading-none">Get it on</div>
                <div className="text-sm font-bold leading-tight">Google Play</div>
              </div>
            </button>
            <button className="flex items-center gap-3 rounded-xl bg-black px-5 py-2.5 text-white transition hover:bg-stone-900 shadow-md">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.365 21.434c-1.393.99-2.825.99-4.227.022-1.152-.796-2.286-1.57-3.468-2.327-1.16-.745-2.29-1.46-3.69-1.954-2.83-1.002-4.502-3.116-4.908-6.108-.415-3.064.914-5.69 3.32-7.42 2.046-1.47 4.316-1.74 6.74-.752 1.096.447 2.144.978 3.25 1.39 1.63.606 3.25.59 4.85-.05 1.58-.633 2.928-1.58 4.095-2.85.126 1.48-.168 2.85-.925 4.1-.734 1.21-1.74 2.13-2.99 2.76.77-.18 1.53-.45 2.27-.78-1.22 1.62-2.65 2.87-4.32 3.79zM15.42 6.8c-.035-1.54.49-2.88 1.39-4.04 1.01-1.3 2.34-2.02 3.96-2.14.07 1.6-.43 3.03-1.4 4.25-1.05 1.31-2.4 2.04-4.05 2.13-.01-.06-.02-.13-.02-.2z" />
              </svg>
              <div className="text-left">
                <div className="text-[9px] uppercase font-bold text-stone-400 leading-none">Download on the</div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </button>
          </div>
        </motion.div>
        
        {/* Updated SVG representation of a QR Code block */}
        <motion.div variants={fadeInUp} className="border border-stone-200 p-5 rounded-3xl shadow-md bg-stone-50/50 text-center flex flex-col items-center">
          <div className="w-44 h-44 bg-white p-4 rounded-2xl shadow-inner border border-stone-100 flex items-center justify-center mb-3">
             <svg viewBox="0 0 24 24" fill="none" stroke="#3e2723" strokeWidth="1" className="w-full h-full opacity-60">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h2v3h-2v-3zm3-3h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v3h-3v-3z" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="5.5" y="5.5" width="3" height="3" />
                <rect x="15.5" y="5.5" width="3" height="3" />
                <rect x="5.5" y="15.5" width="3" height="3" />
             </svg>
          </div>
          <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">Scan to download app</p>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tight lowercase">bitee</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 border-b border-stone-900 pb-16 text-sm">
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-stone-400 tracking-wider uppercase text-xs mb-2">For Restaurants</h4>
              <a href="#" className="text-stone-300 hover:text-white transition">Partner With Us</a>
              <a href="#" className="text-stone-300 hover:text-white transition">Apps For You</a>
              <a href="#" className="text-stone-300 hover:text-white transition">Restaurant Consulting</a>
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-stone-400 tracking-wider uppercase text-xs mb-2">For Delivery Partners</h4>
              <a href="#" className="text-stone-300 hover:text-white transition">Partner With Us</a>
              <a href="#" className="text-stone-300 hover:text-white transition">Apps For You</a>
            </div>
            <div className="flex flex-col space-y-3">
              <h4 className="font-bold text-stone-400 tracking-wider uppercase text-xs mb-2">Learn More</h4>
              <a href="/privacy" className="text-stone-300 hover:text-white transition">Privacy</a>
              <a href="/security" className="text-stone-300 hover:text-white transition">Security</a>
              <a href="/terms" className="text-stone-300 hover:text-white transition">Terms of Service</a>
              <a href="/support" className="text-stone-300 hover:text-white transition">Help & Support</a>
              <a href="/report" className="text-stone-300 hover:text-white transition">Report a Fraud</a>
              <a href="/blog" className="text-stone-300 hover:text-white transition">Blog</a>
            </div>
            <div className="col-span-2 lg:col-span-2 flex flex-col space-y-8">
              <div>
                <h4 className="font-bold text-stone-400 tracking-wider uppercase text-xs mb-4">Social Links</h4>
                <div className="flex gap-3">
                  {['in', 'ig', 'yt', 'fb', 'x'].map((icon) => (
                    <div key={icon} className="h-9 w-9 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center text-white text-sm font-semibold cursor-pointer hover:bg-white hover:text-black transition-all duration-200">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 max-w-[200px]">
                <button className="flex items-center gap-3 rounded-xl border border-stone-800 bg-stone-950 px-4 py-2 hover:bg-stone-900 transition text-left">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.365 21.434c-1.393.99-2.825.99-4.227.022-1.152-.796-2.286-1.57-3.468-2.327-1.16-.745-2.29-1.46-3.69-1.954-2.83-1.002-4.502-3.116-4.908-6.108-.415-3.064.914-5.69 3.32-7.42 2.046-1.47 4.316-1.74 6.74-.752 1.096.447 2.144.978 3.25 1.39 1.63.606 3.25.59 4.85-.05 1.58-.633 2.928-1.58 4.095-2.85.126 1.48-.168 2.85-.925 4.1-.734 1.21-1.74 2.13-2.99 2.76.77-.18 1.53-.45 2.27-.78-1.22 1.62-2.65 2.87-4.32 3.79zM15.42 6.8c-.035-1.54.49-2.88 1.39-4.04 1.01-1.3 2.34-2.02 3.96-2.14.07 1.6-.43 3.03-1.4 4.25-1.05 1.31-2.4 2.04-4.05 2.13-.01-.06-.02-.13-.02-.2z" />
                  </svg>
                  <div>
                    <div className="text-[9px] uppercase text-stone-400 leading-none">Download on the</div>
                    <div className="text-sm font-bold text-white leading-tight">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 rounded-xl border border-stone-800 bg-stone-950 px-4 py-2 hover:bg-stone-900 transition text-left">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.981 1.981 0 0 1-.502-1.31V3.124c0-.505.178-.973.501-1.31zM14.806 11l5.06-2.923c1.512-.873 1.512-2.28 0-3.153L16.27 2.85 5.093 9.314l9.713 1.686zm.002 2l-9.715 1.685 11.176 6.463 3.596-2.074c1.512-.873 1.512-2.28 0-3.153l-5.057-2.921z"/>
                  </svg>
                  <div>
                    <div className="text-[9px] uppercase text-stone-400 leading-none">GET IT ON</div>
                    <div className="text-sm font-bold text-white leading-tight">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-500 leading-relaxed">
            <p className="max-w-3xl text-center md:text-left">
              By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2026 © Bitee Ltd. All rights reserved.
            </p>
            <div className="flex-shrink-0">
               <a href="/admin-dashboard" className="bg-[#3e2723] text-stone-200 px-4 py-2.5 rounded-xl shadow-sm hover:bg-[#5c3a34] hover:text-white transition flex items-center gap-2 font-semibold border border-[#5c3a34]/40 tracking-wide text-xs">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 Admin Portal
               </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BiteeLandingPage;