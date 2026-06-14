import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = ({ setView }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#3e2723]">
      
      {/* Simple Header */}
      <nav className="border-b border-stone-200 px-8 py-6 flex justify-between items-center bg-[#faf8f5]">
        <h1 className="text-3xl font-black tracking-tight lowercase">bitee</h1>
        <button onClick={() => setView('home')} className="text-[#8b5a2b] font-bold hover:text-[#3e2723] transition flex items-center gap-2">
          &larr; Back to Home
        </button>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 py-16"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-4">Privacy Policy</h1>
        <p className="text-[#8b5a2b] font-bold tracking-widest uppercase text-sm mb-12">Last Updated: June 15, 2026</p>

        <div className="space-y-8 text-lg leading-relaxed text-stone-700">
          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">1. Introduction</h2>
            <p>At Bitee, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">2. The Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-[#8b5a2b]">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes delivery address, email address and telephone numbers.</li>
              <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">3. How We Use Your Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you (e.g., delivering your food order). Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#3e2723] mb-4">5. Contact Details</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p className="font-bold text-[#8b5a2b] mt-2">Email: support@bitee.in</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;