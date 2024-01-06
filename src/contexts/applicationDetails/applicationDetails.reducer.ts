import { Reducer } from 'react'
import { ApplicationDetailsState } from './applicationDetails.types'
import { ApplicationDetailsActions, EApplicationDetailsActions } from './applicationDetails.actions'

export const initialState: ApplicationDetailsState = {
  id: 1,
  job: '',
  company: '',
  applicationDate: '',
  cv: null,
  coverLetter: null,
  companyImageUrl: '',
  userId: 1,
  applicationState: {
    name: 'applied'
  }
}

export const applicationDetailsReducer: Reducer<ApplicationDetailsState, ApplicationDetailsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case EApplicationDetailsActions.SET_INFORMATION:
      return { ...state, ...action.payload }
    default:
      return { ...state }
  }
}
