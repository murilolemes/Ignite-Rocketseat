import { ReactNode, createContext, useState } from 'react'

import { Product } from '../reducers/products/reducer'

// import { listAllProductsAction } from '../reducers/products/actions'

import { arrayProducts } from '../utils/listProducts'

interface CoffeeContextType {
  products: Product[]
  removeItemCart: (id: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [products, setProducts] = useState<Product[]>(() => {
    if (!!arrayProducts) {
      return arrayProducts
    }
    return []
  })

  // const [products, dispatch] = useReducer((state: Product[], action: any) => {
  //   if (action.type === 'LIST') {
  //     return [...state, action.payload.arrayProducts]
  //   }

  //   return []
  // }, [])

  // if (products.length !== 0) {
  //   dispatch({
  //     type: 'LIST',
  //     payload: {
  //       arrayProducts
  //     }
  //   })
  // }

  // const [productsState, dispatch] = useReducer(
  //   productsReducer,
  //   {
  //     products: [],
  //   },
  //   (initialState) => {
  //     return initialState
  //   },
  // )

  // const { products } = productsState

  // useEffect(() => {
  //   const stateJSON = JSON.stringify(arrayProducts)

  //   localStorage.setItem('@coffee-delivery:products-1.0.0', stateJSON)
  // }, [arrayProducts])

  // if (!products) {
  //   dispatch({
  //     type: 'LIST_PRODUCTS',
  //     payload: {
  //       arrayProducts
  //     }
  //   })
  // }
  console.log('products', products)

  function removeItemCart(id: string) {
    console.log(id)
  }

  return (
    <CoffeeContext.Provider value={{ products, removeItemCart }}>
      {children}
    </CoffeeContext.Provider>
  )
}
