import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import {
  Container,
  Image,
  Content,
  Title,
  Authors,
  Author,
  Info,
  ImageContainer,
  ContainerInfo,
  HeaderContainer,
  ContentScroll,
} from './styles';

export function Book({ data, onClick }) {
  return (
    <Container onClick={onClick}>
      <ImageContainer>
        <Image src={data.imageUrl} />
      </ImageContainer>

      <Content>
        <Scrollbars
          autoHideTimeout={1000}
          autoHide
          renderThumbVertical={({ style, ...props }) => (
            <div
              {...props}
              style={{
                ...style,
                width: '5px',
                height: '10px',
                backgroundColor: 'rgba(171, 38, 128, 1)',
                borderRadius: '5px',
              }}
            />
          )}
        >
          <ContentScroll>
            <HeaderContainer>
              <Title>{data.title}</Title>
              <Authors>
                {data.authors.map((author) => {
                  return <Author key={`${author}`}>{author}</Author>;
                })}
              </Authors>
            </HeaderContainer>

            <ContainerInfo>
              <Info>{data.pageCount} páginas</Info>
              <Info>Editora {data.publisher}</Info>
              <Info>Publicado em {data.published}</Info>
            </ContainerInfo>
          </ContentScroll>
        </Scrollbars>
      </Content>
    </Container>
  );
}
