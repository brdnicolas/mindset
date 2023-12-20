import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const RSSIcon = ({ className }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6 18h.01" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 4c8.837 0 16 7.163 16 16M5 11a8 8 0 018 8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}
