import { Reducer } from 'react'
import { AppState } from './app.types'
import { AppActions, EAppAction } from './app.actions'

export const initialState: AppState = {
  isNavigationTiny: false
}

export const appReducer: Reducer<AppState, AppActions> = (state = initialState, action) => {
  switch (action.type) {
    case EAppAction.SET_IS_NAVIGATION_TINY:
      return { ...state, isNavigationTiny: action.payload.isNavigationTiny }
    default:
      return { ...state }
  }
}
