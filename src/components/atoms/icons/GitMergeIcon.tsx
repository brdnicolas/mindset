import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const GitMergeIcon = ({ className }: IconProps) => {
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
        d="M17 19a2 2 0 100-4 2 2 0 000 4zM7 9a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19V9c0 2.387-.052 4.676 1.636 6.364C10.324 17.052 12.613 17 15 17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
