import styled from 'styled-components';

export const Container = styled.button`
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

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  overflow: hidden;
  border: none;
`;

export const Image = styled.img`
  width: 81px;

  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
`;

export const ImageContainer = styled.div`
  width: 81px;
  margin-right: 16px;
`;

export const Content = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
`;

export const ContentScroll = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;

  padding-right: 10px;

  overflow-y: auto;

  transition: all 0.2s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.text`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  color: #333333;

  text-align: left;
`;

export const Authors = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Author = styled.text`
  color: #ab2680;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;

  text-align: left;
`;

export const Info = styled.text`
  font-size: 12px;

  color: #999;
  font-weight: 400;

  line-height: 20px;

  text-align: left;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
