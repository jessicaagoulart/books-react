import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Book } from '../../components/Book';

const initialProps = (props) => ({
  data: {
    imageUrl: '',
    title: '',
    authors: [],
    pageCount: '',
    publisher: '',
    published: '',
  },
  onClick: () => {},
  ...props,
});

describe('Book', () => {
  afterEach(cleanup);

  it('should render Book title', () => {
    const { queryByText } = render(
      <Book
        {...initialProps({
          data: {
            title: 'Pequeno Príncipe',
            published: '2000',
            authors: ['Antoine'],
          },
        })}
      />
    );

    const title = queryByText('Pequeno Príncipe');

    expect(title).toBeTruthy();
  });

  it('should render Book Authors', () => {
    const { queryByText } = render(
      <Book
        {...initialProps({
          data: {
            authors: ['Antoine'],
          },
        })}
      />
    );

    const author = queryByText('Antoine');

    expect(author).toBeTruthy();
  });

  it('should render Book page counter', () => {
    const { queryByText } = render(
      <Book
        {...initialProps({
          data: {
            authors: ['Antoine'],
            pageCount: '300',
          },
        })}
      />
    );

    const pages = queryByText('300 páginas');

    expect(pages).toBeTruthy();
  });

  it('should render Book publisher', () => {
    const { queryByText } = render(
      <Book
        {...initialProps({
          data: {
            publisher: 'Geração',
            authors: ['Antoine'],
          },
        })}
      />
    );

    const publisher = queryByText('Editora Geração');

    expect(publisher).toBeTruthy();
  });

  it('should render Book publish year', () => {
    const { queryByText } = render(
      <Book
        {...initialProps({
          data: {
            published: '2000',
            authors: ['Antoine'],
          },
        })}
      />
    );

    const published = queryByText('Publicado em 2000');

    expect(published).toBeTruthy();
  });
});
