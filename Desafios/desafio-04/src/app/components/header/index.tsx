'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import * as Dialog from '@radix-ui/react-dialog'

import { Handbag } from '@phosphor-icons/react'

import logoImg from '@/assets/logo.svg'

import { ButtonBagContainer, HeaderContainer } from './styles'
import BagModal from '../bagModal'

export default function Header() {
  const pathname = usePathname()

  return (
    <HeaderContainer pathName={pathname === '/success'}>
      <Link href={'/'}>
        <Image src={logoImg} alt="" />
      </Link>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonBagContainer>
            <Handbag size={24} />
            <span>2</span>
          </ButtonBagContainer>
        </Dialog.Trigger>
        <BagModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}
