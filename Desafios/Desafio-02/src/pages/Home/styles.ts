import styled, { css } from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10rem 8rem;
`

export const Introduction = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 0;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font: var(--title-xl);
        color: ${(props) => props.theme['base-title']};
      }

      p {
        font: var(--text-l);
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  .items {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1.25rem 2.5rem;
  }
`

interface ItemsProps {
  backgroundcoloritems: 'cart' | 'packege' | 'timer' | 'coffee'
}

export const Item = styled.div<ItemsProps>`
  span {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.background};

    ${(props) =>
      props.backgroundcoloritems === 'cart' &&
      css`
        background: ${(props) => props.theme['yellow-700']};
      `}

    ${(props) =>
      props.backgroundcoloritems === 'packege' &&
      css`
        background: ${(props) => props.theme['base-text']};
      `}

    ${(props) =>
      props.backgroundcoloritems === 'timer' &&
      css`
        background: ${(props) => props.theme['yellow-500']};
      `}

    ${(props) =>
      props.backgroundcoloritems === 'coffee' &&
      css`
        background: ${(props) => props.theme['purple-500']};
      `}
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font: var(--text-m);
    color: ${(props) => props.theme['base-text']};
  }
`

export const OurCoffee = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    font: var(--title-l);
    color: ${(props) => props.theme['base-subtitle']};
  }
`
