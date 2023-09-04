import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

  a {
    height: 16.25rem;
    background: ${(props) => props.theme['base-post']};
    color: ${(props) => props.theme['base-text']};

    padding: 2rem;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    text-decoration: none;

    &:hover {
      transition: box-shadow 0.2s;
      box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
    }
  }
`

export const HeaderCard = styled.header`
  display: flex;
  gap: 1rem;

  h2 {
    flex: 1;
    font: var(--title-m);
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font: var(--text-s);
    color: ${(props) => props.theme['base-span']};
  }
`

export const DescriptionCard = styled.div`
  height: 100%;
  overflow: hidden;

  p {
    width: 100%;
    max-width: 21.875rem;
    font: var(--text-m);
  }
`
