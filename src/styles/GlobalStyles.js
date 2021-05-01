import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --purple: #72005F;
    --bege: #BAA193;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
  }
`;
