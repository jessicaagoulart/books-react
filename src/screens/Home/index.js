import React, { useEffect, useState } from 'react';

import {
  Container,
  Title,
  User,
  Name,
  Logout,
  Header,
  Gender,
  Icon,
  Content,
  Load,
  Footer,
  PageCounter,
  CurrentPage,
  LastPage,
  ButtonContainer,
  Button,
  IconLeft,
} from './styles';

import { TailSpin } from 'react-loader-spinner';

import { logoSvg, titleSvg, logout, chevron } from '../../assets/images';

import { Book } from '../../components/Book';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function Home() {
  const userObj = localStorage.getItem('@ioasys:user');
  const user = JSON.parse(userObj);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [disabledLeft, setDisabledLeft] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);

  function handleLogout() {
    localStorage.removeItem('@ioasys:token');
    localStorage.removeItem('@ioasys:refresh-token');
    localStorage.removeItem('@ioasys:user');

    navigate('/Login');
  }

  async function fetchData() {
    try {
      api
        .get(`/books?page=${page}&amount=10`)
        .then((response) => {
          console.log(response);
          const { data, totalPages } = response.data;

          setTotalPages(totalPages);
          setData(data);
          setLoading(false);
          console.log(data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    } catch {}
  }

  function handleBack() {
    setDisabledRight(false);
    if (page > 1) {
      if (page === 2) setDisabledLeft(true);
      setPage(page - 1);
    } else {
      setDisabledLeft(true);
    }
  }

  function handleFront() {
    setDisabledLeft(false);
    if (page < totalPages) {
      if (page === totalPages - 1) setDisabledRight(true);
      setPage(page + 1);
    } else {
      setDisabledRight(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log('direita', disabledRight);

  console.log('esquerda', disabledLeft);

  return (
    <Container>
      <Header>
        <Title>
          <img src={logoSvg} alt="logo" />
          <img src={titleSvg} alt="title" />
        </Title>

        <User>
          <Gender>{user.gender === 'F' ? 'Bem vinda,' : 'Bem vindo,'} </Gender>
          <Name>{user.name}!</Name>
          <Logout onClick={handleLogout}>
            <Icon src={logout} />
          </Logout>
        </User>
      </Header>
      {loading ? (
        <Load>
          <TailSpin color="#b22e6f" height={80} width={80} />
        </Load>
      ) : (
        <>
          <Content>
            {data.map((item) => {
              return <Book key={item.id} data={item} />;
            })}
          </Content>

          <Footer>
            <PageCounter>
              {`Página `}
              <CurrentPage>{page}</CurrentPage>
              {` de `}
              <LastPage>{totalPages}</LastPage>
            </PageCounter>

            <ButtonContainer>
              <Button onClick={handleBack} disabled={disabledLeft}>
                <IconLeft src={chevron} disabled={disabledLeft} />
              </Button>
              <Button onClick={handleFront} disabled={disabledRight}>
                <Icon src={chevron} disabled={disabledRight} />
              </Button>
            </ButtonContainer>
          </Footer>
        </>
      )}
    </Container>
  );
}