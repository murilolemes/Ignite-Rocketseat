import { styled } from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 5.75rem 10rem;
`

export const Introduction = styled.div`
  display: flex;

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
      }

      p {
        font: var(--text-l);
      }
    }

    .items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem 2.5rem;

      span {
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        background: ${(props) => props.theme['yellow-500']};
        border-radius: 50%;
      }

      p {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font: var(--text-m);
      }
    }
  }
`
