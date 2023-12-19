import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import { ContainerArrow } from './styles'

interface ArrowProps {
  disabled: boolean
  right?: boolean
  onHandleArrow: (event: any) => void
}

export default function Arrow({ disabled, right, onHandleArrow }: ArrowProps) {
  function handleArrow(e: any) {
    onHandleArrow(e)
  }

  return (
    <ContainerArrow onClick={handleArrow} disabled={disabled} right={right}>
      {right !== true ? <CaretLeft size={48} /> : <CaretRight size={48} />}
    </ContainerArrow>
  )
}
