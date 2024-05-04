import { Icon } from '@iconify/react'
import clsx from 'clsx'

interface CommandProps {
  children: string
  className?: string
}

export const Command = ({ children, className }: CommandProps) => {
  return (
    <div className={clsx('w-6 h-6 flex justify-center items-center border-[1px] border-gray-500 rounded-2', className)}>
      {children.toString().toLowerCase() === 'cmd' ? (
        <Icon icon="solar:command-outline" className="text-gray-500 text-2" />
      ) : (
        <p className="text-3 text-gray-500">{children}</p>
      )}
    </div>
  )
}
