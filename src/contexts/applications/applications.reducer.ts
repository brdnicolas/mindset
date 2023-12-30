import { Reducer } from 'react'
import { ApplicationsActions, EApplicationsActions } from '@/contexts/applications/applications.actions'
import { ApplicationsState } from '@/contexts/applications/applications.types'

export const initialState: ApplicationsState = {
  applied: [],
  relaunched: [],
  interviewObtained: [],
  archived: []
}

export const applicationsReducer: Reducer<ApplicationsState, ApplicationsActions> = (state = initialState, action) => {
  const higherId = [...state.applied, ...state.relaunched, ...state.interviewObtained, ...state.archived].reduce(
    (acc, x) => (x.id > acc ? x.id : acc),
    0
  )

  switch (action.type) {
    case EApplicationsActions.SET_APPLICATIONS:
      if (action.payload.target) {
        return {
          ...state,
          [action.payload.target]: action.payload.applications
        }
      } else {
        return {
          ...state,
          ...action.payload
        }
      }
    case EApplicationsActions.ADD_APPLICATION:
      return {
        ...state,
        applied: [
          ...state.applied,
          {
            ...action.payload.application,
            id: higherId,
            userId: -1
          }
        ]
      }
    case EApplicationsActions.DELETE_APPLICATION:
      return {
        applied: state.applied.filter((x) => x.id !== action.payload.id),
        relaunched: state.relaunched.filter((x) => x.id !== action.payload.id),
        interviewObtained: state.interviewObtained.filter((x) => x.id !== action.payload.id),
        archived: state.archived.filter((x) => x.id !== action.payload.id)
      }
    default:
      return { ...state }
  }
}
