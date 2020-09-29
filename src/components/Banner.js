import React from "react";
import { darkBlue, pink } from "../resources/colors";
import "./Banner.css";
import Typing from "react-typing-animation";
import { StraightenOutlined } from "@material-ui/icons";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__textContainer" style={{ color: `${darkBlue}` }}>
        <span className="banner__title">Vamos</span>
        <div className="banner__animatedTitle" style={{ color: `${pink}` }}>
          <Typing speed={80} hideCursor="true" loop="true">
            <span>à natação</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={10} />
            <span>ao futebol</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={11} />
            <span>ao ballet</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={10} />
            <span>ao karaté</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={10} />
            <span>a um concerto</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={14} />
          </Typing>
        </div>
        <div className="banner__subtitleContainer">
          <h2 className="banner__subtitle">
            <span>Uma só subscrição que dá acesso</span>
            <br />
            <span>a todas as actividades para crianças.</span>
          </h2>
        </div>
      </div>

      <img
        className="banner__image"
        src={require("../resources/images/banner.svg")}
        alt="kidier presentation"
      />
    </div>
  );
}

export default Banner;
