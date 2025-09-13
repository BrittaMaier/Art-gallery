import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 40px 0;
    font-family: system-ui;
    font-family: 'Trebuchet MS', sans-serif;
  }

  /* main {
        padding: 30px 0 20px;
  } */

  a {
    text-decoration: none;
    color: inherit;
  }
`;
