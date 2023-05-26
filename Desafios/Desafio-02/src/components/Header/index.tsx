import { MapPin, ShoppingCart } from 'phosphor-react'
import logoSVG from '../../assets/logo-coffee-delivery.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="Logo Coffee Delivery" />
      <div>
        <a href="#">
          <MapPin size={22} weight="fill" />
          Olímpia, SP
        </a>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
