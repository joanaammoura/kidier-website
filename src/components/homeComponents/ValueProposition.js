import React from 'react';
import './ValueProposition.css';

function ValueProposition() {
  return (
    <div className="valueProposition">
      <div />
      <img src={require('../resources/images/phone.svg')} alt="smartphone" />
      <img src={require('../resources/images/calendar.svg')} alt="calendário" />
      <img src={require('../resources/images/money.svg')} alt="dinheiro" />
      <img src={require('../resources/images/rocket.svg')} alt="universo" />
      <div />
      <div />
      <h3>Simplifica</h3>
      <h3>Organiza</h3>
      <h3>Poupa</h3>
      <h3>Experiencia</h3>
      <div />
      <div />
      <p>
        Todas as actividades estão aqui, é só filtrar por idade, data ou local
      </p>
      <p>
        Escolhe os melhores horários para conciliar com o calendário da vossa
        família
      </p>
      <p>
        Nós somos flexíveis, podes pausar e cancelar mensalmente, se precisares
      </p>
      <p>
        Experimentem as actividades que quiserem, um mundo de magia está à vossa
        espera!
      </p>
      <div />
    </div>
  );
}

export default ValueProposition;
