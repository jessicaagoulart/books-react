import React from 'react';

import GlobalStyle from './GlobalStyle';

import Routes from './Routes/routes';

import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
