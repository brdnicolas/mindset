import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const GitBranchIcon = ({ className }: IconProps) => {
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
        d="M7 5v10M17 9a2 2 0 100-4 2 2 0 000 4zM7 19a2 2 0 100-4 2 2 0 000 4z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9c0 2.387.052 4.676-1.636 6.364C13.676 17.052 11.387 17 9 17"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
