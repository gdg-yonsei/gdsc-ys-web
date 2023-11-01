import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    width: 100vw;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
