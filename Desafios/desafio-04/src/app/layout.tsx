import { Roboto } from 'next/font/google'
import { CartProvider } from 'use-shopping-cart'

import Header from './components/header'
import { globalStyles } from '@/styles/global'
import { LayoutContainer } from '@/styles/layout'
import { getCssText } from '@/styles'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

globalStyles()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const publicKey = process.env.STRIPE_PUBLIC_KEY
    ? process.env.STRIPE_PUBLIC_KEY
    : ''

  return (
    <html lang="en" className={roboto.className}>
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <CartProvider
          shouldPersist
          cartMode="checkout-session"
          stripe={publicKey}
          currency="BRL"
        >
          <LayoutContainer>
            <Header />

            {children}
          </LayoutContainer>
        </CartProvider>
      </body>
    </html>
  )
}
