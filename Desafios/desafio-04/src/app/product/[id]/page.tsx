import { ProductProps } from '@/utils/productsInterface'
import { Metadata } from 'next'
import { ImageContainer, ProductContainer, ProductDetails } from './styles'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import ButtonAddBag from '@/app/components/buttonAddBag'

export const metadata: Metadata = {
  title: 'Produto | Ignite Shop',
}

export default async function Product({ params }: { params: { id: string } }) {
  const productId = params.id

  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = response.default_price as Stripe.Price

  const products: ProductProps = {
    product: {
      id: response.id,
      name: response.name,
      imageUrl: response.images[0],
      description: response.description,
      defaultPriceId: price.id,
      price: Number(price.unit_amount),
    },
  }

  const { product } = products

  const productAdd = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    defaultPriceId: price.id,
    price: Number(price.unit_amount),
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price / 100)}
        </span>
        <p>{product.description}</p>
        <ButtonAddBag addProduct={productAdd} productId />
      </ProductDetails>
    </ProductContainer>
  )
}
