import { createContext, useContext, useReducer } from 'react'

type BucketState = {
  items: any
  amount: number
  total: number
  isLoading: boolean
}

type BucketAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'REMOVE_ITEM'
  payload?: any
}

type BucketContextProviderProps = {
  children: React.ReactNode
}

type BucketContextType = {
  dispatch: React.Dispatch<BucketAction>
}

export const BucketContext = createContext({} as BucketContextType)

const initialState = {
  items: 0,
  amount: 0,
  total: 0,
  isLoading: true,
}

export const bucketReducer = (state: BucketState, action: BucketAction) => {
  switch (action.type) {
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
