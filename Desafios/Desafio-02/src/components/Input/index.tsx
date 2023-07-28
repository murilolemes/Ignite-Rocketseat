import { InputHTMLAttributes, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  content?: string
  onRegister: string
}

export function Input({ content, onRegister, ...rest }: InputProps) {
  const { register } = useFormContext()
  const [isFocused, setIsFocused] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
  }

  return (
    <InputContainer $isFocused={isFocused} htmlFor={rest.id}>
      <input
        {...register(onRegister)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
      {!!content && (
        <span>
          <i>{content}</i>
        </span>
      )}
    </InputContainer>
  )
}
