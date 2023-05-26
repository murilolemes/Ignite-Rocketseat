import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1440px;
  padding: 2rem 10rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  img {
    height: 2.5rem;
  }

  div {
    display: flex;
    gap: 0.75rem;

    a {
      background: ${(props) => props.theme['puple-200']};
      padding: 0.5rem;
      border-radius: 6px;
      font: var(--text-s);
      color: ${(props) => props.theme['puple-700']};

      display: flex;
      align-items: center;
      gap: 0.25rem;

      transition: background-color 0.2s;

      svg {
        color: ${(props) => props.theme['puple-500']};
        transition: color 0.2s;
      }

      &:hover {
        background: ${(props) => props.theme['puple-500']};

        svg {
          color: ${(props) => props.theme['puple-700']};
        }
      }
    }

    button {
      background: ${(props) => props.theme['yellow-200']};
      padding: 0.5rem;
      border: 0;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.2s;

      svg {
        color: ${(props) => props.theme['yellow-700']};
      }

      &:hover {
        background: ${(props) => props.theme['yellow-500']};
      }
    }
  }
`
