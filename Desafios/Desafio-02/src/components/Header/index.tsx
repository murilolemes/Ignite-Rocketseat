import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoSVG from '../../assets/logo-coffee-delivery.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { HeaderContainer } from './styles'

export function Header() {
  const { productsCart } = useContext(CoffeeContext)

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
          {productsCart.length <= 0 ? '' : <span>{productsCart.length}</span>}
        </Link>
      </div>
    </HeaderContainer>
  )
}
