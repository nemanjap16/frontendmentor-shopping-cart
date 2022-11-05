import { createContext, useContext, useReducer } from 'react'
import slides from '../../data.json'

type BucketState = {
  isOpenMenu: boolean
  isOpenCart: boolean
  isOpenModal: boolean
  imgURL: string
  items: {
    title: string
    url: string
  }[]
  amount: number
  total: number
  isLoading: boolean
}

type Actions =
  | 'INCREMENT'
  | 'DECREMENT'
  | 'REMOVE_ITEM'
  | 'TOGGLE_NAV'
  | 'TOGGLE_CART'
  | 'TOGGLE_MODAL'
  | 'SET_URL'

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
  imgURL: string
  items: {
    title: string
    url: string
  }[]
  amount: number
  total: number
  isLoading: boolean
}

export const BucketContext = createContext({} as BucketContextType)

const initialState = {
  isOpenMenu: false,
  isOpenCart: false,
  isOpenModal: false,
  imgURL: slides[0].url,
  items: slides,
  amount: 0,
  total: 0,
  isLoading: true
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
      return { ...state, items: action.payload }

    case 'DECREMENT':
      return { ...state, items: action.payload }

    case 'REMOVE_ITEM':
      return { ...state, items: action.payload }

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
