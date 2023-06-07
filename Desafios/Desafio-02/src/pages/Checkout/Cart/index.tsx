import { Trash } from 'phosphor-react';
import cafe from '../../../assets/coffee/Type=Americano.svg'

import { CartContainer, CartContent, Item, Total } from "./styles";
import { Amount } from '../../../components/Amount';

export function Cart() {
  return (
    <CartContainer>
      <h3>Cafés selecionados</h3>
      <CartContent>
        <Item>
          <div className='contentItem'>
            <img src={cafe} />
            <div className='description'>
              <p>Expresso Tradicional</p>
              <div className="footerItem">
                <Amount />
                <button>
                  <Trash size={16} />
                  REMOVER
                </button>
              </div>
            </div>
          </div>
          <p>R$ 9,90</p>
        </Item>
        <Item>
          <div className='contentItem'>
            <img src={cafe} />
            <div className='description'>
              <p>Expresso Tradicional</p>
              <div className="footerItem">
                <Amount />
                <button>
                  <Trash size={16} />
                  REMOVER
                </button>
              </div>
            </div>
          </div>
          <p>R$ 9,90</p>
        </Item>
        <Total>
          <div>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div className='total'>
            <p>Total</p>
            <p>R$ 33,20</p>
          </div>
          <button type='button'>
            CONFIRMAR PEDIDO
          </button>
        </Total>
      </CartContent>
    </CartContainer>
  )
}