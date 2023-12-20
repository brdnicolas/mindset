import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'
import { IconName } from '@/components/atoms/icons/types'
import { Icon } from '@/components/atoms/icons/Icon'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  iconName?: IconName
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, iconName, className, handleOnChange, ...rest }: InputProps) => {
  return (
    <div className="relative flex items-center">
      {iconName && (
        <Icon className={clsx('absolute left-3 text-gray-550', { 'text-gray-100': value })} name={iconName} />
      )}
      <input
        value={value}
        className={clsx(
          className,
          'transition-all w-full bg-gray-800 rounded-2 p-3 pl-11 text-sm',
          'text-gray-100 placeholder:text-gray-550',
          'border-[1px] border-gray-600 focus:border-gray-300',
          'focus:ring-2 ring-gray-500 focus:outline-none'
        )}
        {...rest}
        onChange={handleOnChange}
      />
    </div>
  )
}
