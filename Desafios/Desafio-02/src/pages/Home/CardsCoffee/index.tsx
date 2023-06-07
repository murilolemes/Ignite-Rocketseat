import { ShoppingCart } from 'phosphor-react'

import { DivCardsCoffee, Card, Buy } from './styled'
import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'
import { formatValue } from '../../../utils/formatValue'
import { Amount } from '../../../components/Amount'

export function CardsCoffee() {
  const { products } = useContext(CoffeeContext)

  return (
    <DivCardsCoffee>
      {
        products.map(product => {
          return (
            <Card key={product.id}>
              <img src={product.img} />
              <div className='styleType'>
                {product.types.map(type => (
                  <p key={type}>{type}</p>
                ))}
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Buy>
                <p>R$ <span>{formatValue(product.value)}</span></p>
                <div className="actions">
                  <Amount />
                  <button className='buy'><ShoppingCart size={22} weight='fill' /></button>
                </div>
              </Buy>
            </Card>
          )
        })
      }
    </DivCardsCoffee>
  )
}
