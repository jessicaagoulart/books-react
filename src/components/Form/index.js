import * as Yup from 'yup';
import React, { useRef, useState } from 'react';

import {
  FormStyled,
  Container,
  ButtonContainer,
  Button,
  ButtonText,
  ErrorContainer,
  ErrorInput,
  ErrorTriangle,
  ErrorMessage,
} from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import Input from '../Input';
import { TailSpin } from 'react-loader-spinner';

export function Form() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data, { reset }) {
    try {
      setLoading(true);
      formRef.current.setErrors({});
      setIsError(false);

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email e/ou senha incorretos.')
          .required('O e-mail é obrigatório.'),
        password: Yup.string().required('A senha é obrigatória.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});

      api
        .post('/auth/sign-in', {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          if (response.status === 200) {
            setIsError(false);

            const user = response.data;
            const token = response.headers.authorization;
            const refreshToken = response.headers['refresh-token'];

            localStorage.setItem('@ioasys:token', token);
            localStorage.setItem('@ioasys:refresh-token', refreshToken);
            localStorage.setItem('@ioasys:user', JSON.stringify(user));

            const userData = response.data;
            dispatch({
              type: 'LOGIN_SESSION',

              payload: { ...userData, authenticated: true },
            });

            navigate('/Home');
          } else {
            console.log(response);
          }
        }) // then
        .catch(({ response }) => {
          setLoading(false);
          setIsError(true);
          setErrorMessage('Email e/ou senha incorretos.');
        });

      /*       reset(); */
    } catch (err) {
      setLoading(false);
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          console.log(error.message);
          validationErrors[error.path] = error.message;
        });
        setIsError(true);
        validationErrors.email
          ? setErrorMessage(validationErrors.email)
          : setErrorMessage(validationErrors.password);

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <FormStyled ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" label="Email" />
        <Input name="password" type="password" label="Senha" />

        <ButtonContainer>
          <Button type="submit">
            {loading ? (
              <TailSpin width={20} color="#B22E6F" />
            ) : (
              <ButtonText>Entrar</ButtonText>
            )}
          </Button>
        </ButtonContainer>
      </FormStyled>

      {isError && (
        <ErrorContainer>
          <ErrorTriangle />
          <ErrorInput>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </ErrorInput>
        </ErrorContainer>
      )}
    </Container>
  );
}
