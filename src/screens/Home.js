import React from 'react';
import Hero from '../components/homeComponents/Hero';
import ValueProposition from '../components/homeComponents/ValueProposition';
import ActivitiesExplorer from '../components/activitiesExplorerComponents/ActivitiesExplorer';
import HowItWorks from '../components/homeComponents/HowItWorks';
import Pricing from '../components/homeComponents/Pricing';
import FAQs from '../components/homeComponents/FAQs';
import BecomePartner from '../components/homeComponents/BecomePartner';
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
      <div className="home__questions">Fique a par das novidades</div>
      <Footer />
    </div>
  );
}

export default Home;
