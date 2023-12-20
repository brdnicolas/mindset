import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const UsersIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 3.535A4.252 4.252 0 0114 3a4 4 0 11-2 7.465m0 0a4 4 0 10-4-6.93 4 4 0 004 6.93zM12 14.29a7.001 7.001 0 018.369 3.8C21.058 19.597 19.657 21 18 21H7m-3.369-2.91a7.001 7.001 0 0112.738 0C17.058 19.597 15.657 21 14 21H6c-1.657 0-3.058-1.403-2.369-2.91z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
