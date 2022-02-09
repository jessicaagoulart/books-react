import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  position: relative;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Load = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  overflow: hidden;
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 0;
`;

export const Content = styled.div`
  width: 368px;

  justify-content: center;
  align-items: center;

  margin-left: 115px;

  z-index: 2;

  @media (max-width: 800px) {
    display: flex;
    align-self: center;
    flex-direction: column;

    margin: 0;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const Title = styled.div`
  flex-direction: row;

  width: 200px;

  z-index: 2;
  display: flex;

  justify-content: space-around;
  align-items: center;

  margin-bottom: 50px;

  @media (max-width: 800px) {
    align-self: flex-start;
  }
`;

export const Form = styled.div`
  z-index: 2;
  display: flex;

  flex-direction: column;
`;
