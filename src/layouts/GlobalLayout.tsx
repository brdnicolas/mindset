import { useBreakpointsContext } from '@/contexts/breakpoints/breakpoints.provider'
import { MobileHeader } from '@/components/organisms/header/MobileHeader'
import { DesktopNavbar } from '@/components/organisms/navbar/DesktopNavbar'
import { MobileNavbar } from '@/components'

type GlobalLayoutProps = {
  children: React.ReactNode
}
export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const { isMobile, isTablet } = useBreakpointsContext()
  const isMobileOrTablet = isMobile || isTablet

  return (
    <div className="h-full flex flex-col laptop:flex-row w-full">
      {isMobileOrTablet && <MobileNavbar />}
      {isMobileOrTablet ? <MobileHeader /> : <DesktopNavbar />}
      <div className="w-full overflow-hidden pb-0 p-6 h-full">{children}</div>
    </div>
  )
}
