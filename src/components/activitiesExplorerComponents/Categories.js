import React from 'react';
import './Categories.css';

function Categories() {
  return (
    <div className="categories">
      <div className="categories__buttons">
        <button className="categories__button">
          <img
            className="categories__buttonImage"
            src={require('../../resources/images/icon_sports_tennis.svg')}
            alt="raquete de ténis"
          />
          Desportos
        </button>
        <button className="categories__button">
          <img
            className="categories__buttonImage"
            src={require('../../resources/images/icon_color_lens.svg')}
            alt="palete de cores"
          />
          Aulas e Workshops
        </button>
        <button className="categories__button">
          <img
            className="categories__buttonImage"
            src={require('../../resources/images/icon_celebration.svg')}
            alt="celebração"
          />
          Eventos
        </button>
      </div>
    </div>
  );
}

export default Categories;
