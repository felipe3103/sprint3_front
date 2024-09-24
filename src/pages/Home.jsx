import React from 'react';

const Home = () => {
  return (
    <div id="card-section">
    <div className="card">
      <img src="../assets/pilotos.JPG" alt="Imagem 1" />
      <h3>Pilotos</h3>
      <p>Descubra os principais pilotos da Fórmula E e suas estatísticas impressionantes.</p>
    </div>
    <div className="card">
      <img src="../assets/inovacao.JPG" alt="Imagem 2" />
      <h3>Inovação</h3>
      <p>A Fórmula E está na vanguarda da inovação tecnológica no automobilismo.</p>
    </div>
    <div className="card">
      <img src="../assets/corridas.JPG" alt="Imagem 3" />
      <h3>Corridas</h3>
      <p>Veja o calendário completo das próximas corridas e acompanhe ao vivo.</p>
    </div>
  </div>
  );
};

export default Home;