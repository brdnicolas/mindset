import clsx from 'clsx'
import { Icon } from '../icons/Icon'
import { IconName } from '../icons/types'

type AvatarProps = {
  src?: string
  alt?: string
  className?: string
}

export const Avatar = ({ src, alt, className = '' }: AvatarProps) => {
  return (
    <div className={clsx('rounded-full aspect-square overflow-hidden', className)}>
      {src ? (
        <img className="h-full w-full object-cover" src={src} alt={alt} />
      ) : (
        <div className="bg-gray-600 w-full h-full rounded-full" />
      )}
    </div>
  )
}

type AvatarSecondaryProps = {
  iconName?: IconName
  className?: string
}

export const AvatarSecondary = ({ iconName, className = '' }: AvatarSecondaryProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full aspect-square overflow-hidden bg-gray-600 text-gray-500',
        className
      )}
    >
      {iconName ? (
        <Icon className="h-12 w-12 object-cover " name={iconName} />
      ) : (
        <div className="bg-gray-600 w-full h-full rounded-full" />
      )}
    </div>
  )
}
