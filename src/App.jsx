import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Problema from './pages/Problema';
import Solucao from './pages/Solucao';
import Impactos from './pages/Impactos';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problema" element={<Problema />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/impactos" element={<Impactos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;