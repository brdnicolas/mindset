import { Dispatch, ReactNode, createContext, useContext, useMemo, useReducer } from 'react'
import { UserState } from './user.types'
import { initialState, userReducer } from './user.reducer'
import { UserActions } from './user.action'

type UserContext = UserState & {
  dispatch: Dispatch<UserActions>
}

const userContext = createContext<UserContext>({ ...initialState, dispatch: () => {} })

export const useUserContext = () => useContext(userContext)

type UserProviderProps = {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const value: UserContext = useMemo(() => ({ ...state, dispatch }), [state])
  return <userContext.Provider value={value}>{children}</userContext.Provider>
}
