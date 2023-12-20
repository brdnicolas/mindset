import { ApplicationsState, ApplicationStatus } from '@/contexts/applications/applications.types'

export enum EApplicationsActions {
  SET_APPLICATIONS = 'SET_APPLICATIONS'
}

type SetApplications = {
  type: EApplicationsActions.SET_APPLICATIONS
  payload: {
    target?: ApplicationStatus
    applications: ApplicationsState[]
  }
}

export const setApplications = (args: {
  target?: ApplicationStatus
  applications: ApplicationsState[]
}): SetApplications => ({
  type: EApplicationsActions.SET_APPLICATIONS,
  payload: args
})

export type ApplicationsActions = SetApplications
