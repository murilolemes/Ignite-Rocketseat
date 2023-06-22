import React, { useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  IconProps,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Form } from './Form'

import {
  CheckoutContainer,
  RegisterContent,
  TitleAddress,
  Payment,
  TitlePayment,
  Buttons,
} from './styles'
import { Cart } from './Cart'
import { Button } from './Button'

interface ButtonType {
  type: string
  icon: React.ComponentType<IconProps>
  active?: boolean
}

const buttonType: ButtonType[] = [
  {
    type: 'Cartão de crédito',
    icon: CreditCard,
    // active: false,
  },
  {
    type: 'Cartão de débito',
    icon: Bank,
    // active: false,
  },
  {
    type: 'Dinheiro',
    icon: Money,
    // active: false,
  },
]

export function Checkout() {
  const [isActive, setIsActive] = useState(false)

  async function handleButtonIsActive(type: string) {
    const btnTypeExists = buttonType.find((button) => button.type === type)

    if (btnTypeExists) {
      setIsActive(true)
    }

    return isActive
  }

  return (
    <CheckoutContainer>
      <RegisterContent>
        <h3>Complete seu pedido</h3>

        <div className="data">
          <TitleAddress>
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleAddress>
          <Form />
        </div>

        <Payment>
          <TitlePayment>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </TitlePayment>

          <Buttons>
            {buttonType.map((button) => {
              return (
                <Button
                  key={button.type}
                  content={button.type}
                  icon={button.icon}
                  onHandleButtonIsActive={handleButtonIsActive}
                />
              )
            })}
            {/* <button type="button">
              <CreditCard size={18} />
              CARTÃO DE CRÉDITO
            </button>
            <button type="button">
              <Bank size={18} />
              CARTÃO DE DÉBITO
            </button>
            <button type="button">
              <Money size={18} />
              DINHEIRO
            </button> */}
          </Buttons>
        </Payment>
      </RegisterContent>
      <Cart />
    </CheckoutContainer>
  )
}
