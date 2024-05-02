import clsx from 'clsx'
import { Icon } from '../icons/Icon'
import { IconName } from '../icons/types'
import { RefObject, useEffect, useRef, useState } from 'react'
import { Dropdown } from '@/components/atoms/dropdown/Dropdown'
import { useOnClickOutside } from '@/utils/hooks/useOnClickOutside'

type OptionType = {
  value: string
  label: string
}

type SelectPropsType = {
  options: OptionType[]
  iconName?: IconName
  label?: string
  value?: string
  className?: string
  defaultValue: string
  onChange: (option: OptionType) => void
}

export const Select = ({ iconName, label, value, className, defaultValue, options, onChange }: SelectPropsType) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const selectRef = useRef<HTMLDivElement>(null)

  const onClickOnLabel = (option: OptionType) => {
    onChange(option)
    setShowDropdown(!showDropdown)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const isOutsideOfDropdown = dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      const isOutsideOfSelect = selectRef.current && !selectRef.current.contains(event.target as Node)

      if (isOutsideOfDropdown && isOutsideOfSelect) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className={clsx(className)}>
      {label && <p className="text-gray-500 text-3.5 mb-3">{label} cc</p>}
      <div
        ref={selectRef}
        onClick={() => setShowDropdown(!showDropdown)}
        className={clsx('relative flex items-center')}
      >
        {iconName && <Icon className={clsx('absolute left-3 text-gray-100')} name={iconName} />}
        <div
          className={clsx(
            'transition-all w-full bg-gray-800 rounded-2 p-3 text-sm cursor-pointer',
            'text-gray-100 placeholder:text-gray-550',
            'border-[1px] hover:border-gray-300 border-gray-600 focus:border-gray-300',
            'focus:ring-2 ring-gray-500 focus:outline-none',
            iconName && 'pl-11'
          )}
        >
          {value || defaultValue}
        </div>
        {showDropdown && <Dropdown<string> ref={dropdownRef} items={options} onItemClick={onClickOnLabel} />}
      </div>
    </div>
  )
}
