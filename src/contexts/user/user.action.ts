import { UserState } from './user.types'

export enum EUserActions {
  SET_USER_DATA = 'SET_USER_DATA',
  UPDATE_APPLICATIONS_NUMBER = 'UPDATE_APPLICATIONS_NUMBER'
}

export type SetUserData = {
  type: EUserActions.SET_USER_DATA
  payload: UserState
}

export const setUserData = (args: UserState): SetUserData => ({
  type: EUserActions.SET_USER_DATA,
  payload: args
})

export type UpdateApplicationsNumber = {
  type: EUserActions.UPDATE_APPLICATIONS_NUMBER
  payload: number
}

export const updateApplicationsNumber = (number: number): UpdateApplicationsNumber => ({
  type: EUserActions.UPDATE_APPLICATIONS_NUMBER,
  payload: number
})

export type UserActions = SetUserData | UpdateApplicationsNumber
