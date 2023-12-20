import * as React from 'react'
import { IconProps } from '@/components/atoms/icons/types'

export const ZapIcon = ({ className }: IconProps) => {
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
        d="M15 2L4.707 12.293c-.63.63-.184 1.707.707 1.707H12l-3 8 10.293-10.293c.63-.63.184-1.707-.707-1.707H12l3-8z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
