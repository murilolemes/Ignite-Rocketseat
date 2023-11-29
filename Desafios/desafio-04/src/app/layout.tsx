import { Roboto } from 'next/font/google'

import { getCssText } from '@/styles'
import Header from './components/Header'
import { globalStyles } from '@/styles/global'
import { LayoutContainer } from '@/styles/layout'

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
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <LayoutContainer>
          <Header />

          {children}
        </LayoutContainer>
      </body>
    </html>
  )
}
