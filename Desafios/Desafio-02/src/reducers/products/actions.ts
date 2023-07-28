import { NewDelivery } from '../../pages/Checkout'
import { Product } from './reducer'

export enum ActionTypes {
  ADD_NEW_PRODUCTS_CART = 'ADD_NEW_PRODUCTS_CART',
  DECREMENT_ITEM_LIST = 'DECREMENT_ITEM_LIST',
  INCREMENT_ITEM_LIST = 'INCREMENT_ITEM_LIST',
  DECREMENT_ITEM_CART = 'DECREMENT_ITEM_CART',
  INCREMENT_ITEM_CART = 'INCREMENT_ITEM_CART',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
  NEW_DELIVERY = 'NEW_DELIVERY',
}

export function addNewProductCartAction(newProductsCart: Product) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCTS_CART,
    payload: {
      newProductsCart,
    },
  }
}

export function decrementeItemListAction(idItem: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_LIST,
    payload: {
      idItem,
    },
  }
}

export function incrementeItemListAction(idItem: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_LIST,
    payload: {
      idItem,
    },
  }
}

export function decrementeItemCartAction(idItem: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_CART,
    payload: {
      idItem,
    },
  }
}

export function incrementeItemCartAction(idItem: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_CART,
    payload: {
      idItem,
    },
  }
}

export function removeItemCartAction(idProduct: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: {
      idProduct,
    },
  }
}

export function newDelivery(newDelivery: NewDelivery) {
  return {
    type: ActionTypes.NEW_DELIVERY,
    payload: {
      newDelivery,
    },
  }
}
