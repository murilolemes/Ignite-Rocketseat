import styled, { css } from 'styled-components'

interface ButtonProps {
  $isActive?: boolean
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  transition: background 0.2s;

  font: var(--button-m);
  line-height: 0;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  ${(props) =>
    props.$isActive &&
    css`
      border: 1px solid ${(props) => props.theme['purple-500']};
      background: ${(props) => props.theme['purple-200']};
    `}

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
