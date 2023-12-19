import { styled } from '@/styles'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  div: {
    maxWidth: 140,
    width: '100%',
    height: 140,

    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '1.5rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '4rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
      transition: 'color 0.2s',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.6)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '& + div': {
    marginLeft: '-3rem',
  },
})
