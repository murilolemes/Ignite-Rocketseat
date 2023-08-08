import styled from 'styled-components'

export const PostContainer = styled.main``

export const PostInfo = styled.div`
  width: 100%;
  max-width: 864px;

  border-radius: 10px;
  margin: 0 auto;
  margin-top: -96px;
  padding: 2.5rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      font: var(--link);
      font-weight: bold;
      line-height: 0;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;

      padding-bottom: 0.25rem;

      border-bottom: 1px solid transparent;

      &:hover {
        transition: border-bottom 0.2s;
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    font: var(--title-l);
    color: ${(props) => props.theme['base-title']};
  }

  .info {
    display: flex;
    gap: 1.5rem;

    p {
      font: var(--text-m);
      line-height: 0;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const PostContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  div {
    background: ${(props) => props.theme['base-post']};
    border-radius: 2px;
    padding: 1rem;
    margin-top: 1.5rem;
  }
`
