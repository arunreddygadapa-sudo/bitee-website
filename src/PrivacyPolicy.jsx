import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-stone-800 py-20 px-4">
      <motion.div 
        className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-stone-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="/" className="text-[#8b5a2b] font-bold text-sm mb-8 inline-block hover:text-[#3e2723] transition">&larr; Back to Home</a>
        
        <h1 className="text-4xl font-black text-[#3e2723] mb-4">Privacy Policy</h1>
        <p className="text-stone-500 mb-12 border-b border-stone-100 pb-8">Last updated: June 14, 2026</p>

        <div className="space-y-10 text-stone-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">1. Introduction</h2>
            <p>
              Welcome to the Bitee ecosystem. This Privacy Policy outlines how your personal data is collected, used, and protected when you use our mobile application and web services. Bitee is developed and operated by Cognisys IT Solutions. By using our platform, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Data:</strong> Email address, first name and last name, phone number, and physical address for delivery logistics.</li>
              <li><strong>Usage Data:</strong> We automatically collect data regarding how the service is accessed, including IP addresses, browser types, and interaction metrics to improve your ordering experience.</li>
              <li><strong>Location Data:</strong> To facilitate seamless food tracking and restaurant discovery, we utilize GPS data while the app is actively running.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">3. How We Use Your Data</h2>
            <p>Cognisys IT Solutions utilizes the collected data for various purposes within the Bitee ecosystem:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>To provide and maintain the delivery tracking service.</li>
              <li>To notify you about changes to our corporate supply offerings or consumer app updates.</li>
              <li>To provide customer support and process Bitee Premium subscription payments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">4. Data Security</h2>
            <p>
              The security of your data is important to us. We utilize industry-standard encryption protocols to protect your payment information and order history. However, remember that no method of transmission over the Internet is 100% secure.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;