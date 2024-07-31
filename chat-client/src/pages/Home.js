import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo à Home Page!</h1>
      <div className="home-buttons">
        <Link to="/login">
          <button className="home-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="home-button">Registrar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
