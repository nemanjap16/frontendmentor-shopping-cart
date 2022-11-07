import { createContext, useContext, useReducer } from 'react'
import product from '../../data.json'
import { CartItem } from '../types/Types'

type BucketState = {
  isOpenMenu: boolean
  isOpenCart: boolean
  isOpenModal: boolean
  isLoading: boolean
  cartItem: CartItem
  imgURL: string
  amount: number
  total: number
}

type Actions =
  | 'INCREMENT'
  | 'DECREMENT'
  | 'REMOVE_ITEM'
  | 'TOGGLE_NAV'
  | 'TOGGLE_CART'
  | 'TOGGLE_MODAL'
  | 'SET_URL'
  | 'ADD_ITEM'

type BucketAction = {
  type: Actions
  payload?: any
}

type BucketContextProviderProps = {
  children: React.ReactNode
}

type BucketContextType = {
  dispatch: React.Dispatch<BucketAction>
  isOpenMenu: boolean
  isOpenCart: boolean
  isOpenModal: boolean
  isLoading: boolean
  cartItem: CartItem
  imgURL: string
  amount: number
  total: number
}

export const BucketContext = createContext({} as BucketContextType)

const initialState = {
  isOpenMenu: false,
  isOpenCart: false,
  isOpenModal: false,
  isLoading: true,
  cartItem: product,
  imgURL: product.images[0].url,
  items: product.images,
  amount: 0,
  total: 0
}

export const bucketReducer = (state: BucketState, action: BucketAction) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return { ...state, isOpenMenu: !state.isOpenMenu }

    case 'TOGGLE_CART':
      return { ...state, isOpenCart: !state.isOpenCart }

    case 'TOGGLE_MODAL':
      return {
        ...state,
        isOpenModal: !state.isOpenModal
      }

    case 'SET_URL':
      return { ...state, imgURL: action.payload }

    case 'INCREMENT':
      return { ...state, amount: state.amount + 1 }

    case 'DECREMENT':
      return { ...state, amount: state.amount - 1 }

    case 'REMOVE_ITEM':
      return { ...state, amount: 0 }

    case 'ADD_ITEM':
      return { ...state, amount: 1 }

    default:
      return state
  }
}

export const BucketProvider = ({ children }: BucketContextProviderProps) => {
  const [state, dispatch] = useReducer(bucketReducer, initialState)
  return (
    <BucketContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BucketContext.Provider>
  )
}

// custom hook for bucket context
export const useBucketContext = () => {
  return useContext(BucketContext)
}
