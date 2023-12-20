import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const UserIcon = ({ className }: IconProps) => {
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
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7.001 7.001 0 00-6.369 4.09C4.942 19.597 6.343 21 8 21h8c1.657 0 3.058-1.403 2.369-2.91A7.001 7.001 0 0012 14z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
