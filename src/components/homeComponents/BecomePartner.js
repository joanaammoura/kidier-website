import React from 'react';
import './BecomePartner.css';

function BecomePartner() {
  return (
    <div className="becomePartner">
      <div className="becomePartner__container">
        <h1>Torne-se nosso Parceiro</h1>
        <p>
          Nas nossas parcerias com prestadores de actividades para crianças
          ambos os lados ganham. Gostaria de saber como se pode tornar um dos
          nossos parceiros?
        </p>
        <div className="becomePartner__buttonContainer">
          <p className="becomePartner__button">Descobrir Mais</p>
        </div>
      </div>
      <img
        className="becomePartner__image"
        src={require('../../resources/images/partners_img.svg')}
        alt="partners activities"
      />
    </div>
  );
}

export default BecomePartner;
