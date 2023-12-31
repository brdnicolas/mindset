export enum EUserActions {
  SET_USER_DATA = 'SET_USER_DATA',
  UPDATE_APPLICATIONS_NUMBER = 'UPDATE_APPLICATIONS_NUMBER'
}

export type SetUserData = {
  type: EUserActions.SET_USER_DATA
  payload: {
    id: number
    email: string
    firstName: string
    lastName: string
    applicationsNumber: number
  }
}

export const setUserData = (args: {
  id: number
  email: string
  firstName: string
  lastName: string
  applicationsNumber: number
}): SetUserData => ({
  type: EUserActions.SET_USER_DATA,
  payload: args
})

export type UpdateApplicationsNumber = {
  type: EUserActions.UPDATE_APPLICATIONS_NUMBER
  payload: {
    applicationsNumber: number
  }
}

export const updateApplicationsNumber = (args: { applicationsNumber: number }): UpdateApplicationsNumber => ({
  type: EUserActions.UPDATE_APPLICATIONS_NUMBER,
  payload: args
})

export type UserActions = SetUserData | UpdateApplicationsNumber
