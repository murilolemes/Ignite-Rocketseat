import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 2.5rem 10rem;

  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-top: 5rem;
`

export const DeliveryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h1 {
      font: var(--title-l);
      color: ${(props) => props.theme['yellow-700']};
    }

    p {
      font: var(--text-l);
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const DeliveryDescription = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: linear-gradient(
    to right,
    ${(props) => props.theme['yellow-500']},
    ${(props) => props.theme['purple-500']}
  );
  border-radius: 6px 36px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: white;
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 5px 35px;
  }

  .inf {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    z-index: 1000;

    .img {
      padding: 0.5rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${(props) => props.theme.background};
      }
    }

    .imgMap {
      background: ${(props) => props.theme['purple-500']};
    }

    .imgTimer {
      background: ${(props) => props.theme['yellow-500']};
    }

    .imgCurrency {
      background: ${(props) => props.theme['yellow-700']};
    }

    .data {
      p {
        font: var(--text-m);
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`
