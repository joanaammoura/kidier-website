import React from 'react';
import './StayTuned.css';

function StayTuned() {
  return (
    <div className="stayTuned">
      <img
        className="stayTuned__image"
        src={require('../../resources/images/love_letter.svg')}
        alt="partners activities"
      />
      <div className="stayTuned__container">
        <h1>Fique atento</h1>
        <p>
          Novos locais, tipos de actividades, eventos e ofertas exclusivas - com
          a nossa newsletter não perderá nenhuma novidade da Kidier!
        </p>
        <div className="stayTuned__buttonContainer">
          <p className="stayTuned__button">Subscreva</p>
        </div>
      </div>
    </div>
  );
}

export default StayTuned;
