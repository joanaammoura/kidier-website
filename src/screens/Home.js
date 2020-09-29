import React from "react";
import Hero from "../components/Hero";
import ValueProposition from "../components/ValueProposition";
import ActivitiesExplorer from "../components/ActivitiesExplorer";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <ValueProposition />
      <ActivitiesExplorer />
      <HowItWorks />
      <Pricing />
      <div className="home__questions">Questões</div>
      <div className="home__questions">Torne-se nosso Parceiro</div>
      <div className="home__questions">Fique a par das novidades</div>
      <Footer />
    </div>
  );
}

export default Home;
