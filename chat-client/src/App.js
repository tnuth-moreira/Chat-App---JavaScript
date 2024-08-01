// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './pages/Chat'; // Importe o componente Chat
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} /> {/* Adicione a rota para o chat */}
      </Routes>
    </div>
  );
}

export default App;
