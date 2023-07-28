import styled from 'styled-components'

export const FormContainer = styled.div``

const BaseInputStyle = styled.div`
  display: grid;

  & + div {
    margin-top: 16px;
  }
`

export const InputCEP = styled(BaseInputStyle)`
  grid-template-columns: 12.5rem;
`

export const InputAddress = styled(BaseInputStyle)``

export const InputsNumberComplement = styled(BaseInputStyle)`
  grid-template-columns: 12.5rem auto;
  gap: 12px;
`

export const InputsDistrictCityUf = styled(BaseInputStyle)`
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 12px;
`
