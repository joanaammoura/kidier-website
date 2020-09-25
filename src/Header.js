import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={require("./images/logo_large.svg")}
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
      </div>
      <div className="header__nav2 header__option">
        <p>Torne-se Parceiro</p>
      </div>
    </div>
  );
}

export default Header;
