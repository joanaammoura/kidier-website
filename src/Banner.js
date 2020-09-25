import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__textContainer">
        <span className="banner__title">Vamos</span>
        <span className="banner__animatedTitle">à natação</span>
        <h2 className="banner__subtitle">
          Uma só subscrição que dá acesso a todas as actividades para crianças.
        </h2>
      </div>
      <img
        className="banner__image"
        src={require("./images/banner.svg")}
        alt="kidier presentation"
      />
      {/* <div className="banner_emptyContainer">
        <span />
      </div> */}
    </div>
  );
}

export default Banner;
