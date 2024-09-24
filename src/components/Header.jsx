import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/Impactos">Impactos</Link>
        <Link to="/Problema">Problema</Link>
        <Link to="/Solucao">Soluçao</Link>
      </nav>
    </header>
  );
};

export default Header;