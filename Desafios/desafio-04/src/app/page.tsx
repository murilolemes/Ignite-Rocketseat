import type { Metadata } from 'next'

import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

import HomeProducts from './home/products'

export const metadata: Metadata = {
  title: 'Home | Ignite Shop',
}

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: Number(price.unit_amount),
      defaultPriceId: price.id,
    }
  })

  return <HomeProducts products={products} />
}
