import React from "react";
import "./ValueProposition.css";

function ValueProposition() {
  return (
    <div className="valueProposition">
      <div className="valueProposition__row">
        <h3>Simplifica</h3>
        <h3>Organiza</h3>
        <h3>Poupa</h3>
        <h3>Experiencia</h3>
      </div>
      <div className="valueProposition__row">
        <img src={require("../resources/images/phone.svg")} alt="smartphone" />
        <img
          src={require("../resources/images/calendar.svg")}
          alt="calendário"
        />
        <img src={require("../resources/images/money.svg")} alt="dinheiro" />
        <img src={require("../resources/images/rocket.svg")} alt="universo" />
      </div>
      <div className="valueProposition__row">
        <p>
          Todas as actividades estão aqui, é só filtrar por idade, data, local e
          voilá!
        </p>
        <p>
          Os melhores horários para conciliar com o vosso calendário de família
        </p>
        <p>Nós somos flexíveis, pode pausar e cancelar mensalmente</p>
        <p>
          Experimentem as actividades que quiserem, um mundo de magia está à
          vossa espera!
        </p>
      </div>
      <div className="valueProposition__row"></div>
      <div className="valueProposition__row"></div>
    </div>
  );
}

export default ValueProposition;
