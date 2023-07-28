import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { Product, productsReducer } from '../reducers/products/reducer'
import { arrayProducts } from '../utils/listProducts'
import { NewDelivery } from '../pages/Checkout'

import {
  addNewProductCartAction,
  decrementeItemListAction,
  incrementeItemListAction,
  decrementeItemCartAction,
  incrementeItemCartAction,
  removeItemCartAction,
  newDelivery,
} from '../reducers/products/actions'

interface CoffeeContextType {
  listProducts: Product[]
  productsCart: Product[]
  delivery: NewDelivery
  createNewProductCart: (data: Product) => void
  decrementItemList: (id: string) => void
  incrementItemList: (id: string) => void
  decrementItemCart: (id: string) => void
  incrementItemCart: (id: string) => void
  removeItemCart: (id: string) => void
  checkout: (data: NewDelivery) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

const newDeliveryType = {
  product: [],
  delivery: {
    cep: '',
    address: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    uf: '',
  },
  payment: '',
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [productsState, dispatch] = useReducer(
    productsReducer,
    {
      listProducts: arrayProducts,
      productsCart: [],
      delivery: newDeliveryType,
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery:cart-1.0.0',
      )

      if (storageStateAsJSON) {
        return {
          listProducts: arrayProducts,
          productsCart: JSON.parse(storageStateAsJSON),
          delivery: newDeliveryType,
        }
      }

      return initialState
    },
  )

  const { productsCart, listProducts, delivery } = productsState

  useEffect(() => {
    const stateJSON = JSON.stringify(productsCart)

    if (stateJSON) {
      localStorage.setItem('@ignite-coffee-delivery:cart-1.0.0', stateJSON)
    }
  }, [productsCart])

  function createNewProductCart(data: Product) {
    const newProduct = {
      id: data.id,
      img: data.img,
      title: data.title,
      description: data.description,
      value: data.value,
      total: data.total,
      amount: data.amount,
      types: data.types,
    }

    dispatch(addNewProductCartAction(newProduct))
  }

  function decrementItemList(id: string) {
    dispatch(decrementeItemListAction(id))
  }

  function incrementItemList(id: string) {
    dispatch(incrementeItemListAction(id))
  }

  function decrementItemCart(id: string) {
    dispatch(decrementeItemCartAction(id))
  }

  function incrementItemCart(id: string) {
    dispatch(incrementeItemCartAction(id))
  }

  function removeItemCart(id: string) {
    dispatch(removeItemCartAction(id))
  }

  function checkout(data: NewDelivery) {
    dispatch(newDelivery(data))
  }

  return (
    <CoffeeContext.Provider
      value={{
        listProducts,
        productsCart,
        delivery,
        createNewProductCart,
        decrementItemList,
        incrementItemList,
        decrementItemCart,
        incrementItemCart,
        removeItemCart,
        checkout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
