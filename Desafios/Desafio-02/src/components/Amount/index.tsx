import { Minus, Plus } from 'phosphor-react'

import { AmountContainer } from "./styles";

export function Amount() {
  return (
    <AmountContainer>
      <button type='button'>
        <Minus size={14} weight='fill' />
      </button>
      <p>1</p>
      <button type='button'>
        <Plus size={14} weight='fill' />
      </button>
    </AmountContainer>
  )
}