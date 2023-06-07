import { InputContainer } from "./styles";

export function Input({ ...rest }) {
  return (
    <InputContainer>
      <input {...rest} />
    </InputContainer>
  )
}