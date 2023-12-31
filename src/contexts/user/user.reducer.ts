import { Reducer } from 'react'
import { UserState } from './user.types'
import { EUserActions, UserActions } from './user.action'

export const initialState: UserState = {
  id: 1,
  email: '',
  firstName: '',
  lastName: '',
  applicationsNumber: 1
}

export const userReducer: Reducer<UserState, UserActions> = (state = initialState, action) => {
  switch (action.type) {
    case EUserActions.SET_USER_DATA:
      return { ...state, ...action.payload }
    case EUserActions.UPDATE_APPLICATIONS_NUMBER:
      return { ...state, ...action.payload }
  }
}
