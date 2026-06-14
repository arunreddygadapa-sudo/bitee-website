import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = ({ setView }) => {
  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-[#3e2723] flex flex-col">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
        <h1 className="text-4xl font-black tracking-tight lowercase text-[#3e2723]">bitee</h1>
        <button 
          onClick={() => window.location.href = "mailto:support@bitee.in"}
          className="bg-[#8b5a2b] text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-[#704822] transition"
        >
          Contact Us
        </button>
      </nav>

      {/* Hero Section with Animations */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-6 text-[#3e2723]"
        >
          Delicious food, <br/><span className="text-[#8b5a2b]">delivered instantly.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-[#704822] max-w-2xl mb-16 font-medium"
        >
          Experience the fastest delivery and the best tastes in town. From our restaurant partners straight to your door.
        </motion.p>

        {/* Animations Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-4xl">
          
          {/* Animation 1: Food Delivering (Scooter sliding in) */}
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.2, duration: 1.5 }}
              className="bg-white p-8 rounded-full shadow-lg border-2 border-[#8b5a2b]/20 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#8b5a2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </motion.div>
            <p className="font-bold text-[#8b5a2b] uppercase tracking-widest text-sm">Lightning Delivery</p>
          </div>

          {/* Animation 2: Customer taking food (Food popping up) */}
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1, duration: 0.8 }}
              className="bg-white p-8 rounded-full shadow-lg border-2 border-[#8b5a2b]/20 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#8b5a2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.01-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </motion.div>
            <p className="font-bold text-[#8b5a2b] uppercase tracking-widest text-sm">Fresh & Hot</p>
          </div>

        </div>
      </main>

      {/* Detailed Footer (Based on Zomato Screenshot Structure) */}
      <footer className="bg-[#1a100c] text-white pt-16 pb-8 px-8 md:px-16 mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tight lowercase mb-10">bitee</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-[#f5deb3]">About Bitee</h3>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Who We Are</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Report Fraud</a></li>
              </ul>
            </div>
            
            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-[#f5deb3]">For Restaurants</h3>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition">Apps For You</a></li>
                <li><a href="#" className="hover:text-white transition">Restaurant Consulting</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-[#f5deb3]">For Partners</h3>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Deliver With Us</a></li>
                <li><a href="#" className="hover:text-white transition">Partner App</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-[#f5deb3]">Learn More</h3>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li><button onClick={() => setView('privacy')} className="hover:text-white transition">Privacy Policy</button></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wider text-[#f5deb3]">Social Links</h3>
              <div className="flex gap-4 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1a100c] font-bold">in</div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1a100c] font-bold">ig</div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1a100c] font-bold">x</div>
              </div>
              <div className="space-y-3">
                <button className="w-full border border-stone-600 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-white hover:text-[#1a100c] transition">
                  Apple Store
                </button>
                <button className="w-full border border-stone-600 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-white hover:text-[#1a100c] transition">
                  Google Play
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, and Privacy Policy. All rights reserved.</p>
            <p className="mt-4 md:mt-0">© 2026 Bitee™ Ltd.</p>
          </div>
          
          {/* Small Admin Link */}
          <div className="flex justify-end mt-4">
             <button onClick={() => setView('admin')} className="text-[#3e2723] hover:text-[#8b5a2b] transition text-xs font-bold uppercase tracking-widest bg-stone-900 px-3 py-1 rounded">
               Admin Portal
             </button>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default LandingPage;