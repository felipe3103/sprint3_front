import React from 'react';

const Impactos = () => {
  return (
    <div className="container">
      <h2>Impactos da Popularização:</h2>
      <div className="impacts-list">
        <div className="negative-impacts">
          <h3>Impactos Negativos:</h3>
          <ul>
            <li>Baixa adoção de tecnologias sustentáveis</li>
            <li>Menor investimento e patrocínio</li>
            <li>Pouca diversidade de público</li>
          </ul>
        </div>
        <div className="positive-impacts">
          <h3>Impactos Positivos:</h3>
          <ul>
            <li>Aumento da conscientização e interesse</li>
            <li>Maior engajamento dos fãs</li>
            <li>Promoção de tecnologias sustentáveis</li>
            <li>Aumento de investimento e patrocínio</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Impactos;