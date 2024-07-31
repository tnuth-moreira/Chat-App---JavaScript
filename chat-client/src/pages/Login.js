import React from 'react';

const Login = () => {
  return (
    <form>
      <h1>Login</h1>
      <input type="text" placeholder="Nome de usuário" />
      <input type="password" placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;