import React from 'react';

import { defaultBook } from '../../assets/images';

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
  const { imageUrl, title, authors, pageCount, publisher, published } = data;
  return (
    <Container onClick={onClick}>
      <ImageContainer>
        <Image src={imageUrl ? imageUrl : defaultBook} />
      </ImageContainer>

      <Content>
        <ContentScroll>
          <HeaderContainer>
            <Title>{title}</Title>
            <Authors>
              {authors.map((author) => {
                return <Author key={`${author}`}>{author}</Author>;
              })}
            </Authors>
          </HeaderContainer>

          <ContainerInfo>
            <Info>{pageCount} páginas</Info>
            <Info>Editora {publisher}</Info>
            <Info>Publicado em {published}</Info>
          </ContainerInfo>
        </ContentScroll>
      </Content>
    </Container>
  );
}
