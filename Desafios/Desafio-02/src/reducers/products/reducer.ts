import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Product {
  id: string
  img: string
  title: string
  description: string
  value: number
  amount: number
  types: string[]
}

interface ProductsState {
  products: Product[]
}

export function productsReducer(state: ProductsState, action: any) {
  console.log('state', state)
  switch (action.type) {
    case ActionTypes.LIST_PRODUCTS:
      return produce(state, (draft) => {
        draft.products.push(action.payload.listProducts)
      })
    // case ActionTypes.ADD_PRODUCTS:
    //   return produce(state, draft => {
    //     draft.products.push(action.payload.listProducts)
    //   })
    default:
      return state
  }
}
