import React, { useEffect, useState } from 'react';

import { Form } from '../../components/Form';

import {
  background,
  background1,
  background2,
  logoPng,
  titlePng,
} from '../../assets/images';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { TailSpin } from 'react-loader-spinner';

import { Container, BackgroundImage, Content, Title, Load } from './styles';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function refresh(token) {
    api
      .post('/auth/refresh-token', {
        refreshToken: token,
      })
      .then((response) => {
        if (response.status === 204) {
          const token = response.headers.authorization;
          localStorage.setItem('@ioasys:token', token);

          dispatch({
            type: 'LOGIN_SESSION',
            payload: { authenticated: true },
          });

          navigate('/Home');
        } else {
          console.log('response');
        }
      }) // then
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.removeItem('@ioasys:token');
          localStorage.removeItem('@ioasys:refresh-token');
          localStorage.removeItem('@ioasys:user');

          navigate('/Login');
        }
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('@ioasys:refresh-token');

    if (token) {
      setLoading(true);
      refresh(token);
    }
  }, []);

  return (
    <Container>
      {loading ? (
        <Load>
          <BackgroundImage src={background1} alt="background" />
          <BackgroundImage src={background2} alt="background" />

          <TailSpin color="#b22e6f" height={80} width={80} />
        </Load>
      ) : (
        <>
          <BackgroundImage src={background} alt="background" />

          <Content>
            <Title>
              <img src={logoPng} alt="logo" />
              <img src={titlePng} alt="title" />
            </Title>

            <Form />
          </Content>
        </>
      )}
    </Container>
  );
}
