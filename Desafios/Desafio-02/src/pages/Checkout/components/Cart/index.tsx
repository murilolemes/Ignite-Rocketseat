import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { Amount } from '../../../../components/Amount'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { formatValue } from '../../../../utils/formatValue'

import {
  CartContainer,
  CartContent,
  Item,
  ButtonDeleteItem,
  Total,
} from './styles'

interface CartProps {
  isPayment: boolean
}

export function Cart({ isPayment }: CartProps) {
  const { productsCart, decrementItemCart, incrementItemCart, removeItemCart } =
    useContext(CoffeeContext)

  function handleRemoveItem(id: string) {
    removeItemCart(id)
  }

  const delivery = productsCart.length > 0 ? 3.5 : 0

  const totalItens = productsCart.reduce(
    (acc, product) => acc + product.total,
    0,
  )

  const totalDelivery = totalItens + delivery

  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>
      <CartContent>
        {productsCart.map((product) => (
          <Item key={product.id}>
            <div className="contentItem">
              <img src={product.img} alt="" />
              <div className="description">
                <p>{product.title}</p>
                <div className="footerItem">
                  <Amount
                    id={product.id}
                    amountItem={product.amount}
                    decrement={decrementItemCart}
                    increment={incrementItemCart}
                  />
                  <ButtonDeleteItem
                    type="button"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    <Trash size={16} />
                    REMOVER
                  </ButtonDeleteItem>
                </div>
              </div>
            </div>
            <p>R$ {formatValue(product.total)}</p>
          </Item>
        ))}
        <Total>
          <div>
            <p>Total de itens</p>
            <p>R$ {formatValue(totalItens)}</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ {formatValue(delivery)}</p>
          </div>
          <div id="total">
            <p>Total</p>
            <p>R$ {formatValue(totalDelivery)}</p>
          </div>
          <button
            type="submit"
            disabled={productsCart.length <= 0 || !isPayment}
          >
            CONFIRMAR PEDIDO
          </button>
        </Total>
      </CartContent>
    </CartContainer>
  )
}
