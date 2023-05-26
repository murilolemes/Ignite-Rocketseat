import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --title-xl: 800 3rem/1.3 'Baloo 2';
    --title-l: 800 2rem/1.3 'Baloo 2';
    --title-m: 800 1.5rem/1.3 'Baloo 2';
    --title-s: 700 1.25rem/1.3 'Baloo 2';
    --title-xs: 700 1.125rem/1.3 'Baloo 2';

    --text-l: 400 1.25rem/1.3 'Roboto';
    --text-m: 400 1rem/1.3 'Roboto';
    --text-s: 400 0.875rem/1.3 'Roboto';
    --text-xs: 700 0.75rem/1.3 'Roboto';

    --tag: 700 0.625rem/1.3 'Roboto';
    --button-g: 700 0.875rem/1.6 'Roboto';
    --button-m: 400 0.75rem/1.6 'Roboto';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
