import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2.5rem 10rem;

  display: grid;
  grid-template-columns: 8fr 5fr;
  gap: 2rem;
`

export const RegisterContent = styled.div`
  h3 {
    font: var(--title-xs);
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }

  .data {
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
  }
`

export const TitleAddress = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h4 {
      font: var(--text-m);
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font: var(--text-s);
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Payment = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.75rem;
`

export const TitlePayment = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  div {
    h4 {
      font: var(--text-m);
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font: var(--text-s);
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`
