import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Form } from './components/Form'
import { Cart } from './components/Cart'
import { Button } from './components/Button'
import { buttonType } from '../../utils/typeButtonPayment'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { Product } from '../../reducers/products/reducer'

import {
  CheckoutContainer,
  RegisterContent,
  TitleAddress,
  Payment,
  TitlePayment,
  Buttons,
} from './styles'

const NewFormDeliveryValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'O CEP precisa ter no mínimo 8 digitos.')
    .max(8, 'O CEP precisa ter no máximo 8 digitos.'),
  address: zod
    .string()
    .min(3, 'O endereço precisa ter no mínimo 3 caracteres.'),
  number: zod
    .string()
    .min(1, 'O número precisa ter no mínimo 1 digito.')
    .max(5, 'O número pode ter no máximo 5 digitos.'),
  complement: zod
    .string()
    .max(30, 'O complemento poder ter no máximo 30 caracteres.'),
  district: zod
    .string()
    .min(3, 'O bairro pode ter no mínimo 3 caracteres.')
    .max(20, 'O bairro pode ter no máximo 20 caracteres.'),
  city: zod
    .string()
    .min(3, 'A cidade precisa ter no mínimo 3 caracteres.')
    .max(20, 'A cidade pode ter no máximo 20 caracteres.'),
  uf: zod
    .string()
    .min(2, 'O UF precisar ter no mínimo 2 caracteres.')
    .max(2, 'O UF precisa ter no máximo 2 caracteres.'),
})

type NewFormDeliveryData = zod.infer<typeof NewFormDeliveryValidationSchema>

export interface NewDelivery {
  product: Product[]
  delivery: NewFormDeliveryData
  payment: string
}

export function Checkout() {
  const navigate = useNavigate()
  const { checkout, productsCart } = useContext(CoffeeContext)
  const [isActiveButton, setIsActiveButton] = useState('')

  function onHandleButtonIsActive(type: string) {
    setIsActiveButton(type)
  }

  const formDelivery = useForm<NewFormDeliveryData>({
    resolver: zodResolver(NewFormDeliveryValidationSchema),
    defaultValues: {
      cep: '',
      address: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset, formState } = formDelivery

  function handleNewDelivery(data: NewFormDeliveryData) {
    const newDelivey = {
      product: productsCart,
      delivery: data,
      payment: isActiveButton,
    }

    checkout(newDelivey)
    reset()
    navigate('/delivery')
  }

  console.log('-->', formState.errors)

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleNewDelivery)} action="">
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
            <FormProvider {...formDelivery}>
              <Form />
            </FormProvider>
          </div>

          <Payment>
            <TitlePayment>
              <CurrencyDollar size={22} />
              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
                    onHandleButtonIsActive={onHandleButtonIsActive}
                    isActive={isActiveButton === button.type}
                  />
                )
              })}
            </Buttons>
          </Payment>
        </RegisterContent>
        <Cart isPayment={!!isActiveButton} />
      </form>
    </CheckoutContainer>
  )
}
