import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const MapIcon = ({ className }: IconProps) => {
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
        d="M9 17l-6 4V6l6-3m0 14l6 4m-6-4V3m6 18l6-4V3l-6 4m0 14V7m0 0L9 3"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
