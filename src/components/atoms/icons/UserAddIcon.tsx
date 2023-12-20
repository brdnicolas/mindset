import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const UserAddIcon = ({ className }: IconProps) => {
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
        d="M14 7a4 4 0 11-8 0 4 4 0 018 0zM10 14a7.001 7.001 0 00-6.369 4.09C2.942 19.597 4.343 21 6 21h8c1.657 0 3.058-1.403 2.369-2.91A7.001 7.001 0 0010 14z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="M18 9v6m-3-3h6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
