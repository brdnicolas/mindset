import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { Dropdown, DropdownItemType, DropdownProps } from '@/components/atoms/dropdown/Dropdown'
import { Input } from '@/components/atoms'
import { InputProps } from '@/components/atoms/input/Input'

interface AutocompletPropsType<T> extends InputProps {
  options: DropdownProps<T>['items']
  className?: string
  onItemClick: DropdownProps<T>['onItemClick']
}

export const Autocomplet = <T,>({
  value,
  options,
  placeholder,
  className,
  label,
  onItemClick,
  onChange
}: AutocompletPropsType<T>) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const isOutsideOfDropdown = dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      const isOutsideOfSelect = inputRef.current && !inputRef.current.contains(event.target as Node)

      if (isOutsideOfDropdown && isOutsideOfSelect) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  useEffect(() => {
    if (options.length > 0) {
      setShowDropdown(true)
    }
  }, [options])

  const handleOnItemClick = (item: DropdownItemType<T>) => {
    setShowDropdown(false)
    onItemClick(item)
  }

  return (
    <div ref={inputRef} className={clsx(className, 'relative flex items-center')}>
      <Input label={label} onChange={onChange} value={value} placeholder={placeholder} className="w-full" />
      {showDropdown ? <Dropdown<T> ref={dropdownRef} items={options} onItemClick={handleOnItemClick} /> : null}
    </div>
  )
}
