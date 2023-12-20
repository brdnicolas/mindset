import { Icon } from '@/components/atoms/icons/Icon'
import { IconName } from '@/components/atoms/icons/types'
import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  iconName?: IconName
  onClick: () => void
  className?: string
  iconPosition?: 'left' | 'right'
}

export const Button = ({ children, iconName, className, onClick, iconPosition }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'transition-all flex items-center gap-3 bg-gray-50 rounded-2 py-2 px-10 text-gray-800',
        iconPosition ? 'flex-row-reverse' : 'flex-row',
        'hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 ring-gray-500 border-[1px] border-gray-800'
      )}
    >
      <>
        {iconName && <Icon name={iconName} />}
        {children}
      </>
    </button>
  )
}
