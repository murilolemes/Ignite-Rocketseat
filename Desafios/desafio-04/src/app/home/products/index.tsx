'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Arrow from '../components/arrows'

import { HomeProps } from '@/utils/productsInterface'

import { FooterProduct, HomeContainer, HomeContent, Product } from './styles'
import ButtonAddBag from '@/app/components/buttonAddBag'

export default function HomeProducts({ products }: HomeProps) {
  const [currentSlider, setCurrentSlider] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlider(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function handleArrowLeft(e: any) {
    e.stopPropagation() || instanceRef.current?.prev()
  }

  function handleArrowRight(e: any) {
    e.stopPropagation() || instanceRef.current?.next()
  }

  return (
    <HomeContainer>
      <HomeContent ref={sliderRef} className="Keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt=""
                  priority
                />
              </Link>
              <FooterProduct>
                <div>
                  <strong>{product.name}</strong>
                  <span>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(product.price / 100)}
                  </span>
                </div>
                <ButtonAddBag addProduct={product} />
              </FooterProduct>
            </Product>
          )
        })}
      </HomeContent>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            onHandleArrow={handleArrowLeft}
            disabled={currentSlider === 0}
          />
          <Arrow
            onHandleArrow={handleArrowRight}
            disabled={
              currentSlider ===
              instanceRef.current.track.details?.slides.length - 1
            }
            right
          />
        </>
      )}
    </HomeContainer>
  )
}
