import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { Form } from "./Form";

import { CheckoutContainer, RegisterContent, TitleAddress, Payment, TitlePayment, Buttons } from "./styles";
import { Cart } from "./Cart";

export function Checkout() {
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
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </TitlePayment>

          <Buttons>
            <button>
              <CreditCard size={18} />
              CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank size={18} />
              CARTÃO DE DÉBITO
            </button>
            <button>
              <Money size={18} />
              DINHEIRO
            </button>
          </Buttons>
        </Payment>
      </RegisterContent>
      <Cart />
    </CheckoutContainer>
  )
}
