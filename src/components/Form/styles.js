import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
`;

export const FormStyled = styled(Unform)`
  display: flex;
  position: relative;

  flex-direction: column;
`;

export const InputPassword = styled.div`
  position: relative;
`;

export const InputEmail = styled.div`
  position: relative;
`;

export const ButtonContainer = styled.div`
  position: absolute;

  right: 12px;
  bottom: 28px;

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  top: 8px;
  right: 12px;

  width: 85px;
  height: 36px;

  border-radius: 44px;

  border: none;

  cursor: pointer;
`;

export const ButtonText = styled.text`
  font-size: 16px;
  color: #b22e6f;
  font-weight: 500;
  line-height: 20px;
`;

export const ErrorContainer = styled.div`
  position: absolute;
  bottom: -50px;
  display: flex;

  flex-direction: column;

  height: 56px;
  width: 250px;
`;

export const ErrorInput = styled.div`
  height: 48px;
  width: 250px;

  padding-left: 16px;

  display: flex;

  align-items: center;

  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
`;

export const ErrorTriangle = styled.div`
  width: 0;
  height: 0;

  margin-left: 12px;

  border: 12px solid transparent;
  border-top: 0;
  border-bottom: 12px solid rgba(255, 255, 255, 0.4);
`;

export const ErrorMessage = styled.text`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;

  color: #fff;
`;
