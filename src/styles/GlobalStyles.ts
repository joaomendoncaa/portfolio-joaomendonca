import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-main: #F8F9FB;

    --blue-dark: #0A2437;

    --icon-grey: #B1B1B1; 
    --icon-blue: #0A2437; 

    --title-primary: #0A2437;
    --title-secondary: #9d9d9d;

    --text-primary: #0A2437;
    --text-secondary: #9d9d9d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-moz-selection { /* Code for Firefox */
    color: white;
    background: var(--blue-dark);
  }

  *::selection {
    color: white;
    background: var(--blue-dark);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body { 
    width: 100vw;

    background: var(--background-main);

    font: 400 1rem 'Rubik', sans-serif;
  }

  body,
  input,
  textarea,
  button {
    color: var(--text-primary);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`