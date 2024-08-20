import React from "react";

const PainelFavoritos = ({ favoritos, removerFavorito }) => {
  return (
    <div>
      <h2>Atletas Favoritos</h2>
      <div className="favorites-panel">
        {favoritos.map((atleta, index) => (
          <div className="card" key={index}>
            <img src={atleta.image_path} alt={atleta.common_name} />
            <h3>{atleta.common_name}</h3>
            <button onClick={() => removerFavorito(atleta)}>
              Remover dos favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainelFavoritos;
