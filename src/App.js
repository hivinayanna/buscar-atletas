import React, { useState } from "react";
import { fetchAthletes } from "./utils/api";
import CardAtleta from "./components/CardAtleta";
import PainelFavoritos from "./components/PainelFavoritos";
import "./css/App.css";

function App() {
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [nomeAtleta, setNomeAtleta] = useState("");

  const buscarAtletas = async () => {
    const playersArray = await fetchAthletes(nomeAtleta);
    setAtletas(playersArray);
  };

  const adicionarFavorito = (atleta) => {
    setFavoritos((prev) => [...prev, atleta]);
  };

  const removerFavorito = (atleta) => {
    setFavoritos((prev) => prev.filter((item) => item !== atleta));
  };

  const arr = atletas.length > 10 ? atletas.slice(0, 10) : atletas;

  return (
    <div className="App">
      <h1>Pesquisa de Atletas</h1>
      <div className="input-container">
        <input
          className="search-input"
          type="text"
          value={nomeAtleta}
          onChange={(e) => setNomeAtleta(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscarAtletas()}
          placeholder="Nome do atleta"
        />
        <button className="search-button" onClick={buscarAtletas}>
          <img src="/search.svg" alt="search" className="search-icon" />
        </button>
      </div>
      <div className="athlete-list">
        {atletas.length > 0 &&
          arr.map((atleta, index) => (
            <CardAtleta
              key={index}
              atleta={atleta}
              adicionarFavorito={adicionarFavorito}
            />
          ))}
      </div>
      <PainelFavoritos
        favoritos={favoritos}
        removerFavorito={removerFavorito}
      />
    </div>
  );
}

export default App;
