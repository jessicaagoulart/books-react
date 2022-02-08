import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 107px;
  padding-right: 107px;

  width: 100vw;

  min-height: 100vh;
  height: auto;

  background-image: linear-gradient(
    to top,
    #fdcbf1 0%,
    #fdcbf1 1%,
    #e6dee9 100%
  );
  background-blend-mode: darken;
  background-size: contain;
`;

export const Header = styled.div`
  height: 120px;

  padding-left: 8px;
  padding-right: 8px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  z-index: 1;
`;

export const Title = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const User = styled.div`
  width: 220px;
  height: 100%;

  display: flex;

  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;

  margin-right: 16px;
`;

export const Gender = styled.span`
  font-size: 12px;
  line-height: 16px;
  margin-right: 5px;
`;

export const Logout = styled.button`
  width: 32px;
  height: 32px;

  border-radius: 16px;

  border: 1px solid rgba(51, 51, 51, 0.2);

  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const Icon = styled.img`
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.3;
  `}
`;

export const IconLeft = styled.img`
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.3;
  `}
  transform: rotate(180deg);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0px 0px 24px;

  justify-content: center;
  align-items: center;

  z-index: 1;
`;

export const Load = styled.div`
  display: flex;

  width: 100%;
  height: 500px;

  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  width: 100%;

  display: flex;

  justify-content: flex-end;
  align-items: center;

  padding-right: 36px;
  margin-bottom: 92px;

  height: 32px;
`;

export const PageCounter = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;

  margin-right: 16px;
`;

export const CurrentPage = styled.span`
  font-weight: bolder;
`;

export const LastPage = styled.span`
  font-weight: bolder;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  width: 72px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;

  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;

  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
    transform: scale(1.2);
  }
  `}
`;

export const Error = styled.button`
  width: 300px;
  height: 100px;

  border: 2px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;

  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  color: #999;
  font-size: 12px;
  font-weight: 500;

  padding: 16px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
    transform: scale(1.01);
  }
  `}
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;
`;
