import Stripe from 'stripe'

const stripeSecretKey =
  process.env.STRIPE_SECRET_KEY !== undefined
    ? process.env.STRIPE_SECRET_KEY
    : ''

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Ignite Shop',
  },
})
