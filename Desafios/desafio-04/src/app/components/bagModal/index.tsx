import * as Dialog from '@radix-ui/react-dialog'
import {
  BagContainer,
  BagDetails,
  BagFooter,
  BagProduct,
  CloseButton,
  Content,
  ImageContainer,
  Overlay,
  Title,
} from './styles'
import { X } from '@phosphor-icons/react'

export default function BagModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Sacola de compras</Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <BagContainer>
          <BagProduct>
            <ImageContainer></ImageContainer>
            <BagDetails>
              <p>Nome Produto</p>
              <p>
                <strong>R$ 79.90</strong>
              </p>
              <div>
                <button>Remover</button>
                <p>
                  <span>2</span> unidades
                </p>
              </div>
            </BagDetails>
          </BagProduct>
        </BagContainer>
        <BagFooter>
          <div>
            <p>
              Quantidade <span>2</span>
            </p>
            <p>
              Valor total <span>R$ 79.90</span>
            </p>
          </div>
          <button>Finalizar compra</button>
        </BagFooter>
      </Content>
    </Dialog.Portal>
  )
}
