import styled, { css } from 'styled-components'

interface ContainerProps {
  $isFocused: boolean
}

export const InputContainer = styled.label<ContainerProps>`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  padding-right: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  ${(props) =>
    props.$isFocused &&
    css`
      box-shadow: 0 0 0 2px ${props.theme['yellow-500']};
    `}

  input {
    width: 100%;
    padding: 0.75rem;
    border: 0;
    border-radius: 4px;
    font: var(--text-s);
    background: transparent;
    color: ${(props) => props.theme['base-text']};
    box-shadow: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  span {
    font: var(--text-xs);
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    opacity: 0.7;
  }
`
