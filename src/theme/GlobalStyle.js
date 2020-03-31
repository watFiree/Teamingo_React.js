import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Sen:400,700&display=swap');

    *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Sen', sans-serif;


    &::-webkit-scrollbar-track
    {
        box-shadow: inset 0 0 6px rgb(235, 235, 235);
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar
    {
        width: 12px;
        background-color: darkorange;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 8px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: darkorange;
    }
}
`;

export default GlobalStyle;