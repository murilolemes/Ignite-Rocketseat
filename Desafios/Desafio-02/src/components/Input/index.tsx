import { InputHTMLAttributes, useState } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  content?: string
}

export function Input({ content, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
  }

  return (
    <InputContainer $isFocused={isFocused}>
      <input onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
      {!!content && (
        <span>
          <i>{content}</i>
        </span>
      )}
    </InputContainer>
  )
}
