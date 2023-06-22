import React, { InputHTMLAttributes, useState } from 'react'
import { IconProps } from 'phosphor-react'
import { ButtonContainer } from './styles'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconProps>
  content: string
  onHandleButtonIsActive: (type: string) => void
}

export function Button({
  icon: Icon,
  content,
  onHandleButtonIsActive,
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false)
  function handleButtonIsActive(type: string) {
    onHandleButtonIsActive(type)
    setIsActive(true)
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
