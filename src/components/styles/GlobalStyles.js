import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
    html {
    box-sizing: border-box;
    font-size:62.5%;
    font-family: 'Roboto Mono', monospace;

  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding:0;
  }

  ul {
    list-style: none;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
  body{
      background:#fefefe;
      height: 100vh;
      margin:0 auto;
      overscroll-behavior: none;
      width:100%;

    #app{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
    }
  }
`;
