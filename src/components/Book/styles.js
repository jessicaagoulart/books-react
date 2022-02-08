import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  height: 160px;

  padding: 16px 8px 16px 16px;
  margin: 8px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-between;

  background-color: #fff;

  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 81px;
`;

export const ImageContainer = styled.div`
  width: 81px;
  margin-right: 16px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;

  justify-content: space-between;
`;

export const Title = styled.text`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #333333;
`;

export const Authors = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.text`
  color: #ab2680;
  font-size: 12px;
  font-weight: 400;
`;

export const Info = styled.text`
  font-size: 12px;

  color: #999;
  font-weight: 400;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
