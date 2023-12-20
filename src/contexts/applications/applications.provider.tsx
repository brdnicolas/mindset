'use client'
import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer } from 'react'
import { applicationsReducer, initialState } from '@/contexts/applications/applications.reducer'
import { ApplicationsActions } from '@/contexts/applications/applications.actions'
import { ApplicationsState } from '@/contexts/applications/applications.types'

type ApplicationsContext = ApplicationsState & {
  dispatch: Dispatch<ApplicationsActions>
}

const applicationsContext = createContext<ApplicationsContext>({ ...initialState, dispatch: () => {} })

export const useApplicationsContext = () => useContext(applicationsContext)

type ApplicationsProviderPropsType = {
  children: ReactNode
}

export const ApplicationsProvider = ({ children }: ApplicationsProviderPropsType) => {
  const [state, dispatch] = useReducer(applicationsReducer, initialState)

  const value: ApplicationsContext = useMemo(() => ({ ...state, dispatch }), [state])
  return <applicationsContext.Provider value={value}>{children}</applicationsContext.Provider>
}
