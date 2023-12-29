import { Reducer } from 'react'
import { ApplicationsActions, EApplicationsActions } from '@/contexts/applications/applications.actions'
import { ApplicationsState, EApplicationState } from '@/contexts/applications/applications.types'

export const initialState: ApplicationsState = {
  applied: [],
  relaunched: [],
  interviewObtained: [],
  archived: []
}

export const applicationsReducer: Reducer<ApplicationsState, ApplicationsActions> = (state = initialState, action) => {
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
            cv: '',
            coverLetter: '',
            id: 3,
            userId: 1,
            applicationState: { name: EApplicationState.applied },
            date: '',
            imageUrl: ''
          }
        ]
      }
    default:
      return { ...state }
  }
}
