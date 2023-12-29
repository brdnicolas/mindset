import { Application, ApplicationStates } from '@/contexts/applications/applications.types'

export enum EApplicationsActions {
  SET_APPLICATIONS = 'SET_APPLICATIONS',
  DELETE_APPLICATION = 'DELETE_APPLICATION'
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

type DeleteApplication = {
  type: EApplicationsActions.DELETE_APPLICATION
  payload: {
    id: number
  }
}

export const deleteApplication = (args: { id: number }): DeleteApplication => ({
  type: EApplicationsActions.DELETE_APPLICATION,
  payload: args
})

export type ApplicationsActions = SetApplications | DeleteApplication
