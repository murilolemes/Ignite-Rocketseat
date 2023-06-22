import { Input } from '../../../components/Input'

import { FormContainer } from './styles'

export function Form() {
  return (
    <FormContainer>
      <div className="divCEP">
        <Input name="CEP" placeholder="CEP" />
      </div>
      <div className="address">
        <Input name="address" placeholder="Rua" />
      </div>
      <div className="num">
        <Input name="number" placeholder="Número" />
        <Input name="complement" placeholder="Complemento" content="Opcional" />
      </div>
      <div className="district">
        <Input name="district" placeholder="Bairro" />
        <Input name="city" placeholder="Cidade" />
        <Input name="uf" placeholder="UF" />
      </div>
    </FormContainer>
  )
}
