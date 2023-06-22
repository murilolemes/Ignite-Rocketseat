import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartContent = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;
`

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  p:last-child {
    font: var(--text-m);
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }

  .contentItem {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > p {
        font: var(--text-m);
        color: ${(props) => props.theme['base-subtitle']};
      }

      .footerItem {
        display: flex;
        gap: 0.5rem;

        button {
          display: flex;
          align-items: center;
          gap: 0.25rem;

          padding: 0 0.5rem;
          border: 0;
          background: ${(props) => props.theme['base-button']};
          border-radius: 6px;

          transition: background 0.2s;

          font: var(--button-m);
          color: ${(props) => props.theme['base-text']};

          svg {
            color: ${(props) => props.theme['purple-500']};
          }

          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }
        }
      }
    }
  }
`

export const Total = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme['base-text']};
    }

    p:first-child {
      font: var(--text-s);
    }

    p:last-child {
      font: var(--text-m);
    }

    & + div {
      margin-top: 0.75rem;
    }
  }

  #total {
    p {
      font: var(--text-l);
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  button {
    width: 100%;
    font: var(--button-g);
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-500']};

    padding: 0.75rem 0.5rem;
    border: 0;
    border-radius: 6px;
    margin-top: 1.5rem;

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-700']};
    }
  }
`
