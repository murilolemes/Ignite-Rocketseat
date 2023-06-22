import styled from 'styled-components'

export const DivCardsCoffee = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`

export const Card = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  .styleType {
    display: flex;
    gap: 0.25rem;

    p {
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
      background: ${(props) => props.theme['yellow-200']};
      color: ${(props) => props.theme['yellow-700']};
      font: var(--tag);
      margin-top: 0.75rem;
    }
  }

  h3 {
    font: var(--title-s);
    color: ${(props) => props.theme['base-subtitle']};
    margin: 1rem 0 0.5rem;
  }

  p {
    font: var(--text-s);
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const Buy = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font: var(--text-s);
    color: ${(props) => props.theme['base-text']};

    span {
      font: var(--title-m);
      color: ${(props) => props.theme['base-text']};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .buy {
      background: ${(props) => props.theme['purple-700']};
      padding: 0.5rem;
      border: 0;
      border-radius: 6px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.2s;

      svg {
        color: ${(props) => props.theme['base-card']};
      }

      &:hover {
        background: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
