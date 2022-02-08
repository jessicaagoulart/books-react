import GlobalStyle from './GlobalStyle';
import { Provider } from 'react-redux';
import store from './store/index';
import Routes from './Routes/routes';

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
