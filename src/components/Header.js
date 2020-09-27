import React from "react";
import { darkBlue, pink } from "../resources/colors";
import "./Header.css";

function Header() {
  return (
    <div className="header" style={{ color: `${darkBlue}` }}>
      <img
        className="header__logo"
        src={require("../resources/images/logo_large.svg")}
        alt="kidier logo"
      />

      <div className="header__nav">
        <div className="header__option">
          <p>Actividades</p>
        </div>
        <div className="header__option">
          <p>Como Funciona</p>
        </div>
        <div className="header__option">
          <p>Preços</p>
        </div>
        <div className="header__nav2 header__option">
          <p>Torne-se Parceiro</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
