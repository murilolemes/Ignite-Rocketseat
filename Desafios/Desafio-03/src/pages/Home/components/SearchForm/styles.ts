import styled from 'styled-components'

export const SearchFormContainer = styled.form`
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
`
