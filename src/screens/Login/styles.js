import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  position: relative;

  width: 100vw;
  height: 100vh;

  align-items: center;
`;

export const Load = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  position: absolute;

  z-index: 0;
`;

export const Content = styled.div`
  width: 368px;

  justify-content: center;
  align-items: center;

  margin-left: 115px;

  z-index: 2;
`;

export const Title = styled.div`
  flex-direction: row;

  width: 200px;

  z-index: 2;
  display: flex;

  justify-content: space-around;
  align-items: center;

  margin-bottom: 50px;
`;

export const Form = styled.div`
  z-index: 2;
  display: flex;

  flex-direction: column;
`;
