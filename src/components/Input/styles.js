import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.text`
  position: absolute;
  opacity: 0.5;

  top: 8px;
  left: 16px;

  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #fff;
`;

export const InputField = styled.input`
  width: 368px;
  height: 60px;

  padding: 36px 16px 16px;
  margin-bottom: 16px;
  border: 0px;

  background-color: rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  justify-content: center;
  align-items: center;

  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;
