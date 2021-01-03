import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import { AnimationContainer, Background, Container, Content } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

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

      await api.post('/users', data);

      addToast({
        type: 'success',
        title: 'Register successfully.',
        description: 'You can login on GoBarber!'
      });

      history.push('/');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        description: 'An error occurred on register, try again.',
        title: 'Error on register!',
        type: 'error',
      })
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
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

          <Link to="/">
            <FiArrowLeft />
          Go back to logon
        </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
