import styled from 'styled-components'

export const AmountContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  p {
    font: var(--text-m);
    color: ${(props) => props.theme['base-title']};
  }

  button {
    background: transparent;
    border: 0;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme['purple-500']};
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${(props) => props.theme['purple-700']};
      }
    }
  }
`
