import { Input } from '../../../../components/Input'

import {
  FormContainer,
  InputCEP,
  InputAddress,
  InputsNumberComplement,
  InputsDistrictCityUf,
} from './styles'

export function Form() {
  return (
    <FormContainer>
      <InputCEP>
        <Input id="cep" type="number" placeholder="CEP" onRegister="cep" />
      </InputCEP>
      <InputAddress>
        <Input id="address" placeholder="Rua" onRegister="address" />
      </InputAddress>
      <InputsNumberComplement>
        <Input
          id="number"
          type="number"
          placeholder="Número"
          onRegister="number"
        />
        <Input
          id="complement"
          placeholder="Complemento"
          content="Opcional"
          onRegister="complement"
        />
      </InputsNumberComplement>
      <InputsDistrictCityUf>
        <Input id="district" placeholder="Bairro" onRegister="district" />
        <Input id="city" placeholder="Cidade" onRegister="city" />
        <Input id="uf" placeholder="UF" onRegister="uf" />
      </InputsDistrictCityUf>
    </FormContainer>
  )
}
