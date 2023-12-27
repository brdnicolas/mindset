export enum EBreakpointsAction {
  SET_BREAKPOINTS = 'SET_BREAKPOINTS'
}

type SetBreakpoints = {
  type: EBreakpointsAction.SET_BREAKPOINTS
  payload: {
    isMobile: boolean
    isTablet: boolean
    isLaptop: boolean
    isDesktop: boolean
  }
}

export const setBreakpoints = (args: {
  isMobile: boolean
  isTablet: boolean
  isLaptop: boolean
  isDesktop: boolean
}): SetBreakpoints => ({
  type: EBreakpointsAction.SET_BREAKPOINTS,
  payload: args
})

export type BreakpointsActions = SetBreakpoints
