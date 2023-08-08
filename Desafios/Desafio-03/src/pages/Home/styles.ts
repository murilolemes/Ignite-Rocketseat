import styled from 'styled-components'

export const HomeContainer = styled.main``

export const Publications = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto;

  .titlePublications {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font: var(--title-s);
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font: var(--text-s);
      color: ${(props) => props.theme['base-span']};
    }
  }

  form {
    input {
      width: 100%;
      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};

      font: var(--text-m);

      border: 1px solid ${(props) => props.theme['base-border']};
      padding: 0.75rem 1rem;
      border-radius: 6px;
      margin-top: 0.75rem;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
