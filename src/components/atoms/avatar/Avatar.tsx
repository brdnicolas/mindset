import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

interface AvatarProps extends ComponentPropsWithoutRef<'div'> {
  src?: string
  alt?: string
  className?: string
}

export const Avatar = ({ src, alt, className = '', ...props }: AvatarProps) => {
  return (
    <div {...props} className={clsx('rounded-4 p-1.5 overflow-hidden bg-gray-650 w-10 h-10', className)}>
      {src ? (
        <img className="w-full h-full object-cover rounded-3" src={src} alt={alt} />
      ) : (
        <div className="bg-gray-600 w-full h-full rounded-full" />
      )}
    </div>
  )
}
