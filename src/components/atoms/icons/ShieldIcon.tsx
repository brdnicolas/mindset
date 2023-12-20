import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ShieldIcon = ({ className }: IconProps) => {
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
        d="M10.703 21.252a2.42 2.42 0 002.594 0C15.562 19.828 20 16.469 20 12V7.079a3 3 0 00-1.947-2.809l-5-1.875a3 3 0 00-2.106 0l-5 1.875A3 3 0 004 7.079V12c0 4.469 4.438 7.828 6.703 9.252z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
