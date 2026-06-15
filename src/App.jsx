import { useState } from 'react';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  const [view, setView] = useState('home');

  return (
    <>
      {view === 'home' && <LandingPage setView={setView} />}
      {view === 'about-us' && <AboutUs setView={setView} />}
      {view === 'privacy-policy' && <PrivacyPolicy setView={setView} />}
      {/* You can add more pages here later! */}
    </>
  );
}

export default App;