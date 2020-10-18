import React from 'react';
import Hero from '../components/homeComponents/Hero';
import ValueProposition from '../components/homeComponents/ValueProposition';
import ActivitiesExplorer from '../components/activitiesExplorerComponents/ActivitiesExplorer';
import HowItWorks from '../components/homeComponents/HowItWorks';
import Pricing from '../components/homeComponents/Pricing';
import FAQs from '../components/homeComponents/FAQs';
import BecomePartner from '../components/homeComponents/BecomePartner';
import StayTuned from '../components/homeComponents/StayTuned';
import Footer from '../components/homeComponents/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <ValueProposition />
      <ActivitiesExplorer />
      <HowItWorks />
      <Pricing />
      <FAQs />
      <BecomePartner />
      <StayTuned />
      <Footer />
    </div>
  );
}

export default Home;
