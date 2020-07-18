import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";
//import backgroundImage from "./assets/background.jpg";

import Header from "./components/Header";

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);

  // useState retorna um array de 2 posições
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []); //Com o ultimo parametro [] o useEffect executa a chamada apenas uma vez

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      {/*<img width={300} src={backgroundImage} />*/}

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
