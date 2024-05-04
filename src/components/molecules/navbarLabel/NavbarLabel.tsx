import { Icon } from '@iconify/react'
import clsx from 'clsx'

type NavbarLabelProps = {
  iconName: string
  children?: React.ReactNode
  onClick: () => void
  isActive: boolean
  className?: string
  hasNotification?: boolean
}

export const NavbarLabel = ({
  iconName,
  children,
  onClick,
  isActive,
  className,
  hasNotification
}: NavbarLabelProps) => {
  return (
    <div
      className={clsx(
        'p-2 flex items-center cursor-pointer transition-al text-white rounded-2',
        className,
        isActive ? 'bg-gray-600' : 'bg-transparent hover:bg-gray-600'
      )}
      onClick={onClick}
    >
      <Icon className="w-8 h-8 laptop:w-6 laptop:h-6" icon={iconName} />
      {children ? <p className="ml-2 text-4 font-medium">{children}</p> : null}
      {hasNotification ? <div className="w-[5px] h-[5px] bg-[#FA382B] rounded-full ml-auto" /> : null}
    </div>
  )
}
