import { createContext, useContext, useReducer } from 'react'

type BucketState = {
  isOpen: boolean
  items: any
  amount: number
  total: number
  isLoading: boolean
}

type BucketAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'REMOVE_ITEM' | 'TOGGLE_NAV'
  payload?: any
}

type BucketContextProviderProps = {
  children: React.ReactNode
}

type BucketContextType = {
  dispatch: React.Dispatch<BucketAction>
  isOpen: boolean
  items: number
  amount: number
  total: number
  isLoading: boolean
}

export const BucketContext = createContext({} as BucketContextType)

const initialState = {
  isOpen: false,
  items: 0,
  amount: 0,
  total: 0,
  isLoading: true
}

export const bucketReducer = (state: BucketState, action: BucketAction) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return { ...state, isOpen: !state.isOpen }

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
