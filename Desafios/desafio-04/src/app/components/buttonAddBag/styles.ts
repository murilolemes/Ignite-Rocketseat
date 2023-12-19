import { styled } from '@/styles'

export const ButtonAddBagContainer = styled('button', {
  padding: '0.75rem',
  borderRadius: 6,
  background: '$green500',
  border: 0,
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    color: '$white',
  },

  '&:hover': {
    background: '$green300',
    transition: 'background-color 0.2s',
  },

  variants: {
    buttonStyledProduct: {
      true: {
        marginTop: 'auto',
        color: '$white',
        padding: '1.25rem',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:disabled': {
          opacity: 0.6,
          cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
          background: '$green300',
        },
      },
    },
  },
})
