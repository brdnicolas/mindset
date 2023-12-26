import clsx from 'clsx'
import { InputHTMLAttributes, useState } from 'react'
import { IconName } from '@/components/atoms/icons/types'
import { Icon } from '@/components/atoms/icons/Icon'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  iconName?: IconName
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
}

export const Input = ({ value, iconName, className, handleOnChange, type, label, ...rest }: InputProps) => {
  const [inputType, setInputType] = useState(type)

  const togglePassword = () => {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <div>
      <p className="text-gray-500 text-3.5 mb-3">{label}</p>
      <div className={clsx('relative flex items-center', className)}>
        {iconName && (
          <Icon className={clsx('absolute left-3', value ? 'text-gray-100' : 'text-gray-550')} name={iconName} />
        )}
        <input
          type={inputType}
          value={value}
          className={clsx(
            'transition-all w-full bg-gray-800 rounded-2 p-3 text-sm',
            'text-gray-100 placeholder:text-gray-550',
            'border-[1px] border-gray-600 focus:border-gray-300',
            'focus:ring-2 ring-gray-500 focus:outline-none',
            iconName && 'pl-11',
            type === 'password' && 'pr-11'
          )}
          {...rest}
          onChange={handleOnChange}
        />
        {type === 'password' && (
          <button className="absolute right-3 cursor-pointer" onClick={togglePassword}>
            <Icon
              className={clsx(value ? 'text-gray-100' : 'text-gray-550')}
              name={type === 'password' ? 'eye' : 'eye-blink'}
            />
          </button>
        )}
      </div>
    </div>
  )
}
