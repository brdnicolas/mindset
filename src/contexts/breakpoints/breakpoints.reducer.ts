import { Reducer } from 'react'
import { BreakpointsActions, EBreakpointsAction } from '@/contexts/breakpoints/breakpoints.actions'

export type BreakpointsState = {
  isMobile: boolean
  isTablet: boolean
  isLaptop: boolean
  isDesktop: boolean
}

export const initialState: BreakpointsState = {
  isMobile: false,
  isTablet: false,
  isLaptop: false,
  isDesktop: false
}

export const breakpointsReducer: Reducer<BreakpointsState, BreakpointsActions> = (state = initialState, action) => {
  switch (action.type) {
    case EBreakpointsAction.SET_BREAKPOINTS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return { ...state }
  }
}
