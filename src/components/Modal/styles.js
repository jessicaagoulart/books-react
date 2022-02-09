import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;

  z-index: 10;

  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: auto;
  height: auto;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  flex-direction: column;

  overflow: hidden;
`;

export const ContentScroll = styled.div`
  display: flex;

  height: 100%;
  width: 100%;

  flex-direction: column;
  justify-content: space-between;

  overflow-y: auto;
  position: relative;

  transition: all 0.2s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }
  padding-right: 10px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;

  position: absolute;

  top: 16px;
  right: 16px;

  background: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;

  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Icon = styled.img``;

export const ModalContent = styled.div`
  display: flex;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  overflow: auto;

  width: 769px;
  height: 608px;

  max-width: 100%;
  max-height: 100%;

  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  padding: 48px;

  padding-right: 33px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  margin-right: 40px;
`;
export const Image = styled.img``;

export const Header = styled.div``;

export const Title = styled.text`
  font-size: 28px;
  line-height: 40px;
  font-weight: 600;
  color: #333333;

  text-overflow: ellipsis;
`;

export const Authors = styled.div`
  margin-bottom: 32px;
`;

export const Author = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;

  color: #ab2680;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 32px;

  width: 100%;
`;

export const InfoTitle = styled.text`
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;

  text-transform: uppercase;

  color: #333333;

  margin-bottom: 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const InfoBolder = styled.text`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
`;

export const InfoDescription = styled.text`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #999999;

  text-align: right;
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeTitle = styled.text`
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;

  text-transform: uppercase;

  color: #333333;

  margin-bottom: 10px;
`;

export const ResumeContent = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
`;

export const ResumeImg = styled.div`
  position: absolute;
`;

export const ResumeText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #999999;
`;
