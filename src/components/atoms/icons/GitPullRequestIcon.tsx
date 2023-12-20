import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const GitPullRequestIcon = ({ className }: IconProps) => {
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
        d="M17 19a2 2 0 100-4 2 2 0 000 4zM7 9a2 2 0 100-4 2 2 0 000 4zM7 9v10"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 15v-5a3 3 0 00-3-3h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  )
}
