import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { CoffeeContext } from '../../../contexts/CoffeeContext'
import { formatValue } from '../../../utils/formatValue'
import { Amount } from '../../../components/Amount'
import { Product } from '../../../reducers/products/reducer'

import { DivCardsCoffee, Card, Buy } from './styled'

export function CardsCoffee() {
  const {
    listProducts,
    createNewProductCart,
    decrementItemList,
    incrementItemList,
  } = useContext(CoffeeContext)
  function newProductCart(data: Product) {
    createNewProductCart(data)
  }

  return (
    <DivCardsCoffee>
      {listProducts.map((product) => {
        return (
          <Card key={product.id}>
            <img src={product.img} alt="" />
            <div className="styleType">
              {product.types.map((type) => (
                <p key={type}>{type}</p>
              ))}
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Buy>
              <p>
                R$ <span>{formatValue(product.total)}</span>
              </p>
              <div className="actions">
                <Amount
                  id={product.id}
                  amountItem={product.amount}
                  decrement={decrementItemList}
                  increment={incrementItemList}
                />
                <button className="buy" onClick={() => newProductCart(product)}>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </Buy>
          </Card>
        )
      })}
    </DivCardsCoffee>
  )
}
