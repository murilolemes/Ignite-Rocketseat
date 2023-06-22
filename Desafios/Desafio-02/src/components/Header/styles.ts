import styled from 'styled-components'

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

    p {
      background: ${(props) => props.theme['purple-200']};
      padding: 0.5rem;
      border-radius: 6px;
      font: var(--text-s);
      color: ${(props) => props.theme['purple-700']};

      display: flex;
      align-items: center;
      gap: 0.25rem;

      transition: background-color 0.2s;

      svg {
        color: ${(props) => props.theme['purple-500']};
        transition: color 0.2s;
      }
    }

    a {
      background: ${(props) => props.theme['yellow-200']};
      padding: 0.5rem;
      border: 0;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.2s;
      position: relative;

      svg {
        color: ${(props) => props.theme['yellow-700']};
      }

      &:hover {
        background: ${(props) => props.theme['yellow-500']};
      }

      span {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background: ${(props) => props.theme['yellow-700']};
        color: ${(props) => props.theme.white};
        font: var(--text-xs);
        line-height: 0;

        position: absolute;
        top: -8px;
        right: -8px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
