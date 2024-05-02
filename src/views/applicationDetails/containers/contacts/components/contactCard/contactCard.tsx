import { AvatarSecondary } from '@/components/atoms/avatar/Avatar'
import { IconButtonTertiary } from '@/components/atoms/button/Button'
import { Dropdown } from '@/components/atoms/dropdown/Dropdown'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface ContactCardProps {
  name: string
  job: string
  mail: string
  phone: string
}

export const ContactCard = ({ name, job, mail, phone }: ContactCardProps) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const contactOption = [
    { label: 'Mettre le contact en favoris', value: 'favorite' },
    { label: 'Modifier le contact', value: 'modify' },
    { label: 'Supprimer le contact', value: 'delete' }
  ]

  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const isOutsideOfDropdown = dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      const isOutsideOfSelect = buttonRef.current && !buttonRef.current.contains(event.target as Node)

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
    <div
      className={clsx(
        'flex items-center justify-between mt-6 text-4 text-gray-200',
        'hover:text-white hover:cursor-pointer'
      )}
    >
      <div className={clsx('flex items-center')}>
        <AvatarSecondary className="h-20" iconName="user" />
        <div className={clsx('ml-3')}>
          <p className={clsx('text-gray-100 font-bold')}>{name}</p>
          <p>{job}</p>
        </div>
      </div>
      <div>
        <p>{mail}</p>
        <p>{phone}</p>
      </div>
      <div className={clsx('relative flex flex-col items-end w-[12vw]')}>
        <IconButtonTertiary
          ref={buttonRef}
          iconName="more-horizontal"
          onClick={() => {
            setShowDropdown(!showDropdown)
          }}
        />
        {showDropdown && (
          <Dropdown
            ref={dropdownRef}
            items={contactOption}
            onItemClick={() => {
              setShowDropdown(false)
            }}
          />
        )}
      </div>
    </div>
  )
}
