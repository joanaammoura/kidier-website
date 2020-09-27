import React from "react";
import "./Partner.css";

function Partner() {
  return (
    <div className="partner">
      <img
        src="https://estrelaseouricos.sapo.pt//backoffice/images/image_11142_1_1432900089.jpeg"
        alt="vertigo"
      />
      <div className="partner__info">
        <p className="partner__name">Vertigo</p>
        <p className="partner__address">
          <span>
            Edifício Beira Rio, Av. Infante Dom Henrique Fração S, 1950-408
            Lisboa
          </span>
          <span> • </span>
          <span>2 anos – 18 anos</span>
        </p>
      </div>
    </div>
  );
}

export default Partner;
