import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer } from 'react'
import { appReducer, initialState } from '@/contexts/app/app.reducer'
import { AppActions } from '@/contexts/app/app.actions'
import { AppState } from '@/contexts/app/app.types'

type AppContext = AppState & {
  dispatch: Dispatch<AppActions>
}

const appContext = createContext<AppContext>({ ...initialState, dispatch: () => {} })

export const useAppContext = () => useContext(appContext)

type AppProviderType = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderType) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const value: AppContext = useMemo(() => ({ ...state, dispatch }), [state])

  return <appContext.Provider value={value}>{children}</appContext.Provider>
}
