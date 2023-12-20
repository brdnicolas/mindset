import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const SlidersIcon = ({ className }: IconProps) => {
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
        d="M15 16H9m3-13v18M9 8H3m3-5v18M21 12h-6m3-9v18"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
