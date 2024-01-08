import { Dispatch, ReactNode, createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { UserState } from './user.types'
import { initialState, userReducer } from './user.reducer'
import { UserActions, setUserData } from './user.action'
import { getMe } from '@/services/user/user'

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

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      return
    }

    getMe()
      .then((data) => {
        dispatch(setUserData(data))
      })
      .catch(() => {
        localStorage.removeItem('token')
        window.location.reload()
      })
  }, [])

  const value: UserContext = useMemo(() => ({ ...state, dispatch }), [state])
  return <userContext.Provider value={value}>{children}</userContext.Provider>
}
