import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import coffeeSVG from '../../assets/img-coffee.svg'
import { CardsCoffee } from './CardsCoffee'

import { Introduction, Item, MainContainer, OurCoffee } from './styles'

export function Home() {
  return (
    <MainContainer>
      <Introduction>
        <div className="description">
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="items">
            <Item backgroundcoloritems="cart">
              <p>
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </p>
            </Item>
            <Item backgroundcoloritems="packege">
              <p>
                <span>
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </p>
            </Item>
            <Item backgroundcoloritems="timer">
              <p>
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </p>
            </Item>
            <Item backgroundcoloritems="coffee">
              <p>
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </p>
            </Item>
          </div>
        </div>
        <img src={coffeeSVG} alt="" />
      </Introduction>
      <OurCoffee>
        <h2>Nossos cafés</h2>
        <CardsCoffee />
      </OurCoffee>
    </MainContainer>
  )
}
