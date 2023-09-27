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
`
