import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: unknown) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .required('Name is required')
          .email('Enter a valid email'),
        password: Yup.string().min(
          6,
          'The length must have min 6 length characters',
        ),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
