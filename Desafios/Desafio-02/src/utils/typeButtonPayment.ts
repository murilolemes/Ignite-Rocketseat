import React from 'react'

import { Bank, CreditCard, IconProps, Money } from 'phosphor-react'

interface ButtonType {
  type: string
  icon: React.ComponentType<IconProps>
}

export const buttonType: ButtonType[] = [
  {
    type: 'Cartão de crédito',
    icon: CreditCard,
  },
  {
    type: 'Cartão de débito',
    icon: Bank,
  },
  {
    type: 'Dinheiro',
    icon: Money,
  },
]
