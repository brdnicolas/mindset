import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const StrokeIcon = ({ className }: IconProps) => {
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
        d="M18 8H6a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1V9a1 1 0 00-1-1zM5 5h14M18 14H6a1 1 0 00-1 1v3a1 1 0 001 1h12a1 1 0 001-1v-3a1 1 0 00-1-1z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
