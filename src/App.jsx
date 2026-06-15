import { useState } from 'react';
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

// 1. ADD THE SUPPORT IMPORT
import Support from './Support';

function App() {
  const [view, setView] = useState('home');

  return (
    <>
      {view === 'home' && <LandingPage setView={setView} />}
      
      {/* Corporate */}
      {view === 'about-us' && <AboutUs setView={setView} />}
      {view === 'investments' && <Investments setView={setView} />}
      {view === 'team-core' && <TeamCore setView={setView} />}
      {view === 'cognisys-core' && <CognisysCore setView={setView} />}
      
      {/* For Restaurants */}
      {view === 'partner-integration' && <PartnerIntegration setView={setView} />}
      {view === 'merchant-guidelines' && <MerchantGuidelines setView={setView} />}
      {view === 'operations-app' && <OperationsApp setView={setView} />}
      
      {/* For Drivers */}
      {view === 'fleet-registration' && <FleetRegistration setView={setView} />}
      {view === 'transit-protocols' && <TransitProtocols setView={setView} />}

      {/* Legal Ledger */}
      {view === 'privacy-policy' && <PrivacyPolicy setView={setView} />}
      {view === 'security-terms' && <SecurityTerms setView={setView} />}
      {view === 'terms-of-service' && <TermsOfService setView={setView} />}
      
      {/* Admin & Support */}
      {view === 'admin' && <AdminLogin setView={setView} />}
      
      {/* 2. ADD THE SUPPORT ROUTE */}
      {view === 'support' && <Support setView={setView} />}
    </>
  );
}

export default App;