import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const HeadphonesIcon = ({ className }: IconProps) => {
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
        d="M4 14v-3a8 8 0 1116 0v3M4 14v4.5a2.5 2.5 0 005 0V17a3 3 0 00-3-3H4zm16 0v4.5a2.5 2.5 0 01-5 0V17a3 3 0 013-3h2z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
