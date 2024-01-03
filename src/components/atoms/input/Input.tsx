import clsx from 'clsx'
import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react'
import { IconName } from '@/components/atoms/icons/types'
import { Icon } from '@/components/atoms/icons/Icon'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  iconName?: IconName
  errorMessage?: string
  label?: string
}

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { value, iconName, className, type, errorMessage, label, ...rest } = props
  const [inputType, setInputType] = useState(type)

  const togglePassword = () => {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <div className={clsx(className)}>
      {label && <p className="text-gray-500 text-3.5 mb-3">{label}</p>}
      <div className={clsx('relative flex items-center')}>
        {iconName && (
          <Icon className={clsx('absolute left-3', value ? 'text-gray-100' : 'text-gray-550')} name={iconName} />
        )}
        <input
          ref={ref}
          type={inputType}
          value={value}
          className={clsx(
            'transition-all w-full bg-gray-800 rounded-2 p-3 text-sm',
            'text-gray-100 placeholder:text-gray-550',
            'border-[1px] border-gray-600 focus:border-gray-300',
            'focus:ring-2 ring-gray-500 focus:outline-none hover:!ring-gray-300',
            iconName && 'pl-11',
            type === 'password' && 'pr-11',
            errorMessage ? 'ring-2 ring-red-500' : 'ring-0'
          )}
          {...rest}
        />
        {type === 'password' && (
          <button type="button" className="absolute right-3 cursor-pointer" onClick={togglePassword}>
            <Icon
              className={clsx(value ? 'text-gray-100' : 'text-gray-550')}
              name={type === 'password' ? 'eye' : 'eye-blink'}
            />
          </button>
        )}
      </div>
      {errorMessage && <p className="text-red-500 text-3 mt-3">{errorMessage}</p>}
    </div>
  )
})
