import React from "react";
import "../css/cardAtleta.css";

const CardAtleta = ({ atleta, adicionarFavorito }) => {
  return (
    <div className="card">
      <img src={atleta.image_path} alt={atleta.common_name} />
      <h3>{atleta.common_name}</h3>
      <button onClick={() => adicionarFavorito(atleta)}>
        Adicionar aos favoritos
      </button>
    </div>
  );
};

export default CardAtleta;
