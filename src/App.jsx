import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// All of your existing pages
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import PrivacyPolicy from './PrivacyPolicy';
import Investments from './Investments';
import TermsOfService from './TermsOfService';
import PartnerIntegration from './PartnerIntegration';
import FleetRegistration from './FleetRegistration';
import CognisysCore from './CognisysCore';
import AdminLogin from './AdminLogin';
import TeamCore from './TeamCore';
import SecurityTerms from './SecurityTerms';
import MerchantGuidelines from './MerchantGuidelines';
import OperationsApp from './OperationsApp';
import TransitProtocols from './TransitProtocols';
import Support from './Support';

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. DYNAMIC SEO TITLES: Updates the browser tab automatically based on the URL
  useEffect(() => {
    const path = location.pathname;
    const pageTitles = {
      '/': 'Bitee | Premium Food Logistics Ecosystem',
      '/about-us': 'About Us | Bitee Corporate',
      '/investments': 'Investor Relations | Bitee',
      '/team-core': 'Team Core | Bitee Architects',
      '/cognisys-core': 'Cognisys IT Solutions | Bitee Infrastructure',
      '/partner-integration': 'Restaurant Partner Integration | Bitee',
      '/merchant-guidelines': 'Merchant Guidelines | Bitee',
      '/operations-app': 'Operations App | Bitee For Restaurants',
      '/fleet-registration': 'Fleet Registration | Bitee Drivers',
      '/transit-protocols': 'Transit Protocols | Bitee',
      '/privacy-policy': 'Privacy Policy | Bitee Legal',
      '/security-terms': 'Security Terms | Bitee',
      '/terms-of-service': 'Terms of Service | Bitee',
      '/support': 'Contact Support | Bitee Help Center',
      '/admin': 'Secure Admin Portal | Bitee'
    };

    document.title = pageTitles[path] || 'Bitee | Food Logistics Ecosystem';
  }, [location]);

  // 2. THE MAGIC WRAPPER: Translates your old setView logic into Real URLs
  const setView = (pageName) => {
    if (pageName === 'home') {
      navigate('/');
    } else {
      navigate(`/${pageName}`);
    }
  };

  // 3. THE ROUTES: Connects real URLs to your existing components without breaking them
  return (
    <Routes>
      <Route path="/" element={<LandingPage setView={setView} />} />
      <Route path="/about-us" element={<AboutUs setView={setView} />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy setView={setView} />} />
      <Route path="/investments" element={<Investments setView={setView} />} />
      <Route path="/terms-of-service" element={<TermsOfService setView={setView} />} />
      <Route path="/partner-integration" element={<PartnerIntegration setView={setView} />} />
      <Route path="/fleet-registration" element={<FleetRegistration setView={setView} />} />
      <Route path="/cognisys-core" element={<CognisysCore setView={setView} />} />
      <Route path="/admin" element={<AdminLogin setView={setView} />} />
      <Route path="/team-core" element={<TeamCore setView={setView} />} />
      <Route path="/security-terms" element={<SecurityTerms setView={setView} />} />
      <Route path="/merchant-guidelines" element={<MerchantGuidelines setView={setView} />} />
      <Route path="/operations-app" element={<OperationsApp setView={setView} />} />
      <Route path="/transit-protocols" element={<TransitProtocols setView={setView} />} />
      <Route path="/support" element={<Support setView={setView} />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;