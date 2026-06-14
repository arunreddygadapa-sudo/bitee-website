import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BiteeLandingPage from './BiteeLandingPage';
import AdminDashboard from './AdminDashboard';
import PrivacyPolicy from './PrivacyPolicy';
import HelpSupport from './HelpSupport';
import RestaurantMenu from './RestaurantMenu'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BiteeLandingPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<HelpSupport />} />
        {/* Add the new restaurant route */}
        <Route path="/restaurant/mana-vividha-ruchulu" element={<RestaurantMenu />} />
      </Routes>
    </Router>
  );
}

export default App;