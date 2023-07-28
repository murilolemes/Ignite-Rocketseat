import React, { InputHTMLAttributes } from 'react'
import { IconProps } from 'phosphor-react'

import { ButtonContainer } from './styles'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconProps>
  content: string
  isActive: boolean
  onHandleButtonIsActive: (type: string) => void
}

export function Button({
  icon: Icon,
  content,
  isActive,
  onHandleButtonIsActive,
}: ButtonProps) {
  function handleButtonIsActive(type: string) {
    onHandleButtonIsActive(type)
  }

  return (
    <ButtonContainer
      type="button"
      onClick={() => handleButtonIsActive(content)}
      $isActive={isActive}
    >
      {Icon && <Icon size={18} />}
      {content}
    </ButtonContainer>
  )
}
