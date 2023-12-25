'use client'
import { createContext, Dispatch, ReactNode, useContext, useEffect, useMemo, useReducer } from 'react'
import { applicationsReducer, initialState } from '@/contexts/applications/applications.reducer'
import { ApplicationsActions, setApplications } from '@/contexts/applications/applications.actions'
import { ApplicationsState, EApplicationState } from '@/contexts/applications/applications.types'
import { getAllUserApplications } from '@/services/applications/application'

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

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      return
    }

    getAllUserApplications().then((data) => {
      const applied = data.filter((x) => x.applicationState.name === EApplicationState.applied)
      const relaunched = data.filter((x) => x.applicationState.name === EApplicationState.relaunched)
      const interviewObtained = data.filter((x) => x.applicationState.name === EApplicationState.interviewObtained)
      const archived = data.filter((x) => x.applicationState.name === EApplicationState.archived)

      dispatch(setApplications({ target: EApplicationState.applied, applications: applied }))
      dispatch(setApplications({ target: EApplicationState.relaunched, applications: relaunched }))
      dispatch(setApplications({ target: EApplicationState.interviewObtained, applications: interviewObtained }))
      dispatch(setApplications({ target: EApplicationState.archived, applications: archived }))
    })
  }, [])

  const value: ApplicationsContext = useMemo(() => ({ ...state, dispatch }), [state])
  return <applicationsContext.Provider value={value}>{children}</applicationsContext.Provider>
}
