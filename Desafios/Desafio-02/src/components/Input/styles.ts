import styled from "styled-components";

export const InputContainer = styled.label`
  display: flex;
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;
  
  input {
    width: 100%;
    font: var(--text-s);
    padding: 0.75rem;
    background: transparent;
    border: 0;
    color: ${props => props.theme["base-text"]};

    &::placeholder {
      color: ${props => props.theme["base-label"]};
    }
  }
`