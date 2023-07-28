import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import DeliveryIMG from '../../assets/img-delivery.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import {
  DeliveryContainer,
  DeliveryContent,
  DeliveryDescription,
} from './styles'

export function Delivery() {
  const { delivery } = useContext(CoffeeContext)

  console.log(delivery)
  return (
    <DeliveryContainer>
      <DeliveryContent>
        <div className="title">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <DeliveryDescription>
          <div className="inf">
            <div className="img imgMap">
              <MapPin size={24} weight="fill" />
            </div>
            <div className="data">
              <p>
                Entrega em{' '}
                <strong>
                  {delivery.delivery.address}, {delivery.delivery.number}
                </strong>
              </p>
              <p>
                {delivery.delivery.district} - {delivery.delivery.city},{' '}
                {delivery.delivery.uf}
              </p>
            </div>
          </div>
          <div className="inf">
            <div className="img imgTimer">
              <Timer size={24} weight="fill" />
            </div>
            <div className="data">
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>
          <div className="inf">
            <div className="img imgCurrency">
              <CurrencyDollar size={24} />
            </div>
            <div className="data">
              <p>Pagamento na entrega</p>
              <p>
                <strong>{delivery.payment}</strong>
              </p>
            </div>
          </div>
        </DeliveryDescription>
      </DeliveryContent>
      <img src={DeliveryIMG} alt="" />
    </DeliveryContainer>
  )
}
