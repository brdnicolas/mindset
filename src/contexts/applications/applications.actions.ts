import { Application, ApplicationStates } from '@/contexts/applications/applications.types'

export enum EApplicationsActions {
  SET_APPLICATIONS = 'SET_APPLICATIONS',
  ADD_APPLICATION = 'ADD_APPLICATION'
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

type AddApplication = {
  type: EApplicationsActions.ADD_APPLICATION
  payload: {
    application: { job: string; company: string; jobOfferUrl: string; applicationDate: string }
  }
}

export const addApplication = (args: {
  application: { job: string; company: string; jobOfferUrl: string; applicationDate: string }
}): AddApplication => ({
  type: EApplicationsActions.ADD_APPLICATION,
  payload: args
})

export type ApplicationsActions = SetApplications | AddApplication
