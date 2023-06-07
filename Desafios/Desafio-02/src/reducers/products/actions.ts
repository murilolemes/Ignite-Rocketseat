import { Product } from './reducer'

export enum ActionTypes {
  LIST_PRODUCTS = 'LIST_PRODUCTS',
  // ADD_PRODUCTS = 'ADD_PRODUCTS'
}

export function listAllProductsAction(listProducts: Product[]) {
  return {
    type: ActionTypes.LIST_PRODUCTS,
    payload: {
      listProducts,
    },
  }
}
