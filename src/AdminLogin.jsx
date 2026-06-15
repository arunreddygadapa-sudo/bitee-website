import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AdminLogin = ({ setView }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#110a08] font-sans flex flex-col selection:bg-[#f5deb3] selection:text-[#110a08]">
      
      {/* SECURE NAVIGATION */}
      <nav className="flex justify-between items-center w-full px-6 md:px-12 py-6 absolute top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Bitee Logo" width="32" height="32" className="w-8 h-8 object-contain brightness-0 invert opacity-50" />
          <span className="text-[10px] text-stone-500 font-mono tracking-widest uppercase border border-stone-800 px-3 py-1 rounded-md">
            Internal Secure Network
          </span>
        </div>
        <button 
          onClick={() => setView('home')}
          className="text-[10px] font-black tracking-widest uppercase text-stone-500 hover:text-white transition-colors flex items-center gap-2"
        >
          <span className="text-sm mb-0.5">←</span> Terminate Session
        </button>
      </nav>

      {/* LOGIN TERMINAL */}
      <main className="flex-1 w-full flex items-center justify-center px-6 relative z-10">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8b5a2b]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-[#1a100c] p-10 md:p-12 rounded-[2rem] border border-[#271816] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative z-20"
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-[#110a08] border border-stone-800 rounded-2xl flex items-center justify-center shadow-inner">
               <span className="text-3xl">🔐</span>
            </div>
          </div>
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-white tracking-tighter mb-2">Web Core Auth</h1>
            <p className="text-stone-500 text-sm font-medium">Enter your administrative credentials to access the internal dashboard.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest uppercase text-stone-400 ml-1">Admin ID</label>
              <input 
                type="text" 
                placeholder="admin@cognisys.in"
                className="w-full bg-[#110a08] border border-stone-800 text-white px-5 py-4 rounded-xl outline-none focus:border-[#8b5a2b] transition-colors placeholder-stone-700 font-medium"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest uppercase text-stone-400 ml-1">Encryption Key</label>
              <input 
                type="password" 
                placeholder="••••••••••••"
                className="w-full bg-[#110a08] border border-stone-800 text-white px-5 py-4 rounded-xl outline-none focus:border-[#8b5a2b] transition-colors placeholder-stone-700 font-medium"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#f5deb3] text-[#110a08] py-4 rounded-xl font-black text-sm shadow-md hover:bg-white transition-all transform hover:-translate-y-0.5 tracking-widest uppercase mt-4"
            >
              Authenticate
            </button>
          </form>

          <div className="mt-8 text-center border-t border-stone-800/50 pt-6">
            <p className="text-[10px] text-stone-600 font-mono">
              Unrecognized routing access is strictly prohibited and logged by system security.
            </p>
          </div>
        </motion.div>
      </main>

    </div>
  );
};

export default AdminLogin;