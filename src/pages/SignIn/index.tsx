import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Login</h1>
        <input placeholder="Email" type="text" />

        <input placeholder="Password" type="password" />

        <button type="submit">Enter</button>

        <a href="forgot">I forgot my password</a>
      </form>

      <a href="login">
        <FiLogIn />
        Create a new account
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
