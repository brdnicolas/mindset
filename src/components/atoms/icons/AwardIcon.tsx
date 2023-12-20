import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const AwardIcon = ({ className }: IconProps) => {
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
        d="M12 13a5 5 0 100-10 5 5 0 000 10z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8a2 2 0 11-4 0 2 2 0 014 0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8l.73 9.478c.085 1.118.128 1.677-.077 1.97a1 1 0 01-.776.426c-.357.016-.806-.32-1.703-.994l-.294-.22c-1.033-.775-1.55-1.162-2.116-1.311a3.002 3.002 0 00-1.528 0c-.567.15-1.083.536-2.116 1.311l-.294.22c-.897.673-1.346 1.01-1.703.994a1 1 0 01-.776-.425c-.205-.294-.162-.853-.076-1.971L7 8"
        stroke="currentColor"
        strokeWidth={1.5}
      />
    </svg>
  )
}
