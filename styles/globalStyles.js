import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  .wrapper {
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
