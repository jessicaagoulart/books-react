import React from 'react';

import {
  Container,
  Image,
  Content,
  Title,
  Authors,
  Author,
  Info,
  ImageContainer,
} from './styles';

export function Book({ data }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={data.imageUrl} />
      </ImageContainer>

      <Content>
        <Title>{data.title}</Title>
        <Authors>
          {data.authors.map((author) => {
            return <Author>{author}</Author>;
          })}
        </Authors>

        <Info>{data.pageCount} páginas</Info>
        <Info>Editora {data.publisher}</Info>
        <Info>Publicado em {data.published}</Info>
      </Content>
    </Container>
  );
}
