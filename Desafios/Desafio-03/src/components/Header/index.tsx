import { Link } from 'react-router-dom'
// import backgroundImg from '../../assets/backgroundImg.svg'
import effectLeftImg from '../../assets/effectLeftImg.svg'
import effectRigthImg from '../../assets/effectRigthImg.svg'
import logoImg from '../../assets/logoGitHubBlog.svg'

import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectRigthImg} alt="" />
      <HeaderContent>
        <Link to={'/'}>
          <img src={logoImg} alt="" />
        </Link>
      </HeaderContent>
      <img src={effectLeftImg} alt="" />
    </HeaderContainer>
  )
}
