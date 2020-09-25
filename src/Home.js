import React from "react";
import Banner from "./Banner";
import ValueProposition from "./ValueProposition";
import ActivitiesExplorer from "./ActivitiesExplorer";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Footer from "./Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
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
