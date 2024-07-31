// src/components/Chat.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Ajuste a URL se necessário

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', input);
    setInput('');
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
