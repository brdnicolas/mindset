export enum EAppAction {
  SET_IS_NAVIGATION_TINY = 'SET_IS_NAVIGATION_TINY'
}

type SetIsNavigationTiny = {
  type: EAppAction.SET_IS_NAVIGATION_TINY
  payload: {
    isNavigationTiny: boolean
  }
}

export const setIsNavigationTiny = (args: { isNavigationTiny: boolean }): SetIsNavigationTiny => ({
  type: EAppAction.SET_IS_NAVIGATION_TINY,
  payload: args
})

export type AppActions = SetIsNavigationTiny
