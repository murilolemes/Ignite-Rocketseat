import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --title-l: 700 1.5rem/1.3 'Nunito';
    --title-m: 700 1.25rem/1.6 'Nunito';
    --title-s: 700 1.125rem/1.6 'Nunito';
    --text-m: 400 1rem/1.6 'Nunito';
    --text-s: 400 0.875rem/1.6 'Nunito';
    --link: 400 0.75rem/1.6 'Nunito';
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem/1.6 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
