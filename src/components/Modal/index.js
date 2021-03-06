import React from 'react';

import { close, quotes, defaultBook } from '../../assets/images';

import {
  Container,
  ModalContent,
  ImageContainer,
  Image,
  Content,
  Header,
  Title,
  Authors,
  Author,
  Info,
  InfoTitle,
  InfoBolder,
  InfoRow,
  InfoDescription,
  Resume,
  ResumeTitle,
  ResumeImg,
  ResumeText,
  Button,
  Icon,
  ResumeContent,
  ContentScroll,
  ModalContentScroll,
} from './styles';

import { useSelector, useDispatch } from 'react-redux';

export function Modal({ data }) {
  console.log(data);
  const {
    authors,
    title,
    description,
    imageUrl,
    isbn10,
    isbn13,
    language,
    pageCount,
    published,
    publisher,
  } = data;

  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch({
      type: 'HIDE_MODAL',
      payload: {},
    });
  }

  console.log(imageUrl);
  return (
    <>
      {modal.show && (
        <Container>
          <Button onClick={closeModal}>
            <Icon src={close} />
          </Button>
          <ModalContent>
            <ModalContentScroll>
              <ImageContainer>
                <Image src={imageUrl ? imageUrl : defaultBook} />
              </ImageContainer>

              <Content>
                <ContentScroll>
                  <Header>
                    <Title>{title}</Title>
                    <Authors>
                      {authors.map((author, index) => {
                        return (
                          <Author key={author}>
                            {author}
                            {index !== authors.length - 1 && `, `}{' '}
                          </Author>
                        );
                      })}
                    </Authors>
                  </Header>

                  <Info>
                    <InfoTitle>INFORMAÇÕES</InfoTitle>
                    <InfoRow>
                      <InfoBolder>Páginas</InfoBolder>
                      <InfoDescription>{pageCount}</InfoDescription>
                    </InfoRow>
                    <InfoRow>
                      <InfoBolder>Editora</InfoBolder>
                      <InfoDescription>{publisher}</InfoDescription>
                    </InfoRow>
                    <InfoRow>
                      <InfoBolder>Publicação</InfoBolder>
                      <InfoDescription>{published}</InfoDescription>
                    </InfoRow>
                    <InfoRow>
                      <InfoBolder>Idioma</InfoBolder>
                      <InfoDescription>{language}</InfoDescription>
                    </InfoRow>
                    <InfoRow>
                      <InfoBolder>Título Original</InfoBolder>
                      <InfoDescription>{title}</InfoDescription>
                    </InfoRow>
                    <InfoRow>
                      <InfoBolder>ISBN-10</InfoBolder>
                      <InfoDescription>{isbn10}</InfoDescription>
                    </InfoRow>
                    <InfoRow>
                      <InfoBolder>ISBN-13</InfoBolder>
                      <InfoDescription>{isbn13}</InfoDescription>
                    </InfoRow>
                  </Info>

                  <Resume>
                    <ResumeTitle>RESENHA DA EDITORA</ResumeTitle>
                    <ResumeContent>
                      <ResumeImg>
                        <Icon src={quotes} />
                      </ResumeImg>
                      <ResumeText>
                        {' '}
                        &nbsp; &nbsp; &nbsp; &nbsp; {description}
                      </ResumeText>
                    </ResumeContent>
                  </Resume>
                </ContentScroll>
              </Content>
            </ModalContentScroll>
          </ModalContent>
        </Container>
      )}
    </>
  );
}
