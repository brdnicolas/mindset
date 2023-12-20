import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const UnderlineIcon = ({ className }: IconProps) => {
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
        d="M17 5v5.923C17 13.727 14.761 16 12 16s-5-2.273-5-5.077V5M17 19H7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
