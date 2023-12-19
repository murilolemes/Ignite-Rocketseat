'use client'

import { Handbag } from '@phosphor-icons/react'
import { ButtonAddBagContainer } from './styles'
import { Product } from '@/utils/productsInterface'

interface ButtonAddBagProps {
  addProduct: Product
  productId?: boolean
}

export default function ButtonAddBag({
  addProduct,
  productId,
}: ButtonAddBagProps) {
  function handleAddProductBag(product: Product) {
    console.log('button add Bag', product)
  }

  return (
    <ButtonAddBagContainer
      onClick={() => handleAddProductBag(addProduct)}
      buttonStyledProduct={!!productId}
    >
      {productId ? 'Colocar na sacola' : <Handbag size={32} />}
    </ButtonAddBagContainer>
  )
}
