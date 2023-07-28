import { produce } from 'immer'

import { ActionTypes } from './actions'
import { NewDelivery } from '../../pages/Checkout'

export interface Product {
  id: string
  img: string
  title: string
  description: string
  value: number
  amount: number
  types: string[]
  total: number
}

interface ProductsState {
  listProducts: Product[]
  productsCart: Product[]
  delivery: NewDelivery
}

export function productsReducer(state: ProductsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCTS_CART:
      const newProductExists = state.productsCart.findIndex(
        (product) => product.id === action.payload.newProductsCart.id,
      )

      if (newProductExists < 0) {
        return produce(state, (draft) => {
          draft.productsCart.push(action.payload.newProductsCart)
        })
      }

      return produce(state, (draft) => {
        draft.productsCart[newProductExists].amount =
          action.payload.newProductsCart.amount
        draft.productsCart[newProductExists].total =
          draft.listProducts[newProductExists].value *
          draft.productsCart[newProductExists].amount
      })

    case ActionTypes.DECREMENT_ITEM_LIST:
      const decrementItemExists = state.listProducts.findIndex(
        (product) => product.id === action.payload.idItem,
      )

      if (decrementItemExists < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.listProducts[decrementItemExists].amount =
          draft.listProducts[decrementItemExists].amount > 1
            ? draft.listProducts[decrementItemExists].amount - 1
            : draft.listProducts[decrementItemExists].amount

        draft.listProducts[decrementItemExists].total =
          draft.listProducts[decrementItemExists].value *
          draft.listProducts[decrementItemExists].amount
      })
    case ActionTypes.INCREMENT_ITEM_LIST:
      const incrementItemExists = state.listProducts.findIndex(
        (product) => product.id === action.payload.idItem,
      )

      if (incrementItemExists < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.listProducts[incrementItemExists].amount =
          draft.listProducts[incrementItemExists].amount < 10
            ? draft.listProducts[incrementItemExists].amount + 1
            : draft.listProducts[incrementItemExists].amount

        draft.listProducts[incrementItemExists].total =
          draft.listProducts[incrementItemExists].value *
          draft.listProducts[incrementItemExists].amount
      })
    case ActionTypes.DECREMENT_ITEM_CART:
      const decrementItemCartExists = state.productsCart.findIndex(
        (product) => product.id === action.payload.idItem,
      )

      if (decrementItemCartExists < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.productsCart[decrementItemCartExists].amount =
          draft.productsCart[decrementItemCartExists].amount > 1
            ? draft.productsCart[decrementItemCartExists].amount - 1
            : draft.productsCart[decrementItemCartExists].amount

        draft.productsCart[decrementItemCartExists].total =
          draft.productsCart[decrementItemCartExists].value *
          draft.productsCart[decrementItemCartExists].amount
      })
    case ActionTypes.INCREMENT_ITEM_CART:
      const incrementItemCartExists = state.productsCart.findIndex(
        (product) => product.id === action.payload.idItem,
      )

      if (incrementItemCartExists < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.productsCart[incrementItemCartExists].amount =
          draft.productsCart[incrementItemCartExists].amount < 10
            ? draft.productsCart[incrementItemCartExists].amount + 1
            : draft.productsCart[incrementItemCartExists].amount

        draft.productsCart[incrementItemCartExists].total =
          draft.productsCart[incrementItemCartExists].value *
          draft.productsCart[incrementItemCartExists].amount
      })

    case ActionTypes.REMOVE_ITEM_CART:
      const removeItem = state.productsCart.findIndex(
        (product) => product.id === action.payload.idProduct,
      )

      if (removeItem < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.productsCart.splice(removeItem, 1)
      })
    case ActionTypes.NEW_DELIVERY:
      return produce(state, (draft) => {
        draft.delivery = action.payload.newDelivery
        draft.productsCart.length = 0
      })
    default:
      return state
  }
}
