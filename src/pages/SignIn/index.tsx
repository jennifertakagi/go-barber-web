import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Login</h1>
        <Input icon={FiMail} name="email" placeholder="Email" type="text" />

        <Input
          icon={FiLock}
          name="password"
          placeholder="Password"
          type="password"
        />

        <Button type="submit">Enter</Button>

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
