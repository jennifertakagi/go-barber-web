import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: unknown) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Name is required')
          .email('Enter a valid email'),
        password: Yup.string().required('Password is required'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

        <a href="login">
          <FiLogIn />
          Create a new account
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
