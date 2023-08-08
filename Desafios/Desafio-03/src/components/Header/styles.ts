import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background: linear-gradient(
    to left,
    ${(props) => props.theme.blue} -250%,
    ${(props) => props.theme['base-profile']},
    ${(props) => props.theme.blue} 350%
  );

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: -1;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;

  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
`
