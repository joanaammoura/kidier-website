import React from "react";
import { darkBlue, pink } from "../resources/colors";
import "./Hero.css";
import Typing from "react-typing-animation";
import ReactTypingEffect from "react-typing-effect";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__textContainer" style={{ color: `${darkBlue}` }}>
        <span className="hero__title">Vamos</span>
        <div className="hero__animatedTitle" style={{ color: `${pink}` }}>
          <ReactTypingEffect
            text={[
              "à natação",
              "ao futebol",
              "ao ballet",
              "ao karaté",
              "a um concerto",
            ]}
            typingDelay={500}
            speed={100}
            eraseDelay={1000}
            cursor={" "}
          />
        </div>
        <div className="hero__subtitleContainer">
          <h2 className="hero__subtitle">
            <span>Uma só subscrição que dá acesso</span>
            <br />
            <span>a todas as actividades para crianças.</span>
          </h2>
        </div>
        <div className="hero__buttonsContainer">
          <button className="hero__button">Explorar Actividades</button>
          <button className="hero__button">Inscreve-te agora!</button>
        </div>
      </div>

      <img
        className="hero__image"
        src={require("../resources/images/hero.svg")}
        alt="kidier presentation"
      />
    </div>
  );
}

export default Hero;
