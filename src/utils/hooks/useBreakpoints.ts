import { useEffect, useState } from 'react'
import { TAILWIND_BREAKPOINTS } from '@/utils/tailwind/tailwind'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query)
      setMatches(mediaQuery.matches)
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches)
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    },
    [] // Empty array ensures effect is only run on mount and unmount
  )
  return matches
}

export function useBreakpoints() {
  return {
    isMobile: useMediaQuery(`(max-width: ${TAILWIND_BREAKPOINTS.TABLET - 1}px)`),
    isTablet: useMediaQuery(
      `(min-width: ${TAILWIND_BREAKPOINTS.TABLET}px) and (max-width: ${TAILWIND_BREAKPOINTS.LAPTOP - 1}px)`
    ),
    isLaptop: useMediaQuery(
      `(min-width: ${TAILWIND_BREAKPOINTS.LAPTOP}px) and (max-width: ${TAILWIND_BREAKPOINTS.DESKTOP - 1}px)`
    ),
    isDesktop: useMediaQuery(`(min-width: ${TAILWIND_BREAKPOINTS.DESKTOP}px)`)
  }
}
