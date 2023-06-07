import { Input } from "../../../components/Input";

import { FormContainer } from "./styles";

export function Form() {
  return (
    <FormContainer>
      <div className="divCEP">
        <Input name='CEP' placeholder="CEP" />
      </div>
      <div className="rua">
        <Input name='CEP' placeholder="Rua" />
      </div>
      <div className="num">
        <Input name='CEP' placeholder="Número" />
        <Input name='CEP' placeholder="Complemento" />
      </div>
      <div className="bai">
        <Input name='CEP' placeholder="Bairro" />
        <Input name='CEP' placeholder="Cidade" />
        <Input name='CEP' placeholder="UF" />
      </div>
    </FormContainer>
  )
}