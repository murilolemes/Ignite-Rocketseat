import Link from 'next/link'
import { ImageContainer, SuccessContainer } from './styles'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sucesso | Ignite Shop',
}

export default function Success() {
  return (
    <SuccessContainer>
      <div>
        <ImageContainer></ImageContainer>
      </div>

      <h1>Compra efetuada!</h1>

      <p>
        Uhuul <strong>Murilo Lemes</strong>, sua compra de <strong>2</strong>{' '}
        camisetas já está a caminho de sua casa.
      </p>

      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
