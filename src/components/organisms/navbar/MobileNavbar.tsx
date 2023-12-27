import { NavbarLabel } from '@/components'
import { useNavigate } from 'react-router-dom'
import { isActivePath, MAIN_ROUTES } from '@/utils/routing/routing'

export const MobileNavbar = () => {
  const navigate = useNavigate()

  const goTo = (path: string) => {
    navigate(path)
  }

  return (
    <div className="fixed bottom-5 px-5 w-full z-first">
      <div className="p-5 bg-gray-900 border-[1px] border-gray-600 rounded-6 w-full flex gap-4 items-center">
        {MAIN_ROUTES.map((route) => (
          <NavbarLabel iconName={route.iconName} onClick={() => goTo(route.path)} isActive={isActivePath(route.path)} />
        ))}
      </div>
    </div>
  )
}
