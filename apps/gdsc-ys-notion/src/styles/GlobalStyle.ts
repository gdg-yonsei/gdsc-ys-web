import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    min-height: 100vh;
    background-color: #000000;
    font-family:
      sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Open Sans",
      "Helvetica Neue";

      -ms-overflow-style: none;  /* Internet Explorer 10+ */
      scrollbar-width: none;  /* Firefox */

      &::-webkit-scrollbar { 
        display: none; /* Safari and Chrome */
      }
  }

  * {
    box-sizing: border-box;
  }

  button {
    margin: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
  }

  [role="button"] {
    cursor: pointer;
    user-select: none;
  }
`;

export default GlobalStyle;
