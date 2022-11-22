import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  a, div, button, h1, p, span, ::placeholder {
    font-family: 'Space Grotesk', sans-serif;
  }
  `;