import React from "react";
import { darkBlue } from "../resources/colors";
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return (
    <div className="header" style={{ color: `${darkBlue}` }}>
      <img
        className="header__logo"
        src={require("../resources/images/logo_large.svg")}
        alt="kidier logo"
      />

      <div className="header__nav header__center">
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

      <div className="header__nav header__right">
        <div className="header__partners">
          <p>Torne-se Parceiro</p>
        </div>
        <div className="header__login">
          <p className="header__loginOption">Entrar</p>
          <AccountCircleIcon  className="header__loginIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
