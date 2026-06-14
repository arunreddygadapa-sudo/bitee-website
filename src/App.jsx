import React, { useState } from 'react';
import LandingPage from './LandingPage';
import PrivacyPolicy from './PrivacyPolicy';
import AdminDashboard from './AdminDashboard';

function App() {
  // We use state to switch pages without needing a complex router
  const [currentView, setCurrentView] = useState('home');

  return (
    <div>
      {currentView === 'home' && <LandingPage setView={setCurrentView} />}
      {currentView === 'privacy' && <PrivacyPolicy setView={setCurrentView} />}
      {currentView === 'admin' && (
        <div>
          {/* Add a back button above the admin dashboard */}
          <div className="bg-[#faf8f5] px-4 py-2 text-right">
             <button onClick={() => setCurrentView('home')} className="text-[#8b5a2b] text-sm font-bold hover:text-[#3e2723]">
               &larr; Exit Admin
             </button>
          </div>
          <AdminDashboard />
        </div>
      )}
    </div>
  );
}

export default App;