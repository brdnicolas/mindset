import { createContext, Dispatch, ReactNode, useContext, useEffect, useMemo, useReducer } from 'react'
import { breakpointsReducer, BreakpointsState, initialState } from '@/contexts/breakpoints/breakpoints.reducer'
import { BreakpointsActions, setBreakpoints } from '@/contexts/breakpoints/breakpoints.actions'
import { useBreakpoints } from '@/utils/hooks/useBreakpoints'

type BreakpointsContext = BreakpointsState & {
  dispatch: Dispatch<BreakpointsActions>
}

const breakpointsContext = createContext<BreakpointsContext>({ ...initialState, dispatch: () => {} })

export const useBreakpointsContext = () => useContext(breakpointsContext)

type BreakpointsProviderPropsType = {
  children: ReactNode
  isMobileFirst?: boolean
  isDesktopFirst?: boolean
}

export const BreakpointsProvider = ({
  children,
  isMobileFirst = false,
  isDesktopFirst = false
}: BreakpointsProviderPropsType) => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useBreakpoints()
  const [state, dispatch] = useReducer(breakpointsReducer, {
    ...initialState,
    isMobile: isMobileFirst,
    isDesktop: isDesktopFirst
  })

  useEffect(() => {
    dispatch(setBreakpoints({ isMobile, isTablet, isLaptop, isDesktop }))
  }, [isMobile, isTablet, isLaptop, isDesktop])

  const value: BreakpointsContext = useMemo(() => ({ ...state, dispatch }), [state])
  return <breakpointsContext.Provider value={value}>{children}</breakpointsContext.Provider>
}
