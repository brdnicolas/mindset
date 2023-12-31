export enum EUserActions {
  SET_USER_DATA = 'SET_USER_DATA'
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

export type UserActions = SetUserData
