import React from 'react';

const Register = () => {
  return (
    <form>
      <h1>Registro</h1>
      <input type="text" placeholder="Nome de usuário" />
      <input type="password" placeholder="Senha" />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;