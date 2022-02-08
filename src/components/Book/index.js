import React from 'react';
import { Header } from '../../screens/Home/styles';

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
} from './styles';

export function Book({ data }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={data.imageUrl} />
      </ImageContainer>

      <Content>
        <HeaderContainer>
          <Title>{data.title}</Title>
          <Authors>
            {data.authors.map((author) => {
              return <Author>{author}</Author>;
            })}
          </Authors>
        </HeaderContainer>

        <ContainerInfo>
          <Info>{data.pageCount} páginas</Info>
          <Info>Editora {data.publisher}</Info>
          <Info>Publicado em {data.published}</Info>
        </ContainerInfo>
      </Content>
    </Container>
  );
}
