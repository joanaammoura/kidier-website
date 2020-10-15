import React from "react";
import "./Partner.css";

function Partner({ image, name, address, ages }) {
  return (
    <div className="partner">
      <img src={image} alt={name} />
      <div className="partner__info">
        <p className="partner__name">{name}</p>
        <p className="partner__address">
          <span>{address}}</span>
          <span> • </span>
          <span>{ages}</span>
        </p>
      </div>
    </div>
  );
}

export default Partner;
