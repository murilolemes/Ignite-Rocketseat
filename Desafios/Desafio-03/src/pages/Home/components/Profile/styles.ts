import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;
  height: 212px;

  border-radius: 10px;
  margin: 0 auto;
  margin-top: -96px;
  padding: 2.5rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const TitleProfile = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font: var(--title-l);
    color: ${(props) => props.theme['base-title']};
  }

  a {
    text-decoration: none;
    font: var(--link);
    color: ${(props) => props.theme.blue};
    padding-bottom: 0.25rem;
    line-height: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 1px solid transparent;

    svg {
      color: ${(props) => props.theme.blue};
    }

    &:hover {
      transition: border-bottom 0.2s;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const DescriptionProfile = styled.p`
  font: var(--text-m);
  margin-top: 0.5rem;
`

export const InfoProfile = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;

  p {
    font: var(--text-m);
    line-height: 0;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
