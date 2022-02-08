import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
@media screen and (max-width:500px) {
  html,
  body {
	width: 100%;
	margin: 0px;
	padding: 0px;
	overflow-x: hidden;
	height: 100%;
	align-items: center;
	justify-content: center;
  }
}
`;
export default GlobalStyle;
