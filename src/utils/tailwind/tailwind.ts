import tailwindConfig from '../../../tailwind.config'

const parseTailwindBreakpointConfig = (input: string): number => Number(input.slice(0, -2))

export const TAILWIND_BREAKPOINTS = {
  TABLET: parseTailwindBreakpointConfig(tailwindConfig.theme.screens.tablet),
  LAPTOP: parseTailwindBreakpointConfig(tailwindConfig.theme.screens.laptop),
  DESKTOP: parseTailwindBreakpointConfig(tailwindConfig.theme.screens.desktop)
}
