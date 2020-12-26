import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: unknown): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <Input icon={FiUser} name="name" placeholder="Name" type="text" />
          <Input icon={FiMail} name="email" placeholder="Email" type="text" />

          <Input
            icon={FiLock}
            name="password"
            placeholder="Password"
            type="password"
          />

          <Button type="submit">Register</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Go back to logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
