import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.RED_800};

    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a, ul {
    text-decoration: none;
    list-style: none;
  }

  button, a {
    border: 0;
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
