import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }
    html, body{
        overflow-x: hidden;
    }
    body{
        margin: 0;
        padding: 0;
        font-family: 'IBM Plex Sans', sans-serif;
    }
    html{
        scroll-behavior: smooth;
    }

`;

export default GlobalStyle

