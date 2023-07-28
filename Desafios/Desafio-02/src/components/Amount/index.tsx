import { Minus, Plus } from 'phosphor-react'

import { AmountContainer } from './styles'

interface AmountProps {
  id: string
  amountItem: number
  decrement: (id: string) => void
  increment: (id: string) => void
}

export function Amount({ id, amountItem, decrement, increment }: AmountProps) {
  function handleButtonMinus(id: string) {
    decrement(id)
  }

  function handleButtonPlus(id: string) {
    increment(id)
  }

  return (
    <AmountContainer>
      <button
        type="button"
        onClick={() => handleButtonMinus(id)}
        disabled={amountItem <= 1}
      >
        <Minus size={14} weight="fill" />
      </button>
      <p>{amountItem}</p>
      <button
        type="button"
        onClick={() => handleButtonPlus(id)}
        disabled={amountItem >= 10}
      >
        <Plus size={14} weight="fill" />
      </button>
    </AmountContainer>
  )
}
