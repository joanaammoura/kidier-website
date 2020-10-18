import React from 'react';
import './ValueProposition.css';

function ValueProposition() {
  return (
    <div className="valueProposition">
      <div />
      <img src={require('../../resources/images/phone.svg')} alt="smartphone" />
      <img
        src={require('../../resources/images/calendar.svg')}
        alt="calendário"
      />
      <img src={require('../../resources/images/money.svg')} alt="dinheiro" />
      <img src={require('../../resources/images/rocket.svg')} alt="universo" />
      <div />
      <div />
      <h3>Simplifique</h3>
      <h3>Organize</h3>
      <h3>Poupe</h3>
      <h3>Experienciem</h3>
      <div />
      <div />
      <p>
        Todas as actividades estão aqui, é só filtrar por idade, data ou local
      </p>
      <p>
        Escolha os melhores horários para conciliar com o calendário da sua
        família
      </p>
      <p>
        Nós somos flexíveis, pode pausar e cancelar mensalmente, se precisar
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
