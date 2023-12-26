import { Application, ApplicationStates } from '@/contexts/applications/applications.types'

export enum EApplicationsActions {
  SET_APPLICATIONS = 'SET_APPLICATIONS'
}

type SetApplications = {
  type: EApplicationsActions.SET_APPLICATIONS
  payload: {
    target?: ApplicationStates
    applications: Application[]
  }
}

export const setApplications = (args: {
  target?: ApplicationStates
  applications: Application[]
}): SetApplications => ({
  type: EApplicationsActions.SET_APPLICATIONS,
  payload: args
})

export type ApplicationsActions = SetApplications
