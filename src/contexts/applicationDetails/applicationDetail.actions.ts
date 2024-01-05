import { ApplicationDetailsState } from './applicationDetail.types'

export enum EApplicationDetailsActions {
  SET_APPLICATION_DETAILS = 'SET_APPLICATION_DETAILS'
}

export type SetApplicationDetails = {
  type: EApplicationDetailsActions.SET_APPLICATION_DETAILS
  payload: ApplicationDetailsState
}

export const setApplicationsDetails = (args: ApplicationDetailsState): SetApplicationDetails => ({
  type: EApplicationDetailsActions.SET_APPLICATION_DETAILS,
  payload: args
})

export type ApplicationDetailsActions = SetApplicationDetails
