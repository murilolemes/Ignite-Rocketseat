'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import logoImg from '@/assets/logo.svg'

import * as Dialog from '@radix-ui/react-dialog'

import { ButtonBagContainer, HeaderContainer } from './styles'
import { Handbag } from '@phosphor-icons/react'

export default function Header() {
  const pathname = usePathname()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <HeaderContainer pathName={pathname === '/success'}>
          <Link href={'/'}>
            <Image src={logoImg} alt="" />
          </Link>

          <ButtonBagContainer>
            <Handbag size={24} />
            <span>2</span>
          </ButtonBagContainer>
        </HeaderContainer>
      </Dialog.Trigger>
    </Dialog.Root>
  )
}
