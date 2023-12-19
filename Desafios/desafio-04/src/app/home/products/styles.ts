import { styled } from '@/styles'

export const HomeContainer = styled('main', {
  display: 'flex',
})

export const HomeContent = styled('div', {
  display: 'flex',
  width: '100%',
  marginLeft: 'auto',
  minHeight: 656,
  overflow: 'hidden',
})

export const Product = styled('div', {
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const FooterProduct = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '1.25rem 2rem 1.25rem 1.25rem',

  background: 'rgba(0, 0, 0, 0.6)',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  cursor: 'initial',
  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,

    strong: {
      fontSize: '$lg',
      color: '$gray-100',
    },
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },
})
