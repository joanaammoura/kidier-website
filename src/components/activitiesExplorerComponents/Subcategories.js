import React from "react";
import "./Subcategories.css";

function Subcategories() {
  return (
    <div className="subcategories">
      <div className="subcategories__sports">
        <button>Aquáticos</button>
        <button>Aventura</button>
        <button>
          <span>Dança</span>
          <br />
          <span>Artes Marciais</span>
        </button>
        <button>
          <span>Desportos de Equipa</span>
          <br />
          <span>Desportos com Raquete</span>
        </button>
        <button>
          <span>Ginástica</span>
          <br />
          <span>Exercício</span>
        </button>
        <button>
          <span>Yoga</span>
          <br />
          <span>Meditação</span>
        </button>
      </div>
    </div>
  );
}

export default Subcategories;
