import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logoSVG from '../../assets/logo-coffee-delivery.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logoSVG} alt="Logo Coffee Delivery" />
      </Link>
      <div>
        <p>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </p>
        <Link to={'/checkout'}>
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </Link>
      </div>
    </HeaderContainer>
  )
}
