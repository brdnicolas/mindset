import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const GrabHandleIcon = ({ className }: IconProps) => {
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
        d="M9 12h.01M15 12h.01M9 18h.01M15 18h.01M9 6h.01M15 6h.01"
        stroke="currentColor"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
