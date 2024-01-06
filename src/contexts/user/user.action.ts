import { UserState } from './user.types'

export enum EUserActions {
  SET_USER_DATA = 'SET_USER_DATA',
  INCREASED_APPLICATION_NUMBER = 'INCREASED_APPLICATION_NUMBER',
  DECREASED_APPLICATION_NUMBER = 'DECREASED_APPLICATION_NUMBER'
}

export type SetUserData = {
  type: EUserActions.SET_USER_DATA
  payload: UserState
}

export const setUserData = (args: UserState): SetUserData => ({
  type: EUserActions.SET_USER_DATA,
  payload: args
})

export type IncreasedApplicationNumber = {
  type: EUserActions.INCREASED_APPLICATION_NUMBER
  payload: number
}

export type DecreaseApplicationsNumber = {
  type: EUserActions.DECREASED_APPLICATION_NUMBER
  payload: number
}

export const increasedApplicationsNumber = (number: number): IncreasedApplicationNumber => ({
  type: EUserActions.INCREASED_APPLICATION_NUMBER,
  payload: number
})

export const decreaseApplicationsNumber = (number: number): DecreaseApplicationsNumber => ({
  type: EUserActions.DECREASED_APPLICATION_NUMBER,
  payload: number
})

export type UserActions = SetUserData | IncreasedApplicationNumber | DecreaseApplicationsNumber
