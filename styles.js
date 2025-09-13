import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    font-family: 'Trebuchet MS', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
